import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { getLocaleLang } from '../utils'
import enUS from './en_US'
import zhCN from './zh_CN'
import { EN_US_LANG_ID, ZH_CN_LANG_ID } from '@/constants'

Vue.use(VueI18n)

export default new VueI18n({
    locale: sessionStorage.getItem('langiage') || getLocaleLang(),
    messages: {
        [EN_US_LANG_ID]: enUS,
        [ZH_CN_LANG_ID]: zhCN
    }
})
