import { shallowMount } from '@vue/test-utils'
import InformationTable from '@/components/bosons/InformationTable'
import WeatherInformation from "@/components/molecules/WeatherInformation"
import TemperatureRange from "@/components/molecules/TemperatureRange"
import CurrentTemperature from "@/components/atoms/CurrentTemperature"
import CurrentWeather from "@/components/molecules/CurrentWeather"

describe('InformationTable.vue', () => {
  let wrapper

  beforeAll(() => {
    wrapper = shallowMount(InformationTable)
  })

  it('be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders weather information', () => {
    expect(wrapper.findComponent(WeatherInformation).exists()).toBe(true)
  })

  it('renders temperature range', () => {
    expect(wrapper.findComponent(TemperatureRange).exists()).toBe(true)
  })

  it('renders current temperature', () => {
    expect(wrapper.findComponent(CurrentTemperature).exists()).toBe(true)
  })

  it('renders current weather', () => {
    expect(wrapper.findComponent(CurrentWeather).exists()).toBe(true)
  })
})
