<template>
  <CustomWeather/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import CustomWeather from "@/components/CustomWeather.vue";

export default defineComponent({
  name: 'HomeView',

  components: {
    CustomWeather
  },
});
</script>
