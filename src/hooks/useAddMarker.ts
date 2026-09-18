import { getThingApp } from '@/thing'
import { flyToLocation } from './useFlyToLocation'

/** 添加图片 Marker */
export default async function addImageMarker() {
  const thingApp = getThingApp()
  const car3 = thingApp.query('car3')[0]

  const markerName = car3.name + '_image_marker'

  const existMarker = thingApp.query(markerName)[0]
  if (existMarker) {
    return existMarker
  }

  const locationOptions = {
    position: [204.0637667426916, 3.039460394188695, 136.8487308838883],
    target: [199.78687551321588, 0.1660950978845783, 122.48043802836956],
    time: 1500,
  }

  await flyToLocation(locationOptions)

  const marker = new THING.Marker({
    name: markerName,
    parent: car3,
    localPosition: [0, car3.boundingBox.size[1], 0],
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
  const car3 = thingApp.query('car3')[0]
  const markerName = car3.name + '_image_marker'
  const marker = thingApp.query(markerName)[0]
  if (marker) {
    marker.destroy()
  }
}
