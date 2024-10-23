import {Component, Input} from '@angular/core';
import {NzCardComponent} from 'ng-zorro-antd/card';
import {NzRibbonComponent} from 'ng-zorro-antd/badge';

@Component({
    selector: 'card-wrapper',
    standalone: true,
    imports: [NzCardComponent, NzRibbonComponent],
    templateUrl: './card-wrapper.component.html',
    styleUrl: './card-wrapper.component.scss'
})
export class CardWrapperComponent {
    @Input({required: true}) public title!: string;
}
