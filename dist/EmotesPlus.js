function T(e){window.enmity.plugins.registerPlugin(e)}window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts;const C=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const A=window.enmity.modules.common.StyleSheet,R=window.enmity.modules.common.ColorMap;window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function h(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;function L(e){return window.enmity.patcher.create(e)}var P="EmotesPlus",f="1.0.01",x="Better mobile emote management.",B=[{name:"byron",id:"0"}],k="#00007d",D="https://github.com/byeoon/EmotesPlus",M=["Byron HAS to be blue."],I={name:P,version:f,description:x,authors:B,color:k,sourceUrl:D,changelog:M};const{components:o}=window.enmity;o.Alert;const N=o.Button;o.FlatList,o.Image,o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl,o.ScrollView,o.SectionList,o.StatusBar,o.StyleSheet,o.Switch,o.Text,o.TextInput,o.TouchableHighlight,o.TouchableOpacity,o.TouchableWithoutFeedback,o.Touchable,o.View,o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox;const O=o.FormDivider;o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const _=o.FormRow;o.FormSection,o.FormSelect,o.FormSubLabel;const z=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;var H=({settings:e})=>n.createElement(_,{label:"Example Setting",trailing:n.createElement(z,{value:e.get("example",!0),onValueChange:()=>e.toggle("example",!0)})});h("openLazy","hideActionSheet");const{ThemeColorMap:t}=R,p=A.createThemedStyleSheet({container:{backgroundColor:t.BACKGROUND_MOBILE_SECONDARY,flex:1},divider:{backgroundColor:t.BACKGROUND_MOBILE_PRIMARY,color:t.TEXT_NORMAL,marginLeft:0,marginTop:16},header:{backgroundColor:t.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},headerTitleContainer:{color:t.HEADER_PRIMARY},close:{color:t.HEADER_PRIMARY},button:{marginTop:16}});function U({Emotesprops:e}){const i=[{text:"Test Button",callback:console.log(e.emoteLink)}];return n.createElement(n.Fragment,null,n.createElement(O,{style:p.divider}),i.map(({text:l,callback:s})=>n.createElement(N,{color:"brand",text:l,size:"small",onPress:s,style:p.button})))}const V=h("openLazy","hideActionSheet"),m=L("EmotesPlus");function Y(){C.show({title:"EmotesPlus",body:"This is a dialog thingy",confirmText:"Dismiss"})}const G={...I,onStart(){console.log("[EmotesPlus] Hello World!"),m.before(V,"openLazy",(e,[i,l],s)=>{l==="MessageEmojiActionSheet"&&(console.log("[EmotesPlus] Emotes Sheet clicked on."),Y(),i.then(S=>{const E=m.after(S,"default",(K,[{Emotesprops:j}],r)=>{var c,a,d,u,w;E();const v=(w=(u=(d=(a=(c=r==null?void 0:r.props)==null?void 0:c.children)==null?void 0:a.props)==null?void 0:d.children)==null?void 0:u.props)==null?void 0:w.children,b=m.after(v,"type",(W,[{Emotesprops:F}],y)=>{var g;return n.useEffect(()=>()=>b(),[]),(g=y.props)==null||g.children.push(n.createElement(U,{Emotesprops:F})),console.log("[EmotesPlus] Component Thing"),y})})}))})},onStop(){m.unpatchAll()},getSettingsPanel({settings:e}){return n.createElement(H,{settings:e})}};T(G);
