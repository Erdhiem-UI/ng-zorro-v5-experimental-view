import {Component} from '@angular/core';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzDescriptionsModule} from 'ng-zorro-antd/descriptions';
import {NzPageHeaderModule} from 'ng-zorro-antd/page-header';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';
import {NzSpaceModule} from 'ng-zorro-antd/space';

@Component({
    selector: 'ui-page-header',
    standalone: true,
    imports: [
        NzButtonComponent,
        NzPageHeaderModule,
        NzDescriptionsModule,
        NzIconModule,
        CardWrapperComponent,
        NzSpaceModule
    ],
    templateUrl: './page-header.component.html',
    styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {}
