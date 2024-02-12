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
      body: "This is a dialog box to indicate that emote clicking worked.",
      confirmText: "Close"
   })
}

const EmotesPlus: Plugin = {
   ...manifest,

   onStart() {
      console.log("[EmotesPlus] Hello World!");
      Patcher.before(SheetOpen, "openLazy", (_, args) => {
         if (args[1] === "MessageEmojiActionSheet") {
            console.log("MessageEmojiActionSheet detected"),
            args[0].then(result => {
               Patcher.after(result, "default", (_, args, res) => {
              Patcher.after(res["type"], "render", (_, args, res) => {
                  console.log(args)
                  console.log(res)
                  res.props.children.push(<Text>hello hello</Text>)
                })
              })
            })}})
            
   },

   onStop() {
      Patcher.unpatchAll();
   },

   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   }
};

registerPlugin(EmotesPlus);
