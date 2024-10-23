import {Component} from '@angular/core';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';
import {NzMenuModule} from 'ng-zorro-antd/menu';

@Component({
    selector: 'ui-menu',
    standalone: true,
    imports: [CardWrapperComponent, NzMenuModule],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss'
})
export class MenuComponent {}
