import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {RouterModule, PreloadAllModules} from "@angular/router";
import {ROUTERS} from "./app.router";
import {MainComponent} from "./main/main.component";
import { TestComponent } from './test/test.component';

// import {CollapseModule} from 'ng2-bootstrap/collapse'
import { DropdownModule } from 'ng2-bootstrap';
import { TestDirectiveDirective } from './views/test-directive.directive';
import { BusinessComponent } from './business/business.component';
import { AboutComponent } from './about/about.component';
import { QqComponent } from './business/qq/qq.component';
import { WeixinComponent } from './business/weixin/weixin.component';
// import { TabsModule } from 'ng2-bootstrap/tabs';//"ngx-tabs"
import { TabsModule } from 'ng2-bootstrap';
// import { TabsModule } from 'ngx-tabs';
import {CTabs, CTab} from './views/cTabs'
import { HttpModule, JsonpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    TestComponent,
    TestDirectiveDirective,
    BusinessComponent,
    AboutComponent,
    QqComponent,
    WeixinComponent,
    CTabs,
    CTab,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTERS,{useHash:true,preloadingStrategy:PreloadAllModules}),
    DropdownModule.forRoot(),
    TabsModule.forRoot(),
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
