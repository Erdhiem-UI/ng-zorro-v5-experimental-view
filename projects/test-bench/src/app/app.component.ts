import {Component} from '@angular/core';
import {ButtonComponent} from './components/button/button.component';
import {DropdownComponent} from './components/dropdown/dropdown.component';
import {MenuComponent} from './components/menu/menu.component';
import {PageHeaderComponent} from './components/page-header/page-header.component';
import {PaginationComponent} from './components/pagination/pagination.component';
import {AutoCompleteComponent} from './components/auto-complete/auto-complete.component';
import {CascaderComponent} from './components/cascader/cascader.component';
import {CheckboxComponent} from './components/checkbox/checkbox.component';
import {ColorPickerComponent} from './components/color-picker/color-picker.component';
import {DatePickerComponent} from './components/date-picker/date-picker.component';
import {InputComponent} from './components/input/input.component';
import {InputNumberComponent} from './components/input-number/input-number.component';
import {MentionComponent} from './components/mention/mention.component';
import {RadioComponent} from './components/radio/radio.component';
import {SelectComponent} from './components/select/select.component';
import {TimePickerComponent} from './components/time-picker/time-picker.component';
import {TransferComponent} from './components/transfer/transfer.component';
import {TreeSelectComponent} from './components/tree-select/tree-select.component';
import {UploadComponent} from './components/upload/upload.component';
import {BadgeComponent} from './components/badge/badge.component';
import {CalendarComponent} from './components/calendar/calendar.component';
import {CarouselComponent} from './components/carousel/carousel.component';
import {CollapseComponent} from './components/collapse/collapse.component';
import {DescriptionComponent} from './components/description/description.component';
import {ListComponent} from './components/list/list.component';
import {PopoverComponent} from './components/popover/popover.component';
import {QrCodeComponent} from './components/qr-code/qr-code.component';
import {SegmentedComponent} from './components/segmented/segmented.component';
import {StatisticComponent} from './components/statistic/statistic.component';
import {TableComponent} from './components/table/table.component';
import {TabsComponent} from './components/tabs/tabs.component';
import {TagsComponent} from './components/tags/tags.component';
import {TooltipComponent} from './components/tooltip/tooltip.component';
import {TreeComponent} from './components/tree/tree.component';
import {AlertComponent} from './components/alert/alert.component';
import {MessageComponent} from './components/message/message.component';
import {ModalComponent} from './components/modal/modal.component';
import {NotificationComponent} from './components/notification/notification.component';
import {PopconfirmComponent} from './components/popconfirm/popconfirm.component';
import {ResultComponent} from './components/result/result.component';
import {SkeletonComponent} from './components/skeleton/skeleton.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        ButtonComponent,
        DropdownComponent,
        MenuComponent,
        PageHeaderComponent,
        PaginationComponent,
        AutoCompleteComponent,
        CascaderComponent,
        CheckboxComponent,
        ColorPickerComponent,
        DatePickerComponent,
        InputComponent,
        InputNumberComponent,
        MentionComponent,
        RadioComponent,
        SelectComponent,
        TimePickerComponent,
        TransferComponent,
        TreeSelectComponent,
        UploadComponent,
        BadgeComponent,
        CalendarComponent,
        CarouselComponent,
        CollapseComponent,
        DescriptionComponent,
        ListComponent,
        PopoverComponent,
        QrCodeComponent,
        SegmentedComponent,
        StatisticComponent,
        TableComponent,
        TabsComponent,
        TagsComponent,
        TooltipComponent,
        TreeComponent,
        AlertComponent,
        MessageComponent,
        ModalComponent,
        NotificationComponent,
        PopconfirmComponent,
        ResultComponent,
        SkeletonComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'test-bench';
}
