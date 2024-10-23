import {Component} from '@angular/core';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';
import {NzColorPickerModule} from 'ng-zorro-antd/color-picker';

@Component({
    selector: 'ui-color-picker',
    standalone: true,
    imports: [CardWrapperComponent, NzColorPickerModule],
    templateUrl: './color-picker.component.html',
    styleUrl: './color-picker.component.scss'
})
export class ColorPickerComponent {}
