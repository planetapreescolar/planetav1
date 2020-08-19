<template>
  <div class="home pa-10">
    <v-text-field v-mode="datamodel.nombre" placeholder="nombre" />
    <v-text-field v-mode="datamodel.correo" placeholder="correo" />
    <v-text-field v-mode="datamodel.pass" placeholder="contraseña" />
  </div>
</template>
<style scoped>
</style>
<script>
// @ is an alias to /src
export default {
  data() {
    return {
      datamodel: {
        nombre: "",
        correo: "",
        pass: ""
      }
    }
  }
}
</script>
