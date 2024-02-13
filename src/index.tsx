import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React, Dialog, Toasts } from 'enmity/metro/common';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';
import Settings from './components/Settings';
import EmotesSheet from './components/EmotesSheet';
import findInReactTree from 'enmity/utilities/findInReactTree';

const ActionSheet = getByProps("openLazy", "hideActionSheet");
const Patcher = create('EmotesPlus');

function showDialog(text) {
   Dialog.show({
      title: "EmotesPlus",
      body: text,
      confirmText: "Close"
   })
}

function showToast(text) {
   Toasts.open({
      content: text
   })
}

const EmotesPlus: Plugin = {
   ...manifest,

   onStart() {
      console.log("[EmotesPlus] Hello World!");
      Patcher.before(ActionSheet, "openLazy", (_, [component, sheet], res) => {
         if (sheet === "MessageEmojiActionSheet") {
            console.log("[EmotesPlus] Emotes Sheet clicked.");
            component.then((instance) => {
              // const allegedyThisIsTheEmoteTabITookALittleResearchFromPluginDevelopment = res?.props?.children?.props?.children?.props?.children
               showToast("You clicked on the emote tab.");
               console.log("[EmotesPlus] Instance: " + instance);
               res.props?.children.push(<EmotesSheet emoteProps={component} />)
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
