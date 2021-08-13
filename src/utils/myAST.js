/*
 * @Author: your name
 * @Date: 2021-08-09 15:58:25
 * @LastEditTime: 2021-08-13 18:28:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /personal/vue-my-admin/src/utils/myAST.js
 */
export class MyAST {
    constructor(str,options) {
        this.htmlTemplate = str;
        this.tokenTask = [];
        this.domTree = {}
    }
    
}