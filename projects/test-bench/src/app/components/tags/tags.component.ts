import {Component} from '@angular/core';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';
import {NzTagModule} from 'ng-zorro-antd/tag';
import {presetColors} from 'ng-zorro-antd/core/color';

@Component({
    selector: 'ui-tags',
    standalone: true,
    imports: [CardWrapperComponent, NzTagModule],
    templateUrl: './tags.component.html',
    styleUrl: './tags.component.scss'
})
export class TagsComponent {
    public tagColors = presetColors;
}
