<script setup>
import { ref } from 'vue';

const isActive = ref(false);
const isHighlighted = ref(false);
const textColor = ref('blue');
const fontSize = ref('20px');
const isDanger = ref(false);

function toggleDanger() {
  isDanger.value = !isDanger.value;
}
</script>

<template>
  <p :class="{ active: isActive }">Este párrafo cambia su clase</p>
  <p :class="{ active: isActive, highlighted: isHighlighted }">Texto con clases múltiples</p>
  <p :style="{ color: textColor, fontSize: fontSize }">Texto con estilo dinámico</p>
   <p :class="{ danger: isDanger }">Este texto puede ser peligroso</p>
  <button @click="toggleDanger">Cambiar estado</button>
</template>

<style scoped>
.active {
  color: green;
  font-weight: bold;
}
.highlighted {
  background-color: yellow;
}
.danger {
  color: red;
}
button {
  margin-top: 10px;
}
</style>
