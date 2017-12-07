/**
 * Created by leibo on 17/11/29.
 */
import Home from '@/components/Home'
//登陆
import Login from '@/components/Login'
//用户信息
import User from '@/components/User'
//明细查询
import DetailEnquiries from '@/components/DetailEnquiries'
export default [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path:'/home',
    name:'Home',
    components:{
      default:Home
    },
    children:[
      {
        path: 'user',
        components: {
          default: Home,
          User: User
        },
        name:'User'
      },
      {
        path: 'detailEnquiries',
        components: {
          default: Home,
          User: DetailEnquiries
        },
        name:'DetailEnquiries'
      }
    ]
  },
  { path: '*', redirect: { name: 'Login' }}
]
