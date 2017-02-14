import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AppComponent} from "./app.component";
import {MainComponent} from "./main/main.component";
import {AboutComponent} from "./about/about.component";
import {BusinessComponent} from "./business/business.component";
import {TestComponent} from "./test/test.component";
import {QqComponent} from "./business/qq/qq.component";
import {WeixinComponent} from "./business/weixin/weixin.component";
/**
 * Created by Administrator on 2017/2/13.
 */
const businessChildRoutes: Routes = [
  {path: "qq", component: QqComponent},
  {path: "weixin", component: WeixinComponent},
  // 如果地址栏中输入没有定义的路由就跳转到one路由界面
  {
    path: '**', redirectTo: "qq"
  }
];
export const ROUTERS: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '',component:AppComponent},
  {path:'main',component:MainComponent},
  {path:'about',component:AboutComponent},
  {path:'business',component:BusinessComponent,children:businessChildRoutes},
  {path:'test',component:TestComponent}
]


