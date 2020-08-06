import { shallowMount } from '@vue/test-utils'
import InformationCard from '@/components/organisms/InformationCard.vue'
import DateTime from '@/components/atoms/DateTime'
import Localization from '@/components/atoms/Localization'
import WeekList from '@/components/bosons/WeekList'
import InformationTable from '@/components/bosons/InformationTable'

describe('InformationCard.vue', () => {
  let wrapper

  beforeAll(() => {
    wrapper = shallowMount(InformationCard)
  })

  it('be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders dateTime', () => {
    expect(wrapper.findComponent(DateTime).exists()).toBe(true)
  })

  it('renders localization', () => {
    expect(wrapper.findComponent(Localization).exists()).toBe(true)
  })

  it('renders week list', () => {
    expect(wrapper.findComponent(WeekList).exists()).toBe(true)
  })

  it('renders information table', () => {
    expect(wrapper.findComponent(InformationTable).exists()).toBe(true)
  })
})
