import { type Plugin } from 'vue'

import ViewRoot from './Root.vue'
import ViewPageA from './PageA.vue'
import ViewPageB from './PageB.vue'
import ViewContents from './Contents.vue'
import ViewInteractions from './Interactions.vue'
import ViewList from './List.vue'
import ViewModals from './Modals.vue'
import ViewLogin from './Login.vue'
import ViewRegister from './Register.vue'

const viewsPlugin: Plugin = {
  install (app) {
    app.component('ViewRoot', ViewRoot)
    app.component('ViewPageA', ViewPageA)
    app.component('ViewPageB', ViewPageB)
    app.component('ViewContents', ViewContents)
    app.component('ViewInteractions', ViewInteractions)
    app.component('ViewList', ViewList)
    app.component('ViewModals', ViewModals)
    app.component('ViewLogin', ViewLogin)
    app.component('ViewRegister', ViewRegister)
  }
}

export default viewsPlugin
