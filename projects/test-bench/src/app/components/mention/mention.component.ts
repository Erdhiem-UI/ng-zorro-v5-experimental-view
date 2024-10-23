import {Component} from '@angular/core';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';
import {NzMentionModule} from 'ng-zorro-antd/mention';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {ReactiveFormsModule} from '@angular/forms';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon';

@Component({
    selector: 'ui-mention',
    standalone: true,
    imports: [
        CardWrapperComponent,
        NzGridModule,
        NzMentionModule,
        NzFormModule,
        NzInputModule,
        ReactiveFormsModule,
        NzButtonModule,
        NzIconModule
    ],
    templateUrl: './mention.component.html',
    styleUrl: './mention.component.scss'
})
export class MentionComponent {
    suggestions = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご', 'ParsaArvaneh'];
}
