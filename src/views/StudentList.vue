<template>
  <div class="student-list content">
    <search-stu></search-stu>
    <student-table></student-table>
    <turn-page></turn-page>
    <transition name="modal">
      <modal v-if="showModal"></modal>
    </transition>
  </div>
</template>

<script>
import Modal from "@/components/studentList/Modal";
import SearchStu from "@/components/studentList/SearchStu";
import StudentTable from "@/components/studentList/StudentTable";
import TurnPage from "@/components/studentList/TurnPage";
import { mapState } from "vuex";
import api from "../api";
export default {
  components: {
    Modal,
    SearchStu,
    StudentTable,
    TurnPage
  },
  computed: {
    ...mapState(["showModal"])
  },
  created() {
    this.$store.dispatch("getStuList",1);
  }
};
</script>

<style>
/* .modal-enter-to, .modal-leave{
        height: 100%;
        top: 0;
    }
    .modal-enter-active, .modal-leave-active {
        transition: all .7s;
    } */
.modal-enter,
.modal-leave-to {
  height: 0;
  top: -100%;
}
.modal-leave,
.modal-enter-to {
  height: 100%;
  top: 0;
}
.modal-enter-active,
.modal-leave-active {
  transition: all 0.7s;
}
</style>