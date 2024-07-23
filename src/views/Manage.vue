<template>
  <div>
    <Navbar />

    <div class="p-4 sm:ml-64 justify-center flex">
      <div
        class="p-4 border-2 max-w-7xl w-full text-2xl border-gray-200 rounded-lg mt-14"
      >
        EstateSoko Platform
      </div>
    </div>

    <!-- Modals -->
    <section>
      <SuccessModal
        :isVisible="isSuccessModalVisible"
        :message="successMessage"
        @update:isVisible="handleNotificationModalVisibility"
      />
      <ErrorModal
        :isVisible="isErrorModalVisible"
        :message="errorMessage"
        @update:isVisible="handleErrorModalVisibility"
      />

      <NotificationBar :message="notificationMessage" :visible="notificationVisible" />
    </section>
  </div>
</template>

<script lang="js">
import Navbar from "@/components/Navbar.vue";
import ErrorModal from "@/components/ErrorModal.vue";
import SuccessModal from "@/components/SuccessModal.vue";
import useNavigationFunctions from "@/utils/nav-functions";
import useFormatter from "@/utils/formatter";
import { STATUS_CODE } from "@/lib/enum";
import useUserApi from "@/api/user";
import { defineComponent, onMounted, ref } from "vue";
import NotificationBar from '@/components/NotificationBar.vue';

export default defineComponent({
name: "Manage",
components: {
    Navbar,
    SuccessModal,
    ErrorModal,
    NotificationBar,
  },
setup() {
  const { navigateToAuth } = useNavigationFunctions();
    const { getImageUrl } = useFormatter();
    const { profileNotification } = useUserApi();

    const isSuccessModalVisible = ref(false);
    const successMessage = ref("");
    const isErrorModalVisible = ref(false);
    const errorMessage = ref("");
    const isEditing = ref(false);
    const notificationMessage = ref("");
    const notificationVisible = ref(false);

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

    const handleNotificationModalVisibility = (isVisible) => {
      isSuccessModalVisible.value = isVisible;
    };

    onMounted(async () => {
      await getProfileNotification();
    });

    const getProfileNotification = async () => {
      const {success, code, data, message} = await profileNotification();
        if (!success && code === STATUS_CODE.UNAUTHORIZED) {
          showErrorModal(message);
        } else {
          if (!success && code === STATUS_CODE.BAD_REQUEST) {
            notificationMessage.value = message;
            notificationVisible.value = true;
          }
        }
        
    }

    return {
      getImageUrl, 
      isSuccessModalVisible, 
      successMessage, 
      isErrorModalVisible, 
      errorMessage, 
      handleErrorModalVisibility, 
      handleNotificationModalVisibility,
      notificationMessage,
      notificationVisible,
    }
}
})
</script>
