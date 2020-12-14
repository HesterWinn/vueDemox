import axios from 'axios'
import { Message } from 'element-ui'
import { getLocaleLang } from '@/utils'
import i18n from '@/i18n'
import store from '@/store'
import { getToken } from '@/utils/auth'
import {
    SERVICE_STATUS_SUCCESS,
    SERVICE_STATUS_FAILED
} from '@/constants'

const { ZH_CN_LANG_ID } = require('@/constants/index.js')

const request = axios.create({
    headers: {
        'Cache-Control': 'no-cache',
        'X-Token': '',
        'X-Lang-Id': ''
    }
})

function resFun (response) {
    const code = response.code
    const msg = response.msg || i18n.t('sqlStat.failed')
    if (code !== SERVICE_STATUS_SUCCESS) {
        if(code === SERVICE_STATUS_FAILED) {
            // 未登录
            store.dispatch('user/resetToken').then(() => {
                Message({
                    message: msg || i18n.t('sqlStat.notLogin'),
                    type: 'error',
                    duration: 5 * 10000
                })
            })
        }
        return Promise.reject(
            new Error(msg || 'service code is not success code')
        )
    } else {
        return response
    }
}

function errFun (error) {
    let message = (error && error.msg) || ''
    if(message || error) {
        Message({
            message: message || error,
            type: 'error',
            duration: 5 * 1000
        })
    }
    return Promise.reject(error)
}

request.interceptors.request.use(
    config => {
        if (store.getters.token) {
            const h = config.headers
            h['X-Token'] = getToken()
            h['X-Lang-Id'] = sessionStorage.getItem('language') || getLocaleLang()
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
request.interceptors.response.use(resFun, errFun)

export default request

export const httpRequest = {
    install (Vue, headers) {
        Vue.prototype.$_request = request.request
        Vue.prototype.$_get = request.get
        Vue.prototype.$_post = request.post
        Vue.prototype.$_put = request.put
        Vue.prototype.$_remove = request.remove
        Vue.prototype.$_options = request.options
        Vue.prototype.$_head = request.head
        Vue.prototype.$_patch = request.patch
    }
}
