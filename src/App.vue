<template>
  <!-- 3D容器 -->
  <div class="container">
    <div class="button-panel">
      <ButtonPanel />
    </div>
    <div ref="div3dRef" id="div3d"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { bootstrapScene } from '@/thing'
import ButtonPanel from '@/components/ButtonPanel.vue'

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

<style>
.container {
  position: relative;
}

.button-panel {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 10;
}

#div3d {
  position: fixed;
  inset: 0;
}
</style>
