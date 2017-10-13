import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //тег компонента (селектор) Необходимо добавлять префикс
  templateUrl: './app.component.html',//сам шаблон который будет отрендерен внутри крмпонента
  styleUrls: ['./app.component.scss'] //стили компонента
})
export class AppComponent {
  title = 'app';
}
