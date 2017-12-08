/**
 * Created by leibo on 17/11/29.
 */
export default {
  //加载动画
  loadingShow: (state) => state.loadingShow,
  //初始化动画
  transtionActive: (state) => state.transtionActive,
  //登陆用户信息
  user: state =>state.user,
  //计算金额
  price:state=>state.price,
  noPrice:state=>state.noPrice,
  //初始化明细查询列表
  DetailEnquiriesList:state=>state.DetailEnquiriesList,
  //初始化提现查询列表
  CashSearchList:state=>state.CashSearchList,
  //初始化明细记录
  RowClickList:state=>state.RowClickList
}
