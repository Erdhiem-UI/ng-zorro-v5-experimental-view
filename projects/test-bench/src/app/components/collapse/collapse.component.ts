import {Component} from '@angular/core';
import {NzCollapseModule} from 'ng-zorro-antd/collapse';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';

@Component({
    selector: 'ui-collapse',
    standalone: true,
    imports: [NzCollapseModule, CardWrapperComponent],
    templateUrl: './collapse.component.html',
    styleUrl: './collapse.component.scss'
})
export class CollapseComponent {
    panels = [
        {
            active: true,
            name: 'This is panel header 1',
            disabled: false
        },
        {
            active: false,
            disabled: false,
            name: 'This is panel header 2'
        },
        {
            active: false,
            disabled: true,
            name: 'This is panel header 3'
        }
    ];
}
