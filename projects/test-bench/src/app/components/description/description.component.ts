import {Component} from '@angular/core';
import {NzDescriptionsModule} from 'ng-zorro-antd/descriptions';
import {NzBadgeComponent} from 'ng-zorro-antd/badge';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';

@Component({
    selector: 'ui-description',
    standalone: true,
    imports: [NzDescriptionsModule, NzBadgeComponent, CardWrapperComponent],
    templateUrl: './description.component.html',
    styleUrl: './description.component.scss'
})
export class DescriptionComponent {}
