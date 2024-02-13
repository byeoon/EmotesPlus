import { FormRow, View, ScrollView, Text, FormSwitch } from 'enmity/components'
import { SettingsStore } from 'enmity/api/settings';
import { Constants, React, StyleSheet } from 'enmity/metro/common'

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
            <Text style={styles.pluginAuthor}>Version 1.0.0</Text>
            <Text style={styles.br}> </Text>

            <Text style={styles.tab}>Settings</Text>
         </View>

         <FormRow
            label='Example Setting'
            trailing={
               <FormSwitch
                  value={settings.get('example', true)}
                  onValueChange={() => settings.toggle('example', true)}
               />
            }
         />
      </ScrollView>
   )
};