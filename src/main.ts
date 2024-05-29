import { createApp } from 'vue'
import './style.css'
import vant from 'vant'
import App from './App.vue'

import 'vant/lib/index.css';
const app = createApp(App)

app.use(vant)

app.mount('#app')
