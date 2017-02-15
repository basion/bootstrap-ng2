import { Component, OnInit,ChangeDetectionStrategy  } from '@angular/core';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class BusinessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public tabs: any[] = [
    {title: 'Dynamic Title 1', content: 'Dynamic content 1',active:true},
    {title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true,active:false},
    {title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true,active:false}
  ];

  public setActiveTab(index: number): void {
    this.tabs[index].active = true;
  }

  public removeTabHandler(/*tab:any*/): void {
    console.log('Remove Tab handler');
  }
  selectNav(nav) {
    this.tabs.forEach((nav) => {
      nav.active = false;
    });
    nav.active = true;
  }
}
