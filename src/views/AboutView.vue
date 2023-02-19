<template>
  <div class="text-center">
    <v-dialog
        v-model="isDialog"
        width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="isDialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import {Store, useStore} from "vuex";
import {ForecastWeather, key} from "@/store";

export interface Setting {
  isDialog: boolean,
  $store: Store<ForecastWeather>,
}

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Settings',

  created() {
    this.isDialog = this.$store.state.isOpenDialog;

  },

  data(): Setting {
    return {
      isDialog: true,
      $store: useStore(key)
    }
  },

  watch: {
    '$store.state.isOpenDialog'() {
      this.isDialog = this.$store.state.isOpenDialog;
    }
  },

  updated() {
    this.$store.state.isOpenDialog = this.isDialog
  }
})
</script>
