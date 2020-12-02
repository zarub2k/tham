<template>
  <main>
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
    
    <Nuxt class="" />
    <footer class="p-5">
      <p class="text-gray-500">&copy; 2020 tham.dev</p>
    </footer>
  </main>
</template>

<style>
/* html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
} */
</style>
