<template>
  <v-app id="app">
    <Menulateral></Menulateral>
    <router-view />

  </v-app>
</template>

<script>
import Menulateral from "@/components/Menulateral/Menulateral.vue";


export default {
  data() {
    return {};
  },
  components: {
    Menulateral
  },
};
</script>
