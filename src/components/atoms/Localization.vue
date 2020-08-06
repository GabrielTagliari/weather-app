<template>
  <div class="localization">
    <h5>{{ text }}</h5>
    <img :src="require('../../assets/location.svg')" alt="Ícone de localização" />
  </div>
</template>

<script>
export default {
  name: 'Localization',
  props: {
    text: String,
    icon: String
  }
}
</script>

<style scoped>
h5 {
  margin: 0px;
  padding: 0 1em 0 1em;
}
.localization {
  display: flex;
  background: rgba(13, 159, 234, 0.08);
  color: #0DA0EA;
  padding: 1em;
  border-radius: 0 20px 0 20px;
}
</style>