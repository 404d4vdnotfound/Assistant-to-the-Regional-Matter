import type { EndpointData } from "@Assistant-to-the-Regional-Matter/common";
import { type AppState, createAppSelector } from "../types.ts";
import type { AsyncState } from "../utils/async.ts";

export const selectDeviceState = (state: AppState) => state.devices;

export const selectDevices = (bridgeId: string) =>
  createAppSelector(
    [selectDeviceState],
    (bridgeState): AsyncState<EndpointData> =>
      bridgeState.byBridge[bridgeId] ?? {
        isInitialized: false,
        isLoading: false,
      },
  );
