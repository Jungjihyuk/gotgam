import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/container.vue';
import Registration from '@/components/registration.vue';
import RegionTravel from '@/components/regionTravel.vue';
import MoodTravel from '@/components/moodTravel.vue';
import SignUp from '@/components/signup.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/regiontravel',
      name: RegionTravel,
      component: RegionTravel
    },
    {
      path: '/moodtravel',
      name: MoodTravel,
      component: MoodTravel
    },
    {
      path: '/signup',
      name: SignUp,
      component: SignUp
    }
  ],
  mode: 'history'

})
