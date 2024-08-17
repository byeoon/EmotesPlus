import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React, Toasts, Navigation, Constants } from 'enmity/metro/common';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import { Text, ScrollView, TouchableOpacity, FormRow, FormInput, FormDivider } from "enmity/components";
import manifest from '../manifest.json';
import {get} from "enmity/api/settings";
import Page from "./components/Page";
import fetchImage from '../TODO/GetDataURL';
import {GuildsStore, PermissionsStore, EmoteUploader, downloadMediaAsset} from "./components/EmoteClone";
import findInReactTree from 'enmity/utilities/findInReactTree';
import {getIDByName} from "enmity/api/assets";
import Settings from './components/Settings';

const LazyActionSheet = getByProps("openLazy", "hideActionSheet");
const Clipboard = getByProps('setString');
const Patcher = create('EmotesPlus');
const { default: Button } = getByProps('ButtonColors', 'ButtonSizes');
const Permissions = Constants.Permissions

function showToast(text) {
   Toasts.open({
      content: text,
      icon: getIDByName('Check')
   })
}

const EmotesPlus: Plugin = {
   ...manifest,

   onStart() {
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
     
                     let customEmoteName = "placeholdername";
                     Patcher.after(details, 'type', (_, [{ emojiNode }], res) => {    
                          const guilds = Object.entries(GuildsStore.getGuilds()).filter(([guildId, guild]) => PermissionsStore.can(Permissions.MANAGE_GUILD_EXPRESSIONS, guild))
                         res?.props?.children?.push(
                          <Text
                          text={'EmotesPlus'}
                          />,
                
                            <Button
                           color={Button.Colors.BRAND}
                           text={'Copy Emote URL'}
                           size={Button.Sizes.SMALL}
                           onPress={() => {
                             showToast("Copied Emote URL to clipboard!");
                             if(get(manifest.name, "copyAsHyperlink", false)) { 
                              Clipboard.setString(emojiNode.src); 
                            }
                             else {  
                              Clipboard.setString("[" + emojiNode.alt + "]" + "(" + emojiNode.src + ")"); 
                            } 
                            LazyActionSheet.hideActionSheet();
                           }}
                         />,

                         <Text
                         text={''}
                         />,

           
                         <Button
                         color={Button.Colors.BRAND}
                         text={'Copy Emote as Image'}
                         size={Button.Sizes.SMALL}
                         onPress={() => {
                          fetchImage(emojiNode.src, (emoteUrl) => {
                            Clipboard.setImage(emoteUrl.split(',')[1]);
                         })
                         showToast("Copied Emote as image!");
                           LazyActionSheet.hideActionSheet();
                         }}
                       />,
 

                       <Text
                       text={''}
                       />,
  
 

                         <Button
                           color={Button.Colors.BRAND}
                           text={'Clone to Server'}
                           size={Button.Sizes.SMALL}
                           onPress={() => {
                            customEmoteName = emojiNode.alt;
                            Navigation.push(Page, { component: () =>  
                            <ScrollView>
                            
                            <FormInput
                              onChange={(v: string) => customEmoteName = v}
                              placeholder={emojiNode.alt}
                              title="Custom Emote Name"
                          />
                        <FormDivider />
                          {guilds.map(([guildId, guild]) =>
				                <TouchableOpacity onPress={() => 
                          fetchImage(emojiNode.src, (emoteUrl) => {
                          EmoteUploader.uploadEmoji({
                          guildId: guildId,
                          image: emoteUrl,
                          name: customEmoteName,
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
                             name: 'Clone Emote'})
                             LazyActionSheet.hideActionSheet();
                              }}
                         />,

                         <Button
                         color={Button.Colors.BRAND}
                         text={'Emote Details'}
                         size={Button.Sizes.SMALL}
                         onPress={() => {
                           LazyActionSheet.hideActionSheet();
                           Navigation.push(Page, { component: () =>  
                            <ScrollView>
                              <Text> text={'Emote Name: WIP Have to see how this looks first'} </Text>
                            </ScrollView>,
                             name: 'Emote Details'})
                         }}
                       />,
                         );

                         
                     })
                 })
             })
         })
     }) 
    },
    //  

   onStop() {
      Patcher.unpatchAll();
   },

   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   }
};

registerPlugin(EmotesPlus);
