import {Component} from '@angular/core';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';
import {NzSkeletonModule} from 'ng-zorro-antd/skeleton';
import {NzSpaceComponent, NzSpaceItemDirective} from 'ng-zorro-antd/space';

@Component({
    selector: 'ui-skeleton',
    standalone: true,
    imports: [CardWrapperComponent, NzSkeletonModule, NzSpaceComponent, NzSpaceItemDirective],
    templateUrl: './skeleton.component.html',
    styleUrl: './skeleton.component.scss'
})
export class SkeletonComponent {
    protected readonly NzSkeletonModule = NzSkeletonModule;
}
