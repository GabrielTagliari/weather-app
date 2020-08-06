import { shallowMount } from '@vue/test-utils'
import DateTime from '@/components/atoms/DateTime.vue'

describe('DateTime.vue', () => {
  let wrapper

  beforeAll(() => {
    const mock = {
      text: 'Sunday, 19 May 2019  |  4:30PM'
    }
    wrapper = shallowMount(DateTime, {
      propsData: {
        text: mock.text
      }
    })
  })

  it('be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('displays label', () => {
    expect(wrapper.find("h5").text()).toBe("Sunday, 19 May 2019  |  4:30PM")
  })
})
