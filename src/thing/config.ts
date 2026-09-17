/** 应用配置。后续扩展多园区/多场景时在这里加即可，避免全局搜索硬编码的路径。 */
export const SCENE_CONFIG = {
  /** 登录地址 */
  loginUrl: 'https://www.thingjs.org.cn/auth/login',
  /** 场景路径，相对于 public 目录 */
  url: '/scene/',
  /**
   * 场景背景色。
   * 注意：必须写 6 位十六进制（或 rgb()）。ThingJS 不做 3 位简写展开，
   * 它直接 parseInt('#ccc'.substr(1), 16) = 0x000CCC，会解析成蓝色。
   */
  background: '#cccccc',
}
