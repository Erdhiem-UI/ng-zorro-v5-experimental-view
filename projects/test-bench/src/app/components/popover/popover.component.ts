import {Component} from '@angular/core';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';
import {NzPopoverModule} from 'ng-zorro-antd/popover';
import {NzButtonModule} from 'ng-zorro-antd/button';

@Component({
    selector: 'ui-popover',
    standalone: true,
    imports: [CardWrapperComponent, NzPopoverModule, NzButtonModule],
    templateUrl: './popover.component.html',
    styleUrl: './popover.component.scss'
})
export class PopoverComponent {}
