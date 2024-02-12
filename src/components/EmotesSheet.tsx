import { FormRow, FormSwitch, FormDivider, View, Button, Text } from 'enmity/components';
import { ColorMap, Navigation, NavigationNative, NavigationStack, React, StyleSheet, Toasts, Clipboard } from "enmity/metro/common";
import { getByProps, bulk, filters } from 'enmity/metro';
import { getIDByName } from 'enmity/api/assets';

const SheetOpen = getByProps("openLazy", "hideActionSheet");

interface EmotesProps{
  emoteLink: string
  type: string
}

const { ThemeColorMap } = ColorMap;

const styles = StyleSheet.createThemedStyleSheet({
  container: {
    backgroundColor: ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,
    flex: 1,
  },
  divider: {
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
  },

  button: { 
    marginTop: 16
  }

});

export default function EmotesPlusInterfaceThing({ Emotesprops }) {
const buttons = [
  { text: "Test Button", callback: console.log("woah") }
]

return (
  <>
  <FormDivider style={styles.divider} />
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