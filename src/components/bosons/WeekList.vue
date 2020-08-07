<template>
  <div class="week-list">
    <weather-daily-information
    :icon="day.icon"
    :label="day.label"
    :maxTemperature="day.maxTemperature"
    :minTemperature="day.minTemperature"
    v-for="day in weekList" :key="day.label" />
  </div>
</template>

<script>
import WeatherDailyInformation from "@/components/molecules/WeatherDailyInformation"

export default {
  name: "WeekList",
  components: {
    WeatherDailyInformation,
  },
  data() {
    return {
      weekList: [
        {
          icon:"sunny-1.svg",
          label:"Mon, 21",
          maxTemperature:"35",
          minTemperature:"14"
        },
        {
          icon:"wind-1.svg",
          label:"Tue, 22",
          maxTemperature:"34",
          minTemperature:"13"
        },
        {
          icon:"cloudy-2.svg",
          label:"Wed, 23",
          maxTemperature:"33",
          minTemperature:"12"
        },{
          icon:"hazy.svg",
          label:"Thu, 24",
          maxTemperature:"32",
          minTemperature:"11"
        },
        {
          icon:"humidity.svg",
          label:"Fri, 25",
          maxTemperature:"31",
          minTemperature:"10"
        },
      ],
    }
  }
};
</script>

<style scoped>
.week-list {
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  align-items: center;
  justify-content: flex-start;
  width: 20em;
  padding: 1em;
}
</style>