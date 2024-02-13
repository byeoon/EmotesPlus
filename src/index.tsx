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

function testToast() {
   Dialog.show({
      title: "EmotesPlus",
      body: "Click worked.",
      confirmText: "Ok."
   })
}

const EmotesPlus: Plugin = {
   ...manifest,

   onStart() {
      console.log("[EmotesPlus] Hello World!");
      try {
      Patcher.before(ActionSheet, "openLazy", (_, [component, sheet], _res) => {
         console.log("[EmotesPlus] Current sheet: " + sheet);
         if(sheet === "MessageEmojiActionSheet") {
            component.then((instance) => {
               Patcher.after(instance, "default", (_, [ { emojiNode }], res) => {
                  const te = res?.props?.children?.props?.children?.props?.children
                  Patcher.after(te, "type", (_, [{ emojiNode }], res) => {
                     findInReactTree(res, (node) => console.log(node))
                     if (true) {
                        res.props?.children.push(<EmotesSheet Emotesprops={emojiNode} />)
                     }

                     return res
                  })
               })
            })
         }
      })
   }
   catch (e)
   {
      console.log("fuck you " + e.message + "  " + e)
   }          
   },

   onStop() {
      Patcher.unpatchAll();
   },

   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   }
};

registerPlugin(EmotesPlus);
