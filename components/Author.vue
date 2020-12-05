<template>
  <div>
    <figure>
      <img src="~/assets/images/tham.png" alt="">
      <figcaption>
        <div>
          <h4>{{ author.name }}</h4>
        </div>
      </figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true
    }
  }
}
</script>