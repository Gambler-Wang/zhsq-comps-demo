import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Home from '@/page/home'
import Page_404 from '@/page/404'
import Page_403 from '@/page/403'
import Charts from '@/page/charts'
import Dialog from '@/page/dialog'
import Editor from '@/page/editor'
import Form from '@/page/form'
import Qrcode from '@/page/qrcode'
import Tab from '@/page/tab'
import Table from '@/page/table'
import Upload from '@/page/upload'
import Message from '@/page/message'
import Tree from '@/page/tree'
import Transfer from '@/page/transfer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect:'/home',
      children:[
        {
          path:'/home',
          name:'home',
          meta:{
            title:'系统首页'
          },
          component:Home,
        },
        {
          path:'/charts',
          name:'charts',
          meta:{
            title:'chart图表'
          },
          component:Charts,
        },
        {
          path:'/dialog',
          name:'dialog',
          meta:{
            title:'弹出框'
          },
          component:Dialog,
        },
        {
          path:'/message',
          name:'message',
          meta:{
            title:'消息与通知提示'
          },
          component:Message,
        },
        {
          path:'/upload',
          name:'upload',
          meta:{
            title:'文件上传'
          },
          component:Upload,
        },
        {
          path:'/editor',
          name:'editor',
          meta:{
            title:'富文本编辑'
          },
          component:Editor,
        },
        {
          path:'/form',
          name:'form',
          meta:{
            title:'基础表单'
          },
          component:Form,
        },
        {
          path:'/qrcode',
          name:'qrcode',
          meta:{
            title:'二维码生成'
          },
          component:Qrcode,
        },
        {
          path:'/tab',
          name:'tab',
          meta:{
            title:'tab选项卡'
          },
          component:Tab,
        },
        {
          path:'/table',
          name:'table',
          meta:{
            title:'基础表格'
          },
          component:Table,
        },
        {
          path:'/404',
          name:'404',
          meta:{
            title:'404页面'
          },
          component:Page_404,
        },
        {
          path:'/403',
          name:'403',
          meta:{
            title:'403页面'
          },
          component:Page_403,
        },
        {
          path:'/tree',
          name:'tree',
          meta:{
            title:'树组件'
          },
          component:Tree,
        },
        {
          path:'/transfer',
          name:'transfer',
          meta:{
            title:'穿梭框'
          },
          component:Transfer,
        },
      ]
    }
  ]
})
