import {Component} from '@angular/core';
import {NzInputNumberComponent, NzInputNumberGroupComponent} from 'ng-zorro-antd/input-number';
import {FormsModule} from '@angular/forms';
import {NzSpaceComponent, NzSpaceItemDirective} from 'ng-zorro-antd/space';
import {NzOptionComponent, NzSelectComponent} from 'ng-zorro-antd/select';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';

@Component({
    selector: 'ui-input-number',
    standalone: true,
    imports: [
        NzInputNumberComponent,
        FormsModule,
        NzInputNumberGroupComponent,
        NzSpaceComponent,
        NzSpaceItemDirective,
        NzSelectComponent,
        NzOptionComponent,
        CardWrapperComponent
    ],
    templateUrl: './input-number.component.html',
    styleUrl: './input-number.component.scss'
})
export class InputNumberComponent {
    value = 5;
}
