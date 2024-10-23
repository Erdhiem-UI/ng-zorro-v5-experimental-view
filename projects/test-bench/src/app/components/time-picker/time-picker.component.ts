import {Component} from '@angular/core';
import {NzTimePickerModule} from 'ng-zorro-antd/time-picker';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';

@Component({
    selector: 'ui-time-picker',
    standalone: true,
    imports: [NzTimePickerModule, CardWrapperComponent],
    templateUrl: './time-picker.component.html',
    styleUrl: './time-picker.component.scss'
})
export class TimePickerComponent {}
