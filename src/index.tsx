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
      console.log("[EmotesPlus] Hello World!");

      Patcher.before(ActionSheet, "openLazy", (_, [component, sheet]) => {
         if (sheet === "MessageEmojiActionSheet") {
            component.then((instance) => {
               const unpatch = Patcher.after(instance, "default", (_, [{ emojiNode }], res) => {
                  React.useEffect(() => unpatch(), [])
                  findInReactTree(res, (node) => console.log(node))
                  if (true) {
                     console.log("[EmotesPlus] IT DID A THING!!!!!");
                     
                     showToast("Copied emote url to clipboard.");
                     console.log("[EmotesPlus] a thing: " + emojiNode.src);
                     Clipboard.setString(emojiNode.src);
                     const updatedChildren = [
                        ...(res.props.children || []),
                        <Button key="copyEmoteUrlButton" text='Copy Emote URL'/>
                    ];

                     res.props.children = updatedChildren;

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
