import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React, Dialog, Toasts } from 'enmity/metro/common';
import { getByProps, bulk, filters } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';
import Settings from './components/Settings';
import EmotesSheet from './components/EmotesSheet';
import findInReactTree from "enmity/utilities/findInReactTree";
import {Button, Text } from 'enmity/components';

const SheetOpen = getByProps("openLazy", "hideActionSheet");
const Patcher = create('EmotesPlus');

function testToast() {
   Dialog.show({
      title: "EmotesPlus",
      body: "This is a dialog box to indicate that emote clicking worked.",
      confirmText: "OK Lmao"
   })
}

const EmotesPlus: Plugin = {
   ...manifest,

   

   onStart() {
      console.log("[EmotesPlus] Hello World!");
      Patcher.before(SheetOpen, "openLazy", (_, [component, sheet], res) => {
         if (sheet === "MessageEmojiActionSheet") {
            console.log("[EmotesPlus] Emotes Sheet clicked on.");
            testToast();
            component.then((instance) => {
         console.log(instance);
         const sheetComponent = instance.default();
         const sheetBody = sheetComponent.props.children;
         const button = <button>Your Button</button>;
         const updatedSheetBody = React.cloneElement(sheetBody, null, [button, ...sheetBody.props.children]);
         const updatedComponent = React.cloneElement(sheetComponent, null, updatedSheetBody);
         console.log("[EmotesPlus] Instance component ran.");
         return updatedComponent;
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
