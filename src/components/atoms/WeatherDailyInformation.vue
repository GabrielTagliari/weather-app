<template>
  <div>
    <img class="icon" alt="Ícone" :src="require('../../assets/' + icon)" width="50px">
    <h1>{{ label }}</h1>
    <div class="temperature">
      <span>{{highestTemp}}</span>
      <img alt="maior temperatura" class="arrow" :src="require('../../assets/arrow-up.png')">
      <span>{{lowestTemp}}</span>
      <img alt="menor temperatura" class="arrow" :src="require('../../assets/arrow-down.png')">
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeatherDailyInformation',
  props: {
    icon: String,
    label: String,
    highestTemp: String,
    lowestTemp: String
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 0;
}
p {
  margin-top: 5px;
}
.temperature {
  display: flex;
}
.arrow {
  width: 5px;
  height: 7px;
}
</style>