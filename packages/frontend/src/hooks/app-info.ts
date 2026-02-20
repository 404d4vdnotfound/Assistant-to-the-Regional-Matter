import { useMemo } from "react";
import packageJson from "../../../../apps/Assistant-to-the-Regional-Matter/package.json";

export interface AppInfo {
  name: string;
  version: string;
}

export function useAppInfo(): AppInfo {
  return useMemo(
    () => ({ name: packageJson.name, version: __APP_VERSION__ }),
    [],
  );
}
