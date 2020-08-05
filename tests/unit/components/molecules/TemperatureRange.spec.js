import { shallowMount } from '@vue/test-utils'
import TemperatureRange from '@/components/molecules/TemperatureRange.vue'

describe('TemperatureRange.vue', () => {
  let wrapper

  beforeAll(() => {
    const mock = {
      maxTemperature: '35',
      minTemperature: '14'
    }
    wrapper = shallowMount(TemperatureRange, {
      propsData: {
        maxTemperature: mock.maxTemperature,
        minTemperature: mock.minTemperature
      }
    })
  })

  it('be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it("renders many children", () => {
    expect(wrapper.findAll("h1").length).toBe(2)
  })

  it('displays max temperature', () => {
    expect(wrapper.findAll('h1').at(0).text()).toBe("35°C")
  })

  it('displays min temperature', () => {
    expect(wrapper.findAll("h1").at(1).text()).toBe("14°C")
  })
})
