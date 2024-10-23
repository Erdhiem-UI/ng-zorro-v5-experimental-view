import {Component} from '@angular/core';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';
import {NzModalModule, NzModalService} from 'ng-zorro-antd/modal';
import {NzButtonModule} from 'ng-zorro-antd/button';

@Component({
    selector: 'ui-modal',
    standalone: true,
    imports: [CardWrapperComponent, NzModalModule, NzButtonModule],
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.scss'
})
export class ModalComponent {
    constructor(private modal: NzModalService) {}

    info(): void {
        this.modal.info({
            nzTitle: 'This is a notification message',
            nzContent: '<p>some messages...some messages...</p><p>some messages...some messages...</p>',
            nzOnOk: () => console.log('Info OK')
        });
    }

    success(): void {
        this.modal.success({
            nzTitle: 'This is a success message',
            nzContent: 'some messages...some messages...'
        });
    }

    error(): void {
        this.modal.error({
            nzTitle: 'This is an error message',
            nzContent: 'some messages...some messages...'
        });
    }

    warning(): void {
        this.modal.warning({
            nzTitle: 'This is an warning message',
            nzContent: 'some messages...some messages...'
        });
    }

    isVisible = false;
    isConfirmLoading = false;

    showModal(): void {
        this.isVisible = true;
    }

    handleOk(): void {
        this.isConfirmLoading = true;
        setTimeout(() => {
            this.isVisible = false;
            this.isConfirmLoading = false;
        }, 1000);
    }

    handleCancel(): void {
        this.isVisible = false;
    }
}
