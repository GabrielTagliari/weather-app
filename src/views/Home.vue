<template>
  <div id="app">
    <WeatherInformation icon="logo.png"/>
  </div>
</template>

<script>
import WeatherInformation from '../components/atoms/WeatherInformation'

export default {
  name: 'Home',
  components: {
    WeatherInformation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
