import {Component} from '@angular/core';
import {NzQRCodeModule} from 'ng-zorro-antd/qr-code';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';

@Component({
    selector: 'ui-qr-code',
    standalone: true,
    imports: [NzQRCodeModule, CardWrapperComponent],
    templateUrl: './qr-code.component.html',
    styleUrl: './qr-code.component.scss'
})
export class QrCodeComponent {}
