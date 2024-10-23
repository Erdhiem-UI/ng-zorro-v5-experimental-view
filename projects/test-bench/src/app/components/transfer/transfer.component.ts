import {Component, OnInit} from '@angular/core';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';
import {NzTransferModule, TransferItem} from 'ng-zorro-antd/transfer';

@Component({
    selector: 'ui-transfer',
    standalone: true,
    imports: [CardWrapperComponent, NzTransferModule],
    templateUrl: './transfer.component.html',
    styleUrl: './transfer.component.scss'
})
export class TransferComponent implements OnInit {
    list: TransferItem[] = [];
    disabled = false;

    ngOnInit(): void {
        for (let i = 0; i < 20; i++) {
            this.list.push({
                key: i.toString(),
                title: `content${i + 1}`,
                disabled: i % 3 < 1
            });
        }

        [2, 3].forEach((idx) => (this.list[idx].direction = 'right'));
    }

    select(ret: {}): void {
        console.log('nzSelectChange', ret);
    }

    change(ret: {}): void {
        console.log('nzChange', ret);
    }
}
