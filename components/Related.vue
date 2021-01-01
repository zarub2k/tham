<template>
  <div>
    Related {{slug}}
  </div>
</template>
<script>
export default {
  props: {
    slug: String
  },
  created: function() {
    this.onData()
  },
  methods: {
    onData: function() {
      console.log('Enters Related.onData()')
    }
  }
}
</script>