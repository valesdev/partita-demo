import { type Plugin } from 'vue'

import 'normalize.css'

import 'partita/style'
import Partita from 'partita'

import '@/assets/partita.scss'

import MyPtSpinnerComponent from './MyPtSpinnerComponent.vue'
import MyPtPtrComponent from './MyPtPtrComponent.vue'

const componentsPlugin: Plugin = {
  install (app) {
    app.use(Partita, {
      spinner: {
        component: MyPtSpinnerComponent
      },
      ptr: {
        component: MyPtPtrComponent,
        threshold: 20
      }
    })
  }
}

export default componentsPlugin
