<template>
  <div>
    <div class="temperature">
      <h1>{{ maxTemperature }}</h1>
      <img class="max" alt="max" src="../../assets/arrow_up.svg" width="50px" />
    </div>
    <div class="temperature">
      <h1>{{ minTemperature }}</h1>
      <img class="min" alt="min" src="../../assets/arrow_down.svg" width="50px" />
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
}
.temperature {
  display: flex;
  align-items: center;
}
.max {
  padding-top: 0px;
}
.min {
  padding-top: 15px;
}
</style>