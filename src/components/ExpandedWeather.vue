<template>
  <section class="expanded-weather" :class="{ 'active': !isOpenExpanded }">

    <div class="expanded-weather__parameters--wind">
      <span>{{ forecastWeather.weather[0].description }}</span>
      <span class="material-symbols-outlined" @click="isOpenSettings(true)">settings</span>
    </div>

    <div class="expanded-weather__parameters">
      <span>Feels like</span>
      <span>{{ forecastWeather.main.feels_like }} C</span>
    </div>

    <div class="expanded-weather__parameters">
      <span>Humidity</span>
      <span>{{ forecastWeather.main.humidity }}%</span>
    </div>

    <div class="expanded-weather__parameters">
      <span>Visibility</span>
      <span>{{ forecastWeather.visibility }}m</span>
    </div>

    <div class="expanded-weather__parameters">
      <span>Wind</span>
      <span>{{ forecastWeather.wind.speed }} m/s</span>
    </div>


  </section>

  <AboutView v-if="isOpenSettingsDialog"></AboutView>
</template>

<script lang='ts' scoped>
import AboutView from "@/views/AboutView.vue";
import {Store, useStore} from "vuex";
import {ForecastWeather, key} from "@/store";
import {defineComponent} from "vue";

interface ExpandedData {
  isOpenSettingsDialog: boolean,
  $store: Store<ForecastWeather>,
}

export default defineComponent({
  name: "ExpandedWeatherComponent",
  props: ['isOpenExpanded', 'forecastWeather'],

  components: {
    AboutView,
  },

  created() {
    this.isOpenSettingsDialog = this.$store.state.isOpenDialog;
  },

  data(): ExpandedData {
    return {
      isOpenSettingsDialog: false,
      $store: useStore(key)
    }
  },

  watch: {
    '$store.state.isOpenDialog'() {
      this.isOpenSettingsDialog = this.$store.state.isOpenDialog;
      console.log(this.isOpenSettingsDialog)
    }
  },

  methods: {
    isOpenSettings(event: boolean) {
      this.$store.state.isOpenDialog = event;
    },

  }
})
</script>

<style scoped lang="scss">

.expanded-weather {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  padding: 10px;
  height: 200px;
  background-color: coral;
  transition: all 1s;
  overflow: hidden;
  font-weight: 700;
  font-size: 15px;


  &__parameters {
    display: flex;
    justify-content: space-between;

    gap: 20px;
    transition: all 1s;
  }

  &__parameters--wind {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .material-symbols-outlined {
      cursor: pointer;;
    }
  }
}

.active {
  height: 0;
  padding: 0;
}

</style>
