<template>
  <section class="p-3 px-10">
    <div class="grid grid grid-cols-3 gap-4">
      <div class="col-span-2 p-5">
        <figure class="shadow-md">
          <img src="~/assets/images/flutter.png"
              alt="Elephant at sunset">
          <figcaption>
            <h1 class="text-2xl text-indigo-700">{{ recent.title }}</h1>
            <div>{{ recent.description }} </div>
          </figcaption>
        </figure>
      </div>
      <div class="my-5 shadow-md">
        <strong>Top Picks</strong>
        <div class="p-8 border" v-for="topPick of topPicks" :key="topPick.slug">
          {{topPick.title}}
        </div>
      </div>
    </div>

    <div class="grid grid grid-cols-3 gap-10">
      <div class="border" v-for="article of articles" :key="article.slug">
        <figure class="shadow-xl">
          <img src="~/assets/images/flutter.png"
              alt="Elephant at sunset">
          <figcaption>
            <h1 class="text-xl text-indigo-700">{{ article.title }}</h1>
            <div>{{ article.description }} </div>
          </figcaption>
        </figure>
      </div>
    </div>

    <!-- <div>
      <h1>Blog Posts</h1>
      <ul>
        <li v-for="article of articles" :key="article.slug">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <img :src="article.img" />
            <div>
              <h2>{{ article.title }}</h2>
              <p>by {{ article.author.name }}</p>
              <p class="text-gray-600">{{ article.description }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div> -->
  </section>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .only(['title', 'description', 'img', 'slug', 'author'])
        .sortBy('createdAt', 'desc')
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