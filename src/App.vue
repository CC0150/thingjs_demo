<template>
  <div class="container">
    <div class="button-panel">
      <ButtonPanel />
    </div>
    <div ref="div3dRef" id="div3d"></div>

    <BaseTooltip ref="tipRef" :content="tipContent" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from 'vue'
import { bootstrapScene, getThingApp } from '@/thing'
import { bindFlagClick } from '@/hooks'
import ButtonPanel from '@/components/ButtonPanel.vue'
import BaseTooltip from '@/components/BaseTooltip.vue'

const div3dRef = ref<HTMLElement | null>(null)

const tipContent = ref('')
const tipRef = useTemplateRef<InstanceType<typeof BaseTooltip>>('tipRef')

/** 顶部弹出提示 */
function showTip(content: string) {
  tipContent.value = content
  tipRef.value?.show()
}

onMounted(async () => {
  if (!div3dRef.value) return

  try {
    await bootstrapScene(div3dRef.value)
    bindFlagClick()

    getThingApp().on(THING.EventType.EnterLevel, '.Building', (ev) => {
      const building = ev?.current ?? ev
      showTip(`已进入建筑：${building?.name ?? '未知建筑'}`)
    })
    getThingApp().on(THING.EventType.EnterLevel, '.Floor', (ev) => {
      const floor = ev?.current ?? ev
      showTip(`已进入楼层：${floor?.name ?? '未知楼层'}`)
    })
  } catch (e) {
    console.error('场景加载失败', e)
  }
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
