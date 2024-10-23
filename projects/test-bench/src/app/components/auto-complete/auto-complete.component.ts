import {Component, OnInit} from '@angular/core';
import {NzAutocompleteModule} from 'ng-zorro-antd/auto-complete';
import {NzSafeAny} from 'ng-zorro-antd/core/types';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'ui-auto-complete',
    standalone: true,
    imports: [NzAutocompleteModule, CardWrapperComponent, NzInputModule, NzIconModule, FormsModule],
    templateUrl: './auto-complete.component.html',
    styleUrl: './auto-complete.component.scss'
})
export class AutoCompleteComponent implements OnInit {
    inputValue?: string;
    optionGroups: NzSafeAny[] = [];

    constructor() {}

    onChange(value: string): void {
        console.log(value);
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.optionGroups = [
                {
                    title: '话题',
                    children: [
                        {
                            title: 'AntDesign',
                            count: 10000
                        },
                        {
                            title: 'AntDesign UI',
                            count: 10600
                        }
                    ]
                },
                {
                    title: '问题',
                    children: [
                        {
                            title: 'AntDesign UI 有多好',
                            count: 60100
                        },
                        {
                            title: 'AntDesign 是啥',
                            count: 30010
                        }
                    ]
                },
                {
                    title: '文章',
                    children: [
                        {
                            title: 'AntDesign 是一个设计语言',
                            count: 100000
                        }
                    ]
                }
            ];
        }, 1000);
    }
}
