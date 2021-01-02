<template>
  <div>
    <p class="text-indigo-500 text-2xl py-2">
      Related Articles
    </p>
    <div class="grid grid grid-cols-3 gap-4 my-2" v-if="related.length > 0">
      <div class="border shadow-md" v-for="article of related" :key="article.slug">
        <figure class="">
          <img :src="require(`~/assets/images/${article.thumbnail}`)"
              alt="Elephant at sunset">
          <figcaption class="p-2 text-s">
            <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
              <h1 class="text-xl text-indigo-700">{{ article.title }}</h1>
            </NuxtLink>
            <div class="text-gray-600 leading-relaxed">{{ article.description }} </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    category: String,
    slug: String
  },
  data() {
    return {
      related: []
    }
  },
  created: function() {
    this.onData()
  },
  methods: {
    onData: async function() {
      console.log('Enters Related.onData()')

      const relatedrelated = await this.$content('articles')
      .only(['title', 'description', 'thumbnail', 'slug'])
      .where({
        category: this.category
      })
      .sortBy('publishedOn', 'desc')
      .limit(3)
      .fetch()

      for (let i in relatedrelated) {
        //Ignore the current item from the related articles
        if (this.slug == relatedrelated[i].slug) {
          continue;
        }
        this.related.push(relatedrelated[i])
      }
    }
  }
}
</script>