import { shallowMount } from '@vue/test-utils'
import CurrentTemperature from '@/components/atoms/CurrentTemperature.vue'

describe('CurrentTemperature.vue', () => {
  let wrapper

  beforeAll(() => {
    const mock = {
      temperature: '36'
    }
    wrapper = shallowMount(CurrentTemperature, {
      propsData: {
        temperature: mock.temperature
      }
    })
  })

  it('be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('displays label', () => {
    expect(wrapper.find("h1").text()).toBe("36")
  })
})
