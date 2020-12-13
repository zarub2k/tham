<template>
  <section>
    <p class="text-3xl text-indigo-700">
      {{ article.title }}
    </p>
    <div class="grid grid grid-cols-3 gap-4">
      <div class="col-span-2">
        <article class="prose prose-sm sm:prose md:prose-md lg:prose-lg xl:prose-md">
          <nuxt-content :document="article" />
        </article>
      </div>
      <div>
        <div class="border">
          <author :author="article.author" />
        </div>
        <div class="border">
          Social
        </div>
      </div>
    </div>
    
  </section>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()
      return { article }
    }
  }
</script>

<style>
  .nuxt-content h1 {
    margin: 0px;
    margin-bottom: 1px;
  }
  .nuxt-content h2 {
    margin: 0px;
    margin-bottom: 1px;
  }
  .nuxt-content h3 {
    margin: 0px;
    margin-bottom: 1px;
  }
</style>