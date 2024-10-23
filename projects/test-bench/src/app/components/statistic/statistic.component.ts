import {Component} from '@angular/core';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzStatisticModule} from 'ng-zorro-antd/statistic';
import {DecimalPipe} from '@angular/common';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';

@Component({
    selector: 'ui-statistic',
    standalone: true,
    imports: [NzCardModule, NzGridModule, NzIconModule, NzStatisticModule, DecimalPipe, CardWrapperComponent],
    templateUrl: './statistic.component.html',
    styleUrl: './statistic.component.scss'
})
export class StatisticComponent {}
