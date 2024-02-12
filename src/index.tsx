import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React, Dialog, Toasts } from 'enmity/metro/common';
import { getByProps, bulk, filters } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';
import Settings from './components/Settings';
import EmotesSheet from './components/EmotesSheet';
import EmotesPlusInterfaceThing from './components/EmotesSheet';


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
            console.log("[EmotesPlus] Emoji Sheet clicked on.");
            testToast();
            component.then((instance) => {
               res.props?.children.push(<EmotesSheet EmotesPlusMenuInterface={EmotesPlusInterfaceThing} />)
               console.log("[EmotesPlus] Component Thing");
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
