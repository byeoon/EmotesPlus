function j(t){window.enmity.plugins.registerPlugin(t)}const a=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const o=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const G=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const E=window.enmity.modules.common.Navigation,V=window.enmity.modules.common.NavigationNative,F=window.enmity.modules.common.NavigationStack;window.enmity.modules.common.Theme;const K=window.enmity.modules.common.Linking,u=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;const S={byProps:(...t)=>window.enmity.modules.filters.byProps(...t),byName:(t,n)=>window.enmity.modules.filters.byName(t,n),byTypeName:(t,n)=>window.enmity.modules.filters.byTypeName(t,n),byDisplayName:(t,n)=>window.enmity.modules.filters.byDisplayName(t,n)};function $(...t){return window.enmity.modules.bulk(...t)}function b(...t){return window.enmity.modules.getByProps(...t)}window.enmity.modules.common;function W(t){return window.enmity.patcher.create(t)}const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList;const X=e.Image;e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const f=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch;const m=e.Text;e.TextInput,e.TouchableHighlight;const D=e.TouchableOpacity;e.TouchableWithoutFeedback,e.Touchable;const R=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox;const I=e.FormDivider;e.FormHint,e.FormIcon;const J=e.FormInput;e.FormLabel,e.FormRadio;const v=e.FormRow;e.FormSection,e.FormSelect,e.FormSubLabel;const Q=e.FormSwitch;e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;var q="EmotesPlus",Z="1.1.1",ee="Enhanced mobile emote management.",oe=[{name:"byeoon",id:"1167275288036655133"}],te="#00007d",ne="https://github.com/byeoon/EmotesPlus",ie=[`
1.0.0: The actual, first, initial release of EmotesPlus!
`],A={name:q,version:Z,description:ee,authors:oe,color:te,sourceUrl:ne,changelog:ie};function me(t,n,i){return window.enmity.settings.get(t,n,i)}const B=F.createStackNavigator();var x=({name:t="Page",component:n=R}={})=>{const i=u.createThemedStyleSheet({container:{backgroundColor:u.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,flex:.5},card:{backgroundColor:u.ThemeColorMap.BACKGROUND_MOBILE_PRIMARY,color:a.ThemeColorMap.TEXT_NORMAL},header:{backgroundColor:u.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},text:{color:u.ThemeColorMap.HEADER_PRIMARY,fontFamily:a.Fonts.PRIMARY_NORMAL,fontSize:16,marginLeft:16,backgroundColor:"transparent"}}),y=({onPress:s,title:N})=>o.createElement(D,{onPress:s},o.createElement(m,{style:i.text},N));return o.createElement(V.NavigationContainer,{independent:!0},o.createElement(B.Navigator,{initialRouteName:t,style:i.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:i.card,headerStyle:i.header,headerTitleContainerStyle:{color:a.ThemeColorMap.HEADER_PRIMARY},headerTitleAlign:"center",safeAreaInsets:{top:0}}},o.createElement(B.Screen,{name:t,component:n,options:{headerTitleStyle:{color:"white",fontFamily:a.Fonts.PRIMARY_NORMAL},headerLeft:()=>o.createElement(y,{title:"Cancel",onPress:()=>{E.pop()}}),...F.TransitionPresets.ModalSlideFromBottomIOS}})))};function O(t,n){fetch(t).then(i=>{i.blob().then(y=>{const s=new FileReader;s.readAsDataURL(y),s.onloadend=()=>{n(s.result)}})})}const[re,le,ae,be]=$(S.byProps("getGuilds"),S.byProps("can","_dispatcher"),S.byProps("uploadEmoji"),S.byProps("downloadMediaAsset"));function se(t,n,i){return window.enmity.utilities.findInReactTree(t,n,i)}function ce(t){return window.enmity.assets.getIDByName(t)}async function de(){return(await(await fetch("https://raw.githubusercontent.com/byeoon/EmotesPlus/main/version.json")).json()).version}function ue(){const[t,n]=o.useState();return o.useEffect(()=>{de().then(n)},[]),t}var ye=({settings:t})=>{const n=u.createThemedStyleSheet({title:{flexDirection:"column"},itiswhatitis:{flexDirection:"row",justifyContent:"center",alignItems:"center"},pluginTitle:{fontSize:32,paddingTop:20,paddingLeft:20,paddingRight:30,color:a.ThemeColorMap.HEADER_PRIMARY},pluginAuthor:{fontSize:12,paddingLeft:20,paddingRight:30,color:a.ThemeColorMap.HEADER_SECONDARY},br:{fontSize:0,paddingTop:20,paddingLeft:20,paddingRight:30,color:a.ThemeColorMap.HEADER_SECONDARY},img:{width:72,height:72,marginTop:10,marginLeft:20},tab:{fontSize:14,paddingTop:20,paddingLeft:20,paddingRight:25,color:a.ThemeColorMap.HEADER_SECONDARY}});return o.createElement(f,null,o.createElement(R,{style:n.itiswhatitis},o.createElement(X,{source:{uri:"https://avatars.githubusercontent.com/u/47872200?v=4"},style:n.img}),o.createElement(R,{style:n.title},o.createElement(m,{style:n.pluginTitle},"EmotesPlus"),o.createElement(m,{style:n.pluginAuthor},"Developed by byeoon"),o.createElement(m,{style:n.pluginAuthor}," Version ",A.version," | Remote Version: ",ue()),o.createElement(m,{style:n.br}," "))),o.createElement(m,{style:n.tab},"Settings"),o.createElement(v,{label:"Copy Emotes as Hyperlink",trailing:o.createElement(Q,{value:t.getBoolean("copyAsHyperlink",!0),onValueChange:()=>t.toggle("copyAsHyperlink",!0)})}),o.createElement(I,null),o.createElement(v,{label:"Open GitHub Repository",icon:"ic_arrow_right",onPress:()=>K.openURL("https://github.com/byeoon/EmotesPlus")}),o.createElement(m,{style:n.tab},"Changelog: "),o.createElement(m,{style:n.pluginAuthor}," ",A.changelog," "))};const w=b("openLazy","hideActionSheet"),k=b("setString"),pe=b("setImage"),g=W("EmotesPlus"),{default:r}=b("ButtonColors","ButtonSizes"),we=a.Permissions;function T(t){G.open({content:t,icon:ce("Check")})}const ge={...A,onStart(){const t=g.before(w,"openLazy",(n,[i,y])=>{y==="MessageEmojiActionSheet"&&(t(),i.then(s=>{g.after(s,"default",(N,he,_)=>{const z=g.after(_,"type",(Ee,Se,H)=>{o.useEffect(()=>()=>void z(),[]);const P=se(H,c=>{var l,p;return(c==null?void 0:c.type)&&((l=c==null?void 0:c.props)==null?void 0:l.emojiNode)&&((p=c==null?void 0:c.props)==null?void 0:p.nonce)});if(!P)return;let C="placeholdername";g.after(P,"type",(c,[{emojiNode:l}],p)=>{var L,M;const U=Object.entries(re.getGuilds()).filter(([d,h])=>le.can(we.MANAGE_GUILD_EXPRESSIONS,h));(M=(L=p==null?void 0:p.props)==null?void 0:L.children)==null||M.push(o.createElement(m,{text:"EmotesPlus"}),o.createElement(r,{color:r.Colors.BRAND,text:"Copy Emote URL",size:r.Sizes.SMALL,onPress:()=>{T("Copied Emote URL to clipboard!"),me(A.name,"copyAsHyperlink",!1)?k.setString(l.src):k.setString("["+l.alt+"]("+l.src+")"),w.hideActionSheet()}}),o.createElement(m,{text:""}),o.createElement(r,{color:r.Colors.BRAND,text:"Copy Emote as Image",size:r.Sizes.SMALL,onPress:()=>{O(l.src,d=>{pe.setImage(d.split(",")[1])}),T("Copied Emote as image!"),w.hideActionSheet()}}),o.createElement(m,{text:""}),o.createElement(r,{color:r.Colors.BRAND,text:"Clone to Server",size:r.Sizes.SMALL,onPress:()=>{C=l.alt,E.push(x,{component:()=>o.createElement(f,null,o.createElement(J,{onChange:d=>C=d,placeholder:l.alt,title:"Custom Emote Name"}),o.createElement(I,null),U.map(([d,h])=>o.createElement(D,{onPress:()=>O(l.src,Y=>{ae.uploadEmoji({guildId:d,image:Y,name:C,roles:void 0}).then(()=>{T(`Cloned emote to ${h}!`),E.pop()})})},o.createElement(v,{label:" "+h})))),name:"Clone Emote"}),w.hideActionSheet()}}),o.createElement(r,{color:r.Colors.BRAND,text:"Emote Details",size:r.Sizes.SMALL,onPress:()=>{w.hideActionSheet(),E.push(x,{component:()=>o.createElement(f,null,o.createElement(m,null," text=",`Emote Name:${l.alt}`," ")),name:"Emote Details"})}}))})})})}))})},onStop(){g.unpatchAll()},getSettingsPanel({settings:t}){return o.createElement(ye,{settings:t})}};j(ge);
