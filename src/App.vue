<template>
  <v-app>
    <v-container>
      <v-app-bar
          app
          color="white"
          elevate-on-scroll
      >
        <div class="ml-10"></div>
        <v-toolbar-title class="text-uppercase">shart info</v-toolbar-title>
      </v-app-bar>

      <v-main>
        <router-view/>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
