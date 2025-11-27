<script setup>
import ChildComponent from './ChildComponent.vue';
import { ref } from 'vue';
const messageParent = 'Mensaje desde el padre';
const displayName = ref('');
const setName = customEvent => {
  displayName.value = customEvent;
};
</script>
<template>
  <h2>Hola {{ displayName }}</h2>
  <ChildComponent :title="messageParent" @login="setName"></ChildComponent>
  <Card>
    <h3><p>Este es el contenido personalizado del slot.</p></h3>
  </Card>
</template>