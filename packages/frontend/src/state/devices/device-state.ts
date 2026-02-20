import type { EndpointData } from "@Assistant-to-the-Regional-Matter/common";
import type { AsyncState } from "../utils/async.ts";

export interface DeviceState {
  byBridge: { [bridge: string]: AsyncState<EndpointData> | undefined };
}
