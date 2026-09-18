import { getThingApp } from '@/thing'

export default function setImage() {
  const thingApp = getThingApp()
  const box = thingApp.query('box')[0]

  const image = new THING.ImageTexture('https://www.thingjs.com/static/images/avatar.png')

  if (box) {
    box.style.image = image
  }
}

export function resetImage() {
  const thingApp = getThingApp()
  const box = thingApp.query('box')[0]
  if (box) {
    box.style.image = null
  }
}
