import { shallowMount } from '@vue/test-utils'
import ActivityEffort from './ActivityEffort.vue'

describe('ActivityEffort.vue', () => {
  let effort = {
    type: 'Walking',
    distance: 10470,
    duration: 2966,
    steps: 8276,
  }


  it('Is a vue instace', () => {
    const effortWrapper = shallowMount(ActivityEffort, {
      propsData: {
        effort,
      },
    })
    expect(effortWrapper.isVueInstance()).toBeTruthy()
  }) 
  
  it('Shows steps if activity type is `Walking`', () => {
    const steps = 123
    const effortWrapper = shallowMount(ActivityEffort, {
      propsData: {
        effort: {
          ...effort,
          steps,
        },
      },
    })
    expect(effortWrapper.text()).toBe(`${steps} pas`)
  })
  
  it('Adds a space for units over 999 (`ex: 2 000`)', () => {
    const steps = 2000
    const effortWrapper = shallowMount(ActivityEffort, {
      propsData: {
        effort: {
          ...effort,
          steps,
        },
      },
    })
    expect(effortWrapper.text()).toBe('2 000 pas')
  })
  
  it('Shows distance and time if activity type is not walking', () => {
    const effortWrapper = shallowMount(ActivityEffort, {
      propsData: {
        effort: {
          ...effort,
          type: 'Anything',
        },
      },
    })
    expect(effortWrapper.text()).toBe('10,5 km - 0h49')
  })
  
})