<template>
  <div class="px-10 py-5 flex flex-col place-items-center bg-gradient-to-r from-teal-400 to-blue-500">
    <h2 class="mb-5 text-3xl text-white">Book for speaking or coaching</h2>
    <div class="flex flex-col place-items-center w-full">
      <input type="text" class="w-1/3 m-2 h-10 p-2 border 
        border-gray-200 focus:border-gray-200 text-gray-600" placeholder="Enter name" v-model="inquiry.name">
      <input type="text" class="w-1/3 m-2 h-10 p-2 border
        border-gray-200 focus:border-gray-200 text-gray-600" placeholder="Enter email" v-model="inquiry.email">
      <select name="purpose" id="" class="w-1/3 h-10 m-2 p-2 border border-gray-200 text-gray-600" v-model="inquiry.purpose">
        <option value="coaching" selected>Coaching</option>
        <option value="consulting">Consulting</option>
        <option value="speaking">Speaking</option>
      </select>
      <button  class="w-1/3 m-2 p-2 bg-teal-900 text-white" @click="onInquire">Subscribe</button>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data() {
    return {
      inquiry: {
        status: 'open'
      }
    }
  },
  methods: {
    onInquire: async function() {
      console.log('Enters onInquire()')
      
      const date = moment().format('YYYY-MM-DD')
      this.inquiry.date = date

      // console.log('Payload: ' + JSON.stringify(this.inquiry))
      const inquiryUrl = this.$config.inquiryUrl
      const options = {
        method: 'POST',
        mode: 'no-cors',
        // credentials: 'same-origin',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(this.inquiry),
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
        }
      }

      await fetch(inquiryUrl, options)
      this.onInit()
    },
    onInit: function() {
      this.inquiry = {
        status: 'open'
      }
    }
  }
}
</script>