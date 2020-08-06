<template>
  <div class="flex">
    <div class="temperature">
      <h3>{{ maxTemperature }}°C</h3>
      <img class="max" alt="max" src="../../assets/arrow_up.svg" />
    </div>
    <div class="temperature">
      <h3>{{ minTemperature }}°C</h3>
      <img class="min" alt="min" src="../../assets/arrow_down.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TemperatureRange",
  props: {
    maxTemperature: String,
    minTemperature: String
  },
};
</script>

<style scoped>
img {
  width: 10px;
  height: 10px;
}
h3 {
  margin-top: 2px;
  margin-bottom: 0px;
  word-break: break-word;
}
.flex {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: 6em;
  padding: 1em;
}
.temperature {
  display: flex;
  align-items: center;
  justify-content: center;
}
.max {
  padding-top: 0px;
}
.min {
  padding-top: 10px;
}
</style>