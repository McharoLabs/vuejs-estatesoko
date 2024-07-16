<template>
  <div>
    <Navbar />

    <eection class="p-4 sm:ml-64 justify-center flex" id="profile"> </eection>
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
