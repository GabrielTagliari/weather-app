import { shallowMount } from '@vue/test-utils'
import WeatherInformation from '@/components/molecules/WeatherInformation.vue'

describe('WeatherInformation.vue', () => {
  let wrapper

  beforeAll(() => {
    const mock = {
      icon: 'barometer.svg',
      label: '1,007mBar',
      text: 'Pressure'
    }
    wrapper = shallowMount(WeatherInformation, {
      propsData: {
        icon: mock.icon,
        label: mock.label,
        text: mock.text
      }
    })
  })

  it('be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('displays label', () => {
    expect(wrapper.find("h4").text()).toBe("1,007mBar")
  })

  it('displays text', () => {
    expect(wrapper.find("h6").text()).toBe("Pressure")
  })
})
