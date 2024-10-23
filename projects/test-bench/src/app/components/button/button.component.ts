import {Component} from '@angular/core';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';
import {NzButtonComponent, NzButtonModule} from 'ng-zorro-antd/button';
import {NzTransitionPatchDirective} from 'ng-zorro-antd/core/transition-patch/transition-patch.directive';
import {NzWaveDirective} from 'ng-zorro-antd/core/wave';

@Component({
    selector: 'ui-button',
    standalone: true,
    imports: [CardWrapperComponent, NzButtonModule],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss'
})
export class ButtonComponent {}
