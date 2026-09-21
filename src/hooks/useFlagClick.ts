import { getThingApp } from '@/thing'

/** 点击 flag 时依次轮换的颜色 */
const COLORS = ['orange', 'lightblue', 'purple']

/** 当前颜色下标，-1 表示还没被点击改过色 */
let colorIndex = -1

/**
 * 给 flag 绑定点击改色
 */
export function bindFlagClick() {
  // 防止热更新时重复绑定
  unbindFlagClick()

  const flag = getThingApp().query('flag')[0]
  if (!flag) return

  flag.on(
    'click',
    () => {
      colorIndex = (colorIndex + 1) % COLORS.length
      getThingApp().query('flagLabel')[0]?.destroy()

      flag.style.color = COLORS[colorIndex]!

      new THING.Label({
        name: 'flagLabel',
        parent: flag,
        fontText: `当前颜色：${COLORS[colorIndex]}`,
        fontSize: 24,
        fontColor: COLORS[colorIndex],
        localPosition: [0, flag.boundingBox.size[1] / 2 + 2, 0],
        renderType: THING.RenderType.Plane,
      })
    },
    'flagClickChangeColor',
  )
}

/** 解绑点击改色 */
export function unbindFlagClick() {
  getThingApp().query('flag')[0]?.off('click', null, 'flagClickChangeColor')
}

/** 重置颜色下标，下次点击重新从第一个颜色开始 */
export function resetFlagClick() {
  colorIndex = -1

  const flag = getThingApp().query('flag')[0]
  if (flag) {
    flag.style.color = null
  }

  getThingApp().query('flagLabel')[0]?.destroy()
}
