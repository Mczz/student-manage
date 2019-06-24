import URLS from './urls'
import Axios from 'axios'
const appkey = "zhangmc_1560173446617";
const size = 10;
const myAjax = Axios.create({
    method:'GET',
    baseURL:URLS.baseURL
})
export default{
    findByPage(page = 1){
        return myAjax.get(URLS.findByPage,{
            params:{
                page,
                size,
                appkey
            }
        })
    },
    updatedStu (data) {
        return myAjax.get(URLS.updatedStudent,{
            params:{
                ...data,
                appkey
            }
        })
    },
    delBySno(sNo){
        return myAjax.get(URLS.delBySno,{
            params:{
                sNo,
                appkey
            }
        })
    },
    studentSearch(search,page){
        return myAjax.get(URLS.searchStuedent,{
            params:{
                search,
                appkey,
                size,
                page,
                sex:-1
            }
        })
    },
    addStu(data){
        return myAjax.get(URLS.addStudent,{
            params:{
                appkey,
                ...data
            }
        })
    }
}