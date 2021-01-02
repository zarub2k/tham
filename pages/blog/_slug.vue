<template>
  <section>
    <div class="grid grid grid-cols-3 gap-4 px-10">
      <div class="col-span-2">
        <p class="text-4xl text-gray-700">
          {{ article.title }}
        </p>
        <p class="mb-5 ml-1">
          <span>Published on:</span> <span class="text-gray-500">{{ article.publishedOn | normalize}}</span>
        </p>
        <div class="pb-5">
          <Share :title="article.title" :slug="slug" />
        </div>
        <article class="prose prose-sm sm:prose md:prose-md lg:prose-lg xl:prose-md">
          <nuxt-content :document="article" />
        </article>
        {{ article }}
        <PrevNext :prev="prev" :next="next" />
        <Related :category="category" :slug="slug"/>
      </div>
      <div>
        <div class="border">
          <author :author="article.author" />
        </div>
        <Social />
        <div class="mt-2">
          <Subscribe/>
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
      const category = article.category

      const [prev, next] = await $content('articles')
        .only(['title', 'slug'])
        .where({
          published: true
        })
        .sortBy('publishedOn', 'desc')
        .surround(params.slug)
        .fetch()

      const slug = article.slug

      return {
        article,
        prev,
        next,
        category,
        slug
      }
    }
  }
</script>

<style>
  .nuxt-content h1 {
    @apply mt-5 mb-2 text-4xl text-gray-800;
  }
  .nuxt-content h2 {
    @apply mt-5 mb-2 text-3xl text-gray-800;
  }
  .nuxt-content h3 {
    @apply mt-5 mb-2 text-2xl text-gray-800;
  }
  .nuxt-content h4 {
    @apply mt-5 mb-2 text-xl text-gray-800;
  }
  .nuxt-content p {
    @apply my-2
  }
  .nuxt-content img {
    @apply my-5
  }
  .nuxt-content a {
    @apply underline text-blue-700
  }
</style>