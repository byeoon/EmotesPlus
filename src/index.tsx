import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React, Dialog, Toasts } from 'enmity/metro/common';
import { getByProps, bulk, filters } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';
import Settings from './components/Settings';
import EmotesSheet from './components/EmotesSheet';
import findInReactTree from "enmity/utilities/findInReactTree";
import { Button, Text } from 'enmity/components';

const SheetOpen = getByProps("openLazy", "hideActionSheet");
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

      const unpatch = Patcher.before(SheetOpen, 'openLazy', (_, [component, sheet]) => {
         if (sheet !== 'MessageEmojiActionSheet') return;
         
         const orig = component;
         component = async (...args) => {
           const res = await orig(...args);
           
           try {
             Patcher.after(res, 'default', (_, args, res) => {
               res.props.children.push(<Text>hello hello hello</Text>);
             });
       
             unpatch();
           } catch (e) {
             console.error(`Failed to patch ${sheet}`, e.message);
           }
       
           return res;
         } 
       });            
   },

   onStop() {
      Patcher.unpatchAll();
   },

   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   }
};

registerPlugin(EmotesPlus);
