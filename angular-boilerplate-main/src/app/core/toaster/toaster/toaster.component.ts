import { Component, inject } from '@angular/core';
import { SeverityMap } from './toaster.data';
import { ToasterService } from '../toaster.service';
import { ToastModule } from 'primeng/toast';
import { NgClass } from '@angular/common';
import { ToasterClassPipe } from './toaster-class.pipe';

@Component({
  selector: 'app-toaster',
  templateUrl: './toast.component.html',
  imports: [ToastModule, ToasterClassPipe, NgClass]
})
export class ToastComponent {
  // Severity configuration
  severityMap = SeverityMap;

  protected readonly toastrService = inject(ToasterService);
}
