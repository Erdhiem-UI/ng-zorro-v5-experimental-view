import {Component} from '@angular/core';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzNotificationModule, NzNotificationService} from 'ng-zorro-antd/notification';

@Component({
    selector: 'ui-notification',
    standalone: true,
    imports: [CardWrapperComponent, NzButtonModule, NzIconModule, NzNotificationModule],
    templateUrl: './notification.component.html',
    styleUrl: './notification.component.scss'
})
export class NotificationComponent {
    createNotification(type: string): void {
        this.notification.create(
            type,
            'Notification Title',
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
        );
    }

    constructor(private notification: NzNotificationService) {}
}
