import { getThingApp } from '@/thing'
import { flyToLocation } from './useFlyToLocation'

export default async function addHTMLMarker() {
  const thingApp = getThingApp()
  const car3 = thingApp.query('car3')[0]
  if (!car3) {
    return
  }

  const existingHTMLMarker = thingApp.query('htmlMarker')[0]
  if (existingHTMLMarker) {
    existingHTMLMarker.destroy()
  }

  const locationOptions = {
    position: [204.0637667426916, 3.039460394188695, 136.8487308838883],
    target: [199.78687551321588, 0.1660950978845783, 122.48043802836956],
    time: 1500,
  }

  await flyToLocation(locationOptions)

  const element = document.createElement('div')
  const carImage1 = new URL('@/assets/images/car1.png', import.meta.url).href
  const carImage2 = new URL('@/assets/images/car2.png', import.meta.url).href

  const objectName = car3.name
  const objectID = car3.id

  element.innerHTML = `
<div style="display:flex; flex-direction:column;
            align-items:center; justify-content:center;
            box-sizing:border-box;
            background:rgba(0,0,0,0.6); padding:8px 10px; border-radius:4px;
            white-space:nowrap; cursor:pointer;">
  <img id="marker-img" src="${carImage1}"
       style="width:20px; height:20px; margin-bottom:6px; display:block; flex-shrink:0;" />
  <div style="color:#fff; font-size:14px; line-height:20px; white-space:nowrap;">物体编号：${objectID}</div>
  <div style="color:#fff; font-size:14px; line-height:20px; white-space:nowrap;">物体名称：${objectName}</div>
</div>
`

  // 记录当前显示的是第几张图
  let isFirstImg = true

  const htmlMarker = new THING.HTMLMarker({
    name: 'htmlMarker',
    parent: car3,
    element,
    localPosition: [0, car3.boundingBox.size[1], 0],
    pivot: [0.5, 0],
    offset: [0, 0.5, 0], // 相对父对象的偏移量，用于调整HTML标志的位置
    renderType: THING.RenderType.Plane, // 平面渲染，标签不会随视角旋转
    // renderType: THING.RenderType.Sprite, // 标签会随视角旋转
  }).on('click', () => {
    // 切换图片
    const img = element.querySelector('#marker-img')
    if (!img) return
    isFirstImg = !isFirstImg
    img.src = isFirstImg ? carImage1 : carImage2
  })

  return htmlMarker
}

export function resetHTMLMarker() {
  const thingApp = getThingApp()
  const htmlMarker = thingApp.query('htmlMarker')[0]
  if (htmlMarker) {
    htmlMarker.destroy()
  }
}
