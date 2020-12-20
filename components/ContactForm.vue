<template>
  <div class="px-10 py-5 flex flex-col place-items-center bg-gradient-to-r from-teal-400 to-blue-500">
    <h2 class="mb-5 text-3xl text-white">Book for speaking or coaching</h2>
    <div class="flex flex-col place-items-center w-full">
      <input type="text" class="w-1/3 m-2 h-10 p-2 border 
        border-gray-200 focus:border-gray-200 text-gray-600" placeholder="Name">
      <input type="text" class="w-1/3 m-2 h-10 p-2 border
        border-gray-200 focus:border-gray-200 text-gray-600" placeholder="Email">
      <select name="request" id="" class="w-1/3 h-10 m-2 p-2 border border-gray-200">
        <option value="Coaching">Coaching</option>
        <option value="Consulting">Consulting</option>
        <option value="Speaking">Speaking</option>
      </select>
      <button  class="w-1/3 m-2 p-2 bg-teal-900 text-white">Subscribe</button>
    </div>
  </div>
</template>