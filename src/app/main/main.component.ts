import {Component} from "@angular/core";

/**
 * Created by Administrator on 2017/2/13.
 */
@Component({
  selector:'app-root',
  templateUrl:"./main.component.html",
  styleUrls:['./main.component.css','../../assets/css/bootstrap-3.3.7/css/bootstrap.css']
})
 export class MainComponent{
  public items:string[] = ['菜单一',
    '菜单二', '菜单三'];
  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }
}
