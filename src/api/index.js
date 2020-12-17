import request from '@/utils/request.js'

export function logout(params){
    return request ({
        // baseUrl: '',
        url: '',
        method: 'post',
        data: params,
        header: {
            token: params.token
        }
    })
}
