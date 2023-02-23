<template>

  <div class="weather">

    <section class="weather__mini-block" @click="isOpenExpandedWeather()">
      <img class="mini-block__icon"
           :src="'https://openweathermap.org/img/wn/'+ request.weather[0].icon +'@2x.png'"
           alt="">
      <p class="mini-block__temperature">{{ Math.round(request.main.temp) }}</p>
      <p class="mini-block__location">{{ request.name }}</p>
    </section>

    <ExpandedWeather
        :isOpenExpanded="isOpenExpanded"
        :forecastWeather="request">
    </ExpandedWeather>

  </div>

</template>

<script lang="ts" >
import {defineComponent} from 'vue';
import ExpandedWeather from '@/components/ExpandedWeather.vue';
import CustomWeather from '@/components/CustomWeather.vue';
import axios from "axios";
import {Store, useStore} from "vuex";
import {ForecastWeather, key} from "@/store";

interface MainWeather {
  request: object,
  isOpenExpanded: boolean,
  $store: Store<ForecastWeather>,
}

export default defineComponent({
  name: 'MainWeather',

  components: {
    ExpandedWeather,
  },

  props: {
    msg: String,
  },

  data():MainWeather {
    return {
      request: {},
      isOpenExpanded: false,
      $store: useStore(key)
    }
  },

  created() {
    // this.request = this.$store.state.settingsWeather.currentWeather
  },

  methods: {
    isOpenExpandedWeather() {
      this.isOpenExpanded = !this.isOpenExpanded
    },
  }
});
</script>

<style scoped lang="scss">

.weather {
  display: flex;
  flex-direction: column;
  width: 200px;
  cursor: default;


  .weather__mini-block {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    cursor: pointer;
    background-color: violet;

    .mini-block {
      &__icon {
        width: 20%;
      }

      &__location {
        font-weight: 700;
      }

      &__temperature {
        font-weight: 700;
      }
    }


  }

}


</style>
