import {Component} from '@angular/core';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';
import {NzPopconfirmModule} from 'ng-zorro-antd/popconfirm';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
    selector: 'ui-popconfirm',
    standalone: true,
    imports: [CardWrapperComponent, NzPopconfirmModule, NzButtonModule, NzIconModule],
    templateUrl: './popconfirm.component.html',
    styleUrl: './popconfirm.component.scss'
})
export class PopconfirmComponent {
    cancel(): void {
        this.nzMessageService.info('click cancel');
    }

    confirm(): void {
        this.nzMessageService.info('click confirm');
    }

    constructor(private nzMessageService: NzMessageService) {}
}
