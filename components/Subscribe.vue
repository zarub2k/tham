<template>
  <div class="flex justify-center">
    <div class="text-center w-full p-10 border inline bg-gradient-to-r from-teal-400 to-blue-500">
      <h2 class="mb-5 text-3xl text-white">Technology and growth hacks for your inbox</h2>
      <p>
        <input type="text" v-model="email" class="w-1/2 h-10 p-2 border-gray-300 focus:border-blue-200 text-gray-600">
        <button @click="onSubscribe" class="bg-teal-900 p-2 text-white">Subscribe</button>
      </p>
    </div>
  </div>
</template>