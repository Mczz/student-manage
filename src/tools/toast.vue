<template>
  <div class="wrap" v-if="over" :class="{fadein:showWrap,fadeout:!showWrap}">
      <div v-if="type == 'success'" style="color:lime">
          <span>√</span>{{ msg }}
      </div>
      <div v-if="type == 'fail'" style="color:red">
          <span>×</span>{{ msg }}
      </div>
      <div v-if="type == 'info'" style="color:lightblue">
          <span>i</span>{{ msg }}
      </div>
  </div>
</template>


<style scoped>
.wrap{
    border-radius: 5px;
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 10px 20px;
    background: rgba(250, 250, 250, .3);
    color: #fff;
}
.fadein{
    animation: animate_in .25s;
}
.fadeout{
    animation: animate_out .25s;
}
@keyframes animate_in{
    0%{
        opacity: 0;
        top: 25%;
    }
    100%{
        opacity: 1;
        top:10%;
    }
}
@keyframes animate_out{
    0%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
</style>