<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { bootstrapScene } from '@/thing'

// 3D 容器，始终由 App.vue 持有，不随页面切换销毁
const div3dRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!div3dRef.value) {
    return
  }

  bootstrapScene(div3dRef.value).catch((e) => {
    console.error('场景加载失败', e)
  })
})
</script>

<template>
  <!-- 3D容器 -->
  <div ref="div3dRef" id="div3d"></div>
</template>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#div3d {
  position: fixed;
  inset: 0;
}
</style>
