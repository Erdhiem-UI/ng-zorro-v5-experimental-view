import {Component} from '@angular/core';
import {NzCarouselModule} from 'ng-zorro-antd/carousel';
import {CardWrapperComponent} from '../card-wrapper/card-wrapper.component';

@Component({
    selector: 'ui-carousel',
    standalone: true,
    imports: [NzCarouselModule, CardWrapperComponent],
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
    array = [1, 2, 3, 4];
}
