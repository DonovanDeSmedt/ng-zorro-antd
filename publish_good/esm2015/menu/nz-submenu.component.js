/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Host, HostBinding, Input, Optional, Output, QueryList, SkipSelf, ViewChild } from '@angular/core';
import { combineLatest, BehaviorSubject, Subject } from 'rxjs';
import { auditTime, map, takeUntil } from 'rxjs/operators';
import { POSITION_MAP } from '../core/overlay/overlay-position-map';
import { toBoolean } from '../core/util/convert';
import { NzDropDownButtonComponent } from '../dropdown/nz-dropdown-button.component';
import { NzDropDownComponent } from '../dropdown/nz-dropdown.component';
import { NzMenuDirective } from './nz-menu.directive';
export class NzSubMenuComponent {
    /**
     * @param {?} nzMenuDirective
     * @param {?} cd
     * @param {?} nzSubMenuComponent
     * @param {?} nzDropDownComponent
     * @param {?} nzDropDownButtonComponent
     */
    constructor(nzMenuDirective, cd, nzSubMenuComponent, nzDropDownComponent, nzDropDownButtonComponent) {
        this.nzMenuDirective = nzMenuDirective;
        this.cd = cd;
        this.nzSubMenuComponent = nzSubMenuComponent;
        this.nzDropDownComponent = nzDropDownComponent;
        this.nzDropDownButtonComponent = nzDropDownButtonComponent;
        this._open = false;
        this._disabled = false;
        this.$mouseSubject = new Subject();
        this.unsubscribe$ = new Subject();
        this.placement = 'rightTop';
        this.$subOpen = new BehaviorSubject(false);
        this.isInDropDown = false;
        this.isInSubMenu = false;
        this.level = 1;
        this.triggerWidth = null;
        this.nzOpenChange = new EventEmitter();
        this.handleOpenEvent = (data) => {
            if (this.nzDisabled) {
                return;
            }
            if (this.nzOpen !== data) {
                this.nzOpen = data;
                this.nzOpenChange.emit(this.nzOpen);
            }
            if (this.nzSubMenuComponent) {
                this.nzSubMenuComponent.$subOpen.next(this.nzOpen);
            }
            if (this.nzDropDownComponent) {
                this.nzDropDownComponent.$subOpen.next(this.nzOpen);
            }
            if (this.nzDropDownButtonComponent) {
                this.nzDropDownButtonComponent.$subOpen.next(this.nzOpen);
            }
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzOpen(value) {
        this._open = toBoolean(value);
        this.setTriggerWidth();
    }
    /**
     * @return {?}
     */
    get nzOpen() {
        return this._open;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabled(value) {
        this._disabled = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzDisabled() {
        return this._disabled;
    }
    /**
     * @return {?}
     */
    get subItemSelected() {
        return !!this.nzMenuDirective.menuItems.find(e => e.nzSelected && e.nzSubMenuComponent === this);
    }
    /**
     * @return {?}
     */
    get submenuSelected() {
        return !!this.subMenus.toArray().find(e => e !== this && e.subItemSelected);
    }
    /**
     * @return {?}
     */
    get expandState() {
        if (this.nzOpen && this.subMenuMode === 'inline') {
            return 'expand';
        }
        else if (this.nzOpen && this.subMenuMode === 'horizontal') {
            return 'bottom';
        }
        else if (this.nzOpen && this.subMenuMode === 'vertical') {
            return 'fade';
        }
        else {
            return 'hidden';
        }
    }
    /**
     * @return {?}
     */
    get overlayPositions() {
        if (this.subMenuMode === 'horizontal') {
            return [POSITION_MAP["bottomLeft"]];
        }
        else {
            return [POSITION_MAP["rightTop"], POSITION_MAP["leftTop"]];
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    clickSubMenuTitle($event) {
        if (this.nzDisabled) {
            $event.preventDefault();
            $event.stopPropagation();
            return;
        }
        if ((this.subMenuMode === 'inline') && (!this.isInDropDown)) {
            this.nzOpen = !this.nzOpen;
            this.nzOpenChange.emit(this.nzOpen);
        }
    }
    /**
     * @return {?}
     */
    clickSubMenuDropDown() {
        if (this.isInDropDown || (this.subMenuMode === 'vertical') || (this.subMenuMode === 'horizontal')) {
            this.$mouseSubject.next(false);
        }
    }
    /**
     * @return {?}
     */
    get subMenuMode() {
        if (this.nzMenuDirective.nzMode === 'inline') {
            return 'inline';
        }
        else if ((this.nzMenuDirective.nzMode === 'vertical') || (this.isInSubMenu)) {
            return 'vertical';
        }
        else {
            return 'horizontal';
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMouseEnterEvent(e) {
        if ((this.subMenuMode === 'horizontal') || (this.subMenuMode === 'vertical') || this.isInDropDown) {
            this.$mouseSubject.next(true);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMouseLeaveEvent(e) {
        if ((this.subMenuMode === 'horizontal') || (this.subMenuMode === 'vertical') || this.isInDropDown) {
            this.$mouseSubject.next(false);
        }
    }
    /**
     * @return {?}
     */
    get setDropDownSubmenuClass() {
        return this.isInDropDown;
    }
    /**
     * @return {?}
     */
    get setMenuSubmenuOpenClass() {
        return (!this.isInDropDown) && (this.nzOpen);
    }
    /**
     * @return {?}
     */
    get setDropDownVerticalClass() {
        return this.isInDropDown && (this.subMenuMode === 'vertical');
    }
    /**
     * @return {?}
     */
    get setDropDownHorizontalClass() {
        return this.isInDropDown && (this.subMenuMode === 'horizontal');
    }
    /**
     * @return {?}
     */
    get setDropDownDisabled() {
        return this.isInDropDown && this.nzDisabled;
    }
    /**
     * @return {?}
     */
    get setMenuSubmenuClass() {
        return !this.isInDropDown;
    }
    /**
     * @return {?}
     */
    get setMenuSubmenuSelectedClass() {
        return this.submenuSelected || this.subItemSelected;
    }
    /**
     * @return {?}
     */
    get setMenuVerticalClass() {
        return (!this.isInDropDown) && (this.subMenuMode === 'vertical');
    }
    /**
     * @return {?}
     */
    get setMenuHorizontalClass() {
        return (!this.isInDropDown) && (this.subMenuMode === 'horizontal');
    }
    /**
     * @return {?}
     */
    get setMenuInlineClass() {
        return (!this.isInDropDown) && (this.subMenuMode === 'inline');
    }
    /**
     * @return {?}
     */
    get setMenuDisabled() {
        return (!this.isInDropDown) && this.nzDisabled;
    }
    /**
     * @return {?}
     */
    setTriggerWidth() {
        if (this.subMenuMode === 'horizontal') {
            this.triggerWidth = this.trigger.nativeElement.getBoundingClientRect().width;
            /** should remove after after https://github.com/angular/material2/pull/8765 merged **/
            if (this.cdkOverlay && this.cdkOverlay.overlayRef) {
                this.cdkOverlay.overlayRef.updateSize({
                    width: this.triggerWidth
                });
            }
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPositionChange($event) {
        if ($event.connectionPair) {
            /** @type {?} */
            const originMap = {
                originX: $event.connectionPair.originX,
                originY: $event.connectionPair.originY,
                overlayX: $event.connectionPair.overlayX,
                overlayY: $event.connectionPair.overlayY
            };
            /** @type {?} */
            const keyList = ['originX', 'originY', 'overlayX', 'overlayY'];
            if (keyList.every(key => originMap[key] === POSITION_MAP["leftTop"][key])) {
                this.placement = 'leftTop';
            }
            else if (keyList.every(key => originMap[key] === POSITION_MAP["rightTop"][key])) {
                this.placement = 'rightTop';
            }
            this.cd.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.nzSubMenuComponent) {
            this.level = this.nzSubMenuComponent.level + 1;
            this.isInSubMenu = true;
        }
        this.nzMenuDirective.subMenus.push(this);
        /** @type {?} */
        const $combineAll = combineLatest(this.$subOpen, this.$mouseSubject.asObservable()).pipe(map(value => value[0] || value[1]), auditTime(150));
        $combineAll.pipe(takeUntil(this.unsubscribe$)).subscribe(this.handleOpenEvent);
        this.isInDropDown = this.nzMenuDirective.nzInDropDown;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
NzSubMenuComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-submenu]',
                preserveWhitespaces: false,
                animations: [
                    trigger('expandAnimation', [
                        state('expand', style({ height: '*' })),
                        state('hidden', style({ height: 0, overflow: 'hidden' })),
                        transition('expand => hidden', animate(150)),
                        transition('hidden => expand', animate(150)),
                        state('fade', style({ opacity: 1 })),
                        transition('fade => void', [
                            animate(150, style({ opacity: 0 }))
                        ]),
                        transition('void => fade', [
                            style({ opacity: '0' }),
                            animate(150)
                        ]),
                        state('bottom', style({
                            opacity: 1,
                            transform: 'scaleY(1)',
                            transformOrigin: '0% 0%'
                        })),
                        transition('void => bottom', [
                            style({
                                opacity: 0,
                                transform: 'scaleY(0.8)',
                                transformOrigin: '0% 0%'
                            }),
                            animate('150ms cubic-bezier(0.23, 1, 0.32, 1)')
                        ]),
                        transition('bottom => void', [
                            animate('150ms cubic-bezier(0.23, 1, 0.32, 1)', style({
                                opacity: 0,
                                transform: 'scaleY(0.8)',
                                transformOrigin: '0% 0%'
                            }))
                        ])
                    ])
                ],
                template: "<div\n  #trigger\n  cdkOverlayOrigin\n  #origin=\"cdkOverlayOrigin\"\n  [class.ant-dropdown-menu-submenu-title]=\"isInDropDown\"\n  [class.ant-menu-submenu-title]=\"!isInDropDown\"\n  (mouseenter)=\"onMouseEnterEvent($event)\"\n  (mouseleave)=\"onMouseLeaveEvent($event)\"\n  (click)=\"clickSubMenuTitle($event)\"\n  [style.paddingLeft.px]=\"(nzMenuDirective.nzMode === 'inline')?(level*nzMenuDirective.nzInlineIndent):null\">\n  <ng-content select=\"[title]\"></ng-content>\n  <span *ngIf=\"isInDropDown; else notDropdownTpl\" class=\"ant-dropdown-menu-submenu-arrow\">\n    <i nz-icon type=\"right\" class=\"anticon-right ant-dropdown-menu-submenu-arrow-icon\"></i>\n  </span>\n  <ng-template #notDropdownTpl>\n    <i class=\"ant-menu-submenu-arrow\"></i>\n  </ng-template>\n</div>\n<ul\n  [class.ant-dropdown-menu]=\"isInDropDown\"\n  [@expandAnimation]=\"expandState\"\n  [class.ant-menu]=\"!isInDropDown\"\n  [class.ant-dropdown-menu-vertical]=\"isInDropDown\"\n  [class.ant-menu-inline]=\"!isInDropDown\"\n  [class.ant-dropdown-menu-sub]=\"isInDropDown\"\n  [class.ant-menu-sub]=\"!isInDropDown\"\n  (mouseleave)=\"onMouseLeaveEvent($event)\"\n  (mouseenter)=\"onMouseEnterEvent($event)\"\n  *ngIf=\"(nzMenuDirective.nzMode=='inline')\">\n  <ng-template [ngTemplateOutlet]=\"subMenuTemplate\"></ng-template>\n</ul>\n<ng-template\n  cdkConnectedOverlay\n  [cdkConnectedOverlayPositions]=\"overlayPositions\"\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayWidth]=\"triggerWidth\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayOpen]=\"nzOpen&&(nzMenuDirective.nzMode!='inline')\">\n  <div\n    class=\"ant-menu-submenu ant-menu-submenu-popup\"\n    [class.ant-menu-light]=\"nzMenuDirective.nzTheme=='light'\"\n    [class.ant-menu-dark]=\"nzMenuDirective.nzTheme=='dark'\"\n    [class.ant-menu-submenu-placement-bottomLeft]=\"subMenuMode=='horizontal'\"\n    [class.ant-menu-submenu-placement-rightTop]=\"(subMenuMode=='vertical')&&(placement=='rightTop')\"\n    [class.ant-menu-submenu-placement-leftTop]=\"(subMenuMode=='vertical')&&(placement=='leftTop')\"\n    [@expandAnimation]=\"expandState\"\n    (mouseleave)=\"onMouseLeaveEvent($event)\"\n    (mouseenter)=\"onMouseEnterEvent($event)\">\n    <ul\n      [class.ant-dropdown-menu]=\"isInDropDown\"\n      [class.ant-menu]=\"!isInDropDown\"\n      [class.ant-dropdown-menu-vertical]=\"isInDropDown\"\n      [class.ant-menu-vertical]=\"!isInDropDown\"\n      [class.ant-dropdown-menu-sub]=\"isInDropDown\"\n      [class.ant-menu-sub]=\"!isInDropDown\">\n      <ng-template [ngTemplateOutlet]=\"subMenuTemplate\"></ng-template>\n    </ul>\n  </div>\n</ng-template>\n<ng-template #subMenuTemplate>\n  <ng-content></ng-content>\n</ng-template>",
                styles: [`
      .ant-menu-submenu-placement-bottomLeft {
        top: 6px;
        position: relative;
      }

      .ant-menu-submenu-placement-rightTop {
        left: 4px;
        position: relative;
      }

      .ant-menu-submenu-placement-leftTop {
        right: 4px;
        position: relative;
      }
    `]
            }] }
];
/** @nocollapse */
NzSubMenuComponent.ctorParameters = () => [
    { type: NzMenuDirective },
    { type: ChangeDetectorRef },
    { type: NzSubMenuComponent, decorators: [{ type: SkipSelf }, { type: Optional }] },
    { type: NzDropDownComponent, decorators: [{ type: Host }, { type: Optional }] },
    { type: NzDropDownButtonComponent, decorators: [{ type: Host }, { type: Optional }] }
];
NzSubMenuComponent.propDecorators = {
    subMenus: [{ type: ContentChildren, args: [NzSubMenuComponent, { descendants: true },] }],
    nzOpenChange: [{ type: Output }],
    cdkOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay,] }],
    trigger: [{ type: ViewChild, args: ['trigger',] }],
    nzOpen: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    setDropDownSubmenuClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu-submenu',] }],
    setMenuSubmenuOpenClass: [{ type: HostBinding, args: ['class.ant-menu-submenu-open',] }],
    setDropDownVerticalClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu-submenu-vertical',] }],
    setDropDownHorizontalClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu-submenu-horizontal',] }],
    setDropDownDisabled: [{ type: HostBinding, args: ['class.ant-dropdown-menu-submenu-disabled',] }],
    setMenuSubmenuClass: [{ type: HostBinding, args: ['class.ant-menu-submenu',] }],
    setMenuSubmenuSelectedClass: [{ type: HostBinding, args: ['class.ant-menu-submenu-selected',] }],
    setMenuVerticalClass: [{ type: HostBinding, args: ['class.ant-menu-submenu-vertical',] }],
    setMenuHorizontalClass: [{ type: HostBinding, args: ['class.ant-menu-submenu-horizontal',] }],
    setMenuInlineClass: [{ type: HostBinding, args: ['class.ant-menu-submenu-inline',] }],
    setMenuDisabled: [{ type: HostBinding, args: ['class.ant-menu-submenu-disabled',] }]
};
function NzSubMenuComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSubMenuComponent.prototype._open;
    /** @type {?} */
    NzSubMenuComponent.prototype._disabled;
    /** @type {?} */
    NzSubMenuComponent.prototype.$mouseSubject;
    /** @type {?} */
    NzSubMenuComponent.prototype.unsubscribe$;
    /** @type {?} */
    NzSubMenuComponent.prototype.placement;
    /** @type {?} */
    NzSubMenuComponent.prototype.$subOpen;
    /** @type {?} */
    NzSubMenuComponent.prototype.isInDropDown;
    /** @type {?} */
    NzSubMenuComponent.prototype.isInSubMenu;
    /** @type {?} */
    NzSubMenuComponent.prototype.level;
    /** @type {?} */
    NzSubMenuComponent.prototype.triggerWidth;
    /** @type {?} */
    NzSubMenuComponent.prototype.subMenus;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzOpenChange;
    /** @type {?} */
    NzSubMenuComponent.prototype.cdkOverlay;
    /** @type {?} */
    NzSubMenuComponent.prototype.trigger;
    /** @type {?} */
    NzSubMenuComponent.prototype.handleOpenEvent;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzMenuDirective;
    /** @type {?} */
    NzSubMenuComponent.prototype.cd;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzSubMenuComponent;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzDropDownComponent;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzDropDownButtonComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3VibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibWVudS9uei1zdWJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsbUJBQW1CLEVBQTBELE1BQU0sc0JBQXNCLENBQUM7QUFDbkgsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLFdBQVcsRUFDWCxLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsUUFBUSxFQUNSLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNyRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUV4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUE4RHRELE1BQU07Ozs7Ozs7O0lBaU5KLFlBQW1CLGVBQWdDLEVBQVUsRUFBcUIsRUFBa0Msa0JBQXNDLEVBQThCLG1CQUF3QyxFQUE4Qix5QkFBb0Q7UUFBL1Isb0JBQWUsR0FBZixlQUFlLENBQWlC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RCxNQUFNO3lCQUNOLFNBQVMsU0FBQyxtQkFBbUI7c0JBQzdCLFNBQVMsU0FBQyxTQUFTO3FCQUVuQixLQUFLO3lCQVVMLEtBQUs7c0NBNkVMLFdBQVcsU0FBQyxpQ0FBaUM7c0NBSzdDLFdBQVcsU0FBQyw2QkFBNkI7dUNBS3pDLFdBQVcsU0FBQywwQ0FBMEM7eUNBS3RELFdBQVcsU0FBQyw0Q0FBNEM7a0NBS3hELFdBQVcsU0FBQywwQ0FBMEM7a0NBS3RELFdBQVcsU0FBQyx3QkFBd0I7MENBS3BDLFdBQVcsU0FBQyxpQ0FBaUM7bUNBSzdDLFdBQVcsU0FBQyxpQ0FBaUM7cUNBSzdDLFdBQVcsU0FBQyxtQ0FBbUM7aUNBSy9DLFdBQVcsU0FBQywrQkFBK0I7OEJBSzNDLFdBQVcsU0FBQyxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXksIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSwgQ29ubmVjdGlvblBvc2l0aW9uUGFpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFNraXBTZWxmLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgYXVkaXRUaW1lLCBtYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUE9TSVRJT05fTUFQIH0gZnJvbSAnLi4vY29yZS9vdmVybGF5L292ZXJsYXktcG9zaXRpb24tbWFwJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IE56RHJvcERvd25CdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi9kcm9wZG93bi9uei1kcm9wZG93bi1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IE56RHJvcERvd25Db21wb25lbnQgfSBmcm9tICcuLi9kcm9wZG93bi9uei1kcm9wZG93bi5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBOek1lbnVEaXJlY3RpdmUgfSBmcm9tICcuL256LW1lbnUuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdbbnotc3VibWVudV0nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogW1xuICAgIHRyaWdnZXIoJ2V4cGFuZEFuaW1hdGlvbicsIFtcbiAgICAgIHN0YXRlKCdleHBhbmQnLCBzdHlsZSh7IGhlaWdodDogJyonIH0pKSxcbiAgICAgIHN0YXRlKCdoaWRkZW4nLCBzdHlsZSh7IGhlaWdodDogMCwgb3ZlcmZsb3c6ICdoaWRkZW4nIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2V4cGFuZCA9PiBoaWRkZW4nLCBhbmltYXRlKDE1MCkpLFxuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IGV4cGFuZCcsIGFuaW1hdGUoMTUwKSksXG4gICAgICBzdGF0ZSgnZmFkZScsIHN0eWxlKHsgb3BhY2l0eTogMSB9KSksXG4gICAgICB0cmFuc2l0aW9uKCdmYWRlID0+IHZvaWQnLCBbXG4gICAgICAgIGFuaW1hdGUoMTUwLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gZmFkZScsIFtcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSksXG4gICAgICAgIGFuaW1hdGUoMTUwKVxuICAgICAgXSksXG4gICAgICBzdGF0ZSgnYm90dG9tJywgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5ICAgICAgICA6IDEsXG4gICAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgxKScsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xuICAgICAgfSkpLFxuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiBib3R0b20nLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5ICAgICAgICA6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDAuOCknLFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTUwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignYm90dG9tID0+IHZvaWQnLCBbXG4gICAgICAgIGFuaW1hdGUoJzE1MG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKScsIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5ICAgICAgICA6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDAuOCknLFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xuICAgICAgICB9KSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotc3VibWVudS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFtcbiAgICBgXG4gICAgICAuYW50LW1lbnUtc3VibWVudS1wbGFjZW1lbnQtYm90dG9tTGVmdCB7XG4gICAgICAgIHRvcDogNnB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC5hbnQtbWVudS1zdWJtZW51LXBsYWNlbWVudC1yaWdodFRvcCB7XG4gICAgICAgIGxlZnQ6IDRweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAuYW50LW1lbnUtc3VibWVudS1wbGFjZW1lbnQtbGVmdFRvcCB7XG4gICAgICAgIHJpZ2h0OiA0cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBOelN1Yk1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX29wZW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSAkbW91c2VTdWJqZWN0ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIHBsYWNlbWVudCA9ICdyaWdodFRvcCc7XG4gICRzdWJPcGVuID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIGlzSW5Ecm9wRG93biA9IGZhbHNlO1xuICBpc0luU3ViTWVudSA9IGZhbHNlO1xuICBsZXZlbCA9IDE7XG4gIHRyaWdnZXJXaWR0aCA9IG51bGw7XG4gIEBDb250ZW50Q2hpbGRyZW4oTnpTdWJNZW51Q29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIHN1Yk1lbnVzOiBRdWVyeUxpc3Q8TnpTdWJNZW51Q29tcG9uZW50PjtcbiAgQE91dHB1dCgpIG56T3BlbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXkpIGNka092ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XG4gIEBWaWV3Q2hpbGQoJ3RyaWdnZXInKSB0cmlnZ2VyOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuek9wZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9vcGVuID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLnNldFRyaWdnZXJXaWR0aCgpO1xuICB9XG5cbiAgZ2V0IG56T3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56RGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgZ2V0IHN1Ykl0ZW1TZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLm56TWVudURpcmVjdGl2ZS5tZW51SXRlbXMuZmluZChlID0+IGUubnpTZWxlY3RlZCAmJiBlLm56U3ViTWVudUNvbXBvbmVudCA9PT0gdGhpcyk7XG4gIH1cblxuICBnZXQgc3VibWVudVNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuc3ViTWVudXMudG9BcnJheSgpLmZpbmQoZSA9PiBlICE9PSB0aGlzICYmIGUuc3ViSXRlbVNlbGVjdGVkKTtcbiAgfVxuXG4gIGdldCBleHBhbmRTdGF0ZSgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLm56T3BlbiAmJiB0aGlzLnN1Yk1lbnVNb2RlID09PSAnaW5saW5lJykge1xuICAgICAgcmV0dXJuICdleHBhbmQnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uek9wZW4gJiYgdGhpcy5zdWJNZW51TW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICByZXR1cm4gJ2JvdHRvbSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLm56T3BlbiAmJiB0aGlzLnN1Yk1lbnVNb2RlID09PSAndmVydGljYWwnKSB7XG4gICAgICByZXR1cm4gJ2ZhZGUnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ2hpZGRlbic7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG92ZXJsYXlQb3NpdGlvbnMoKTogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdIHtcbiAgICBpZiAodGhpcy5zdWJNZW51TW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICByZXR1cm4gWyBQT1NJVElPTl9NQVAuYm90dG9tTGVmdCBdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gWyBQT1NJVElPTl9NQVAucmlnaHRUb3AsIFBPU0lUSU9OX01BUC5sZWZ0VG9wIF07XG4gICAgfVxuICB9XG5cbiAgY2xpY2tTdWJNZW51VGl0bGUoJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCkge1xuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICgodGhpcy5zdWJNZW51TW9kZSA9PT0gJ2lubGluZScpICYmICghdGhpcy5pc0luRHJvcERvd24pKSB7XG4gICAgICB0aGlzLm56T3BlbiA9ICF0aGlzLm56T3BlbjtcbiAgICAgIHRoaXMubnpPcGVuQ2hhbmdlLmVtaXQodGhpcy5uek9wZW4pO1xuICAgIH1cbiAgfVxuXG4gIGNsaWNrU3ViTWVudURyb3BEb3duKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzSW5Ecm9wRG93biB8fCAodGhpcy5zdWJNZW51TW9kZSA9PT0gJ3ZlcnRpY2FsJykgfHwgKHRoaXMuc3ViTWVudU1vZGUgPT09ICdob3Jpem9udGFsJykpIHtcbiAgICAgIHRoaXMuJG1vdXNlU3ViamVjdC5uZXh0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBnZXQgc3ViTWVudU1vZGUoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5uek1lbnVEaXJlY3RpdmUubnpNb2RlID09PSAnaW5saW5lJykge1xuICAgICAgcmV0dXJuICdpbmxpbmUnO1xuICAgIH0gZWxzZSBpZiAoKHRoaXMubnpNZW51RGlyZWN0aXZlLm56TW9kZSA9PT0gJ3ZlcnRpY2FsJykgfHwgKHRoaXMuaXNJblN1Yk1lbnUpKSB7XG4gICAgICByZXR1cm4gJ3ZlcnRpY2FsJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdob3Jpem9udGFsJztcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlRW50ZXJFdmVudChlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCh0aGlzLnN1Yk1lbnVNb2RlID09PSAnaG9yaXpvbnRhbCcpIHx8ICh0aGlzLnN1Yk1lbnVNb2RlID09PSAndmVydGljYWwnKSB8fCB0aGlzLmlzSW5Ecm9wRG93bikge1xuICAgICAgdGhpcy4kbW91c2VTdWJqZWN0Lm5leHQodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZUxlYXZlRXZlbnQoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICgodGhpcy5zdWJNZW51TW9kZSA9PT0gJ2hvcml6b250YWwnKSB8fCAodGhpcy5zdWJNZW51TW9kZSA9PT0gJ3ZlcnRpY2FsJykgfHwgdGhpcy5pc0luRHJvcERvd24pIHtcbiAgICAgIHRoaXMuJG1vdXNlU3ViamVjdC5uZXh0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUnKVxuICBnZXQgc2V0RHJvcERvd25TdWJtZW51Q2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNJbkRyb3BEb3duO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1zdWJtZW51LW9wZW4nKVxuICBnZXQgc2V0TWVudVN1Ym1lbnVPcGVuQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICghdGhpcy5pc0luRHJvcERvd24pICYmICh0aGlzLm56T3Blbik7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtdmVydGljYWwnKVxuICBnZXQgc2V0RHJvcERvd25WZXJ0aWNhbENsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzSW5Ecm9wRG93biAmJiAodGhpcy5zdWJNZW51TW9kZSA9PT0gJ3ZlcnRpY2FsJyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtaG9yaXpvbnRhbCcpXG4gIGdldCBzZXREcm9wRG93bkhvcml6b250YWxDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0luRHJvcERvd24gJiYgKHRoaXMuc3ViTWVudU1vZGUgPT09ICdob3Jpem9udGFsJyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtZGlzYWJsZWQnKVxuICBnZXQgc2V0RHJvcERvd25EaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0luRHJvcERvd24gJiYgdGhpcy5uekRpc2FibGVkO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1zdWJtZW51JylcbiAgZ2V0IHNldE1lbnVTdWJtZW51Q2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmlzSW5Ecm9wRG93bjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtc3VibWVudS1zZWxlY3RlZCcpXG4gIGdldCBzZXRNZW51U3VibWVudVNlbGVjdGVkQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3VibWVudVNlbGVjdGVkIHx8IHRoaXMuc3ViSXRlbVNlbGVjdGVkO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1zdWJtZW51LXZlcnRpY2FsJylcbiAgZ2V0IHNldE1lbnVWZXJ0aWNhbENsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoIXRoaXMuaXNJbkRyb3BEb3duKSAmJiAodGhpcy5zdWJNZW51TW9kZSA9PT0gJ3ZlcnRpY2FsJyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LXN1Ym1lbnUtaG9yaXpvbnRhbCcpXG4gIGdldCBzZXRNZW51SG9yaXpvbnRhbENsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoIXRoaXMuaXNJbkRyb3BEb3duKSAmJiAodGhpcy5zdWJNZW51TW9kZSA9PT0gJ2hvcml6b250YWwnKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtc3VibWVudS1pbmxpbmUnKVxuICBnZXQgc2V0TWVudUlubGluZUNsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoIXRoaXMuaXNJbkRyb3BEb3duKSAmJiAodGhpcy5zdWJNZW51TW9kZSA9PT0gJ2lubGluZScpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1zdWJtZW51LWRpc2FibGVkJylcbiAgZ2V0IHNldE1lbnVEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCF0aGlzLmlzSW5Ecm9wRG93bikgJiYgdGhpcy5uekRpc2FibGVkO1xuICB9XG5cbiAgc2V0VHJpZ2dlcldpZHRoKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1Yk1lbnVNb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHRoaXMudHJpZ2dlcldpZHRoID0gdGhpcy50cmlnZ2VyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAvKiogc2hvdWxkIHJlbW92ZSBhZnRlciBhZnRlciBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIvcHVsbC84NzY1IG1lcmdlZCAqKi9cbiAgICAgIGlmICh0aGlzLmNka092ZXJsYXkgJiYgdGhpcy5jZGtPdmVybGF5Lm92ZXJsYXlSZWYpIHtcbiAgICAgICAgdGhpcy5jZGtPdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlU2l6ZSh7XG4gICAgICAgICAgd2lkdGg6IHRoaXMudHJpZ2dlcldpZHRoXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgb25Qb3NpdGlvbkNoYW5nZSgkZXZlbnQ6IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xuICAgIGlmICgkZXZlbnQuY29ubmVjdGlvblBhaXIpIHtcbiAgICAgIGNvbnN0IG9yaWdpbk1hcCA9IHtcbiAgICAgICAgb3JpZ2luWCA6ICRldmVudC5jb25uZWN0aW9uUGFpci5vcmlnaW5YLFxuICAgICAgICBvcmlnaW5ZIDogJGV2ZW50LmNvbm5lY3Rpb25QYWlyLm9yaWdpblksXG4gICAgICAgIG92ZXJsYXlYOiAkZXZlbnQuY29ubmVjdGlvblBhaXIub3ZlcmxheVgsXG4gICAgICAgIG92ZXJsYXlZOiAkZXZlbnQuY29ubmVjdGlvblBhaXIub3ZlcmxheVlcbiAgICAgIH07XG4gICAgICBjb25zdCBrZXlMaXN0ID0gWyAnb3JpZ2luWCcsICdvcmlnaW5ZJywgJ292ZXJsYXlYJywgJ292ZXJsYXlZJyBdO1xuICAgICAgaWYgKGtleUxpc3QuZXZlcnkoa2V5ID0+IG9yaWdpbk1hcFsga2V5IF0gPT09IFBPU0lUSU9OX01BUC5sZWZ0VG9wWyBrZXkgXSkpIHtcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSAnbGVmdFRvcCc7XG4gICAgICB9IGVsc2UgaWYgKGtleUxpc3QuZXZlcnkoa2V5ID0+IG9yaWdpbk1hcFsga2V5IF0gPT09IFBPU0lUSU9OX01BUC5yaWdodFRvcFsga2V5IF0pKSB7XG4gICAgICAgIHRoaXMucGxhY2VtZW50ID0gJ3JpZ2h0VG9wJztcbiAgICAgIH1cbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU9wZW5FdmVudCA9IChkYXRhOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5uek9wZW4gIT09IGRhdGEpIHtcbiAgICAgIHRoaXMubnpPcGVuID0gZGF0YTtcbiAgICAgIHRoaXMubnpPcGVuQ2hhbmdlLmVtaXQodGhpcy5uek9wZW4pO1xuICAgIH1cbiAgICBpZiAodGhpcy5uelN1Yk1lbnVDb21wb25lbnQpIHtcbiAgICAgIHRoaXMubnpTdWJNZW51Q29tcG9uZW50LiRzdWJPcGVuLm5leHQodGhpcy5uek9wZW4pO1xuICAgIH1cbiAgICBpZiAodGhpcy5uekRyb3BEb3duQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLm56RHJvcERvd25Db21wb25lbnQuJHN1Yk9wZW4ubmV4dCh0aGlzLm56T3Blbik7XG4gICAgfVxuICAgIGlmICh0aGlzLm56RHJvcERvd25CdXR0b25Db21wb25lbnQpIHtcbiAgICAgIHRoaXMubnpEcm9wRG93bkJ1dHRvbkNvbXBvbmVudC4kc3ViT3Blbi5uZXh0KHRoaXMubnpPcGVuKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpNZW51RGlyZWN0aXZlOiBOek1lbnVEaXJlY3RpdmUsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBAU2tpcFNlbGYoKSBAT3B0aW9uYWwoKSBwcml2YXRlIG56U3ViTWVudUNvbXBvbmVudDogTnpTdWJNZW51Q29tcG9uZW50LCBASG9zdCgpIEBPcHRpb25hbCgpIHByaXZhdGUgbnpEcm9wRG93bkNvbXBvbmVudDogTnpEcm9wRG93bkNvbXBvbmVudCwgQEhvc3QoKSBAT3B0aW9uYWwoKSBwcml2YXRlIG56RHJvcERvd25CdXR0b25Db21wb25lbnQ6IE56RHJvcERvd25CdXR0b25Db21wb25lbnQpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56U3ViTWVudUNvbXBvbmVudCkge1xuICAgICAgdGhpcy5sZXZlbCA9IHRoaXMubnpTdWJNZW51Q29tcG9uZW50LmxldmVsICsgMTtcbiAgICAgIHRoaXMuaXNJblN1Yk1lbnUgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLm56TWVudURpcmVjdGl2ZS5zdWJNZW51cy5wdXNoKHRoaXMpO1xuICAgIGNvbnN0ICRjb21iaW5lQWxsID0gY29tYmluZUxhdGVzdCh0aGlzLiRzdWJPcGVuLCB0aGlzLiRtb3VzZVN1YmplY3QuYXNPYnNlcnZhYmxlKCkpLnBpcGUobWFwKHZhbHVlID0+IHZhbHVlWyAwIF0gfHwgdmFsdWVbIDEgXSksIGF1ZGl0VGltZSgxNTApKTtcbiAgICAkY29tYmluZUFsbC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSh0aGlzLmhhbmRsZU9wZW5FdmVudCk7XG4gICAgdGhpcy5pc0luRHJvcERvd24gPSB0aGlzLm56TWVudURpcmVjdGl2ZS5uekluRHJvcERvd247XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19