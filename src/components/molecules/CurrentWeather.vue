<template>
  <div class="weather">
    <img class="icon" alt="Ícone" :src="require('../../assets/' + icon)" width="35px">
    <h1 class="date" data-test-current-weather-label>{{ label }}</h1>
  </div>
</template>

<script>
export default {
  name: 'CurrentWeather',
  props: {
    icon: String,
    label: String,
  }
}
</script>

<style scoped>

.weather {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  width: 5em;
  padding: 1em;
  margin: 0.5em;
}

.date {
  margin-bottom: 0;
  display: flex;
  word-break: break-word;
  justify-content: center;
  font-weight: bold;
  font-size: 17px;
  margin: 0px 0px 0px;
}
</style>