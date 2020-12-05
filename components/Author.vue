<template>
  <div>
    <figure class="bg-gray-100 rounded-xl p-8">
      <img class="w-32 h-32 rounded-full mx-auto" src="~/assets/images/tham.png" alt="Author Tham">
      <figcaption class="font-medium">
        <div class="text-cyan-600">
          {{ author.name }}
        </div>
        <div class="text-gray-500">
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