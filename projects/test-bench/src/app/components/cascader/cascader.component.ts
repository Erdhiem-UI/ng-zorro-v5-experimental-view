import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NzCascaderModule} from 'ng-zorro-antd/cascader';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';

const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                        isLeaf: true
                    }
                ]
            },
            {
                value: 'ningbo',
                label: 'Ningbo',
                isLeaf: true
            }
        ]
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                        isLeaf: true
                    }
                ]
            }
        ]
    }
];

const otherOptions = [
    {
        value: 'fujian',
        label: 'Fujian',
        children: [
            {
                value: 'xiamen',
                label: 'Xiamen',
                children: [
                    {
                        value: 'Kulangsu',
                        label: 'Kulangsu',
                        isLeaf: true
                    }
                ]
            }
        ]
    },
    {
        value: 'guangxi',
        label: 'Guangxi',
        children: [
            {
                value: 'guilin',
                label: 'Guilin',
                children: [
                    {
                        value: 'Lijiang',
                        label: 'Li Jiang River',
                        isLeaf: true
                    }
                ]
            }
        ]
    }
];

@Component({
    selector: 'ui-cascader',
    standalone: true,
    imports: [FormsModule, NzCascaderModule, CardWrapperComponent],
    templateUrl: './cascader.component.html',
    styleUrl: './cascader.component.scss'
})
export class CascaderComponent implements OnInit {
    nzOptions: any[] | null = null;
    values: any[] | null = null;

    ngOnInit(): void {
        setTimeout(() => {
            this.nzOptions = options;
        }, 100);
    }

    changeNzOptions(): void {
        if (this.nzOptions === options) {
            this.nzOptions = otherOptions;
        } else {
            this.nzOptions = options;
        }
    }
}
