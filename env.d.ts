/// <reference types="vite/client" />

/** ThingJS App 实例。官方未提供类型定义，这里只声明用到的部分。 */
interface ThingApp {
  camera: ThingCamera
  background: string
  load(options: {
    /** 场景路径 */
    url: string
    /** 加载完成回调 */
    onComplete?: (ev: { campus: unknown }) => void
    /** 进度回调，0 ~ 1 */
    onProgress?: (progress: number) => void
  }): Promise<unknown>
  level: { change(level: unknown): void }
  destroy(): void
}

/** 由 thing.min.js 注入的全局对象 */
declare const THING: {
  App: new (options: { container?: HTMLElement; background?: string }) => ThingApp
  Utils: { login(url: string): Promise<unknown> }
}
