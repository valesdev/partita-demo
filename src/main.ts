import { createApp } from 'vue'

import App from '@/App.vue'

import components from '@/components'
import views from '@/views'

const app = createApp(App)

app
  .use(components)
  .use(views)
  .mount('#app')
