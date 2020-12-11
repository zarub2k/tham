<template>
  <div class="grid grid-cols-4 gap-4 p-3 border">
    <div>
      <NuxtLink to="/" class="font-sans text-xl antialiased text-indigo-700">
        tham.dev
      </NuxtLink>
    </div>
    <div class="col-span-2">
      <div class="flex">
        <div class="flex-1">
          <NuxtLink to="/service" class="text-indigo-500">Services</NuxtLink>
        </div>
        <div class="flex-1">
          <NuxtLink to="/blog" class="text-indigo-500">Blog</NuxtLink>
        </div>
        <div class="flex-1">
          <NuxtLink to="/contact" class="text-indigo-500">Contact me</NuxtLink>
        </div>
      </div>
    </div>
    <div class="text-indigo-500">Final</div>
  </div>
</template>