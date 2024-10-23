import {Component, OnInit} from '@angular/core';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';
import {NzOptionComponent, NzSelectComponent, NzSelectModule} from 'ng-zorro-antd/select';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'ui-select',
    standalone: true,
    imports: [CardWrapperComponent, FormsModule, NzSelectModule],
    templateUrl: './select.component.html',
    styleUrl: './select.component.scss'
})
export class SelectComponent implements OnInit {
    listOfOption: Array<{label: string; value: string}> = [];
    multipleValue = ['a10', 'c12'];

    ngOnInit(): void {
        const children: Array<{label: string; value: string}> = [];
        for (let i = 10; i < 36; i++) {
            children.push({label: i.toString(36) + i, value: i.toString(36) + i});
        }
        this.listOfOption = children;
    }
}
