import {Component} from '@angular/core';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'ui-checkbox',
    standalone: true,
    imports: [NzCheckboxModule, CardWrapperComponent, FormsModule],
    templateUrl: './checkbox.component.html',
    styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
    checkOptionsOne = [
        {label: 'Apple', value: 'Apple', checked: true},
        {label: 'Pear', value: 'Pear'},
        {label: 'Orange', value: 'Orange'}
    ];
}
