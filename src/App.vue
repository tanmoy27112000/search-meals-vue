<script setup>
import router from './router';
</script>

<template>
  <div class="bg-gray-100 h-full">
    <header class="bg-white shadow-md h-16 flex justify-between items-center">
      <router-link class="px-2 inline-flex items-center h-full" :to="{ name: 'home' }">Home</router-link>
      <div class="px-2 h-full">
        <router-link class='px-2  inline-flex items-center h-full hover:bg-purple-100 transition-colors'
          :to="{ name: 'byName' }">Search
          Meals</router-link>
        <router-link class="px-2  inline-flex items-center h-full hover:bg-purple-100 transition-colors"
          :to="{ name: 'byLetter' }">Meals by
          Letters</router-link>
        <router-link class="px-2  inline-flex items-center h-full hover:bg-purple-100 transition-colors"
          :to="{ name: 'byIngredient' }">Meals by
          Ingredients</router-link>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped></style>
