import { FormRow, FormSwitch, FormDivider, View, Button, Text } from 'enmity/components';
import { ColorMap, Navigation, NavigationNative, NavigationStack, React, StyleSheet, Toasts, Clipboard } from "enmity/metro/common";
import { getIDByName } from 'enmity/api/assets';

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