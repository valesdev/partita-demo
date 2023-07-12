import { type Plugin } from 'vue'

import 'normalize.css'

import 'partita/style'
import Partita from 'partita'

import '@/assets/partita.scss'

import MyPtLoadingComponent from './MyPtLoadingComponent.vue'
import MyPtPtrComponent from './MyPtPtrComponent.vue'

const componentsPlugin: Plugin = {
  install (app) {
    app.use(Partita, {
      loading: {
        component: MyPtLoadingComponent
      },
      ptr: {
        component: MyPtPtrComponent,
        threshold: 20
      }
    })
  }
}

export default componentsPlugin
