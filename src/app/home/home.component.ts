/**
 * Created by Administrator on 2017/2/13.
 */
import {Component} from '@angular/core'

@Component({
  selector:'home',
  templateUrl:"./home.component.html",
  styleUrls:["./home.component.css","../../assets/css/bootstrap-3.3.7/css/bootstrap.css"],

})
export class HomeComponent{
  data:Array<User>;

  public setData(users:Array<User>): void {
    if (users !=null&&users.length>0){
      this.data = users;
    }
  }
}

class User{
  name:String;
  age:number;
  sex:String;
}
