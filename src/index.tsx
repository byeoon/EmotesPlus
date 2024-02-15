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
      console.log("[EmotesPlus 5 mins to push a build wow] Hello World!");

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
                     
                     showToast("omg.");
                     res.props.children[res.props.children - 1].push(<EmotesSheet emojiNode={emojiNode} />)
                     showToast("what the FACK.");
                     console.log("[EmotesPlus] a thing" + emojiNode.alt);
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
