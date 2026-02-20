import type { BridgeDataWithMetadata } from "@Assistant-to-the-Regional-Matter/common";
import type { AsyncState } from "../utils/async.ts";

export interface BridgeState {
  items: AsyncState<BridgeDataWithMetadata[]>;
}
