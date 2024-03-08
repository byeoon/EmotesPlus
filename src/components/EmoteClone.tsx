import { bulk, filters } from "enmity/metro";

export const [GuildStore, PermissionsStore, EmoteUploader] = bulk(
  filters.byProps("getGuilds"),
  filters.byProps("can", "_dispatcher"),
  filters.byProps("uploadEmoji")
);
