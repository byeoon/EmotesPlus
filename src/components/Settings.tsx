import { FormRow, View, ScrollView, Text, FormSwitch } from 'enmity/components'
import { SettingsStore } from 'enmity/api/settings';
import { Constants, React, StyleSheet } from 'enmity/metro/common'
import manifest from '../../manifest.json';

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
      tab: {
         fontSize: 14,
         paddingTop: 20,
         paddingLeft: 20,
         paddingRight: 25,
         color: Constants.ThemeColorMap.HEADER_SECONDARY,
      }
   })
   return (
      <ScrollView>
         <View style={styles.title}>
            <Text style={styles.pluginTitle}>EmotesPlus</Text>
            <Text style={styles.pluginAuthor}>Developed by byron</Text>
            <Text style={styles.pluginAuthor}>Version {manifest.version}</Text>
            <Text style={styles.br}> </Text>

            <Text style={styles.tab}>Settings</Text>
         </View>

         <FormRow
            label='Example Setting'
            trailing={
               <FormSwitch
                  value={settings.get('newUISupport', true)}
                  onValueChange={() => settings.toggle('newUISupport', true)}
               />
            }
         />
         <Text style={styles.pluginAuthor}>Changelog: {manifest.changelog}</Text>

      </ScrollView>
   )
};