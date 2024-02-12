import { FormRow, FormSwitch } from 'enmity/components';
import { SettingsStore } from 'enmity/api/settings';
import { React } from 'enmity/metro/common';

interface SettingsProps {
   settings: SettingsStore;
}

export default ({ settings }: SettingsProps) => {
   return <FormRow
      label=''
      trailing={
         <FormSwitch
            value={settings.get('example', true)}
            onValueChange={() => settings.toggle('example', true)}
         />
      }
   />;
};