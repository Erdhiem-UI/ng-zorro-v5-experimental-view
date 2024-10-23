import {Component} from '@angular/core';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzMessageService} from 'ng-zorro-antd/message';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';

@Component({
    selector: 'ui-message',
    standalone: true,
    imports: [NzButtonModule, CardWrapperComponent],
    templateUrl: './message.component.html',
    styleUrl: './message.component.scss'
})
export class MessageComponent {
    createMessage(type: string): void {
        this.message.create(type, `This is a message of ${type}`);
    }

    constructor(private message: NzMessageService) {}
}
