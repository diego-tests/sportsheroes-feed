import { shallowMount } from '@vue/test-utils'
import ActivityCredits from './ActivityCredits.vue'

describe('ActivityCredits.vue', () => {

  const points = 22
  let commonWrapper;

  beforeAll(()=>{
    commonWrapper = shallowMount(ActivityCredits, {
      propsData: {
        points,
      },
    })
  })


  it('Is a vue instace', () => {
    const creditsWrapper = commonWrapper
    expect(creditsWrapper.isVueInstance()).toBeTruthy()
  })
  
  it('Displays the number of points earned', () => {
    const creditsWrapper = commonWrapper
    
    const pointsCounter = creditsWrapper.find('[data-testid="points"]')

    expect(pointsCounter.text()).toBe(`${points}`) 
  })
  
  it('Displays the number of creadits earned (1 credit = 5 points)', () => {
    const creditsWrapper = commonWrapper
    
    const creditsCounter = creditsWrapper.find('[data-testid="credits"]')

    expect(creditsCounter.text()).toBe(`${parseInt(points / 5)}`) 
  })
  
  
})