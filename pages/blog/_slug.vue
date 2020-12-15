<template>
  <section>
    <div class="grid grid grid-cols-3 gap-4">
      <div class="col-span-2">
        <p class="text-4xl text-indigo-500">
          {{ article.title }}
        </p>
        <p class="mb-5 ml-1">
          <span>Published on:</span> <span class="text-gray-500">{{ article.publishedOn | normalize}}</span>
        </p>
        <div class="pb-5">
          <Share />
        </div>
        <article class="prose prose-sm sm:prose md:prose-md lg:prose-lg xl:prose-md">
          <nuxt-content :document="article" />
        </article>
      </div>
      <div>
        <div class="border">
          <author :author="article.author" />
        </div>
        <Social />
        <div class="mt-2">
          <Subscribe />
        </div>
      </div>
    </div>
    
  </section>
</template>

<script>
  import moment from 'moment'

  export default {
    filters: {
      normalize: function(value) {
        return moment(value).format("YYYY-MMM-DD")
      }
    },
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()
      return { article }
    }
  }
</script>

<style>
  .nuxt-content h1 {
    margin: 0px;
    margin-top: 10px;
    margin-bottom: 1px;
    font-size: 2.5rem;
    font-weight: normal;
  }
  .nuxt-content h2 {
    margin: 0px;
    margin-top: 10px;
    margin-bottom: 2px;
    font-size: 2.0rem;
  }
  .nuxt-content h3 {
    margin: 0px;
    margin-top: 10px;
    margin-bottom: 2px;
    font-size: 1.5rem;
  }
  .nuxt-content h4 {
    margin: 0px;
    margin-bottom: 10px;
    font-size: 1.0rem;
  }
  .nuxt-content p {
    margin-top: 1px;
    margin-bottom: 5px;
  }
  .nuxt-content img {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .nuxt-content a {
    text-decoration: underline;
  }
  .nuxt-content-highlight {
    @apply bg-teal-200;
  }
</style>