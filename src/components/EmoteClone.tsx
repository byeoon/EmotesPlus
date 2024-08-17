import { bulk, filters } from "enmity/metro";

export const [GuildsStore, PermissionsStore, EmoteUploader, downloadMediaAsset] = bulk(
  filters.byProps("getGuilds"),
  filters.byProps("can", "_dispatcher"),
  filters.byProps("uploadEmoji"),
  filters.byProps("downloadMediaAsset")
);