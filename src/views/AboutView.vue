<template>
  <v-dialog
      v-model="isDialog"
      persistent
      width="600">

    <v-card>
      <v-card-title>
        <span class="text-h5">Settings forecast</span>
      </v-card-title>

      <v-card-text>
        <div class="wrapper-block-weather">
          <v-card variant="tonal" class="block-weather" v-for="(forecast, index) in allForecast" :key="forecast.id"
                  :index="index">
            <span>{{ forecast }}</span>
            <v-icon icon="mdi-delete" class="icon" @click="deleteForecast(index)"></v-icon>
          </v-card>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-row no-gutters class="addNewCity">
          <v-col>
            <v-select
                v-model="trip.location"
                :items="locations"
            ></v-select>
          </v-col>
        </v-row>

        <v-btn
            color="blue-darken-1"
            variant="text"
            @click="addNewForecast(trip.location)">
          Add city
        </v-btn>

        <v-btn
            color="blue-darken-1"
            variant="text"
            @click="closeSettings()">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">

import {defineComponent} from 'vue'
import {Store, useStore} from "vuex";
import {ForecastWeather, key} from "@/store";

export interface Setting {
  isDialog: boolean;
  $store: Store<ForecastWeather>;
  allForecast: string[];
  trip: any;
  locations: string[];

}

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Settings',

  created() {
    this.isDialog = this.$store.state.isOpenDialog;
    this.updateCurrentCountForecasts();
  },

  data(): Setting {
    return {
      isDialog: true,
      $store: useStore(key),
      allForecast: [],
      trip: {
        name: '',
        location: null,
        start: null,
        end: null,
      },
      locations: ['Australia', 'Barbados', 'Chile', 'Denmark', 'Ecuador', 'France'],
    }
  },

  methods: {
    deleteForecast(index: number): void {
      const deleteOneForecast = 1;
      this.$store.state.settingsWeather.splice(index, deleteOneForecast);
      this.updateCurrentCountForecasts();
    },

    addNewForecast(location: string): void {
      if (!location) {
        return;
      }

      this.trip.location = null;
      this.$store.state.countForecasts.push(location)
      this.updateCurrentCountForecasts();
    },

    updateCurrentCountForecasts(): void {
      this.allForecast = [];
      this.$store.state.settingsWeather.forEach(forecast => this.allForecast.push(forecast.city));
    },

    closeSettings() {
      this.$store.state.isOpenDialog = false;
    },
  }


})
</script>


<style scoped>

.wrapper-block-weather {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.block-weather {
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.v-dialog .v-overlay__content > .v-card {
  overflow: hidden;
}

.icon {
  cursor: pointer;
}

.addNewCity {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
