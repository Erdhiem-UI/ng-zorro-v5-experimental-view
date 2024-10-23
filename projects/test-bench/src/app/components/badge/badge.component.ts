import {Component} from '@angular/core';
import {NzBadgeModule} from 'ng-zorro-antd/badge';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';

@Component({
    selector: 'ui-badge',
    standalone: true,
    imports: [NzBadgeModule, CardWrapperComponent],
    templateUrl: './badge.component.html',
    styleUrl: './badge.component.scss'
})
export class BadgeComponent {}
