import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//angular将会把该组件插入到“app-root”标签下。
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../assets/css/bootstrap-3.3.7/css/bootstrap.css'],
  moduleId:module.id
})
export class AppComponent {
  title = 'app works!';
}
