<template>
  <section class="p-3 px-10">
    <div class="grid grid grid-cols-3 gap-4">
      <div class="col-span-2">
        <figure class="my-5">
          <img src="~/assets/images/flutter.png"
              alt="Elephant at sunset">
          <figcaption>
            <div>{{ recent.title }}</div>
            <div>{{ recent.description }} </div>
          </figcaption>
        </figure>
      </div>
      <div class="my-5">
        Top Picks
      </div>
    </div>

    <div class="grid grid grid-cols-3 gap-10 border">
      <div class="border">
        One
      </div>
      <div class="border">
        Two
      </div>
      <div class="border">
        Three
      </div>
      <div class="border">Four</div>
    </div>

    <div>
      <h1>Blog Posts</h1>
      <ul>
        <li v-for="article of articles" :key="article.slug">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <img :src="article.img" />
            <div>
              <h2>{{ article.title }}</h2>
              <!-- <p>by {{ article.author.name }}</p> -->
              <p class="text-gray-600">{{ article.description }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .only(['title', 'description', 'img', 'slug', 'author'])
        .sortBy('createdAt', 'asc')
        .fetch()

        const recent = articles[0]

      return {
        articles, recent
      }
    }
  }
</script>