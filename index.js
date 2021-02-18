"use strict";
const vm = new Vue({
    el: '#app',
    data(){
        return {
            text: '你好，前端自习课',
            desc: '每日清晨，享受一篇前端优秀文章。',
            obc:{
              text: '你好，前端自习课',
              desc: '每日清晨，享受一篇前端优秀文章。'
            }
        }
    }
});

console.log(vm.$data.text)
vm.$data.text = '页面数据更新成功！'; // 模拟数据变化
console.log(vm.$data.text)
