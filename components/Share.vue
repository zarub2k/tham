<template>
  <div class="flex justify-start">
    <p class="p-2">
      <a href="https://twitter.com/intent/tweet?url=http://localhost:3000/tham/blog/first&text=Welcome%20post&via=zarub2k" target="_blank" rel="nofollow">
        <img src="~/assets/images/twitter.png" alt="Share" class="w-8 h-8">
      </a>
    </p>
    <p class="p-2">
      <a href="https://www.linkedin.com/shareArticle?url=http://localhost:3000/tham/blog/first&title=Welcome%20post" target="_blank" rel="nofollow">
        <img src="~/assets/images/linkedin.png" alt="Share" class="w-8 h-8">
      </a>
    </p>
    <p>
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
    </p>
  </div>
</template>