import ViewRoot from './root'
import ViewPageA from './page-a'
import ViewPageB from './page-b'
import ViewContents from './contents'
import ViewModals from './modals'
import ViewSliders from './sliders'
import ViewLogin from './login'
import ViewRegister from './register'

export default {
  install (app) {
    app.component('ViewRoot', ViewRoot)
    app.component('ViewPageA', ViewPageA)
    app.component('ViewPageB', ViewPageB)
    app.component('ViewContents', ViewContents)
    app.component('ViewModals', ViewModals)
    app.component('ViewSliders', ViewSliders)
    app.component('ViewLogin', ViewLogin)
    app.component('ViewRegister', ViewRegister)
  }
}
