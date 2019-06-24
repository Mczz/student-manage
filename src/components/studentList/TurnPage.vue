<template>

    <ul id="turn-page" style="user-select:none;">
        <li class="prev-page" :class="{'not-allow':nowPage == 1}" @click="turnPage(-1)">&lt;</li>
        <template v-if="totalPage <= 7">
            <li class="num" v-for="i in totalPage" :key="i" @click="turnPage(i)" :class="{'cur-page':nowPage == i}">{{ i }}</li>
        </template>
        <template v-else>
            <template v-if="nowPage <= 4">
                <li class="num" v-for="i in 6" :key="i" @click="turnPage(i)" :class="{'cur-page':nowPage == i}">{{ i }}</li>
            </template>
            <template v-if="nowPage > 4">
                <li class="num" @click="turnPage(1)">1</li>
                <span>...</span>
            </template>
            <template v-if="nowPage >= totalPage - 3">
                <li class="num" v-for="i in 6" :key="totalPage - 6 + i" @click="turnPage(totalPage - 6 + i)" :class="{'cur-page':nowPage == totalPage - 6 + i}">{{ totalPage - 6 + i }}</li>
            </template>
            <template v-if="nowPage < totalPage - 3 && nowPage > 4">
                <li class="num" v-for="i in 5" :key="nowPage - 3 + i" @click="turnPage(nowPage - 3 + i)" :class="{'cur-page':i == 3}">{{ nowPage - 3 + i }}</li>
            </template>
            <template v-if="nowPage < totalPage - 3">
                <span>...</span>
                <li class="num" @click="turnPage(totalPage)">{{ totalPage }}</li>
            </template>
            
        </template>
        <li class="next-page" :class="{'not-allow':nowPage == totalPage}" @click="turnPage(0)">&gt;</li>
    </ul>
</template>

<script>
import { mapState,mapActions,mapMutations } from 'vuex'
export default {
    data(){
        return{
        }
    },
    methods:{
        ...mapActions(['getStuList']),
        ...mapMutations(['setNowPage']),
        turnPage(page){
            this.getStuList(page);
        }
    },
    computed:{
        ...mapState({
            totalPage : state => Math.ceil(state.count / 10),
            nowPage: state => state.nowPage
        })
    }
}
</script>

<style scoped>
    .not-allow{
        cursor: not-allowed!important;
    }
</style>