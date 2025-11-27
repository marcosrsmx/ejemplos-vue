<script setup>
import {  ref } from 'vue';
const emit = defineEmits(['login']);
const props = defineProps({
  title: String,
});

const userName = ref('Carlos');
const login = () => {
  emit('login', userName.value);
};
</script>

<template>
  <div class="child">
    <h2>Este es un componente Hijo</h2>
    <p>Nombre de Usuario: {{ userName }}</p>
    <button @click="login">Login</button>
    <h2>{{ props.title }}</h2>
    <div class="card">
     <slot></slot>
    </div>
  </div>
</template>
<style>
.child {
  border: 5px solid black;
}
.card {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
}
</style>