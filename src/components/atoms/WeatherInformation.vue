<template>
  <div>
    <img class="icon" alt="Ícone" :src="require('../../assets/' + icon)" width="50px">
    <h1>{{ label }}</h1>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'WeatherInformation',
  props: {
    icon: String,
    label: String,
    text: String
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
</style>