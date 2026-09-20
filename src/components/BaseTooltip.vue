<template>
  <Teleport to="body">
    <transition name="popup">
      <div v-if="visible" class="popup" role="alert">{{ content }}</div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    /** 提示文案 */
    content: string
    /** 自动消失时间，单位毫秒 */
    duration?: number
  }>(),
  {
    duration: 3000,
  },
)

const visible = ref(false)
let timer: number | undefined

/** 打开提示，重复调用会以最后一次的时间重新计时 */
function show() {
  clearTimeout(timer)
  visible.value = true
  timer = setTimeout(hide, props.duration)
}

function hide() {
  clearTimeout(timer)
  visible.value = false
}

defineExpose({ show, hide })
</script>

<style scoped>
.popup {
  position: fixed;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 80vw;

  padding: 10px 20px;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 14px;
  line-height: 1.5;

  pointer-events: none;
  z-index: 100;
}

.popup-enter-active,
.popup-leave-active {
  transition:
    opacity 0.25s,
    transform 0.25s;
}

.popup-enter-from,
.popup-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-16px);
}
</style>
