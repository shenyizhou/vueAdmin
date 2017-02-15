import Login from './pages/Login.vue'
import NotFound from './pages/404.vue'
import Home from './pages/Home.vue'
import Main from './pages/Main.vue'
import Table from './pages/nav1/Table.vue'
import Form from './pages/nav1/Form.vue'
import user from './pages/nav1/user.vue'
import Page4 from './pages/nav2/Page4.vue'
import Page5 from './pages/nav2/Page5.vue'
import Page6 from './pages/nav3/Page6.vue'
import echarts from './pages/charts/echarts.vue'
import VehicleManage from './pages/vehicle/VehicleManage.vue'
import CompanyManage from './pages/vehicle/CompanyManage.vue'
import CashboxManage from './pages/cash/CashboxManage.vue'
import BankManage from './pages/cash/BankManage.vue'
import CashboxTrack from './pages/cash/CashboxTrack.vue'
import UserManage from './pages/UserManage.vue'
import CashboxWarn from './pages/warn/CashboxWarn.vue'
import VehicleWarn from './pages/warn/VehicleWarn.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '导航一',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/table', component: Table, name: 'Table' },
            { path: '/form', component: Form, name: 'Form' },
            { path: '/user', component: user, name: '列表' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航二',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4', component: Page4, name: '页面4' },
            { path: '/page5', component: Page5, name: '页面5' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/page6', component: Page6, name: '导航三' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '预警监控',
        iconCls: 'fa fa-exclamation-triangle',
        children: [
            { path: '/vehicleWarn', component: VehicleWarn, name: '基本预警' },
            { path: '/cashboxWarn', component: CashboxWarn, name: '钱箱预警' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '车辆系统',
        iconCls: 'fa fa-truck',
        children: [
            { path: '/vehicleManage', component: VehicleManage, name: '车辆管理' },
            { path: '/companyManage', component: CompanyManage, name: '公司管理' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '钱箱系统',
        iconCls: 'fa fa-suitcase',
        children: [
            { path: '/cashboxManage', component: CashboxManage, name: '钱箱管理' },
            { path: '/bankManage', component: BankManage, name: '银行管理' },
            { path: '/cashboxTrack', component: CashboxTrack, name: '钱箱追踪' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-user',
        leaf: true,//只有一个节点
        children: [
            { path: '/userManage', component: UserManage, name: '用户管理' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;
