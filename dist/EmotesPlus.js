function T(o){window.enmity.plugins.registerPlugin(o)}const c=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const b=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const A=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function a(...o){return window.enmity.modules.getByProps(...o)}window.enmity.modules.common;function F(o){return window.enmity.patcher.create(o)}const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const f=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch;const r=e.Text;e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable;const L=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox;const D=e.FormDivider;e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio;const P=e.FormRow;e.FormSection,e.FormSelect,e.FormSubLabel;const x=e.FormSwitch;e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;var z="EmotesPlus",B="1.0.0.2",N="Enhanced mobile emote management.",M=[{name:"byron",id:"639577344276692992"}],I="#00007d",k="https://github.com/byeoon/EmotesPlus",H=["Added copying as hyperlink"],V={name:z,version:B,description:N,authors:M,color:I,sourceUrl:k,changelog:H},U=({settings:o})=>{const t=A.createThemedStyleSheet({title:{flexDirection:"column"},pluginTitle:{fontSize:30,paddingTop:20,paddingLeft:20,paddingRight:30,color:c.ThemeColorMap.HEADER_PRIMARY},pluginAuthor:{fontSize:12,paddingLeft:45,color:c.ThemeColorMap.HEADER_SECONDARY},br:{fontSize:0,paddingTop:20,paddingLeft:20,paddingRight:30,color:c.ThemeColorMap.HEADER_SECONDARY},tab:{fontSize:14,paddingTop:20,paddingLeft:20,paddingRight:25,color:c.ThemeColorMap.HEADER_SECONDARY}});return n.createElement(f,null,n.createElement(L,{style:t.title},n.createElement(r,{style:t.pluginTitle},"EmotesPlus"),n.createElement(r,{style:t.pluginAuthor},"Developed by byron"),n.createElement(r,{style:t.pluginAuthor},"Version 1.0.0.2"),n.createElement(r,{style:t.br}," "),n.createElement(r,{style:t.tab},"Settings")),n.createElement(P,{label:"Example Setting",trailing:n.createElement(x,{value:o.get("example",!0),onValueChange:()=>o.toggle("example",!0)})}))};function O(o,t,u){return window.enmity.utilities.findInReactTree(o,t,u)}const Y=a("openLazy","hideActionSheet"),p=a("setString"),d=F("EmotesPlus"),{default:l}=a("ButtonColors","ButtonSizes");a("RedesignCompat");function h(o){b.open({content:o})}const _={...V,onStart(){console.log("[EmotesPlus] Hello World!");const o=d.before(Y,"openLazy",(t,[u,S])=>{S==="MessageEmojiActionSheet"&&(o(),u.then(E=>{d.after(E,"default",(j,K,v)=>{const C=d.after(v,"type",(W,G,R)=>{n.useEffect(()=>()=>void C(),[]);const w=O(R,i=>{var m,s;return(i==null?void 0:i.type)&&((m=i==null?void 0:i.props)==null?void 0:m.emojiNode)&&((s=i==null?void 0:i.props)==null?void 0:s.nonce)});!w||d.after(w,"type",(i,[{emojiNode:m}],s)=>{var y,g;(g=(y=s==null?void 0:s.props)==null?void 0:y.children)==null||g.push(n.createElement(D,null,n.createElement(l,{color:l.Colors.BRAND,text:"Copy Emote URL",size:l.Sizes.SMALL,onPress:()=>{h("Copied Emote URL to clipboard!"),p.setString(m.src)}}),n.createElement(l,{color:l.Colors.BRAND,text:"Copy Emote URL as Hyperlink",size:l.Sizes.SMALL,onPress:()=>{h("Copied Emote URL to clipboard! (Please note some servers have [[HYPERLINKS BLOCKED]]."),p.setString("("+m.alt+")["+m.src+"]")}})))})})})}))})},onStop(){d.unpatchAll()},getSettingsPanel({settings:o}){return n.createElement(U,{settings:o})}};T(_);
