<template>
  <div>
    <Navbar />
    <section class="p-8" id="profile"></section>

    <section class="p-4 sm:ml-64 justify-center flex">
      <div class="max-w-7xl w-full bg-white rounded-lg shadow-lg p-8">
        <!-- Existing profile details -->
        <div class="flex items-center flex-col sm:flex-row">
          <img
            :src="getImageUrl(profileData.passport)"
            alt="Profile Image"
            class="w-32 h-32 rounded-full mr-8 object-cover"
          />
          <div>
            <h2 class="text-2xl font-bold">
              {{ profileData.first_name }} {{ profileData.last_name }}
            </h2>
            <p class="text-gray-600">{{ profileData.email }}</p>
            <p class="text-gray-600">{{ profileData.phone }}</p>
            <p class="text-gray-600">{{ profileData.role }}</p>
            <p class="text-gray-600">
              {{ profileData.company || "No Company" }}
            </p>
            <button
              @click="editFormVisibility()"
              class="mt-4 bg-blue-500 text-white px-4 py-2 rounded flex flex-row"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.232 5.232l3.536 3.536M9 13.25v6.001h6M10 14L14 10m4-4a1.5 1.5 0 00-2.121 0l-8.5 8.5a1.5 1.5 0 00-.378.632l-1.5 4.5a.5.5 0 00.632.632l4.5-1.5a1.5 1.5 0 00.632-.378l8.5-8.5a1.5 1.5 0 000-2.121z"
                />
              </svg>
              Edit Profile
            </button>
          </div>
        </div>

        <!-- Display profile data -->
        <div class="mt-6">
          <h3 class="text-xl font-semibold">About Me</h3>
          <p class="text-gray-800 mt-2">{{ profileData.about_me }}</p>
        </div>
        <div class="mt-6">
          <h3 class="text-xl font-semibold">Comment</h3>
          <p class="text-gray-800 mt-2">{{ profileData.comment }}</p>
        </div>
        <div class="mt-6">
          <h3 class="text-xl font-semibold">Additional Information</h3>
          <p class="text-gray-800 mt-2">
            <strong>Birth Date:</strong> {{ profileData.birth_date }}
          </p>
          <p class="text-gray-800 mt-2">
            <strong>NIDA Number:</strong> {{ profileData.nida_number }}
          </p>
        </div>

        <!-- Edit Profile Form -->
        <div v-if="isEditing" class="mt-8" id="edit-form">
          <h3 class="text-xl font-semibold">Update Profile</h3>

          <div class="bg-red-500 rounded-lg p-4 text-white text-lg my-3" v-if="errorDetail"><p>
            {{errorDetail}}</p></div>

            <div class="bg-green-500 rounded-lg p-4 text-white text-lg my-3" v-if="successDetail"><p>
            {{successDetail}}</p></div>

          <form @submit.prevent="updateProfile">
            <div class="mt-4">
              <label class="block text-gray-700">About Me:</label>
              <textarea
                v-model="profileData.about_me"
                :class="[
                  'w-full border rounded px-3 py-2 mt-1',
                  aboutMeError ? 'border-red-500' : 'border-gray-300',
                ]"
                rows="4"
              ></textarea>
              <p v-if="aboutMeError" class="text-red-500 text-xs italic">
                {{ aboutMeError }}
              </p>
            </div>
            <div class="mt-4">
              <label class="block text-gray-700">Comment:</label>
              <textarea
                v-model="profileData.comment"
                :class="[
                  'w-full border rounded px-3 py-2 mt-1',
                  commentError ? 'border-red-500' : 'border-gray-300',
                ]"
                rows="4"
              ></textarea>
              <p v-if="commentError" class="text-red-500 text-xs italic">
                {{ commentError }}
              </p>
            </div>
            <div class="mt-4">
              <label class="block text-gray-700">Phone:</label>
              <input
                v-model="profileData.phone"
                type="text"
                class="w-full border rounded px-3 py-2 mt-1"
              />
            </div>
            <div class="mt-4">
              <label class="block text-gray-700">Company:</label>
              <input
                v-model="profileData.company"
                type="text"
                class="w-full border rounded px-3 py-2 mt-1"
              />
            </div>
            <div class="mt-4">
              <button
                type="submit"
                class="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save Changes
              </button>
              <button
                type="button"
                @click="isEditing = false"
                class="bg-gray-500 text-white px-4 py-2 rounded ml-2"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Modals -->
    <section>
      <SuccessModal
        :isVisible="isSuccessModalVisible"
        :message="successMessage"
        @update:isVisible="handleSuccessModalVisibility"
      />
      <ErrorModal
        :isVisible="isErrorModalVisible"
        :message="errorMessage"
        @update:isVisible="handleErrorModalVisibility"
      />
    </section>
  </div>
