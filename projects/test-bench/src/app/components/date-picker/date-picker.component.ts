import {Component} from '@angular/core';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {FormsModule} from '@angular/forms';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';
import {NzTabComponent, NzTabSetComponent} from 'ng-zorro-antd/tabs';

@Component({
    selector: 'ui-date-picker',
    standalone: true,
    imports: [NzDatePickerModule, FormsModule, CardWrapperComponent, NzTabSetComponent, NzTabComponent],
    templateUrl: './date-picker.component.html',
    styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent {
    date: Date = new Date();
}
