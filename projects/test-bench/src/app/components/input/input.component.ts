import {Component} from '@angular/core';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzIconDirective} from 'ng-zorro-antd/icon';

@Component({
    selector: 'ui-input',
    standalone: true,
    imports: [CardWrapperComponent, NzInputModule, NzButtonComponent, NzIconDirective],
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss'
})
export class InputComponent {}
