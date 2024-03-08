import { bulk, filters } from "enmity/metro";

export const [PermissionsStore, EmoteUploader] = bulk(
  filters.byProps("can", "_dispatcher"),
  filters.byProps("uploadEmoji")
);
