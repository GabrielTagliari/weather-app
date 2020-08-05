import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  it('Should be a Vue instance', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.vm).toBeTruthy()
  })
})
