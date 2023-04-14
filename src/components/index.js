import 'normalize.css'

import Partita from 'partita'

export default {
  install (app) {
    app.config.globalProperties.$foo = this

    app.use(Partita)
  }
}
