import { shallowMount } from '@vue/test-utils'
import WeekList from '@/components/bosons/WeekList.vue'
import WeatherInformation from '@/components/molecules/WeatherDailyInformation'

describe('WeekList.vue', () => {
  let wrapper

  beforeAll(() => {
    wrapper = shallowMount(WeekList)
    const list = [
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
    ]
    wrapper.setData(list)
  })

  it('be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders week list', () => {
    expect(wrapper.findComponent(WeekList).exists()).toBe(true)
  })

  it('renders weather information data list', () => {
    expect(wrapper.findComponent(WeatherInformation).exists()).toBe(true)
  })

  it('verifies that have 5 elements at week list', () => {
    expect(wrapper.findAllComponents(WeatherInformation)).toHaveLength(5)
  })
})
