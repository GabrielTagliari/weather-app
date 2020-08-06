<template>
  <div class="grid">
    <current-temperature temperature="36"/>
    <current-temperature temperature="36"/>
    <temperature-range minTemperature="14" maxTemperature="35"/>
    <weather-information icon="humidity.svg" label="49%" text="Humidity"/>
    <weather-information icon="barometer.svg" label="1,007mBar" text="Pressure"/>
    <weather-information icon="wind-1.svg" label="23km/h" text="Wind"/>
    <weather-information icon="sunrise.svg" label="6:03 AM" text="Sunrise"/>
    <weather-information icon="sunset.svg" label="7:05 PM" text="Sunset"/>
    <weather-information icon="sand-clock.svg" label="13h 1m" text="Daytime"/>
  </div>
</template>

<script>
import WeatherInformation from "@/components/molecules/WeatherInformation";
import TemperatureRange from "@/components/molecules/TemperatureRange";
import CurrentTemperature from "@/components/atoms/CurrentTemperature";

export default {
  name: 'InformationTable',
  components: {
    WeatherInformation,
    TemperatureRange,
    CurrentTemperature
  }
}
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}
</style>