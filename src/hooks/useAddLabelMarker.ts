import { getThingApp } from '@/thing'
import { flyToLocation } from './useFlyToLocation'

export default async function addLabelMarker() {
  const thingApp = getThingApp()
  const car1 = thingApp.query('car1')[0]

  const existLabelMarker = thingApp.query('labelMarker')[0]
  if (existLabelMarker) {
    return existLabelMarker
  }

  const locationOptions = {
    position: [178.30334224832973, 4.471155791647281, 139.72483518099574],
    target: [178.3903330554304, 1.1757204358710243, 132.0188128075707],
    time: 1500,
  }

  await flyToLocation(locationOptions)

  const labelMarker = new THING.Label({
    name: 'labelMarker',
    parent: car1,
    fontText: '这是一个标签',
    fontSize: 24,
    localPosition: [0, car1.boundingBox.size[1] + 1, 0], // boundingBox.size[width, height, depth] 用于获取物体的尺寸(分别对应X,Y,Z)
    style: {
      color: 'red',
    },
    renderType: THING.RenderType.Plane,
  })
  return labelMarker
}

export function resetLabelMarker() {
  const thingApp = getThingApp()
  const labelMarker = thingApp.query('labelMarker')[0]
  if (labelMarker) {
    labelMarker.destroy()
  }
}
