import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React, Dialog, Toasts } from 'enmity/metro/common';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import { Button } from "enmity/components";
import manifest from '../manifest.json';
import Settings from './components/Settings';
import EmotesSheet from './components/EmotesSheet';
import findInReactTree from 'enmity/utilities/findInReactTree';



const ActionSheet = getByProps("openLazy", "hideActionSheet");
const Clipboard = getByProps('setString');
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
      console.log("[EmotesPlus yaayayyayayaayya] Hello World!");

      Patcher.before(ActionSheet, "openLazy", (_, [component, sheet]) => {
         if (sheet === "MessageEmojiActionSheet") {
            console.log("[EmotesPlus] Emotes Sheet clicked.");
            component.then((instance) => {
               const unpatch = Patcher.after(instance, "default", (_, [{ emojiNode }], res) => {
                  React.useEffect(() => unpatch(), [])
                  //    const allegedyThisIsTheEmoteTabITookALittleResearchFromPluginDevelopment = res?.props?.children?.props?.children?.props?.children
                  showToast("You clicked on the emote tab.");
                  console.log("[EmotesPlus] Instance: " + instance);
                  findInReactTree(res, (node) => console.log(node))
                  if (true) {
                     console.log("[EmotesPlus] IT DID A THING!!!!!");
                     
                     showToast("Copied emote url to clipboard.");
                     console.log("[EmotesPlus] a thing: " + emojiNode.src);
                     Clipboard.setString(emojiNode.src);
                     res?.props?.children?.props?.children?.props?.children.push(<Button text='Copy Emote URL'/>)
                     showToast("what the FACK.");
                    
                  }
                  return res
               })
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
