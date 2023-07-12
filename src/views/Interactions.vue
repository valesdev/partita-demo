<template>
  <PtView class="ViewLogin">
    <PtStatusbar />

    <PtTitlebar>
      <template #left>
        <PtTitlebarBackButton />
      </template>
      <template #center>Interactions</template>
    </PtTitlebar>

    <PtViewContent>
      <p>Page “Interactions” goes here.</p>
      <p>
        <a href="javascript:void(0);" @click="dialogAlert()">$dialog.alert()</a>
      </p>
      <p>
        <a href="javascript:void(0);" @click="dialogAlertWithLongContent()">$dialog.alert() with long content</a>
      </p>
      <p>
        <a href="javascript:void(0);" @click="dialogConfirm()">$dialog.confirm()</a>
      </p>
      <p>
        <a href="javascript:void(0);" @click="dialogConfirmWithExtra()">$dialog.confirm() with extra component</a>
      </p>
      <p>
        <a href="javascript:void(0);" @click="toast()">$toast.show()</a>
      </p>
      <p>
        <a href="javascript:void(0);" @click="toastWithCustom()">$toast.show() with custom component</a>
      </p>
      <p>
        <a href="javascript:void(0);" @click="toast3times()">$toast.show() 3 times</a>
      </p>
      <p>
        <a href="javascript:void(0);" @click="loadingShow()">$loading.show()</a>
      </p>
      <p>
        <a href="javascript:void(0);" @click="loadingShowWithContent()">$loading.show() with content</a>
      </p>
      <p>
        <a href="javascript:void(0);" @click="loadingShowWithCustom()">$loading.show() with custom component</a>
      </p>
      <p>
        <a href="javascript:void(0);" @click="loadingShow3times()">$loading.show() 3 times</a>
      </p>
      <PtHomeIndicator />
    </PtViewContent>
  </PtView>
</template>

<script setup lang="ts">
import { DialogModule, ToastModule, LoadingModule } from 'partita'

import MyDialogInputComponent from '@/components/MyDialogInputComponent.vue'
import MyToastComponent from '@/components/MyToastComponent.vue'
import MyPtLoadingAltComponent from '@/components/MyPtLoadingAltComponent.vue'

const dialogAlert = () => {
  DialogModule.alert('The content goes here.', 'The Title Goes Here')
    .then(value => {
      window.console.info('alert()', 'value:', value)
      ToastModule.show('value: ' + JSON.stringify(value))
    })
}

const dialogAlertWithLongContent = () => {
  DialogModule.alert('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, quo omnis! Cum, sapiente. Obcaecati sequi consequuntur voluptas minus unde eligendi aliquid. Consequatur ex sequi facere consectetur eum beatae minima obcaecati!\n\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, quia tempore aliquid nostrum tempora nesciunt id cum dolor perferendis culpa accusantium possimus ut beatae, eligendi quidem cupiditate ipsam voluptatem repudiandae.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempora repudiandae voluptate alias perferendis consectetur neque, beatae inventore quibusdam officiis, sapiente reiciendis facere temporibus eum placeat eos. Labore, ratione doloremque.\n\nLorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ut aspernatur aliquid quas impedit veritatis quos perferendis soluta molestias. Doloribus libero aspernatur dolorum sed sit laboriosam est, deleniti adipisci voluptates?\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maiores perspiciatis amet, fugiat porro tenetur placeat quia sint inventore minima aspernatur accusantium illo ad dolorum architecto, debitis aut exercitationem vitae!', 'The Title Goes Here')
}

const dialogConfirm = () => {
  DialogModule.confirm('The content goes here.', 'The Title Goes Here')
    .then(value => {
      window.console.info('confirm()', 'value:', value)
      ToastModule.show('value: ' + JSON.stringify(value))
    })
}

const dialogConfirmWithExtra = () => {
  const formState = {
    foo: ''
  }

  DialogModule.confirm('The content goes here.', 'The Title Goes Here', {
    extraComponent: {
      is: MyDialogInputComponent,
      props: {
        formState
      }
    },
    buttons: [
      { value: false, label: 'Give up' },
      { value: true, label: 'Go!', highlighted: true }
    ]
  })
    .then(value => {
      if (!value) return

      ToastModule.show('formState: ' + JSON.stringify(formState))
    })
}

const toast = () => {
  ToastModule.show('The content goes here.')
}

const toastWithCustom = () => {
  ToastModule.show('The content goes here.', {
    component: MyToastComponent
  })
}

const toast3times = () => {
  ToastModule.show('1st toast goes here.')

  window.setTimeout(() => {
    ToastModule.show('2nd toast goes here.')
  }, 500)

  window.setTimeout(() => {
    ToastModule.show('3rd toast goes here.')
  }, 1000)
}

const loadingShow = () => {
  LoadingModule.show()

  window.setTimeout(() => {
    LoadingModule.hide()
  }, 2000)
}

const loadingShowWithContent = () => {
  LoadingModule.show('Fetching…')

  window.setTimeout(() => {
    LoadingModule.hide('Fetching…')
  }, 2000)
}

const loadingShowWithCustom = () => {
  LoadingModule.show('Fetching…', {
    component: MyPtLoadingAltComponent
  })

  window.setTimeout(() => {
    LoadingModule.hide('Fetching…')
  }, 2000)
}

const loadingShow3times = () => {
  LoadingModule.show('Fetching 1st')

  window.setTimeout(() => {
    LoadingModule.show('Fetching 2nd')
  }, 500)

  window.setTimeout(() => {
    LoadingModule.show('Fetching 3rd')
  }, 1000)

  window.setTimeout(() => {
    LoadingModule.hide('Fetching 3rd')
  }, 2000)

  window.setTimeout(() => {
    LoadingModule.hide('Fetching 2nd')
  }, 2500)

  window.setTimeout(() => {
    LoadingModule.hide('Fetching 1st')
  }, 3000)
}
</script>
