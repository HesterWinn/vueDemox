import { EN_US_LANG_ID, ZH_CN_LANG_ID } from '../constants'
/**
 * 获取语言，取语言中列表中第一个
 * 非英语系的，缺省语言为zh
 * @returns {string}
 */
export function getLocaleLang () {
    const languages = navigator.languages
    if (
        !languages ||
        !(languages instanceof Array) ||
        typeof languages[0] !== 'string' ||
        !/\ben\b/i.test(languages[0])
    ) {
        return ZH_CN_LANG_ID
    }
    return EN_US_LANG_ID
}
