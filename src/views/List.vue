<template>
  <PtView class="ViewContents">
    <PtStatusbar />

    <PtTitlebar>
      <template #left>
        <PtTitlebarBackButton />
      </template>
      <template #center>List</template>
    </PtTitlebar>

    <PtViewContent :pull-to-refresh="refresh" :infinite-scroll="loadmore">
      <template v-if="loaded">
        <template v-for="(item, index) in items" :key="index">
          <p>{{ index }}: {{ item }}</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tempore possimus repellendus vero reprehenderit quae voluptatem optio, suscipit aut dolore aperiam, in blanditiis a quisquam doloribus. Tenetur sequi maiores eveniet?</p>
        </template>

        <template v-if="noMore">No more.</template>
        <template v-else>Loading more&hellip;</template>
      </template>

      <template v-else>Loading&hellip;</template>
    </PtViewContent>
  </PtView>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const loaded = ref(false)
const noMore = ref(false)
const items = ref<string[]>([])
const curPage = ref(1)
const perPage = ref(10)

const load = (): Promise<void> => {
  loaded.value = false
  return loader()
    .finally(() => {
      loaded.value = true
    })
}

const loader = (): Promise<void> => {
  return fetch()
}

const fetch = async (page: number = 1): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 1e3))

  const data = page < 4 ? ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii', 'jjj'] : ['xxx', 'yyy', 'zzz']

  curPage.value = page
  if (page === 1) {
    items.value.splice(0, items.value.length, ...data)
  } else {
    items.value.push(...data)
  }
  noMore.value = data.length < perPage.value
}

const refresh = (): Promise<void> => {
  return fetch()
}

const loadmore = (): Promise<void> => {
  return !noMore.value ? fetch(curPage.value + 1) : Promise.resolve()
}

onMounted(() => {
  load()
})
</script>
