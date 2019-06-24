<template>
  <div id="app" class="wrapper">
    <system-header/>
    <left-menu/>
    <div class="right-content">
      <router-view/>
    </div>
  </div>
</template>
<script>
import leftMenu from "./components/LeftMenu";
import systemHeader from "./components/SystemHeader";
export default {
  components: {
    leftMenu,
    systemHeader
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-size: 14px;
  color: #b3bcc5;
}

html,
body {
  height: 100%;
}
.wrapper {
  width: 100%;
  height: 100%;
  background-color: #eee;
}
.wrapper .header {
  width: 100%;
  line-height: 70px;
  background-color: #354457;
}
.wrapper .header .logo {
  margin-left: 20px;
}
.wrapper .header .logo img {
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: middle;
}
.wrapper .left-menu {
  /* float: left; */
  /* display: inline-block; */
  position: absolute;
  left: 0;
  top: 70px;
  width: 200px;
  height: calc(100% - 70px);
  background-color: #4d5e70;
}
dl dt,
dl dd {
  height: 40px;
  line-height: 40px;
}
dl dt {
  padding-left: 8px;
  font-weight: bold;
}
dl dd {
  padding-left: 30px;
  cursor: pointer;
}
dl dd:hover {
  background-color: rgba(255, 255, 255, 0.5);
  color: #354457;
}
dl dd.active {
  background-color: #ddd;
  color: #354457;
}
.wrapper .right-content {
  position: absolute;
  left: 200px;
  top: 70px;
  width: calc(100% - 200px);
  height: calc(100% - 70px);
}
.wrapper .right-content .student-list .search {
  height: 60px;
  line-height: 60px;
  font-size: 16px;
  padding: 0px 20px;
  background-color: #eee;
}
.wrapper .right-content .student-list .search label {
  font-size: 16px;
  color: #646987;
  font-weight: 800;
}
.wrapper .right-content .student-list .search input {
  font-size: 16px;
  width: 200px;
  height: 30px;
  border: none;
  outline: none;
}
.wrapper .right-content .student-list .search-submit {
  height: 28px;
  line-height: 28px;
  padding: 0 10px;
  outline: none;
  display: inline-block;
  border: none;
  background-color: #354457;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
table {
  width: 100%;
}
table thead {
  background: #e3e8ee;
}
table tbody {
  background-color: #fff;
}
table tr th {
  /* width: 12.5%; */
  color: #646987;
  min-width: 100px;
}
table tr td {
  color: #646987;
  min-width: 100px;
}
table tr th,
table tr td {
  text-align: center;
  padding: 10px 0;
}
table button.btn {
  padding: 3px 10px;
  border: none;
  color: #fff;
  cursor: pointer;
}
table button.btn.edit {
  background-color: #5cb85c;
}
table button.btn.del {
  background-color: #d9534f;
}
table button.btn.edit:hover {
  color: #fff;
  background-color: #398439;
  border-color: #255625;
}
table button.btn.del:hover {
  color: #fff;
  background-color: #c9302c;
}
.add-student-form {
  width: 400px;
  margin: 50px auto;
}
.add-student-form input,
.add-student-form label {
  font-size: 16px;
  color: #354457;
}
.add-student-form label {
  display: inline-block;
  width: 80px;
  text-align: right;
}
.add-student-form div {
  margin: 10px 0px;
}
.add-student-form .btn {
  padding: 5px 30px;
}
.add-student-form .sex span {
  margin-right: 10px;
  font-size: 16px;
  color: #354457;
}

.content {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}
.modal .modal-content h2 {
  color: #000;
  font-weight: bold;
}
.modal.show {
  display: block;
}
.modal .mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal .modal-content {
  background-color: #fff;
  position: absolute;
  width: 500px;
  height: 450px;
  left: 50%;
  top: 50%;
  margin-left: -250px;
  margin-top: -225px;
  padding: 20px;
}
.modal .modal-content h2 {
  font-size: 16px;
}

ul li {
  list-style: none;
}
#turn-page {
  float: right;
  margin: 10px;
}
#turn-page li {
  display: inline-block;
  padding: 3px 10px;
  border: 1px solid #ddd;
  height: 25px;
  line-height: 25px;
  cursor: pointer;
  margin: 0 5px;
}
#turn-page li.cur-page {
  background-color: #428bca;
  border: 1px solid #428bca;
  color: #fff;
}
</style>
