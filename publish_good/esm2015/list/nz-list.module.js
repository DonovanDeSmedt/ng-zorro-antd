/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAvatarModule } from '../avatar/nz-avatar.module';
import { NzGridModule } from '../grid/nz-grid.module';
import { NzI18nModule } from '../i18n/nz-i18n.module';
import { NzSpinModule } from '../spin/nz-spin.module';
import { NzListItemMetaComponent } from './nz-list-item-meta.component';
import { NzListItemComponent } from './nz-list-item.component';
import { NzListComponent } from './nz-list.component';
export class NzListModule {
}
NzListModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NzSpinModule, NzGridModule, NzAvatarModule, NzI18nModule],
                declarations: [NzListComponent, NzListItemComponent, NzListItemMetaComponent],
                exports: [NzListComponent, NzListItemComponent, NzListItemMetaComponent]
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibGlzdC9uei1saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXRELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQU90RCxNQUFNOzs7WUFMTCxRQUFRLFNBQUM7Z0JBQ04sT0FBTyxFQUFTLENBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLFlBQVksQ0FBRTtnQkFDMUYsWUFBWSxFQUFJLENBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLHVCQUF1QixDQUFFO2dCQUNqRixPQUFPLEVBQVMsQ0FBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsdUJBQXVCLENBQUU7YUFDcEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpBdmF0YXJNb2R1bGUgfSBmcm9tICcuLi9hdmF0YXIvbnotYXZhdGFyLm1vZHVsZSc7XG5pbXBvcnQgeyBOekdyaWRNb2R1bGUgfSBmcm9tICcuLi9ncmlkL256LWdyaWQubW9kdWxlJztcbmltcG9ydCB7IE56STE4bk1vZHVsZSB9IGZyb20gJy4uL2kxOG4vbnotaTE4bi5tb2R1bGUnO1xuaW1wb3J0IHsgTnpTcGluTW9kdWxlIH0gZnJvbSAnLi4vc3Bpbi9uei1zcGluLm1vZHVsZSc7XG5cbmltcG9ydCB7IE56TGlzdEl0ZW1NZXRhQ29tcG9uZW50IH0gZnJvbSAnLi9uei1saXN0LWl0ZW0tbWV0YS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbnotbGlzdC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekxpc3RDb21wb25lbnQgfSBmcm9tICcuL256LWxpc3QuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiAgICAgICAgWyBDb21tb25Nb2R1bGUsIE56U3Bpbk1vZHVsZSwgTnpHcmlkTW9kdWxlLCBOekF2YXRhck1vZHVsZSwgTnpJMThuTW9kdWxlIF0sXG4gICAgZGVjbGFyYXRpb25zOiAgIFsgTnpMaXN0Q29tcG9uZW50LCBOekxpc3RJdGVtQ29tcG9uZW50LCBOekxpc3RJdGVtTWV0YUNvbXBvbmVudCBdLFxuICAgIGV4cG9ydHM6ICAgICAgICBbIE56TGlzdENvbXBvbmVudCwgTnpMaXN0SXRlbUNvbXBvbmVudCwgTnpMaXN0SXRlbU1ldGFDb21wb25lbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBOekxpc3RNb2R1bGUge1xufVxuIl19