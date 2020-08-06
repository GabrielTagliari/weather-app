import { shallowMount } from '@vue/test-utils'
import WeatherDailyInformation from '@/components/molecules/WeatherDailyInformation.vue'

describe('WeatherDailyInformation.vue', () => {
  let wrapper

  beforeAll(() => {
    const mock = {
      icon:"sunny-1.svg",
      label:"Mon, 21",
      maxTemperature:"35",
      minTemperature:"14"
    }
    wrapper = shallowMount(WeatherDailyInformation, {
      propsData: {
        icon: mock.icon,
        label: mock.label,
        maxTemperature: mock.maxTemperature,
        minTemperature: mock.minTemperature
      }
    })
  })

  it('be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('displays label', () => {
    expect(wrapper.find("[data-test-day-label]").text()).toBe("Mon, 21")
  })

  it('displays maxTemperature', () => {
    expect(wrapper.find("[data-test-max-temperature]").text()).toBe("35°C")
  })

  it('displays minTemperature', () => {
    expect(wrapper.find("[data-test-min-temperature]").text()).toBe("14°C")
  })
})
