import Vue from 'vue'
import Router from 'vue-router'
import Siswa from '@/components/Siswa'
import Kelas from '@/components/Kelas'
import KelasForm from '@/components/KelasForm'
import SiswaForm from '@/components/SiswaForm'

// Vue.use(BootstrapVue)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/siswa',
      name: 'Siswa',
      component: Siswa
    },
    {
      path: '/kelas',
      name: 'Kelas',
      component: Kelas
    },
    {
      path: '/siswa/create',
      name: 'SiswaForm',
      component: SiswaForm
    },
    {
      path: '/siswa/:id',
      name: 'SiswaEdit',
      component: SiswaForm
    },
    {
      path: '/kelas/create',
      name: 'KelasForm',
      component: KelasForm
    },
    {
      path: '/kelas/:id',
      name: 'KelasEdit',
      component: KelasForm
    },
  ]
})
