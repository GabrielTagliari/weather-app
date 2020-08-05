<template>
  <div>
    <div>{{ maxTemperature }}
    <img alt="max" :src="require('../../assets/' + arrowUp)" width="50px" />
    </div>
    <div>{{ minTemperature }}
    <img alt="min" :src="require('../../assets/' + arrowDown)" width="50px" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TemperatureRange",
  props: {
    arrowUp: String,
    maxTemperature: String,
    minTemperature: String,
    arrowDown: String,
  },
};
</script>

<style scoped>
img {
  width: 10px;
  height: 10px;
}
</style>