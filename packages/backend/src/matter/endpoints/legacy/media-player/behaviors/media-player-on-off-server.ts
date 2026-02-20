import type {
  HomeAssistantEntityState,
  MediaPlayerDeviceAttributes,
} from "@Assistant-to-the-Regional-Matter/common";
import { OnOffServer } from "../../../../behaviors/on-off-server.js";

export const MediaPlayerOnOffServer = OnOffServer({
  isOn: (state: HomeAssistantEntityState<MediaPlayerDeviceAttributes>) => {
    return !state.attributes.is_volume_muted;
  },
  turnOn: () => ({
    action: "media_player.volume_mute",
    data: { is_volume_muted: false },
  }),
  turnOff: () => ({
    action: "media_player.volume_mute",
    data: { is_volume_muted: true },
  }),
}).with();
