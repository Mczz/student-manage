import Vue from 'vue'
import toast from './toast.vue'

const Toast = Vue.extend(toast);

function showToast(options = {
    type: 'sucess',
    msg: 'OK'
}, duration = 2000) {
    const app = new Toast({
        el: document.createElement('div'),
        data() {
            return {
                type: options.type,
                msg: options.msg,
                over: true,
                showWrap: true
            }
        }
    });
    document.body.appendChild(app.$el);
    setTimeout(() => {
        app.showWrap = false
    }, 1000)
    setTimeout(() => {
        app.over = false
    }, 1200)
}
export default showToast