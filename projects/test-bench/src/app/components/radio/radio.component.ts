import {Component} from '@angular/core';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';
import {NzRadioModule} from 'ng-zorro-antd/radio';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'ui-radio',
    standalone: true,
    imports: [CardWrapperComponent, NzRadioModule, FormsModule],
    templateUrl: './radio.component.html',
    styleUrl: './radio.component.scss'
})
export class RadioComponent {
    value = 'A';
}
