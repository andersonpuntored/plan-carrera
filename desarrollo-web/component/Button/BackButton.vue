<template>
  <button @click="goBack">Volver</button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.go(-1) // Vuelve a la página anterior en el historial
}

</script>

<style scoped>
button {
  border: 1px solid black;
  border-radius: 10px;
  height: 50px;
  background-color: white;
  color: black;
  font-weight: bold;
  cursor: pointer;
  padding: 0 20px;
}
button:hover {
  background-color: black;
  color: white;
}
button:active {
  background-color: black;
  color: white;
}
</style>