<template>
  <section>
    <div class="grid grid grid-cols-3 gap-4 px-10">
      <div class="col-span-2 shadow-md" v-if="recent.thumbnail">
        <figure class="">
          <img :src="require(`~/assets/images/${recent.thumbnail}`)"
              alt="Elephant at sunset" class="object-cover w-full">
          <figcaption class="p-2">
            <NuxtLink :to="{ name: 'blog-slug', params: { slug: recent.slug } }">
              <h1 class="text-2xl text-indigo-700">{{ recent.title }}</h1>
            </NuxtLink>
            <div class="text-s text-gray-600 leading-relaxed">{{ recent.description }} </div>
          </figcaption>
        </figure>
      </div>
      <div class="shadow-md border p-2">
        <p class="text-gray-600 text-2xl">Top Picks</p>
        <div class="p-8 border mt-2" v-for="topPick of topPicks" :key="topPick.slug">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: topPick.slug } }">
            <h1 class="text-xl text-indigo-700">{{ topPick.title }}</h1>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="px-10 my-5">
      <Subscribe />
    </div>

    <p class="px-10 my-2 text-indigo-500 text-2xl">
      Recently published
    </p>
    <div class="grid grid grid-cols-3 gap-4 px-10 my-2" v-if="articles.length > 0">
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

    <div class="text-center mt-2" v-if="hasMore">
      <button @click="onMore" class="bg-teal-900 p-2 text-white">Show more</button>
    </div>

    <!-- <div class="grid grid grid-cols-3 gap-4 p-2">
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
    </div> -->

    
  </section>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        total: 0,
        page: 1,
        articles: [],
        recent: {},
        topPicks: [],
        hasMore: true
      }
    },
    created: function() {
      this.onTotal()
      this.onRecent()
      this.onTopRated()
      this.onData()

      console.log('Total items: ' + this.total)
    },
    methods: {
      onMore: function() {
        console.log('Enters onMore() > ' + this.page)
        this.page++;
        this.onData(this.page)
      },
      onTotal: async function() {
        console.log('Enters onTotal()')
        const value = (await this.$content('articles')
        .only([])
        .where({
          published: true
        })
        .fetch()
        ).length
        this.total = value;
      },
      onData: async function(page) {
        console.log('Enters onData()')
        const perPage = 6;
        const skip = page * perPage
        const blogs = await this.$content('articles')
        .only(['title', 'description', 'thumbnail', 'slug', 'author'])
        .where({
          published: true
        })
        .sortBy('publishedOn', 'desc')
        .limit(perPage)
        .skip(skip)
        .fetch()

        for (let i in blogs) {
          this.articles.push(blogs[i])
        }

        this.hasMore = (blogs.length > 0)
      },
      onRecent: async function() {
        const latest = await this.$content('articles')
        .only(['title', 'description', 'thumbnail', 'slug', 'author'])
        .sortBy('publishedOn', 'desc')
        .limit(1)
        .fetch()

        this.recent = latest[0]
      },
      onTopRated: async function() {
        const topRated = await this.$content('articles')
        .only(['title', 'slug'])
        .where({
          rated: true
        })
        .sortBy('publishedOn', 'desc')
        .limit(4)
        .fetch()

        for (let i in topRated) {
          this.topPicks.push(topRated[i])
        }
      }
    },
    // data () {
    //   return {
    //     page: 0
    //   }
    // },
    // async asyncData({ $content, params }) {
    //   const articles = await $content('articles', params.slug)
    //     .only(['title', 'description', 'thumbnail', 'slug', 'author'])
    //     .sortBy('createdAt', 'desc')
    //     .limit(6)
    //     .fetch()

    //     const recent = articles[0]

    //     const topPicks = await $content('articles', params.slug)
    //     .only(['title', 'description', 'img', 'slug', 'author'])
    //     .sortBy('createdAt', 'desc')
    //     .fetch()
    //     topPicks.push({
    //       title: 'Added 1'
    //     })

    //   return {
    //     articles, recent, topPicks
    //   }
    // }
  }
</script>