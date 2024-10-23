import {Component} from '@angular/core';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';
import {NzResultModule} from 'ng-zorro-antd/result';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon';

@Component({
    selector: 'ui-result',
    standalone: true,
    imports: [CardWrapperComponent, NzResultModule, NzButtonModule, NzIconModule],
    templateUrl: './result.component.html',
    styleUrl: './result.component.scss'
})
export class ResultComponent {}
