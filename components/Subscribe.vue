<template>
  <div class="flex justify-center">
    <div class="text-center w-full p-10 border inline bg-gradient-to-r from-teal-400 to-blue-500">
      <h2 class="mb-5 text-3xl text-white">Technology and growth hacks for your inbox</h2>
      <p>
        <input type="text" v-model="email" class="w-1/2 h-10 p-2 border-gray-300 focus:border-blue-200 text-gray-600">
        <button @click="onSubscribe" class="bg-teal-900 p-2 text-white">Subscribe</button>
      </p>
    </div>
    Config {{ this.$config }}
  </div>
</template>
<script>
import moment from 'moment'

export default {
  data() {
    return {
      email: ''
    }
  },
  methods: {
    onSubscribe: async function() {
      console.log('Enters onSubscribe()')

      const date = moment().format('YYYY-MM-DD')
      const subscribe = {
        date: date,
        email: this.email
      }

      const subscribeUrl = this.$config.subscribeUrl
      // const subscribeUrl = '/api/subscribe'
      const options = {
        method: 'POST',
        mode: 'no-cors',
        // credentials: 'same-origin',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(subscribe),
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
        }
      }

      // await fetch(subscribeUrl, options)
      //   .then(data => data.json())
      //   .then(json => console.log(json))
      //   .catch(err => console.log('Error: ' + err))
      // const response = await this.$http.post(subscribeUrl, subscribe)
      // console.log('Subscribe completed with : ' + response.status)

      this.callApi(subscribeUrl, options)
      this.email = ''
    },
    callApi: async function(url, options) {
      await fetch(url, options)
      // await fetch(url, options).then(data => { return data.status })
    }
  }
}
</script>