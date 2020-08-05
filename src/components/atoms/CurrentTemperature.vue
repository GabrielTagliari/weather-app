<template>
  <div class="temperature">
    <h1>{{temperature}}</h1>
    <p>°C</p>
  </div>
</template>

<script>
export default {
  name:'CurrentTemperature',
  props: {
    temperature: String,
  }
}
</script>

<style scoped>
.temperature{
  display: flex;
  align-items: center;
}
</style>