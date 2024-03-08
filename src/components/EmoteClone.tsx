import { bulk, filters } from "enmity/metro";

export const [GuildsStore, PermissionsStore, EmoteUploader, GuildIcons,] = bulk(
  filters.byProps("getGuilds"),
  filters.byProps("can", "_dispatcher"),
  filters.byProps("uploadEmoji"),
  filters.byProps("GuildIconSizes")
);
