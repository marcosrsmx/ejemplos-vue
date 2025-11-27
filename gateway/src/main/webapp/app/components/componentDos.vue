<script setup>
import { ref } from 'vue';
const message = ref('Este es mi segundo componente');
const counter = ref(0);
setInterval(() => {
  counter.value++;
}, 1000);

function changeMessage() {
  message.value = '¡Has hecho clic!';
}
</script>
<template>
  <div>
    <b-button @click="changeMessage">Haz clic en el botón</b-button>
    <b-button variant="danger">Button</b-button>
    <b-button variant="success">Button</b-button>
    <b-button variant="outline-primary">Button</b-button>
    <p>
      {{ message }}
    </p>
    <p>Contador:{{ counter }}</p>
  </div>
</template>
<style>
p {
  font-size: 18px;
}
</style>
