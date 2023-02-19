<template>
  <CustomWeather/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import MainWeather from '../components/MainWeather.vue';
import CustomWeather from "@/components/CustomWeather.vue";

export default defineComponent({
  name: 'HomeView',

  components: {
    // MainWeather,
    CustomWeather
  },
});
</script>
