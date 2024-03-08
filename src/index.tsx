import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React, Toasts, Navigation, Constants } from 'enmity/metro/common';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import { Text, ScrollView, TouchableOpacity, FormRow } from "enmity/components";
import manifest from '../manifest.json';
import {get} from "enmity/api/settings";
import Page from "./components/Page";
import fetchImage from './components/GetDataURL';
import {GuildsStore, PermissionsStore, EmoteUploader} from "./components/EmoteClone";
import findInReactTree from 'enmity/utilities/findInReactTree';
import {getIDByName} from "enmity/api/assets";
import Settings from './components/Settings';

const LazyActionSheet = getByProps("openLazy", "hideActionSheet");
const Clipboard = getByProps('setString');
const Patcher = create('EmotesPlus');
const { default: Button } = getByProps('ButtonColors', 'ButtonSizes')
const { RedesignCompat } = getByProps('RedesignCompat')
const Permissions = Constants.Permissions
const guilds = Object.entries(GuildsStore.getGuilds()).filter(([guildId, guild]) => PermissionsStore.can(Permissions.MANAGE_GUILD_EXPRESSIONS, guild))
const GuildIcon = getByProps("GuildIconSizes")

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
                           <Text text={'Emotes+'} />,
                  
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
                         />,

                         <Button
                           color={Button.Colors.BRAND}
                           text={'Clone to Server'}
                           size={Button.Sizes.SMALL}
                           onPress={() => {
                            Navigation.push(Page, { component: () =>  
                            <ScrollView>
                              {guilds.map(([guildId, guild]) =>
				                <TouchableOpacity onPress={() => 
                          fetchImage(emojiNode.src, (emoteUrl) => {
                          EmoteUploader.uploadEmoji({
                          guildId: guildId,
                          image: emoteUrl,
                          name: emojiNode.alt,
                          roles: undefined
                        }).then(() => {
                          showToast(`Cloned emote to ${guild}!`)
                          Navigation.pop()
                        })
                      })
                      }>
					              <FormRow
						              label={" " + guild}
				                	/>
		                		</TouchableOpacity> 
                        )}
                            </ScrollView>,
                            
                             name: 'Clone Emote to Server' })
                             LazyActionSheet.hideActionSheet();
                              }}
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
