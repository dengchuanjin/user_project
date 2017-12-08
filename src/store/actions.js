/**
 * Created by leibo on 17/11/29.
 */
import {postPromise} from '../assets/js/public'
export default {
  //初始化信息
  initData({commit},obj){
    return new Promise(function (relove,reject) {
      postPromise('http://114.55.248.116:43000/CashoutWebservice.asmx/GetCanOrNotOutMoney',{
        StationID:obj.id,
        Way: obj.num
      })
        .then(data=>{
          var data = JSON.parse(data);
          if(obj.num == 0){
            commit('initPrice',data.canOutMoney)
          }else {
            commit('noInitPrice',data.canOutMoney)
          }
        })
    })
  },
  //申请提现
  initSearch(store,data){
    return new Promise(function (relove,reject) {
      postPromise('http://114.55.248.116:43000/CashoutWebservice.asmx/ApplayCashOut',data)
        .then(data=>{
          var data = JSON.parse(data);
          if(Number(data.backCode)==200){
            relove(data.balance)
          }else{
            reject(data.backResult)
          }
        })
    })
  },
  SendMsg(store,data){
    return new Promise(function (relove,reject) {
      postPromise('http://114.55.248.116:43000/CashoutWebservice.asmx/SendMsg',data)
        .then(data=>{
          var data = JSON.parse(data);
          if(Number(data.backCode)==200){
            relove(data.backResult)
          }else{
            reject(data.backResult)
          }
        })
    })
  },
  //初始化明细信息
  initSearch({commit},data){
    return new Promise(function (relove,reject) {
      postPromise('http://114.55.248.116:43000/CashoutWebservice.asmx/SellInfos',data)
        .then(data=>{
          var data = JSON.parse(data);
          if(Number(data.backCode)==200){
            commit('initSearch',data.sellInfoList)
            relove(data.total)
          }else{
            reject(data.backResult)
          }
        })
    })
  },
  //初始化提现查询信息
  initCashSearch({commit},data){
    return new Promise(function (relove,reject) {
      postPromise('http://114.55.248.116:43000/CashoutWebservice.asmx/CashApplays',data)
        .then(data=>{
          var data = JSON.parse(data);
          if(Number(data.backCode)==200){
            commit('initCashSearch',data.cashApplayList)
            relove(data.total)
          }else{
            reject(data.backResult)
          }
        })
    })
  },
  rowClick({commit},data){
    return new Promise(function (relove,reject) {
      postPromise('http://114.55.248.116:43000/CashoutWebservice.asmx/SellInfos',data)
        .then(data=>{
          var data = JSON.parse(data);
          if(Number(data.backCode)==200){
            commit('initRowClick',data.sellInfoList)
            relove(data.total)
          }else{
            reject(data.backResult)
          }
        })
    })
  }

}
