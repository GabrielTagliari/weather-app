<template>
  <div>
    <img alt="Vue logo" :src="require('../../assets/' + icon)">
  </div>
</template>

<script>
export default {
  name: 'WeatherInformation',
  props: {
    icon: String
  },
  // data () {
  //   return {
  //     icon: require('../../assets/logo.png')
  //   }
  // }
}
</script>

<style>

</style>