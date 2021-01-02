<template>
  <div class="flex justify-start">
    <p class="p-2">
      <a :href="twitterShare" target="_blank" rel="nofollow">
        <img src="~/assets/images/twitter.png" alt="Twitter Share" class="w-8 h-8">
      </a>
    </p>
    <p class="p-2">
      <a href="https://www.linkedin.com/shareArticle?url=http://localhost:3000/tham/blog/first&title=Welcome%20post" target="_blank" rel="nofollow">
        <img src="~/assets/images/linkedin.png" alt="Linkedin Share" class="w-8 h-8">
      </a>
    </p>
    <p>
      Slug: {{slug}}
      Encoded: {{ encodedUrl }}
      <!-- <a href="https://www.linkedin.com/shareArticle?url=http://localhost:3000/tham/blog/first&title=Welcome%20post" target="_blank" rel="nofollow">
        <img src="~/assets/images/facebook.png" alt="Facebook Share" class="w-8 h-8">
      </a> -->
      <!-- https://www.facebook.com/sharer.php?u=https%3A%2F%2Fblog.tham.fyi%2F2020%2F10%2F03%2Fflutter-stateless-vs-stateful-widgets%2F -->
    </p>
    <!-- <p>
      <ShareNetwork
        network="twitter"
        url="http://localhost:3000/tham/blog/first"
        title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
        description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
        quote="The hot reload is so fast it\'s near instant. - Evan You"
        hashtags="vuejs,vite"
      >
        Share on Facebook
      </ShareNetwork>
    </p> -->
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    slug: String
  },
  computed: {
    encodedUrl: function() {
      const base = 'https://www.tham.xyz/blog/'
      return encodeURIComponent(base + this.slug)
    },
    twitterShare: function() {
      return "https://twitter.com/intent/tweet?url=" 
        + this.encodedUrl
        + "&text=Welcome%20post&via=zarub2k" 
    }
  },
  // link: [
  //   {
  //     hid: 'canonical',
  //     rel: 'canonical',
  //     // href: `${this.$config.baseUrl}/blog/${this.$route.params.slug}`,
  //     href: 'https://www.tham.xyz/blog/' + this.slug
  //   },
  // ],
  head() {
    return {
      meta: [
      // ...this.meta,
        { name: "twitter:site", content: "@zarub2k" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: "https://www.tham.xyz",
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: 'My blog content'
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: '/images/coaching.png'
        },
        { property: "twitter:image:width", content: "740" },
        { property: "twitter:image:height", content: "300" },
      ]
    }
  }
}
</script>