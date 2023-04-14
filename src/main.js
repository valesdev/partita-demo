import { createApp } from 'vue'

import App from '@/App'

import store from '@/store'
import components from '@/components'
import views from '@/views'

const app = createApp(App)

window.$app = app

app
  .use(store)
  .use(components)
  .use(views)
  .mount('#app')
