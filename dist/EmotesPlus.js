function r(e){window.enmity.plugins.registerPlugin(e)}const i=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts;const d=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const a=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function u(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;function w(e){return window.enmity.patcher.create(e)}var y="EmotesPlus",g="1.0.0",h="Enhanced mobile emote management.",p=[{name:"byron",id:"639577344276692992"}],S="#00007d",E="https://github.com/byeoon/EmotesPlus",F=["Actually made the plugin (yay)."],T={name:y,version:g,description:h,authors:p,color:S,sourceUrl:E,changelog:F};const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList,o.Image,o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const v=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const m=o.Text;o.TextInput,o.TouchableHighlight,o.TouchableOpacity,o.TouchableWithoutFeedback,o.Touchable;const b=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox,o.FormDivider,o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const A=o.FormRow;o.FormSection,o.FormSelect,o.FormSubLabel;const C=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;var P=({settings:e})=>{const t=a.createThemedStyleSheet({title:{flexDirection:"column"},pluginTitle:{fontSize:30,paddingTop:20,paddingLeft:20,paddingRight:30,color:i.ThemeColorMap.HEADER_PRIMARY},pluginAuthor:{fontSize:12,paddingLeft:50,color:i.ThemeColorMap.HEADER_SECONDARY}});return n.createElement(v,null,n.createElement(b,{style:t.title},n.createElement(m,{style:t.pluginTitle},"EmotesPlus"),n.createElement(m,{style:t.pluginAuthor},"developed by byron"),n.createElement(m,{style:t.pluginAuthor},"v1.0.0")),n.createElement(A,{label:"Example Setting",trailing:n.createElement(C,{value:e.get("example",!0),onValueChange:()=>e.toggle("example",!0)})}))};const f=u("openLazy","hideActionSheet"),l=w("EmotesPlus");function x(e){d.show({title:"EmotesPlus",body:e,confirmText:"Ok."})}const L={...T,onStart(){console.log("[EmotesPlus] Hello World!"),l.before(f,"openLazy",(e,[t,s])=>{s==="MessageEmojiActionSheet"&&(console.log("[EmotesPlus] Emotes Sheet clicked on."),t.then(c=>{x("You clicked on the emote sheet."),console.log(c),console.log("[EmotesPlus] Instance component ran.")}))})},onStop(){l.unpatchAll()},getSettingsPanel({settings:e}){return n.createElement(P,{settings:e})}};r(L);
