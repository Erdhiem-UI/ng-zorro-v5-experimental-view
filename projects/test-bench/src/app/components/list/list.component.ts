import {Component} from '@angular/core';
import {NzListModule} from 'ng-zorro-antd/list';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';

@Component({
    selector: 'ui-list',
    standalone: true,
    imports: [NzListModule, CardWrapperComponent],
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss'
})
export class ListComponent {
    data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.'
    ];
}
