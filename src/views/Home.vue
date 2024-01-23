<template>
  <div class="flex flex-col p-8">
    <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for meals">
    <div class="flex justify-center gap-3 mt-5">
      <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="(letter, index) in alphabetList" :key="index">{{
        letter
      }}</router-link>
    </div>
    <pre>{{ ingredients }}</pre>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import axiosClient from '../axiosClient';
const meals = computed(() => store.state.meals);
const alphabetList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const ingredients = ref([]);

onMounted(async () => {
  const { data } = await axiosClient.get('/list.php?i=list');
  ingredients.value = data.meals;
});
</script>
