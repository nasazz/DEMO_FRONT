import { Pipe, PipeTransform } from '@angular/core';
import { SeverityMap } from './toaster.data';

@Pipe({
  name: 'toastClass',
})
export class ToasterClassPipe implements PipeTransform {
  transform(severity: string) {
    return (
      SeverityMap[severity as keyof typeof SeverityMap] || SeverityMap.info
    );
  }
}
