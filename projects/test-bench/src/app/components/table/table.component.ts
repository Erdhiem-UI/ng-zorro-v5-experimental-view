import {Component, OnInit} from '@angular/core';
import {
    NzTableLayout,
    NzTableModule,
    NzTablePaginationPosition,
    NzTablePaginationType,
    NzTableSize
} from 'ng-zorro-antd/table';
import {FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule} from '@angular/forms';
import {NzSwitchModule} from 'ng-zorro-antd/switch';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzRadioModule} from 'ng-zorro-antd/radio';
import {NzDividerComponent} from 'ng-zorro-antd/divider';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';

interface ItemData {
    name: string;
    age: number | string;
    address: string;
    checked: boolean;
    expand: boolean;
    description: string;
    disabled?: boolean;
}

type TableScroll = 'unset' | 'scroll' | 'fixed';

interface Setting {
    bordered: boolean;
    loading: boolean;
    pagination: boolean;
    sizeChanger: boolean;
    title: boolean;
    header: boolean;
    footer: boolean;
    expandable: boolean;
    checkbox: boolean;
    fixHeader: boolean;
    noResult: boolean;
    ellipsis: boolean;
    simple: boolean;
    size: NzTableSize;
    tableScroll: TableScroll;
    tableLayout: NzTableLayout;
    position: NzTablePaginationPosition;
    paginationType: NzTablePaginationType;
}

@Component({
    selector: 'ui-table',
    standalone: true,
    imports: [
        NzSwitchModule,
        NzTableModule,
        NzFormModule,
        NzRadioModule,
        ReactiveFormsModule,
        NzDividerComponent,
        CardWrapperComponent
    ],
    templateUrl: './table.component.html',
    styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {
    settingForm: FormGroup<{[K in keyof Setting]: FormControl<Setting[K]>}>;
    listOfData: readonly ItemData[] = [];
    displayData: readonly ItemData[] = [];
    allChecked = false;
    indeterminate = false;
    fixedColumn = false;
    scrollX: string | null = null;
    scrollY: string | null = null;
    settingValue: Setting;
    listOfSwitch = [
        {name: 'Bordered', formControlName: 'bordered'},
        {name: 'Title', formControlName: 'title'},
        {name: 'Footer', formControlName: 'footer'}
    ];
    listOfRadio = [];

    currentPageDataChange($event: readonly ItemData[]): void {
        this.displayData = $event;
        this.refreshStatus();
    }

    refreshStatus(): void {
        const validData = this.displayData.filter((value) => !value.disabled);
        const allChecked = validData.length > 0 && validData.every((value) => value.checked === true);
        const allUnChecked = validData.every((value) => !value.checked);
        this.allChecked = allChecked;
        this.indeterminate = !allChecked && !allUnChecked;
    }

    checkAll(value: boolean): void {
        this.displayData.forEach((data) => {
            if (!data.disabled) {
                data.checked = value;
            }
        });
        this.refreshStatus();
    }

    generateData(): readonly ItemData[] {
        const data = [];
        for (let i = 1; i <= 100; i++) {
            data.push({
                name: 'John Brown',
                age: `${i}2`,
                address: `New York No. ${i} Lake Park`,
                description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
                checked: false,
                expand: false
            });
        }
        return data;
    }

    constructor(private formBuilder: NonNullableFormBuilder) {
        this.settingForm = this.formBuilder.group({
            bordered: [true],
            loading: [false],
            pagination: [true],
            sizeChanger: [true],
            title: [true],
            header: [true],
            footer: [true],
            expandable: [true],
            checkbox: [true],
            fixHeader: [false],
            noResult: [false],
            ellipsis: [false],
            simple: [false],
            size: 'middle' as NzTableSize,
            paginationType: 'default' as NzTablePaginationType,
            tableScroll: 'unset' as TableScroll,
            tableLayout: 'auto' as NzTableLayout,
            position: 'bottom' as NzTablePaginationPosition
        });

        this.settingValue = this.settingForm.value as Setting;
    }

    ngOnInit(): void {
        this.settingForm.valueChanges.subscribe((value) => {
            this.settingValue = value as Setting;
        });
        this.settingForm.controls.tableScroll.valueChanges.subscribe((scroll) => {
            this.fixedColumn = scroll === 'fixed';
            this.scrollX = scroll === 'scroll' || scroll === 'fixed' ? '100vw' : null;
        });
        this.settingForm.controls.fixHeader.valueChanges.subscribe((fixed) => {
            this.scrollY = fixed ? '240px' : null;
        });
        this.settingForm.controls.noResult.valueChanges.subscribe((empty) => {
            if (empty) {
                this.listOfData = [];
            } else {
                this.listOfData = this.generateData();
            }
        });
        this.listOfData = this.generateData();
    }
}
