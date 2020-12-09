<template>
  <section class="p-3 px-10">
    <div class="grid grid grid-cols-3 gap-4 p-2">
      <div class="col-span-2 shadow-md">
        <figure class="">
          <img :src="require(`~/assets/images/${recent.thumbnail}`)"
              alt="Elephant at sunset">
          <figcaption class="p-2">
            <NuxtLink :to="{ name: 'blog-slug', params: { slug: recent.slug } }">
              <h1 class="text-2xl text-indigo-700">{{ recent.title }}</h1>
            </NuxtLink>
            <div class="text-s text-gray-600 leading-relaxed">{{ recent.description }} </div>
          </figcaption>
        </figure>
      </div>
      <div class="shadow-md border p-2">
        <strong>Top Picks</strong>
        <div class="p-8 border mt-2" v-for="topPick of topPicks" :key="topPick.slug">
          {{topPick.title}}
        </div>
      </div>
    </div>

    <div class="grid grid grid-cols-3 gap-4 p-2">
      <div class="border shadow-md" v-for="article of articles" :key="article.slug">
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

    <div class="flex justify-center p-2 mt-5">
      <div class="text-center w-full p-10 border inline bg-gradient-to-r from-teal-400 to-blue-500">
        <h2 class="mb-5 text-3xl text-white">Technology and growth hacks for your inbox</h2>
        <p>
          <input type="text" class="w-1/2 h-10 p-2 border-gray-300 focus:border-blue-200 text-gray-600">
          <button class="bg-teal-900 p-2 text-white">Subscribe</button>
        </p>
        
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    // data () {
    //   return {
    //     page: 0
    //   }
    // },
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .only(['title', 'description', 'thumbnail', 'slug', 'author'])
        .sortBy('createdAt', 'desc')
        .limit(6)
        .fetch()

        const recent = articles[0]

        const topPicks = await $content('articles', params.slug)
        .only(['title', 'description', 'img', 'slug', 'author'])
        .sortBy('createdAt', 'desc')
        .fetch()
        topPicks.push({
          title: 'Added 1'
        })

      return {
        articles, recent, topPicks
      }
    }
  }
</script>