import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'
Vue.use(Vuex)

export default new Vuex.Store({
      state: {
        studentList: [],
        editStudent: null,
        showModal: false,
        count: 0,
        nowPage: 1,
        keyWord:""
      },
      mutations: {
        setStuList(state, list) {
          state.studentList = list
        },
        setEditStu(state, stu) {
          state.editStudent = stu
        },
        setShowModal(state, bool) {
          state.showModal = bool;
        },
        hideModal(state) {
          state.showModal = false;
        },
        setCount(state, count) {
          state.count = count;
        },
        setNowPage(state, page) {
          if (page == -1 && state.nowPage > 1) {
            state.nowPage--;
          } else if (page == 0 && state.nowPage < Math.ceil(state.count / 10)) {
            state.nowPage++;
          } else if (page != 0 && page != -1) {
            state.nowPage = page
          }
        },
        setKeyWord(state,keyWord){
          state.keyWord = keyWord;
        }
      },
      actions: {
        getStuList({
          commit,
          state
        }, page) {
          if (page) {
            commit('setNowPage', page)
          }
          if(state.keyWord){
            api.studentSearch(state.keyWord,state.nowPage).then(data => {
              commit('setStuList', data.data.data.searchList)
              commit('setCount', data.data.data.cont)
            }).catch(
              err => {
                console.log(err)
              }
            )
          }else{
            api.findByPage(state.nowPage).then(data => {
              commit('setStuList', data.data.data.findByPage)
              commit('setCount', data.data.data.cont)
            }).catch(
              err => {
                console.log(err)
              }
            )
          } 
        },
        updateStu({
          commit,
          state
        }, data) {
          return api.updatedStu(data).then(msg => {
            if (msg.data.status == 'fail') {
              return Promise.reject(msg.data.msg)
            } else {
              commit('setShowModal', false);
              Object.assign(state.editStudent, data);
              return msg.data.msg
            }
          })
        },
        delStu({
          dispatch,
          commit,
          state
        }, sNo) {
         return api.delBySno(sNo).then(data => {
                if (state.nowPage > Math.ceil((state.count - 1) / 10)){
                  dispatch('getStuList', state.nowPage - 1)
                } else {
                  dispatch('getStuList')
                }
                return data
              }
            )
          }
        },
        
      })