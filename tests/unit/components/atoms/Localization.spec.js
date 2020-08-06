import { shallowMount } from '@vue/test-utils'
import Localization from '@/components/atoms/Localization.vue'

describe('Localization.vue', () => {
  let wrapper

  beforeAll(() => {
    const mock = {
      text: 'Mumbai, India'
    }
    wrapper = shallowMount(Localization, {
      propsData: {
        text: mock.text
      }
    })
  })

  it('be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('displays label', () => {
    expect(wrapper.find("h5").text()).toBe("Mumbai, India")
  })
})
