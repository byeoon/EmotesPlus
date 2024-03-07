import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React, Toasts } from 'enmity/metro/common';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import { Text, TouchableOpacity, Image, FormDivider } from "enmity/components";
import manifest from '../manifest.json';
import {get, set} from "enmity/api/settings";
import findInReactTree from 'enmity/utilities/findInReactTree';
import {getIDByName} from "enmity/api/assets";
import Settings from './components/Settings';
const LazyActionSheet = getByProps("openLazy", "hideActionSheet");
const Clipboard = getByProps('setString');
const Patcher = create('EmotesPlus');
const { default: Button } = getByProps('ButtonColors', 'ButtonSizes')
const { RedesignCompat } = getByProps('RedesignCompat')

function showToast(text) {
   Toasts.open({
      content: text,
      icon: getIDByName('Check')
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
              //   unpatchInstance();
                 const unpatchType = Patcher.after(res, 'type', (_, __, res) => {
                     React.useEffect(() => () => void unpatchType(), []);
                     const details = findInReactTree(res, x => x?.type && x?.props?.emojiNode && x?.props?.nonce);
                     if (!details) return;
     
                     Patcher.after(details, 'type', (_, [{ emojiNode }], res) => {    
                         res?.props?.children?.push(
                           <Text
                           text={'Emotes+'}
                           />,
                  
                            <Button
                           color={Button.Colors.BRAND}
                           text={'Copy Emote URL'}
                           size={Button.Sizes.SMALL}
                           onPress={() => {
                             showToast("Copied Emote URL to clipboard!");
                             if(get(manifest.name, "copyAsHyperlink", false))
                             { Clipboard.setString(emojiNode.src); }
                             else
                             {  Clipboard.setString("[" + emojiNode.alt + "]" + "(" + emojiNode.src + ")"); } 
                             LazyActionSheet.hideActionSheet();
                           }}
                         />,

                         <Text
                         text={'  '}
                         />
                         );
                     })
                 })
             })
         })
     })

     // STICKER ACTIONSHEET
     

     const unpatchStickerLazy = Patcher.before(LazyActionSheet, 'openLazy', (_, [component, key]) => {
      if (key !== 'MessageStickerActionSheet') return;
      unpatchStickerLazy();
      component.then(instance => {
          const unpatchInstance = Patcher.after(instance, 'default', (_, __, res) => {
           //   unpatchInstance();
              const unpatchType = Patcher.after(res, 'type', (_, __, res) => {
                  React.useEffect(() => () => void unpatchType(), []);
                  const details = findInReactTree(res, x => x?.type && x?.props?.stickerNode && x?.props?.nonce);
                  if (!details) return;
  
                  Patcher.after(details, 'type', (_, [{ stickerNode }], res) => {    
                      res?.props?.children?.push(
                        <Text
                        text={'Emotes+'}
                        />,
               
                         <Button
                        color={Button.Colors.BRAND}
                        text={'Copy Sticker URL'}
                        size={Button.Sizes.SMALL}
                        onPress={() => {
                          showToast("Copied Emote URL to clipboard!");
                          Clipboard.setString(stickerNode.src);
                          LazyActionSheet.hideActionSheet();
                        }}
                      />,

                      <Text
                      text={'  '}
                      />
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
