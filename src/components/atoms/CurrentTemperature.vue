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
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: 5rem;
  padding: 1rem;
  font-size: 1em;
}
</style>