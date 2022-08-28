import { contextBridge } from "electron";
import settings, { Colors } from './utils/settings';

// Read more about contextBridge: https://github.com/reZach/secure-electron-template/blob/master/docs/newtoelectron.md

contextBridge.exposeInMainWorld('settings', {
  colors: (): Colors => {
    return settings.get('colors');
  }
});

