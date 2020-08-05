<template>
  <div id="app">
    <temperature-range arrowUp="arrow_up.svg" maxTemperature="35°C" minTemperature="14°C" arrowDown="arrow_down.svg"/>
    <weather-information icon="humidity.svg" label="49%" text="Humidity"/>
    <weather-information icon="barometer.svg" label="1,007mBar" text="Pressure"/>
    <weather-information icon="wind-1.svg" label="23km/h" text="Wind"/>
    <weather-information icon="sunrise.svg" label="6:03 AM" text="Sunrise"/>
    <weather-information icon="sunset.svg" label="7:05 PM" text="Sunset"/>
    <weather-information icon="sand-clock.svg" label="13h 1m" text="Daytime"/>
  </div>
</template>

<script>
import WeatherInformation from '@/components/atoms/WeatherInformation'
import TemperatureRange from '@/components/atoms/TemperatureRange'

export default {
  name: 'Home',
  components: {
    WeatherInformation,
    TemperatureRange
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@100&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  font-family: 'Barlow', sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
