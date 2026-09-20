import { getThingApp } from '@/thing'
import { flyToLocation } from './useFlyToLocation'
import { reset } from './useReset'

/** 添加图片 Marker */
export default async function addImageMarker() {
  reset()
  const thingApp = getThingApp()
  const car2 = thingApp.query('car2')[0]
  if (!car2) {
    return
  }

  const markerName = car2.name + '_image_marker'

  const existMarker = thingApp.query(markerName)[0]
  if (existMarker) {
    return existMarker
  }

  const locationOptions = {
    position: [199.46499359705732, 4.126382487540652, 138.00024752378835],
    target: [194.94086173328733, 1.0869122752355682, 122.8013453193945],
    time: 1500,
  }

  await flyToLocation(locationOptions)

  const marker = new THING.Marker({
    name: markerName,
    parent: car2,
    localPosition: [0, car2.boundingBox.size[1], 0],
    style: {
      // image: new THING.ImageTexture(new URL('@/assets/images/warning.png', import.meta.url).href),
      image: new URL('@/assets/images/warning.png', import.meta.url).href,
    },
    pivot: [0.5, 0],
    scale: [1, 1, 1],
  })

  return marker
}

/** 重置图片 Marker */
export function resetImageMarker() {
  const thingApp = getThingApp()
  const car2 = thingApp.query('car2')[0]
  const markerName = car2.name + '_image_marker'
  const marker = thingApp.query(markerName)[0]
  if (marker) {
    marker.destroy()
  }
}
