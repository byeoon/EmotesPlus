import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React, Dialog, Toasts } from 'enmity/metro/common';
import { getByProps, bulk, filters } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';
import Settings from './components/Settings';
import EmotesSheet from './components/EmotesSheet';
import findInReactTree from 'enmity/utilities/findInReactTree';
import { Button, Text } from 'enmity/components';

const ActionSheet = getByProps("openLazy", "hideActionSheet");
const Patcher = create('EmotesPlus');

function showToast(text) {
   Dialog.show({
      title: "EmotesPlus",
      body: text,
      confirmText: "Ok."
   })
}

const EmotesPlus: Plugin = {
   ...manifest,

   onStart() {
      console.log("[EmotesPlus] Hello World!");
      Patcher.before(ActionSheet, "openLazy", (_, [component, sheet]) => {
         if (sheet === "MessageEmojiActionSheet") {
            console.log("[EmotesPlus] Emotes Sheet clicked on.");
            
            component.then((instance) => {
               showToast("You clicked on the emote sheet.");
               console.log(instance);
               console.log("[EmotesPlus] Instance component ran.");
            })
         } 
      })
   },

   onStop() {
      Patcher.unpatchAll();
   },

   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   }
};

registerPlugin(EmotesPlus);
