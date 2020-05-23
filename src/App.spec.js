import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex';
import { GET_RECENT_ACTIVITIES } from './store/_actionTypes'
import App from '@/App.vue'


const localVue = createLocalVue();
localVue.use(Vuex);

let appWrapper, actions;

beforeEach(()=> {
  actions = { [GET_RECENT_ACTIVITIES]: jest.fn() }
  appWrapper = shallowMount(App, {
    localVue,
    store : new Vuex.Store({
      state: {},
      actions,
    }),  
  })
})

describe('App.vue', () => {
  
  it('renders a vue component', () => {
    expect(appWrapper.isVueInstance()).toBeTruthy()
  })
  
  it(`calls ${GET_RECENT_ACTIVITIES} on load`, () => {
    expect(actions[GET_RECENT_ACTIVITIES]).toHaveBeenCalled()
  })
})
