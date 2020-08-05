<template>
  <div>
    <div class="temperature">
      <h1>{{ maxTemperature }}°C</h1>
      <img class="max" alt="max" src="../../assets/arrow_up.svg" />
    </div>
    <div class="temperature">
      <h1>{{ minTemperature }}°C</h1>
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
  width: 20px;
  height: 20px;
}
h1 {
  margin-top: 10px;
  margin-bottom: 0px;
  word-break: break-word;
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
  padding-top: 15px;
}
</style>