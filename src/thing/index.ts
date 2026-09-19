import { SCENE_CONFIG } from './config'

let app: THING.App | null = null

/**
 * 创建 THING.App，重复调用时返回已有实例。
 * 不做这个判断的话，热更新会 new 出第二个 App 抢同一个画布，
 * 表现为画面闪烁、事件触发多次。
 */
export function createThingApp(container: HTMLElement): THING.App {
  if (app) {
    return app
  }

  app = new THING.App({
    container,
    background: SCENE_CONFIG.background,
  })

  return app
}

/** 获取当前 App 实例 */
export function getThingApp(): THING.App {
  if (!app) {
    throw new Error('THING.App 尚未初始化，请先调用 bootstrapScene')
  }

  return app
}

/** 加载场景：登录 → 创建 App → 载入场景 → 切换到园区层级 */
export async function bootstrapScene(container: HTMLElement) {
  // 登录
  try {
    await THING.Utils.login(SCENE_CONFIG.loginUrl)
  } catch (e) {
    console.error('登录失败', e)
  }

  const thingApp = createThingApp(container)

  return thingApp.load({
    url: SCENE_CONFIG.url,
    // 加载完成回调函数
    onComplete: (ev) => {
      // console.log('场景加载完成')
      const campus = ev.campus

      // 切换到园区层级，开启层级
      thingApp.level.change(campus, {
        complete: () => {
          // 层级切换完成后，再设置相机
          thingApp.camera.flyTo({
            position: [162.64985603989814, 29.6774697721321, 181.5000326501234],
            target: [165.04913966800245, 1.500981255502019, 120.6860038796044],
            duration: 1000,
          })
        },
      })
    },
    // 进度回调函数
    onProgress: (progress) => {
      // console.log('加载进度:', (progress * 100).toFixed(2) + '%')
    },
  })
}
