import {Component} from '@angular/core';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';
import {NzPaginationModule} from 'ng-zorro-antd/pagination';

@Component({
    selector: 'ui-pagination',
    standalone: true,
    imports: [NzPaginationModule, CardWrapperComponent],
    templateUrl: './pagination.component.html',
    styleUrl: './pagination.component.scss'
})
export class PaginationComponent {}
