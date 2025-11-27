<script setup>
import { ref, watch } from 'vue';
// validacion por watch en tiempo real
const email = ref('');
const emailError = ref('');

watch(email, newValue => {
  if (!newValue.includes('@')) {
    emailError.value = 'El email debe ser válido';
  } else {
    emailError.value = '';
  }
});
</script>

<template>
  <div>
    <label>Email:</label>
    <input v-model="email" type="email" />
    <p v-if="emailError" class="error">{{ emailError }}</p>
  </div>
</template>

<style scoped>
.error {
  color: orange;
}
</style>
