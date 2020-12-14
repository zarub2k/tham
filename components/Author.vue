<template>
  <div>
    <figure class="bg-gray-100 rounded-xl py-8">
      <img class="w-32 h-32 rounded-full mx-auto" src="~/assets/images/tham.png" alt="Author Tham">
      <figcaption class="font-medium">
        <div class="text-purple-700 text-center text-2xl">
          {{ author.name }}
        </div>
        <div class="text-gray-500 text-center">
          {{ author.bio }}
        </div>
      </figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true
    }
  }
}
</script>