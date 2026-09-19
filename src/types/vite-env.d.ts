/// <reference types="vite/client" />

import { ComponentCustomProperties } from 'vue';

declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'vue' {
  interface ComponentCustomProperties {
    hasPerm: function; // 这里填类型
  }
}
// 必须导出，才能在其他文件中使用
export default ComponentCustomProperties;

type IStringTypes = 'tenantCode' | 'appApi' | 'wsApi' | 'previewModelUrl' | 'previewSceneURL' | 'downloadUrl' | 'previewUrl' | 'previewEffectUrl';
type IConfigTypes<T extends keyof any, K = string> = {
  [P in T]: K;
};
declare interface Window {
  config: IConfigTypes<IStringTypes> & {
    microPath: IConfigTypes<'setting' | 'model' | 'developPlatform' | 'developPlatform_publicPath'>;
  } & IConfigTypes<'unifiedAuth', boolean>;
}

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string; //定义提示信息 数据是只读的无法被修改
}
