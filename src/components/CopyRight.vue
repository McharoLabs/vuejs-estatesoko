<template>
  <h2 class="text-md text-center text-white">
    Copyright &copy; 2024 All Rights Reserved
    {{ COMPANY_INFORMATION.COMPANY_NAME.toLowerCase() }} | Designed by
    {{ COMPANY_INFORMATION.COMPANY_NAME.toLowerCase() }}
  </h2>
</template>

<script lang="js">
import { defineComponent } from "vue";
import { COMPANY_INFORMATION } from "../lib/enum";

export default defineComponent({
  name: "CopyRight",
  setup() {},
  data() {
    return { COMPANY_INFORMATION };
  },
});
</script>
