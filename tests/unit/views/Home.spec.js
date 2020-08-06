import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import InformationCard from '@/components/organisms/InformationCard'

describe('Home.vue', () => {
  let wrapper

  beforeAll(() => {
    wrapper = shallowMount(Home)
  })

  it('be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders dateTime', () => {
    expect(wrapper.findComponent(InformationCard).exists()).toBe(true)
  })
})
