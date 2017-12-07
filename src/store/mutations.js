/**
 * Created by leibo on 17/11/29.
 */
import getters from './getters'

const state = {
	//加载动画
	loadingShow: false,
	//初始化动画
	transtionActive: {
		isActive: false,
		isMove: false
	},
  user:{},
  price:0,
  noPrice:0,
  //初始化明细信息
  DetailEnquiriesList:[],
};

const mutations = {
	//loading动画过渡
	showLoading(state) {
		state.loadingShow = true
	},
	hideLoading() {
		state.loadingShow = false
	},
	//初始化动画
	setTranstionFalse(state) {
		state.transtionActive = {
			isActive: false,
			isMove: false
		}
	},
	oPTranstionFalse() {
		state.transtionActive = {
			isActive: !state.transtionActive.isActive,
			isMove: !state.transtionActive.isMove
		}
	},
  initUser(state,obj){
	  state.user = obj;
  },
  initPrice(state,price){
    state.price = Number(price);
  },
  noInitPrice(state,price){
    state.noPrice = Number(price);
  },
  initSearch(state,data){
    state.DetailEnquiriesList = data;
  }
};

export default {
	getters,
	state,
	mutations
}
