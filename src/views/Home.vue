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
  </div>
</template>

<script lang="js">
import Navbar from "@/components/Navbar.vue";
import { defineComponent } from "vue";

export default defineComponent({
name: "Home",
components: {Navbar},
setup() {}
})
</script>
