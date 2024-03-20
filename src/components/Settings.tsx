import { FormRow, View, ScrollView, Text, FormSwitch, Image } from "enmity/components";
import { SettingsStore } from "enmity/api/settings";
import { Constants, React, StyleSheet } from "enmity/metro/common";
import { getByProps } from "enmity/metro";
import { Linking } from "enmity/metro/common";
import manifest from "../../manifest.json";


const currentVersion = "https://raw.githubusercontent.com/byeoon/EmotesPlus/main/version.json";
const Clipboard = getByProps("setString");
const { default: Button } = getByProps("ButtonColors", "ButtonSizes");

interface SettingsProps {
  settings: SettingsStore;
}

export default ({ settings }: SettingsProps) => {
  const styles = StyleSheet.createThemedStyleSheet({
    title: {
      flexDirection: "column",
    },

    pluginTitle: {
      fontSize: 30,
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 30,
      color: Constants.ThemeColorMap.HEADER_PRIMARY,
    },
    pluginAuthor: {
      fontSize: 12,
      paddingLeft: 45,
      color: Constants.ThemeColorMap.HEADER_SECONDARY,
    },
    br: {
      fontSize: 0,
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 30,
      color: Constants.ThemeColorMap.HEADER_SECONDARY,
    },
    img: {
      width: 64,
      height: 64,
      marginTop: 20,
      marginLeft: 20,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    tab: {
      fontSize: 14,
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 25,
      color: Constants.ThemeColorMap.HEADER_SECONDARY,
    },
  });
  return (
    <ScrollView>
      <View style={styles.title}>
      <Image source={{uri: 'https://avatars.githubusercontent.com/u/47872200?v=4'}} style={styles.img} />
        <Text style={styles.pluginTitle}>EmotesPlus</Text>
        <Text style={styles.pluginAuthor}>Developed by byron</Text>
        <Text style={styles.pluginAuthor}>Version {manifest.version} | Remote Version: {currentVersion}</Text>
        <Text style={styles.br}> </Text>

      <Text style={styles.tab}>Settings</Text>
      </View>
       <FormRow
        label="Copy Emotes as Hyperlink"
        trailing={
          <FormSwitch
            value={settings.getBoolean("copyAsHyperlink", true)}
            onValueChange={() => settings.toggle("copyAsHyperlink", true)}
          />
        }
      />

<Text style={styles.br}> </Text>


        <Text style={styles.br}> </Text>

        <Button
        color={Button.Colors.BRAND}
        text={"Visit GitHub Repository"}
        size={Button.Sizes.SMALL}
        onPress={() => {
         Linking.openURL("https://github.com/byeoon/EmotesPlus");
        }}
      />
        <Text style={styles.br}> </Text>
        <Text style={styles.br}> </Text>

      <Text style={styles.pluginAuthor}>Changelog: {manifest.changelog}</Text>
    </ScrollView>
  );
};
