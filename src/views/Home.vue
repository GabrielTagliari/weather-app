<template>
  <div id="app">
    <img src="../assets/banner-day.svg" alt="Cidade durante o dia" width="100%"/>
    <information-card />
  </div>
</template>

<script>
import InformationCard from '@/components/organisms/InformationCard'

export default {
  name: "Home",
  components: {
    InformationCard
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@100&display=swap");

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-family: "Barlow", sans-serif;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}

.daily-information {
  display: flex;
}

body {
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  margin: 0;
}
</style>
