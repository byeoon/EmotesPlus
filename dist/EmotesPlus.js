function G(o){window.enmity.plugins.registerPlugin(o)}const s=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const t=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const N=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const S=window.enmity.modules.common.Navigation,V=window.enmity.modules.common.NavigationNative,L=window.enmity.modules.common.NavigationStack;window.enmity.modules.common.Theme;const j=window.enmity.modules.common.Linking,c=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;const b={byProps:(...o)=>window.enmity.modules.filters.byProps(...o),byName:(o,n)=>window.enmity.modules.filters.byName(o,n),byTypeName:(o,n)=>window.enmity.modules.filters.byTypeName(o,n),byDisplayName:(o,n)=>window.enmity.modules.filters.byDisplayName(o,n)};function K(...o){return window.enmity.modules.bulk(...o)}function w(...o){return window.enmity.modules.getByProps(...o)}window.enmity.modules.common;function W(o){return window.enmity.patcher.create(o)}const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList;const X=e.Image;e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const F=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch;const i=e.Text;e.TextInput,e.TouchableHighlight;const M=e.TouchableOpacity;e.TouchableWithoutFeedback,e.Touchable;const f=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio;const D=e.FormRow;e.FormSection,e.FormSelect,e.FormSubLabel;const $=e.FormSwitch;e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;var q="EmotesPlus",J="1.0.0",Q="Enhanced mobile emote management.",Z=[{name:"byeoon",id:"1167275288036655133"}],ee="#00007d",oe="https://github.com/byeoon/EmotesPlus",te=[`
 1.0.0: The actual, first, initial release of EmotesPlus! 
`],g={name:q,version:J,description:Q,authors:Z,color:ee,sourceUrl:oe,changelog:te};function ne(o,n,r){return window.enmity.settings.get(o,n,r)}const B=L.createStackNavigator();var ie=({name:o="Page",component:n=f}={})=>{const r=c.createThemedStyleSheet({container:{backgroundColor:c.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,flex:.5},card:{backgroundColor:c.ThemeColorMap.BACKGROUND_MOBILE_PRIMARY,color:s.ThemeColorMap.TEXT_NORMAL},header:{backgroundColor:c.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},text:{color:c.ThemeColorMap.HEADER_PRIMARY,fontFamily:s.Fonts.PRIMARY_NORMAL,fontSize:16,marginLeft:16,backgroundColor:"transparent"}}),y=({onPress:l,title:R})=>t.createElement(M,{onPress:l},t.createElement(i,{style:r.text},R));return t.createElement(V.NavigationContainer,{independent:!0},t.createElement(B.Navigator,{initialRouteName:o,style:r.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:r.card,headerStyle:r.header,headerTitleContainerStyle:{color:s.ThemeColorMap.HEADER_PRIMARY},headerTitleAlign:"center",safeAreaInsets:{top:0}}},t.createElement(B.Screen,{name:o,component:n,options:{headerTitleStyle:{color:"white",fontFamily:s.Fonts.PRIMARY_NORMAL},headerLeft:()=>t.createElement(y,{title:"Cancel",onPress:()=>{S.pop()}}),...L.TransitionPresets.ModalSlideFromBottomIOS}})))};function re(o,n){fetch(o).then(r=>{r.blob().then(y=>{const l=new FileReader;l.readAsDataURL(y),l.onloadend=()=>{n(l.result)}})})}const[se,me,le]=K(b.byProps("getGuilds"),b.byProps("can","_dispatcher"),b.byProps("uploadEmoji"));function ae(o,n,r){return window.enmity.utilities.findInReactTree(o,n,r)}function ce(o){return window.enmity.assets.getIDByName(o)}async function de(){return(await(await fetch("https://raw.githubusercontent.com/byeoon/EmotesPlus/main/version.json")).json()).version}function I(){const[o,n]=t.useState();return t.useEffect(()=>{de().then(n)},[]),o}function k(o){N.open({content:o})}function ue(){I()>g.version?k("You are on an earlier version of EmotesPlus, please update by downloading the newest version through GitHub or the Enmity plugins channel."):k("No updates required!")}const{default:d}=w("ButtonColors","ButtonSizes");var ye=({settings:o})=>{const n=c.createThemedStyleSheet({title:{flexDirection:"column"},itiswhatitis:{flexDirection:"row",justifyContent:"center",alignItems:"center"},pluginTitle:{fontSize:32,paddingTop:20,paddingLeft:20,paddingRight:30,color:s.ThemeColorMap.HEADER_PRIMARY},pluginAuthor:{fontSize:12,paddingLeft:20,paddingRight:30,color:s.ThemeColorMap.HEADER_SECONDARY},br:{fontSize:0,paddingTop:20,paddingLeft:20,paddingRight:30,color:s.ThemeColorMap.HEADER_SECONDARY},img:{width:72,height:72,marginTop:10,marginLeft:20},tab:{fontSize:14,paddingTop:20,paddingLeft:20,paddingRight:25,color:s.ThemeColorMap.HEADER_SECONDARY}});return t.createElement(F,null,t.createElement(f,{style:n.itiswhatitis},t.createElement(X,{source:{uri:"https://avatars.githubusercontent.com/u/47872200?v=4"},style:n.img}),t.createElement(f,{style:n.title},t.createElement(i,{style:n.pluginTitle},"EmotesPlus"),t.createElement(i,{style:n.pluginAuthor},"Developed by byeoon"),t.createElement(i,{style:n.pluginAuthor}," Version ",g.version," | Remote Version: ",I()),t.createElement(i,{style:n.br}," "))),t.createElement(i,{style:n.tab},"Settings"),t.createElement(D,{label:"Copy Emotes as Hyperlink",trailing:t.createElement($,{value:o.getBoolean("copyAsHyperlink",!0),onValueChange:()=>o.toggle("copyAsHyperlink",!0)})}),t.createElement(i,{style:n.br}," "),t.createElement(i,{style:n.br}," "),t.createElement(d,{color:d.Colors.BRAND,text:"Visit GitHub Repository",size:d.Sizes.SMALL,onPress:()=>{j.openURL("https://github.com/byeoon/EmotesPlus")}}),t.createElement(d,{color:d.Colors.BRAND,text:"Check For Updates",size:d.Sizes.SMALL,onPress:()=>{ue()}}),t.createElement(i,{style:n.br}," "),t.createElement(i,{style:n.tab},"Changelog: "),t.createElement(i,{style:n.pluginAuthor}," ",g.changelog," "))};const C=w("openLazy","hideActionSheet"),O=w("setString"),h=W("EmotesPlus"),{default:u}=w("ButtonColors","ButtonSizes");w("RedesignCompat");const pe=s.Permissions;function x(o){N.open({content:o,icon:ce("Check")})}const we={...g,onStart(){console.log("[EmotesPlus] Hello World!");const o=h.before(C,"openLazy",(n,[r,y])=>{y==="MessageEmojiActionSheet"&&(o(),r.then(l=>{h.after(l,"default",(R,ge,z)=>{const _=h.after(z,"type",(he,Ee,H)=>{t.useEffect(()=>()=>void _(),[]);const A=ae(H,a=>{var m,p;return(a==null?void 0:a.type)&&((m=a==null?void 0:a.props)==null?void 0:m.emojiNode)&&((p=a==null?void 0:a.props)==null?void 0:p.nonce)});!A||h.after(A,"type",(a,[{emojiNode:m}],p)=>{var v,T;const U=Object.entries(se.getGuilds()).filter(([P,E])=>me.can(pe.MANAGE_GUILD_EXPRESSIONS,E));(T=(v=p==null?void 0:p.props)==null?void 0:v.children)==null||T.push(t.createElement(i,{text:"EmotesPlus"}),t.createElement(u,{color:u.Colors.BRAND,text:"Copy Emote URL",size:u.Sizes.SMALL,onPress:()=>{x("Copied Emote URL to clipboard!"),ne(g.name,"copyAsHyperlink",!1)?O.setString(m.src):O.setString("["+m.alt+"]("+m.src+")"),C.hideActionSheet()}}),t.createElement(i,{text:"  "}),t.createElement(u,{color:u.Colors.BRAND,text:"Clone to Server",size:u.Sizes.SMALL,onPress:()=>{S.push(ie,{component:()=>t.createElement(F,null,U.map(([P,E])=>t.createElement(M,{onPress:()=>re(m.src,Y=>{le.uploadEmoji({guildId:P,image:Y,name:m.alt,roles:void 0}).then(()=>{x(`Cloned emote to ${E}!`),S.pop()})})},t.createElement(D,{label:" "+E})))),name:"Clone Emote"}),C.hideActionSheet()}}))})})})}))})},onStop(){h.unpatchAll()},getSettingsPanel({settings:o}){return t.createElement(ye,{settings:o})}};G(we);
