import {Component, TemplateRef, ViewChild} from '@angular/core';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';
import {NzSegmentedModule, NzSegmentedOption} from 'ng-zorro-antd/segmented';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';

@Component({
    selector: 'ui-segmented',
    standalone: true,
    imports: [CardWrapperComponent, NzSegmentedModule, NzAvatarModule],
    templateUrl: './segmented.component.html',
    styleUrl: './segmented.component.scss'
})
export class SegmentedComponent {
    options = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'];

    @ViewChild('temp', {static: true, read: TemplateRef}) templateRef!: TemplateRef<{
        $implicit: NzSegmentedOption;
        index: number;
    }>;

    options2 = [
        {label: 'user1', value: 'user1', useTemplate: true},
        {label: 'user2', value: 'user2', useTemplate: true},
        {label: 'user3', value: 'user3', useTemplate: true}
    ];
}
