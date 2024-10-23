import {Component} from '@angular/core';
import {NzCalendarModule} from 'ng-zorro-antd/calendar';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';
import {NgStyle} from '@angular/common';

@Component({
    selector: 'ui-calendar',
    standalone: true,
    imports: [NzCalendarModule, CardWrapperComponent, NgStyle],
    templateUrl: './calendar.component.html',
    styleUrl: './calendar.component.scss'
})
export class CalendarComponent {}
