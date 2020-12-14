import request from '@/utils/request.js'

export default {
    install(Vue, headers) {
        Vue.prototype.$_request = request.request
        Vue.prototype.$_get = request.get
        Vue.prototype.$_post = request.post
        Vue.prototype.$_put = request.put
        Vue.prototype.$_delete = request.delete
        Vue.prototype.$_options = request.options
        Vue.prototype.$_head = request.head
        Vue.prototype.$_patch = request.patch
    }
}
