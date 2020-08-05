<template>
  <div class="flex">
    <img class="icon" alt="Ícone" :src="require('../../assets/' + icon)" max-width="25px">
    <h3>{{ label }}</h3>
    <h6>{{ text }}</h6>
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
.flex {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  width: 8em;
}
h3 {
  margin-bottom: 0;
}
h6 {
  margin-top: 5px;
}
</style>