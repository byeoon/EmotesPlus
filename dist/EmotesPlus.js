function y(e){window.enmity.plugins.registerPlugin(e)}const l=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const p=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const h=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function d(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;function S(e){return window.enmity.patcher.create(e)}const{components:o}=window.enmity;o.Alert;const E=o.Button;o.FlatList,o.Image,o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const T=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const i=o.Text;o.TextInput,o.TouchableHighlight,o.TouchableOpacity,o.TouchableWithoutFeedback,o.Touchable;const F=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox,o.FormDivider,o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const b=o.FormRow;o.FormSection,o.FormSelect,o.FormSubLabel;const C=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;var A="EmotesPlus",f="1.0.4",v="Enhanced mobile emote management.",R=[{name:"byron",id:"639577344276692992"}],L="#00007d",P="https://github.com/byeoon/EmotesPlus",x=["Initial development"],D={name:A,version:f,description:v,authors:R,color:L,sourceUrl:P,changelog:x},I=({settings:e})=>{const t=h.createThemedStyleSheet({title:{flexDirection:"column"},pluginTitle:{fontSize:30,paddingTop:20,paddingLeft:20,paddingRight:30,color:l.ThemeColorMap.HEADER_PRIMARY},pluginAuthor:{fontSize:12,paddingLeft:45,color:l.ThemeColorMap.HEADER_SECONDARY},br:{fontSize:0,paddingTop:20,paddingLeft:20,paddingRight:30,color:l.ThemeColorMap.HEADER_SECONDARY},tab:{fontSize:14,paddingTop:20,paddingLeft:20,paddingRight:25,color:l.ThemeColorMap.HEADER_SECONDARY}});return n.createElement(T,null,n.createElement(F,{style:t.title},n.createElement(i,{style:t.pluginTitle},"EmotesPlus"),n.createElement(i,{style:t.pluginAuthor},"Developed by byron"),n.createElement(i,{style:t.pluginAuthor},"Version 1.0.0"),n.createElement(i,{style:t.br}," "),n.createElement(i,{style:t.tab},"Settings")),n.createElement(b,{label:"Example Setting",trailing:n.createElement(C,{value:e.get("example",!0),onValueChange:()=>e.toggle("example",!0)})}))};function M(e,t,s){return window.enmity.utilities.findInReactTree(e,t,s)}const N=d("openLazy","hideActionSheet"),B=d("setString"),r=S("EmotesPlus");function a(e){p.open({content:e})}const V={...D,onStart(){console.log("[EmotesPlus] Hello World!"),r.before(N,"openLazy",(e,[t,s])=>{s==="MessageEmojiActionSheet"&&t.then(u=>{const w=r.after(u,"default",(k,[{emojiNode:c}],m)=>(n.useEffect(()=>w(),[]),M(m,g=>console.log(g)),console.log("[EmotesPlus] IT DID A THING!!!!!"),a("Copied emote url to clipboard."),console.log("[EmotesPlus] a thing: "+c.src),B.setString(c.src),m.props.children=m.props.children||[],m.props.children.push(n.createElement(E,{key:"copyEmoteUrlButton",text:"Copy Emote URL"})),a("what the FACK????."),console.log("[EmotesPlus] "+m.props.children),m))})})},onStop(){r.unpatchAll()},getSettingsPanel({settings:e}){return n.createElement(I,{settings:e})}};y(V);
