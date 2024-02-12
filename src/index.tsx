import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React, Dialog, Toasts } from 'enmity/metro/common';
import { getByProps, bulk, filters } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';
import Settings from './components/Settings';
import EmotesSheet from './components/EmotesSheet';
import EmotesPlusInterfaceThing from './components/EmotesSheet';
import EmotesProps from './components/EmotesSheet';


// const Typing = getByProps('startTyping');
const SheetOpen = getByProps("openLazy", "hideActionSheet");


const Patcher = create('EmotesPlus');


function testToast() {
   Dialog.show({
      title: "EmotesPlus",
      body: "This is a dialog thingy",
      confirmText: "Dismiss"
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
               const unpatchInstance = Patcher.after(instance, "default", (_, [{ Emotesprops }], res) => {
                  unpatchInstance()
                  if (Emotesprops.type !== 'customEmoji') return res

               const EmoteTab = res?.props?.children?.props?.children?.props?.children
               const unpatchEmotesTab = Patcher.after(EmoteTab, "type", (_, [{ EmotesProps }], res) => {
                  React.useEffect(() => {
                     return () => unpatchEmotesTab()
                  }, [])

                  res.props?.children.push(<EmotesSheet Emotesprops={EmotesProps} />)
                  console.log("[EmotesPlus] Component Thing");
                  return res
               })
            })
         })
      }
   })
      
      //  Patcher.instead(Typing, 'startTyping', () => { });
      //  Patcher.instead(Typing, 'stopTyping', () => { });
   },

   onStop() {
      Patcher.unpatchAll();
   },

   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   }
};

registerPlugin(EmotesPlus);
