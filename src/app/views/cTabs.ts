import {Component, Input} from "@angular/core";
/**
 * Created by Administrator on 2017/2/15.
 */
@Component({
  selector:"cTabs",
  template:`
    <ul>
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)">
        {{tab.tabTitle}}
      </li>
    </ul>
    <ng-content></ng-content>
  `
})
export class CTabs{

  tabs: CTab[] = [];
  selectTab(tab: CTab) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    tab.active = true;
  }

  addTab(tab: CTab) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }
}
@Component({
  selector: 'cTab',
  template: `
     <div [hidden]="!active">
      <ng-content></ng-content>
    </div>
  `
})
export class CTab {
  @Input() tabTitle: string;
  active:boolean;
  constructor(tabs:CTabs) {
    tabs.addTab(this);
  }
}
