import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React } from 'enmity/metro/common';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';

import Settings from './components/Settings';

const Typing = getByProps('startTyping');
const Clipboard = getByProps('setString');

const Patcher = create('EmotesPlus');

const EmotesPlus: Plugin = {
   ...manifest,

   onStart() {
      console.log("[EmotesPlus] Hello World!");
      Patcher.before() {

      }
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
