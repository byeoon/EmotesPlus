import { FormRow, View, ScrollView, Text, FormSwitch, Image, FormDivider } from "enmity/components";
import { SettingsStore } from "enmity/api/settings";
import { Constants, React, StyleSheet, Toasts } from "enmity/metro/common";
import { getByProps } from "enmity/metro";
import { Linking } from "enmity/metro/common";
import manifest from "../../manifest.json";

async function checkUpdate()
{
  const resp = await fetch("https://raw.githubusercontent.com/byeoon/EmotesPlus/main/version.json");
  const content = await resp.json();
  return content.version;
}

function versionHandler() {
  const [version, setVersion] = React.useState<string>();

  React.useEffect(() => {
      checkUpdate().then(setVersion); 
  }, []); 

  return version
}

interface SettingsProps {
  settings: SettingsStore;
}

// settings style inspired by mafu
export default ({ settings }: SettingsProps) => {
  const styles = StyleSheet.createThemedStyleSheet({
    title: {
      flexDirection: "column",
    },
    itiswhatitis: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    pluginTitle: {
      fontSize: 32,
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 30,
      color: Constants.ThemeColorMap.HEADER_PRIMARY,
    },
    pluginAuthor: {
      fontSize: 12,
      paddingLeft: 20,
      paddingRight: 30,
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
      width: 72,
      height: 72,
      marginTop: 10,
      marginLeft: 20,
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
      <View style={styles.itiswhatitis}>
        <Image source={{ uri: "https://avatars.githubusercontent.com/u/47872200?v=4", }} style={styles.img} />
        <View style={styles.title}>
          <Text style={styles.pluginTitle}>EmotesPlus</Text>
          <Text style={styles.pluginAuthor}>Developed by byeoon</Text>
          <Text style={styles.pluginAuthor}> Version {manifest.version} | Remote Version: {versionHandler()}</Text>
          <Text style={styles.br}> </Text>
        </View>
      </View>
      <Text style={styles.tab}>Settings</Text>

      <FormRow
        label="Copy Emotes as Hyperlink"
        trailing={
          <FormSwitch
            value={settings.getBoolean("copyAsHyperlink", true)}
            onValueChange={() => settings.toggle("copyAsHyperlink", true)}
          />
        }
      />
       <FormDivider />
      <FormRow
          label="Open GitHub Repository"
          icon="ic_arrow_right"
          onPress={() => Linking.openURL("https://github.com/byeoon/EmotesPlus")}
      />
      <Text style={styles.tab}>Changelog: </Text>
      <Text style={styles.pluginAuthor}> {manifest.changelog} </Text>
    </ScrollView>
  );
};
