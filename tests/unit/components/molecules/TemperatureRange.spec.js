import { shallowMount } from '@vue/test-utils'
import TemperatureRange from '@/components/molecules/TemperatureRange.vue'

describe('TemperatureRange.vue', () => {
  let wrapper

  beforeAll(() => {
    const mock = {
      icon: 'barometer.svg',
      label: '1,007mBar',
      text: 'Pressure'
    }
    wrapper = shallowMount(TemperatureRange, {
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
    expect(wrapper.find("h3").text()).toBe("1,007mBar")
  })

  it('displays text', () => {
    expect(wrapper.find("h6").text()).toBe("Pressure")
  })
})
