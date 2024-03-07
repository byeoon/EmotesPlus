function P(t){window.enmity.plugins.registerPlugin(t)}const g=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const o=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const B=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const I=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function c(...t){return window.enmity.modules.getByProps(...t)}window.enmity.modules.common;function M(t){return window.enmity.patcher.create(t)}const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const H=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch;const m=e.Text;e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable;const U=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio;const R=e.FormRow;e.FormSection,e.FormSelect,e.FormSubLabel;const L=e.FormSwitch;e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;var V="EmotesPlus",O="1.0.3",_="Enhanced mobile emote management.",j=[{name:"byron",id:"639577344276692992"}],Y="#00007d",W="https://github.com/byeoon/EmotesPlus",G=[`
 1.0.1: Optimized code, added toast icon, fixed bug where actionsheet would not close on click, settings now have changelog and version fixed 
`,`1.0.2: Removed lengthy text when copying hyperlink to clipboard, fixed bug where some elements would have $ before them, added text titles and better spacing. 
`,"1:0.3: De-cluttered the emote menu, you can now decide if you want to copy as hyperlink or emote using Settings."],y={name:V,version:O,description:_,authors:j,color:Y,sourceUrl:W,changelog:G};function K(t,n,d){return window.enmity.settings.get(t,n,d)}function F(t,n,d){return window.enmity.utilities.findInReactTree(t,n,d)}function $(t){return window.enmity.assets.getIDByName(t)}const q=c("setString"),{default:A}=c("ButtonColors","ButtonSizes");var J=({settings:t})=>{const n=I.createThemedStyleSheet({title:{flexDirection:"column"},pluginTitle:{fontSize:30,paddingTop:20,paddingLeft:20,paddingRight:30,color:g.ThemeColorMap.HEADER_PRIMARY},pluginAuthor:{fontSize:12,paddingLeft:45,color:g.ThemeColorMap.HEADER_SECONDARY},br:{fontSize:0,paddingTop:20,paddingLeft:20,paddingRight:30,color:g.ThemeColorMap.HEADER_SECONDARY},tab:{fontSize:14,paddingTop:20,paddingLeft:20,paddingRight:25,color:g.ThemeColorMap.HEADER_SECONDARY}});return o.createElement(H,null,o.createElement(U,{style:n.title},o.createElement(m,{style:n.pluginTitle},"EmotesPlus"),o.createElement(m,{style:n.pluginAuthor},"Developed by byron"),o.createElement(m,{style:n.pluginAuthor},"Version ",y.version),o.createElement(m,{style:n.br}," "),o.createElement(m,{style:n.tab},"Settings")),o.createElement(R,{label:"New UI Support (WIP)",trailing:o.createElement(L,{value:t.get("newUISupport",!1),onValueChange:()=>t.toggle("newUISupport",!0)})}),o.createElement(R,{label:"Copy Emotes as Hyperlink",trailing:o.createElement(L,{value:t.get("copyAsHyperlink",!0),onValueChange:()=>t.toggle("copyAsHyperlink",!0)})}),o.createElement(m,{style:n.br}," "),o.createElement(A,{color:A.Colors.BRAND,text:"Copy Download Link",size:A.Sizes.SMALL,onPress:()=>{q.setString("https://raw.githubusercontent.com/byeoon/EmotesPlus/main/dist/EmotesPlus.js")}}),o.createElement(m,{style:n.br}," "),o.createElement(m,{style:n.pluginAuthor},"Changelog: ",y.changelog))};const h=c("openLazy","hideActionSheet"),T=c("setString"),s=M("EmotesPlus"),{default:a}=c("ButtonColors","ButtonSizes");c("RedesignCompat");function k(t){B.open({content:t,icon:$("Check")})}const Q={...y,onStart(){console.log("[EmotesPlus] Hello World!");const t=s.before(h,"openLazy",(d,[S,E])=>{E==="MessageEmojiActionSheet"&&(t(),S.then(v=>{s.after(v,"default",(x,z,f)=>{const b=s.after(f,"type",(D,N,C)=>{o.useEffect(()=>()=>void b(),[]);const u=F(C,i=>{var l,r;return(i==null?void 0:i.type)&&((l=i==null?void 0:i.props)==null?void 0:l.emojiNode)&&((r=i==null?void 0:i.props)==null?void 0:r.nonce)});!u||s.after(u,"type",(i,[{emojiNode:l}],r)=>{var w,p;(p=(w=r==null?void 0:r.props)==null?void 0:w.children)==null||p.push(o.createElement(m,{text:"Emotes+"}),o.createElement(a,{color:a.Colors.BRAND,text:"Copy Emote URL",size:a.Sizes.SMALL,onPress:()=>{k("Copied Emote URL to clipboard!"),K(y.name,"copyAsHyperlink",!1)?T.setString(l.src):T.setString("["+l.alt+"]("+l.src+")"),h.hideActionSheet()}}),o.createElement(m,{text:"  "}))})})})}))}),n=s.before(h,"openLazy",(d,[S,E])=>{E==="MessageStickerActionSheet"&&(n(),S.then(v=>{s.after(v,"default",(x,z,f)=>{const b=s.after(f,"type",(D,N,C)=>{o.useEffect(()=>()=>void b(),[]);const u=F(C,i=>{var l,r;return(i==null?void 0:i.type)&&((l=i==null?void 0:i.props)==null?void 0:l.stickerNode)&&((r=i==null?void 0:i.props)==null?void 0:r.nonce)});!u||s.after(u,"type",(i,[{stickerNode:l}],r)=>{var w,p;(p=(w=r==null?void 0:r.props)==null?void 0:w.children)==null||p.push(o.createElement(m,{text:"Emotes+"}),o.createElement(a,{color:a.Colors.BRAND,text:"Copy Sticker URL",size:a.Sizes.SMALL,onPress:()=>{k("Copied Emote URL to clipboard!"),T.setString(l.src),h.hideActionSheet()}}),o.createElement(m,{text:"  "}))})})})}))})},onStop(){s.unpatchAll()},getSettingsPanel({settings:t}){return o.createElement(J,{settings:t})}};P(Q);
