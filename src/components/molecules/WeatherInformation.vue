<template>
  <div class="flex">
    <img class="icon" alt="Ícone" :src="require('../../assets/' + icon)" max-width="25px">
    <h4>{{ label }}</h4>
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
  justify-content: center;
  width: inherit;
  padding: 0.6em;
  margin: 0.5em;
}
h4 {
  margin-bottom: 0;
  word-break: break-word;
}
h6 {
  margin: 5px 0 0 0;
}
</style>