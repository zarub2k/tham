<template>
  <section class="border mt-2">
    <div class="flex justify-center p-2">
      <a v-for="social in socials" :key="social.name" :href="social.url" class="p-2">
        <img :src="require(`~/assets/images/${social.image}`)"
              :alt="social.alt" class="w-8 h-8">
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      socials: []
    }
  },
  created () {
    this.onInit();
  },
  methods: {
    onInit: async function() {
      const values = await this.$content('social')
        .fetch()

      const socialMedias = values.socs

        console.log("Here: " + socialMedias)

      for (let i in socialMedias) {
        console.log("Value: " + JSON.stringify(socialMedias[i]))
        this.socials.push(socialMedias[i])
      }
    }
  }
}
</script>