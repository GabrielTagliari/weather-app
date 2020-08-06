<template>
  <h5>{{ text }}</h5>
</template>

<script>
export default {
  name: 'DateTime',
  props: {
    text: String
  }
}
</script>

<style scoped>
h5 {
  margin: 0px;
  padding: 1em;
}
</style>