<template>
  <div class="buttons">
    <button @click="toggleChangeColor">
      {{ isColorChanged ? '重置小车颜色' : '改变小车颜色' }}
    </button>
    <button @click="addImageMarker">小车添加图片标志</button>
    <button @click="addLabelMarker">小车添加标签</button>
    <button @click="addHTMLMarker">小车添加HTML标志</button>
    <button @click="driveCar">小车行驶</button>
    <button @click="moveCar">小车移动</button>
    <button @click="scaleCar">小车缩放</button>
    <button @click="rotateCar">小车旋转</button>
    <button @click="createBox">创建盒子</button>
    <button @click="setImage">设置盒子图片</button>
    <button @click="setOpacity(0.5)">设置透明度</button>
    <button @click="changeView">切换视角</button>
    <button @click="playAnimation">播放动画</button>
    <button @click="changeLevelToBuilding">切换到建筑</button>
    <button @click="goBackLevel">返回上一级</button>
    <button @click="drawLine">绘制线段</button>
    <button @click="reset">重置场景</button>
  </div>
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
  reset,
  playAnimation,
  changeView,
  scaleCar,
  rotateCar,
  createBox,
  setImage,
  setOpacity,
  drawLine,
  goBackLevel,
  resetColor,
} from '@/hooks'
import { ref } from 'vue'

const isColorChanged = ref(false)

function toggleChangeColor() {
  if (!isColorChanged.value) {
    changeColor('red')
    isColorChanged.value = true
  } else {
    resetColor()
    isColorChanged.value = false
  }
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
