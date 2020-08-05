<template>
  <div class="container">
    <img class="icon" alt="Ícone" :src="require('../../assets/' + icon)" width="50px">
    <h1 class="date">{{ label }}</h1>
    <div class="temperature">
      <div class="temperature__max">
        <span>{{ maxTemperature }}°C</span>
        <img alt="maior temperatura" class="arrow" :src="require('../../assets/arrow_up.svg')">
      </div>
      <div class="temperature__min">
        <span>{{ minTemperature }}°C</span>
        <img alt="menor temperatura" class="arrow" :src="require('../../assets/arrow_down.svg')">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeatherDailyInformation',
  props: {
    icon: String,
    label: String,
    maxTemperature: String,
    minTemperature: String
  }
}
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  border: 1px solid transparent;
  box-shadow: 0px 0px 15px 5px #f2f5f4;
  width: 8em;
  padding: 1em;
  margin: .5em;
  
}

.date {
  margin-bottom: 0;
  display: inline-block;
  word-break: break-word;
}

.temperature {
  display: flex;
  width: inherit;
  justify-content: space-evenly;
}

.arrow {
  height: 12px;
  margin-left: .1em;
}
</style>