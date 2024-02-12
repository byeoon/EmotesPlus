import { FormRow, FormSwitch, FormDivider, View, Button, Text } from 'enmity/components';
import { ColorMap, Navigation, NavigationNative, NavigationStack, React, StyleSheet, Toasts, Clipboard } from "enmity/metro/common";
import { getByProps, bulk, filters } from 'enmity/metro';
import { getIDByName } from 'enmity/api/assets';

const SheetOpen = getByProps("openLazy", "hideActionSheet");

interface EmotesPlusMenuInterface {
  emoteLink: string;
}

const { ThemeColorMap } = ColorMap;

const styles = StyleSheet.createThemedStyleSheet({
  container: {
    backgroundColor: ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,
    flex: 1,
  },
  cardStyle: {
    backgroundColor: ThemeColorMap.BACKGROUND_MOBILE_PRIMARY,
    color: ThemeColorMap.TEXT_NORMAL
  },
  header: {
    backgroundColor: ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,
    shadowColor: "transparent",
    elevation: 0,
  },
  headerTitleContainer: {
    color: ThemeColorMap.HEADER_PRIMARY,
  },
  close: {
    color: ThemeColorMap.HEADER_PRIMARY
  }
});

export default function EmotesPlusInterfaceThing({ EmotesPlusMenuInterface }) {
const buttons = [
  { text: "Test Button", callback: console.log("woah") }
]

return (
  <>
    {buttons.map(({ text, callback }) =>
      <Button
        color='brand'
        text={text}
        size='small'
        onPress={callback}
        style={styles.button}
      />
    )}
  </>
)
}