import { FormRow, FormSwitch, FormDivider, View, Button, Text } from 'enmity/components';
import { ColorMap, Navigation, NavigationNative, NavigationStack, React, StyleSheet, Toasts, Clipboard } from "enmity/metro/common";
import { getByProps, bulk, filters } from 'enmity/metro';
const SheetOpen = getByProps("openLazy", "hideActionSheet");

interface  EmotesProps {
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
    color: ThemeColorMap.TEXT_NORMAL,
    marginLeft: 0,
		marginTop: 16
  },
  header: {
    backgroundColor: ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,
    shadowColor: "transparent",
    elevation: 0,
  },
  headerTitleContainer: {
    color: ThemeColorMap.HEADER_PRIMARY,
  },

  button: { 
    marginTop: 16
  }

})

export default function EmotesSheet({ Emotesprops }) {
const buttons = [
  { text: "Test Button", callback: console.log("hello") }
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