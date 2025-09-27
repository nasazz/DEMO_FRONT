import { Component } from '@angular/core';
import { ToastComponent } from './core/toaster/toaster/toaster.component';
import { BaButtonComponent } from "./ui/components/button/button.component";

@Component({
  selector: 'app-root',
  imports: [ToastComponent, BaButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-boilerplate';
}
