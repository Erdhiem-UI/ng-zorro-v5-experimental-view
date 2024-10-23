import {Component} from '@angular/core';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';
import {NzAlertModule} from 'ng-zorro-antd/alert';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzSpaceModule} from 'ng-zorro-antd/space';

@Component({
    selector: 'ui-alert',
    standalone: true,
    imports: [CardWrapperComponent, NzAlertModule, NzButtonModule, NzSpaceModule],
    templateUrl: './alert.component.html',
    styleUrl: './alert.component.scss'
})
export class AlertComponent {
    doAction(action: string): void {
        console.log(`Do alert's action: ${action}`);
    }
}
