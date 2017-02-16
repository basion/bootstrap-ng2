import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',//angular将会把该组件插入到“app-root”标签下。
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../../node_modules/bootstrap/dist/css/bootstrap.min.css',/*'../../node_modules/bootstrap/dist/css/bootstrap-theme.css'*/],
  moduleId:module.id
})
export class AppComponent implements OnInit{
  public tabs:Array<Tab> = new Array();
  ngOnInit(): void {
    this.tabs.push(new Tab('第一个', '第一个', '#', true));
    this.tabs.push(new Tab('第二个', '第二个', '#', false));
    this.tabs.push(new Tab('第三个', '第三个', '#', false));
    this.tabs.push(new Tab('第四个', '第四个', '#', false));
  }
  selectNav(nav) {
    console.log(nav)
    this.tabs.forEach((nav) => {
      nav.isActive = false;
    });
    nav.isActive = true;
  }


  // public tabs: any[] = [
  //   {title: 'Dynamic Title 1', content: 'Dynamic content 1',isActive:true,url:"#"},
  //   {title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true,url:"#",isActive:false},
  //   {title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true,url:"#",isActive:false}
  // ];

  public setActiveTab(index: number): void {
    this.tabs[index].isActive = true;
  }

  public removeTabHandler(/*tab:any*/): void {
    console.log('Remove Tab handler');
  }
}

class Tab {
  title:string;
  content:string;
  url:string;
  isActive:boolean;
  removable:boolean;
  disabled:boolean;
  constructor(title:string,content:string,url:string,isActive:boolean){
    this.content = content;
    this.title = title;
    this.url = url;
    this.isActive = isActive;
  }
}
