<script setup>
import { ref } from "vue";
const names = ['Ana', 'Luis', 'Carlos'];
const products = [
  { id: 1, name: "Teclado", price: 30 },
  { id: 2, name: "Ratón", price: 20 },
];
const user = {
  name: "Ana",
  age: 30,
  country: "España",
};
const isLoggedIn = ref(true);
</script>
<template>
  <div>
    <p v-if="isLoggedIn">Bienvenido, usuario.</p>
    <p v-else>No has iniciado sesión.</p>
  </div>
  <ul>
    <li v-for="(name, index) in names" :key="index">{{ name }}</li>
  </ul>

  <table>
    <thead>
      <tr>
        <th>Producto</th>
        <th>Precio</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.name }}</td>
        <td>{{ product.price }} €</td>
      </tr>
    </tbody>
  </table>

  <ul>
    <li v-for="(value, key) in user" :key="key">{{ key }}: {{ value }}</li>
  </ul>
</template>
<style>

</style>
