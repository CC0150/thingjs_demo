import { getThingApp } from '@/thing'

/** 设置盒子贴图，返回是否设置成功（盒子不存在时返回 false） */
export default function setImage() {
  const thingApp = getThingApp()
  const box = thingApp.query('box')[0]

  if (!box) {
    return false
  }

  const image = new THING.ImageTexture('https://www.thingjs.com/static/images/avatar.png')
  box.style.image = image

  return true
}

export function resetImage() {
  const thingApp = getThingApp()
  const box = thingApp.query('box')[0]
  if (box) {
    box.style.image = null
  }
}
