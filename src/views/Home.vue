<template>
  <div id="app">
    <weather-information icon="barometer.svg" label="1,007mBar" text="Pressure"/>
  </div>
</template>

<script>
import WeatherInformation from '@/components/atoms/WeatherInformation'

export default {
  name: 'Home',
  components: {
    WeatherInformation
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@100&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-family: 'Barlow', sans-serif;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
