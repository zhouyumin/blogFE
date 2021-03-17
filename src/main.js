import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import 'element-plus/lib/theme-chalk/display.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import '@/css/base.css'
import Router from './router/index'
import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-c'
import axios from 'axios'
import VueAxios from 'vue-axios'
VueMarkdownEditor.use(vuepressTheme)

const app = createApp(App)

app.use(ElementPlus, { locale })
app.use(Router)
app.use(VueMarkdownEditor)
app.use(VueAxios, axios)
app.mount('#app')
