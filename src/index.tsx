import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React, Dialog, Toasts } from 'enmity/metro/common';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import { Button, Text, TouchableOpacity } from "enmity/components";
import manifest from '../manifest.json';
import Settings from './components/Settings';
import EmotesSheet from './components/EmotesSheet';
import findInReactTree from 'enmity/utilities/findInReactTree';


const LazyActionSheet = getByProps("openLazy", "hideActionSheet");
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

      const unpatchOpenLazy = Patcher.before(LazyActionSheet, 'openLazy', (_, [component, key]) => {
         if (key !== 'MessageEmojiActionSheet') return;
         unpatchOpenLazy();
     
         component.then(instance => {
             const unpatchInstance = Patcher.after(instance, 'default', (_, __, res) => {
                 unpatchInstance();
     
                 const unpatchType = Patcher.after(res, 'type', (_, __, res) => {
                     React.useEffect(() => () => void unpatchType(), []);
                     const details = findInReactTree(res, x => x?.type && x?.props?.emojiNode && x?.props?.nonce);
                     if (!details) return;
     
                     Patcher.after(details, 'type', (_, __, res) => {
                         res?.props?.children?.push(
                             <TouchableOpacity onPress={() => console.log('you pressed it')}>
                                 <Text>Press me!</Text>
                             </TouchableOpacity>
                         );
                     })
                 })
             })
         })
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
