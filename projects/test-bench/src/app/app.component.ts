import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NzButtonComponent} from 'ng-zorro-antd/button';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NzButtonComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'test-bench';
}
