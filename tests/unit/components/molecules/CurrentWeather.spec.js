import { shallowMount } from '@vue/test-utils'
import CurrentWeather from '@/components/molecules/CurrentWeather.vue'

describe('CurrentWeather.vue', () => {
  let wrapper

  beforeAll(() => {
    const mock = {
      icon:"sunny.svg",
      label:"Sunny"
    }
    wrapper = shallowMount(CurrentWeather, {
      propsData: {
        icon: mock.icon,
        label: mock.label
      }
    })
  })

  it('be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('displays label', () => {
    expect(wrapper.find("[data-test-current-weather-label]").text()).toBe("Sunny")
  })
})