</template>

<script lang="js">
import Navbar from "@/components/Navbar.vue";
import { defineComponent, onMounted, ref, nextTick } from "vue";
import useUserApi from "@/api/user";
import { STATUS_CODE } from "@/lib/enum";
import ErrorModal from "@/components/ErrorModal.vue";
import SuccessModal from "@/components/SuccessModal.vue";
import useNavigationFunctions from "@/utils/nav-functions";
import useFormatter from "@/utils/formatter";

export default defineComponent({
  name: "Profile",
  components: {
    Navbar,
    SuccessModal,
    ErrorModal
  },
  setup() {
    const { navigateToAuth } = useNavigationFunctions();
    const { getImageUrl } = useFormatter();
    const { getProfile, updateProfileData } = useUserApi();

    const profileData = ref({
      about_me: "",
      phone: "",
      comment: "",
      company: ""
    });
    const isSuccessModalVisible = ref(false);
    const successMessage = ref("");
    const isErrorModalVisible = ref(false);
    const errorMessage = ref("");
    const isEditing = ref(false);

    const aboutMeError = ref("");
    const commentError = ref("");

    // update errors and success
    const errorDetail = ref("");
    const successDetail = ref("");


    const validFields = () => {
      if (profileData.value.comment.length < 170) {
        commentError.value = "Comment cannot be less than 170 characters.";
      } else {
        commentError.value = "";
      }

      if (profileData.value.about_me.length < 506) {
        aboutMeError.value = "About Me cannot be less than 510 characters.";
      } else {
        aboutMeError.value = "";
      }

      if (aboutMeError.value || commentError.value) {
        console.log(aboutMeError.value)
        return false;
      }

      return true;
    };

    const showSuccessModal = (message) => {
      successMessage.value = message;
      isSuccessModalVisible.value = true;
    };

    const showErrorModal = (message) => {
      errorMessage.value = message;
      isErrorModalVisible.value = true;
    };

    const handleErrorModalVisibility = (isVisible) => {
      isErrorModalVisible.value = isVisible;
      if (!isVisible) {
        setTimeout(() => {
          navigateToAuth();
        }, 400);
      }
    };

    const handleSuccessModalVisibility = (isVisible) => {
      isSuccessModalVisible.value = isVisible;
    };

    const updateProfile = async () => {
      if (validFields()) {
        errorDetail.value = "";
        successDetail.value = "";
  
        const {success, code, data, message} = await updateProfileData({about_me: profileData.value.about_me, company: profileData.value.company, comment: profileData.value.comment, phone: profileData.value.phone});
        if (!success) {

          if (code === STATUS_CODE.UNAUTHORIZED) {

            showErrorModal(message);
            return;
          }
          errorDetail.value = message;
          return;
        }
        
        successDetail.value = message;
        await fetchProfileData();
        
      }


    };

    onMounted(async () => {
      await fetchProfileData();
    });

    const fetchProfileData = async () => {
      const { success, code, data, message } = await getProfile();
      if (success && data) {
        profileData.value = data;
      } else {
        if (code === STATUS_CODE.UNAUTHORIZED) {
          showErrorModal(message);
        }
      }
    }

    const editFormVisibility = async () => {
  isEditing.value = !isEditing.value;
  await nextTick();
  scrollToSection("edit-form");
};

    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    return {
      errorDetail,
      successDetail,
      profileData,
      getImageUrl,
      updateProfile,
      handleSuccessModalVisibility,
      handleErrorModalVisibility,
      errorMessage,
      isErrorModalVisible,
      successMessage,
      isSuccessModalVisible,
      isEditing,
      aboutMeError,
      commentError,
      editFormVisibility,
    };
  },
});
</script>
