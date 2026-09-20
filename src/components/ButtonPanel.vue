<template>
  <div class="buttons">
    <button @click="toggleChangeColor">
      {{ isColorChanged ? '重置小车颜色' : '改变小车颜色' }}
    </button>
    <button @click="toggleImageMarker">
      {{ isImageMarker ? '移除图片标志' : '添加图片标志' }}
    </button>
    <button @click="toggleLabelMarker">
      {{ isLabelMarker ? '移除标签' : '添加标签' }}
    </button>
    <button @click="toggleHTMLMarker">
      {{ isHTMLMarker ? '移除HTML标志' : '添加HTML标志' }}
    </button>
    <button @click="driveCar">小车行驶</button>
    <button @click="moveCar">小车移动</button>
    <button @click="scaleCar">小车缩放</button>
    <button @click="rotateCar">小车旋转</button>
    <button @click="toggleBox">
      {{ isBoxCreated ? '移除盒子' : '创建盒子' }}
    </button>
    <button @click="toggleImage">
      {{ isImageSet ? '移除盒子图片' : '设置盒子图片' }}
    </button>
    <button @click="toggleOpacity">
      {{ isOpacitySet ? '重置透明度' : '设置透明度' }}
    </button>
    <button @click="changeView">切换视角</button>
    <button @click="togglePlayAnimation">
      {{ isAnimationPlaying ? '重置动画' : '播放动画' }}
    </button>
    <button @click="changeLevelToBuilding">切换到建筑</button>
    <button @click="goBackLevel">返回上一级</button>
    <button @click="resetAll">重置</button>
  </div>

  <!-- 顶部提示气泡，渲染到 body 上 -->
  <BaseTooltip ref="tipRef" :content="tipContent" />
</template>

<script setup lang="ts">
import {
  changeColor,
  addImageMarker,
  addLabelMarker,
  changeLevelToBuilding,
  addHTMLMarker,
  moveCar,
  driveCar,
  resetScene,
  reset,
  playAnimation,
  changeView,
  scaleCar,
  rotateCar,
  createBox,
  setImage,
  setOpacity,
  goBackLevel,
  resetColor,
} from '@/hooks'
import { resetHTMLMarker } from '@/hooks/useAddHTMLMarker'
import { resetImageMarker } from '@/hooks/useAddImageMarker'
import { resetLabelMarker } from '@/hooks/useAddLabelMarker'
import { resetBox } from '@/hooks/useCreateBox'
import { resetImage } from '@/hooks/useSetImage'
import BaseTooltip from '@/components/BaseTooltip.vue'
import { ref, useTemplateRef } from 'vue'
import { resetOpacity } from '@/hooks/useSetOpacity'

const isColorChanged = ref(false)
const isAnimationPlaying = ref(false)
const isImageMarker = ref(false)
const isLabelMarker = ref(false)
const isHTMLMarker = ref(false)
const isOpacitySet = ref(false)
const isBoxCreated = ref(false)
/** 盒子当前是否已设置图片 */
const isImageSet = ref(false)

/** 顶部提示气泡的内容 */
const tipContent = ref('')
const tipRef = useTemplateRef<InstanceType<typeof BaseTooltip>>('tipRef')

/** 切换小车颜色 */
function toggleChangeColor() {
  if (!isColorChanged.value) {
    changeColor('red')
    isColorChanged.value = true
  } else {
    resetColor()
    isColorChanged.value = false
  }
}

/** 切换动画播放 */
function togglePlayAnimation() {
  if (!isAnimationPlaying.value) {
    playAnimation()
    isAnimationPlaying.value = true
  } else {
    reset()
    isAnimationPlaying.value = false
  }
}

/** 添加/移除图片标志 */
function toggleImageMarker() {
  if (!isImageMarker.value) {
    addImageMarker()
    isImageMarker.value = true
  } else {
    resetImageMarker()
    isImageMarker.value = false
  }
}

/** 添加/移除标签 */
function toggleLabelMarker() {
  if (!isLabelMarker.value) {
    addLabelMarker()
    isLabelMarker.value = true
  } else {
    resetLabelMarker()
    isLabelMarker.value = false
  }
}

/** 添加/移除HTML标志 */
function toggleHTMLMarker() {
  if (!isHTMLMarker.value) {
    addHTMLMarker()
    isHTMLMarker.value = true
  } else {
    resetHTMLMarker()
    isHTMLMarker.value = false
  }
}

/** 设置/恢复透明度 */
function toggleOpacity() {
  if (!isOpacitySet.value) {
    setOpacity(0.5)
    isOpacitySet.value = true
  } else {
    resetOpacity()
    isOpacitySet.value = false
  }
}

/** 创建/删除盒子 */
function toggleBox() {
  if (!isBoxCreated.value) {
    createBox()
    isBoxCreated.value = true
  } else {
    resetBox()
    resetImage()
    isBoxCreated.value = false
    isImageSet.value = false
  }
}

/** 设置/移除盒子图片，盒子不存在时提示 */
function toggleImage() {
  if (isImageSet.value) {
    resetImage()
    isImageSet.value = false
    return
  }

  if (!setImage()) {
    showTip('请先创建盒子，再设置图片')
    return
  }

  isImageSet.value = true
}

/** 在屏幕顶部弹出提示，3 秒后自动消失 */
function showTip(content: string) {
  tipContent.value = content
  tipRef.value?.show()
}

/** 统一重置所有状态 */
function resetAll() {
  resetScene()

  isColorChanged.value = false
  isAnimationPlaying.value = false
  isImageMarker.value = false
  isLabelMarker.value = false
  isHTMLMarker.value = false
  isOpacitySet.value = false
  isBoxCreated.value = false
  isImageSet.value = false
}
</script>

<style scoped>
.buttons {
  width: 200px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    height: 30px;
    border: 2px solid #ccc;
    border-radius: 5px;

    background-color: transparent;
    color: #fff;
    cursor: pointer;
  }

  button:hover {
    background-color: #fff;
    color: #000;
  }
}
</style>
