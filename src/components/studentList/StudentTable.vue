<template>
  <table>
    <thead>
      <tr>
        <th>学号</th>
        <th>姓名</th>
        <th>性别</th>
        <th>邮箱</th>
        <th>年龄</th>
        <th>手机号</th>
        <th>住址</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) in studentList" :key='index'>
        <td>{{ item.sNo }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.sex ? '女' : '男' }}</td>
        <td>{{ item.email }}</td>
        <td>{{ new Date().getFullYear()-item.birth }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.address }}</td>
        <td>
          <button class="btn edit" @click="edit(item)">编辑</button>
          &nbsp;
          <button class="btn del" @click="del(item.sNo)">删除</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState,mapMutations,mapActions } from 'vuex'
export default {
  computed:{
    ...mapState(['studentList'])
  },
  methods:{
    ...mapMutations(['setEditStu','setShowModal']),
    ...mapActions(['delStu']),
    edit(item) {
      this.setEditStu(item);
      this.setShowModal(true)
    },
    del(sNo){
      this.delStu(sNo).then(data => {
        this.$toast({
          msg:data.data.msg,
          type:'success'
        })
      })
    }
  }

};
</script>

<style scoped>
</style>