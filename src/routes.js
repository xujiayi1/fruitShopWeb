//一级路由
import Home from './components/Home'
import Login from './components/user/Login'
import Product from './components/Product'
import Register from './components/user/Register'
import Update from './components/user/Update'
import Admin from './components/Admin'
import About from './components/about/About'

//About下的二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

//contact下的三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'

export const routes = [
    {path:'/',name:"homeLink",component:Home},
    {path:'/login',name:"loginLink",component:Login},
    {path:'/update',name:"updateLink",component:Update},
    {path:'/product',name:"productLink",component:Product},
    {path:'/register',name:"registerLink",component:Register},
    {path:'/admin',name:"adminLink",component:Admin},
    {path:'/about',name:"aboutLink",redirect:'/about/contact',component:About,children:[
      {path:'/about/contact',name:"contactLink",redirect:'/personname',component:Contact,children:[
        {path:'/phone',name:"phoneNumber",component:Phone},
        {path:'/personname',name:"personName",component:PersonName}
      ]},
      {path:'/about/delivery',name:"deliveryLink",component:Delivery},
      {path:'/about/history',name:"historyLink",component:History},
      {path:'/about/orderingGuide',name:"orderingGuideLink",component:OrderingGuide}
    ]},
    {path:'*',redirect:'/'}
  ]