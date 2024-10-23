import {Component} from '@angular/core';
import {NzButtonComponent, NzButtonModule} from 'ng-zorro-antd/button';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';

@Component({
    selector: 'ui-dropdown',
    standalone: true,
    imports: [NzButtonComponent, NzDropDownModule, NzIconModule, NzButtonModule, CardWrapperComponent],
    templateUrl: './dropdown.component.html',
    styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {}
