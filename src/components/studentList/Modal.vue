<template>
  <div class="modal" id="modal">
    <div class="mask" @click="hideModal"></div>
    <div class="modal-content">
      <h2>编辑信息</h2>
      <form action="#" id="edit-student-form" class="add-student-form">
        <div>
          <label for="name">姓名</label>
          <input
            type="text"
            name="name"
            autocomplete="off"
            :value="editStudent.name"
            @input="editStu('name',$event.target.value)"
            ref="name"
          >
        </div>
        <div class="sex">
          <label for="sex">性别</label>
          <input
            type="radio"
            name="sex"
            :checked="editStudent.sex == 0"
            @change="editStu('sex',0)"
            ref="sex"
          >
          <span>男</span>
          <input type="radio" name="sex" :checked="editStudent.sex == 1" @change="editStu('sex',1)">
          <span>女</span>
        </div>
        <div>
          <label for="sNo">学号</label>
          <input type="text" name="sNo" readonly :value="editStudent.sNo">
        </div>
        <div>
          <label for="email">邮箱</label>
          <input
            type="text"
            name="email"
            :value="editStudent.email"
            @input="editStu('email',$event.target.value)"
            ref="email"
          >
        </div>
        <div>
          <label for="birth">出生年</label>
          <input
            type="text"
            name="birth"
            :value="editStudent.birth"
            @input="editStu('birth',$event.target.value)"
            ref="birth"
          >
        </div>
        <div>
          <label for="phone">手机号</label>
          <input
            type="text"
            name="phone"
            :value="editStudent.phone"
            @input="editStu('phone',$event.target.value)"
            ref="phone"
          >
        </div>
        <div>
          <label for="address">住址</label>
          <input
            type="text"
            name="address"
            :value="editStudent.address"
            @input="editStu('address',$event.target.value)"
            ref="address"
          >
        </div>
        <div>
          <label for></label>
          <input type="button" value="提交" class="btn" id="edit-submit" @click="commit">
          <input type="button" value="重置" class="btn" @click="reset">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      stu: {}
    };
  },
  computed: {
    ...mapState(["editStudent"])
  },
  methods: {
    ...mapMutations(["hideModal"]),
    ...mapActions(["updateStu"]),
    editStu(key, val) {
      this.stu[key] = val;
    },
    commit() {
      let stu = Object.assign({}, this.editStudent, this.stu);
      this.updateStu(stu)
        .then(msg => this.$toast({
          msg:msg,
          type:'success'
        }))
        .catch(err => this.$toast({
          msg:err,
          type:'fail'
        }));
    },
    reset() {
      for (let prop in this.$refs) {
        this.stu[prop] = this.$refs[prop].value = "";
      }
      this.stu["sex"] = 0;
      this.$refs.sex.checked = true;
    }
  }
};
</script>

<style scoped>
</style>