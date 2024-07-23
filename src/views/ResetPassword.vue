<template>
  <div>
    <Navbar />

    <section class="p-4 sm:ml-64 justify-center flex" id="profile"></section>
  </div>
</template>
<script lang="js">
import Navbar from "@/components/Navbar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ResetPassword",
  components: { Navbar },
  setup() {},
});
</script>
