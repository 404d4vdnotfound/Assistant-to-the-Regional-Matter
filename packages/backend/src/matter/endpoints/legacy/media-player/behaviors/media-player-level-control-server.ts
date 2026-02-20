import type { MediaPlayerDeviceAttributes } from "@Assistant-to-the-Regional-Matter/common";
import { LevelControlServer } from "../../../../behaviors/level-control-server.js";

export const MediaPlayerLevelControlServer = LevelControlServer({
  getValuePercent: (state) => {
    const attributes = state.attributes as MediaPlayerDeviceAttributes;
    if (attributes.volume_level != null) {
      return attributes.volume_level;
    }
    return 0;
  },
  moveToLevelPercent: (value) => ({
    action: "media_player.volume_set",
    data: { volume_level: value },
  }),
});
