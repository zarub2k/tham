<template>
  <article class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
    <nuxt-content :document="article" />
  </article>  
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()
      return { article }
    }
  }
</script>

<style scoped>
.nuxt-content code {
  background-color: red;  
}
</style>