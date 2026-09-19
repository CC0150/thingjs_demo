<template>
  <!-- 3D容器 -->
  <div class="container">
    <div class="buttons">
      <button @click="changeColor">改变小车颜色</button>
      <button @click="addImageMarker">小车添加图片标志</button>
      <button @click="addLabelMarker">小车添加标签</button>
      <button @click="driveCar">小车行驶</button>
      <button @click="scaleCar">小车缩放</button>
      <button @click="rotateCar">小车旋转</button>
      <button @click="createBox">创建盒子</button>
      <button @click="setImage">设置盒子图片</button>
      <button @click="setOpacity(0.5)">设置盒子透明度</button>
      <button @click="playAnimation">播放动画</button>
      <button @click="drawLine">绘制线段</button>
      <button @click="reset">重置场景</button>
    </div>
    <div ref="div3dRef" id="div3d"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { bootstrapScene } from '@/thing'
import {
  changeColor,
  addLabelMarker,
  addImageMarker,
  driveCar,
  reset,
  playAnimation,
  scaleCar,
  rotateCar,
  createBox,
  setImage,
  setOpacity,
  drawLine,
} from '@/hooks'

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

.buttons {
  position: absolute;
  width: 200px;
  right: 10px;
  top: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 10px;
  z-index: 10;
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

#div3d {
  position: fixed;
  inset: 0;
}
</style>
