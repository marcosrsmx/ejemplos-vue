<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

const message = ref("Hola Mundo");

onBeforeMount(() => {
  console.log(
    "Antes de montar: el componente se ha creado, pero no está en el DOM",
  );
});

onMounted(() => {
  console.log("Montado: el componente ya está en el DOM");
});

onBeforeUpdate(() => {
  console.log("Antes de actualizar: el DOM aún no refleja los cambios");
});

onUpdated(() => {
  console.log("Actualizado: el DOM ya refleja los cambios");
});

onBeforeUnmount(() => {
  console.log("Antes de desmontar: el componente está a punto de eliminarse");
});

onUnmounted(() => {
  console.log("Desmontado: el componente ya se eliminó");
});
</script>

<template>
  <div>
    <p>{{ message }}</p>
    <button @click="message = 'Adiós Mundo'">Actualizar mensaje</button>
  </div>
</template>