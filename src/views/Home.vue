<template>
  <div id="app">
    <information-table class="table"/>
    <div class="daily-information">
      <weather-daily-information
        icon="sunny-1.svg"
        label="Mon, 21"
        maxTemperature="35"
        minTemperature="14"
      />
      <weather-daily-information
        icon="sunny-1.svg"
        label="Tue, 22"
        maxTemperature="32"
        minTemperature="11"
      />
    </div>
  </div>
</template>

<script>
import InformationTable from "@/components/organisms/InformationTable";
import WeatherDailyInformation from "@/components/atoms/WeatherDailyInformation";

export default {
  name: "Home",
  components: {
    InformationTable,
    WeatherDailyInformation,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@100&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  font-family: "Barlow", sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.daily-information {
  display: flex;
}

.table {
  padding: 1em;
}
</style>
