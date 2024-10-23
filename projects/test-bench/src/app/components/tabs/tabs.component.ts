import {Component} from '@angular/core';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';
import {NzTabsModule} from 'ng-zorro-antd/tabs';

@Component({
    selector: 'ui-tabs',
    standalone: true,
    imports: [CardWrapperComponent, NzTabsModule],
    templateUrl: './tabs.component.html',
    styleUrl: './tabs.component.scss'
})
export class TabsComponent {
    tabs = [1, 2, 3];
}
