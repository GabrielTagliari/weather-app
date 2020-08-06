<template>
  <div class="information">
    <div class="header">
      <date-time text="Sunday, 19 May 2019  |  4:30PM" />
      <localization text="Mumbai, India" />
    </div>
    <information-table class="table"/>
    <week-list />
  </div>
</template>

<script>
import InformationTable from '@/components/bosons/InformationTable'
import WeekList from '@/components/bosons/WeekList'
import DateTime from '@/components/atoms/DateTime'
import Localization from '@/components/atoms/Localization'

export default {
  name: 'InformationCard',
  components: {
    InformationTable,
    WeekList,
    DateTime,
    Localization
  }
}
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.information {
  border-radius: 20px 20px 0 0;
  border: 1px solid transparent;
  box-shadow: 0px 0px 15px 5px #f2f5f4;
}
</style>