<template>
  <div class="container justify-content-center">
    <h1>Error al encontrar sitio web :(</h1>
    <button @click="volver()" class="btn btn-success w-25">Volver a inicio</button>
  </div>
</template>

<script>
export default {
  methods: {
    volver() {
      window.history.back()
    }
  }
}
</script>
