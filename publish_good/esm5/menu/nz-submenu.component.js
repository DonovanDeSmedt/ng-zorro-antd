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
var NzSubMenuComponent = /** @class */ (function () {
    function NzSubMenuComponent(nzMenuDirective, cd, nzSubMenuComponent, nzDropDownComponent, nzDropDownButtonComponent) {
        var _this = this;
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
        this.handleOpenEvent = function (data) {
            if (_this.nzDisabled) {
                return;
            }
            if (_this.nzOpen !== data) {
                _this.nzOpen = data;
                _this.nzOpenChange.emit(_this.nzOpen);
            }
            if (_this.nzSubMenuComponent) {
                _this.nzSubMenuComponent.$subOpen.next(_this.nzOpen);
            }
            if (_this.nzDropDownComponent) {
                _this.nzDropDownComponent.$subOpen.next(_this.nzOpen);
            }
            if (_this.nzDropDownButtonComponent) {
                _this.nzDropDownButtonComponent.$subOpen.next(_this.nzOpen);
            }
        };
    }
    Object.defineProperty(NzSubMenuComponent.prototype, "nzOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._open;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._open = toBoolean(value);
            this.setTriggerWidth();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSubMenuComponent.prototype, "nzDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSubMenuComponent.prototype, "subItemSelected", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            return !!this.nzMenuDirective.menuItems.find(function (e) { return e.nzSelected && e.nzSubMenuComponent === _this; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSubMenuComponent.prototype, "submenuSelected", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            return !!this.subMenus.toArray().find(function (e) { return e !== _this && e.subItemSelected; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSubMenuComponent.prototype, "expandState", {
        get: /**
         * @return {?}
         */
        function () {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSubMenuComponent.prototype, "overlayPositions", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.subMenuMode === 'horizontal') {
                return [POSITION_MAP["bottomLeft"]];
            }
            else {
                return [POSITION_MAP["rightTop"], POSITION_MAP["leftTop"]];
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} $event
     * @return {?}
     */
    NzSubMenuComponent.prototype.clickSubMenuTitle = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.nzDisabled) {
            $event.preventDefault();
            $event.stopPropagation();
            return;
        }
        if ((this.subMenuMode === 'inline') && (!this.isInDropDown)) {
            this.nzOpen = !this.nzOpen;
            this.nzOpenChange.emit(this.nzOpen);
        }
    };
    /**
     * @return {?}
     */
    NzSubMenuComponent.prototype.clickSubMenuDropDown = /**
     * @return {?}
     */
    function () {
        if (this.isInDropDown || (this.subMenuMode === 'vertical') || (this.subMenuMode === 'horizontal')) {
            this.$mouseSubject.next(false);
        }
    };
    Object.defineProperty(NzSubMenuComponent.prototype, "subMenuMode", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.nzMenuDirective.nzMode === 'inline') {
                return 'inline';
            }
            else if ((this.nzMenuDirective.nzMode === 'vertical') || (this.isInSubMenu)) {
                return 'vertical';
            }
            else {
                return 'horizontal';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    NzSubMenuComponent.prototype.onMouseEnterEvent = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if ((this.subMenuMode === 'horizontal') || (this.subMenuMode === 'vertical') || this.isInDropDown) {
            this.$mouseSubject.next(true);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzSubMenuComponent.prototype.onMouseLeaveEvent = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if ((this.subMenuMode === 'horizontal') || (this.subMenuMode === 'vertical') || this.isInDropDown) {
            this.$mouseSubject.next(false);
        }
    };
    Object.defineProperty(NzSubMenuComponent.prototype, "setDropDownSubmenuClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isInDropDown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSubMenuComponent.prototype, "setMenuSubmenuOpenClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.isInDropDown) && (this.nzOpen);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSubMenuComponent.prototype, "setDropDownVerticalClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isInDropDown && (this.subMenuMode === 'vertical');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSubMenuComponent.prototype, "setDropDownHorizontalClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isInDropDown && (this.subMenuMode === 'horizontal');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSubMenuComponent.prototype, "setDropDownDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isInDropDown && this.nzDisabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSubMenuComponent.prototype, "setMenuSubmenuClass", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.isInDropDown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSubMenuComponent.prototype, "setMenuSubmenuSelectedClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.submenuSelected || this.subItemSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSubMenuComponent.prototype, "setMenuVerticalClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.isInDropDown) && (this.subMenuMode === 'vertical');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSubMenuComponent.prototype, "setMenuHorizontalClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.isInDropDown) && (this.subMenuMode === 'horizontal');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSubMenuComponent.prototype, "setMenuInlineClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.isInDropDown) && (this.subMenuMode === 'inline');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSubMenuComponent.prototype, "setMenuDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.isInDropDown) && this.nzDisabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzSubMenuComponent.prototype.setTriggerWidth = /**
     * @return {?}
     */
    function () {
        if (this.subMenuMode === 'horizontal') {
            this.triggerWidth = this.trigger.nativeElement.getBoundingClientRect().width;
            /** should remove after after https://github.com/angular/material2/pull/8765 merged **/
            if (this.cdkOverlay && this.cdkOverlay.overlayRef) {
                this.cdkOverlay.overlayRef.updateSize({
                    width: this.triggerWidth
                });
            }
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NzSubMenuComponent.prototype.onPositionChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event.connectionPair) {
            /** @type {?} */
            var originMap_1 = {
                originX: $event.connectionPair.originX,
                originY: $event.connectionPair.originY,
                overlayX: $event.connectionPair.overlayX,
                overlayY: $event.connectionPair.overlayY
            };
            /** @type {?} */
            var keyList = ['originX', 'originY', 'overlayX', 'overlayY'];
            if (keyList.every(function (key) { return originMap_1[key] === POSITION_MAP["leftTop"][key]; })) {
                this.placement = 'leftTop';
            }
            else if (keyList.every(function (key) { return originMap_1[key] === POSITION_MAP["rightTop"][key]; })) {
                this.placement = 'rightTop';
            }
            this.cd.detectChanges();
        }
    };
    /**
     * @return {?}
     */
    NzSubMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.nzSubMenuComponent) {
            this.level = this.nzSubMenuComponent.level + 1;
            this.isInSubMenu = true;
        }
        this.nzMenuDirective.subMenus.push(this);
        /** @type {?} */
        var $combineAll = combineLatest(this.$subOpen, this.$mouseSubject.asObservable()).pipe(map(function (value) { return value[0] || value[1]; }), auditTime(150));
        $combineAll.pipe(takeUntil(this.unsubscribe$)).subscribe(this.handleOpenEvent);
        this.isInDropDown = this.nzMenuDirective.nzInDropDown;
    };
    /**
     * @return {?}
     */
    NzSubMenuComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
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
                    styles: ["\n      .ant-menu-submenu-placement-bottomLeft {\n        top: 6px;\n        position: relative;\n      }\n\n      .ant-menu-submenu-placement-rightTop {\n        left: 4px;\n        position: relative;\n      }\n\n      .ant-menu-submenu-placement-leftTop {\n        right: 4px;\n        position: relative;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzSubMenuComponent.ctorParameters = function () { return [
        { type: NzMenuDirective },
        { type: ChangeDetectorRef },
        { type: NzSubMenuComponent, decorators: [{ type: SkipSelf }, { type: Optional }] },
        { type: NzDropDownComponent, decorators: [{ type: Host }, { type: Optional }] },
        { type: NzDropDownButtonComponent, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
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
    return NzSubMenuComponent;
}());
export { NzSubMenuComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3VibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibWVudS9uei1zdWJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsbUJBQW1CLEVBQTBELE1BQU0sc0JBQXNCLENBQUM7QUFDbkgsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLFdBQVcsRUFDWCxLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsUUFBUSxFQUNSLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNyRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUV4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBK1FwRCw0QkFBbUIsZUFBZ0MsRUFBVSxFQUFxQixFQUFrQyxrQkFBc0MsRUFBOEIsbUJBQXdDLEVBQThCLHlCQUFvRDtRQUFsVCxpQkFDQztRQURrQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFB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QXNDLEVBQUUsS0FBSyxDQUFDO29DQUNwRCxPQUFPLEVBQVUsQ0FBQztvQ0FDbEIsU0FBUyxFQUFRLGFBQWE7b0NBQzlCLGVBQWUsRUFBRSxPQUFPO2lDQUN6QixDQUFDLENBQUM7NkJBQ0osQ0FBQzt5QkFDSCxDQUFDO3FCQUNIO29CQUNELGtzRkFBa0Q7NkJBRWhELHFVQWVDO2lCQUVKOzs7O2dCQTVEUSxlQUFlO2dCQXpCdEIsaUJBQWlCO2dCQXdTdUgsa0JBQWtCLHVCQUFyRSxRQUFRLFlBQUksUUFBUTtnQkFqUmxHLG1CQUFtQix1QkFpUm1JLElBQUksWUFBSSxRQUFRO2dCQWxSdEsseUJBQXlCLHVCQWtSbU0sSUFBSSxZQUFJLFFBQVE7OzsyQkFyTWxQLGVBQWUsU0FBQyxrQkFBa0IsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7K0JBQ3pELE1BQU07NkJBQ04sU0FBUyxTQUFDLG1CQUFtQjswQkFDN0IsU0FBUyxTQUFDLFNBQVM7eUJBRW5CLEtBQUs7NkJBVUwsS0FBSzswQ0E2RUwsV0FBVyxTQUFDLGlDQUFpQzswQ0FLN0MsV0FBVyxTQUFDLDZCQUE2QjsyQ0FLekMsV0FBVyxTQUFDLDBDQUEwQzs2Q0FLdEQsV0FBVyxTQUFDLDRDQUE0QztzQ0FLeEQsV0FBVyxTQUFDLDBDQUEwQztzQ0FLdEQsV0FBVyxTQUFDLHdCQUF3Qjs4Q0FLcEMsV0FBVyxTQUFDLGlDQUFpQzt1Q0FLN0MsV0FBVyxTQUFDLGlDQUFpQzt5Q0FLN0MsV0FBVyxTQUFDLG1DQUFtQztxQ0FLL0MsV0FBVyxTQUFDLCtCQUErQjtrQ0FLM0MsV0FBVyxTQUFDLGlDQUFpQzs7NkJBcFBoRDs7U0EwRmEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBTa2lwU2VsZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGF1ZGl0VGltZSwgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFBPU0lUSU9OX01BUCB9IGZyb20gJy4uL2NvcmUvb3ZlcmxheS9vdmVybGF5LXBvc2l0aW9uLW1hcCc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOekRyb3BEb3duQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi4vZHJvcGRvd24vbnotZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekRyb3BEb3duQ29tcG9uZW50IH0gZnJvbSAnLi4vZHJvcGRvd24vbnotZHJvcGRvd24uY29tcG9uZW50JztcblxuaW1wb3J0IHsgTnpNZW51RGlyZWN0aXZlIH0gZnJvbSAnLi9uei1tZW51LmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnW256LXN1Ym1lbnVdJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFtcbiAgICB0cmlnZ2VyKCdleHBhbmRBbmltYXRpb24nLCBbXG4gICAgICBzdGF0ZSgnZXhwYW5kJywgc3R5bGUoeyBoZWlnaHQ6ICcqJyB9KSksXG4gICAgICBzdGF0ZSgnaGlkZGVuJywgc3R5bGUoeyBoZWlnaHQ6IDAsIG92ZXJmbG93OiAnaGlkZGVuJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCdleHBhbmQgPT4gaGlkZGVuJywgYW5pbWF0ZSgxNTApKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBleHBhbmQnLCBhbmltYXRlKDE1MCkpLFxuICAgICAgc3RhdGUoJ2ZhZGUnLCBzdHlsZSh7IG9wYWNpdHk6IDEgfSkpLFxuICAgICAgdHJhbnNpdGlvbignZmFkZSA9PiB2b2lkJywgW1xuICAgICAgICBhbmltYXRlKDE1MCwgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IGZhZGUnLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogJzAnIH0pLFxuICAgICAgICBhbmltYXRlKDE1MClcbiAgICAgIF0pLFxuICAgICAgc3RhdGUoJ2JvdHRvbScsIHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eSAgICAgICAgOiAxLFxuICAgICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMSknLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gYm90dG9tJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eSAgICAgICAgOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgwLjgpJyxcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzE1MG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKScpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2JvdHRvbSA9PiB2b2lkJywgW1xuICAgICAgICBhbmltYXRlKCcxNTBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSknLCBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eSAgICAgICAgOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgwLjgpJyxcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcbiAgICAgICAgfSkpXG4gICAgICBdKVxuICAgIF0pXG4gIF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXN1Ym1lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbXG4gICAgYFxuICAgICAgLmFudC1tZW51LXN1Ym1lbnUtcGxhY2VtZW50LWJvdHRvbUxlZnQge1xuICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAuYW50LW1lbnUtc3VibWVudS1wbGFjZW1lbnQtcmlnaHRUb3Age1xuICAgICAgICBsZWZ0OiA0cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgLmFudC1tZW51LXN1Ym1lbnUtcGxhY2VtZW50LWxlZnRUb3Age1xuICAgICAgICByaWdodDogNHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuXG5leHBvcnQgY2xhc3MgTnpTdWJNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9vcGVuID0gZmFsc2U7XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgJG1vdXNlU3ViamVjdCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBwbGFjZW1lbnQgPSAncmlnaHRUb3AnO1xuICAkc3ViT3BlbiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICBpc0luRHJvcERvd24gPSBmYWxzZTtcbiAgaXNJblN1Yk1lbnUgPSBmYWxzZTtcbiAgbGV2ZWwgPSAxO1xuICB0cmlnZ2VyV2lkdGggPSBudWxsO1xuICBAQ29udGVudENoaWxkcmVuKE56U3ViTWVudUNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBzdWJNZW51czogUXVlcnlMaXN0PE56U3ViTWVudUNvbXBvbmVudD47XG4gIEBPdXRwdXQoKSBuek9wZW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQFZpZXdDaGlsZChDZGtDb25uZWN0ZWRPdmVybGF5KSBjZGtPdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xuICBAVmlld0NoaWxkKCd0cmlnZ2VyJykgdHJpZ2dlcjogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKVxuICBzZXQgbnpPcGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fb3BlbiA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcbiAgfVxuXG4gIGdldCBuek9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW47XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIGdldCBzdWJJdGVtU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5uek1lbnVEaXJlY3RpdmUubWVudUl0ZW1zLmZpbmQoZSA9PiBlLm56U2VsZWN0ZWQgJiYgZS5uelN1Yk1lbnVDb21wb25lbnQgPT09IHRoaXMpO1xuICB9XG5cbiAgZ2V0IHN1Ym1lbnVTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLnN1Yk1lbnVzLnRvQXJyYXkoKS5maW5kKGUgPT4gZSAhPT0gdGhpcyAmJiBlLnN1Ykl0ZW1TZWxlY3RlZCk7XG4gIH1cblxuICBnZXQgZXhwYW5kU3RhdGUoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5uek9wZW4gJiYgdGhpcy5zdWJNZW51TW9kZSA9PT0gJ2lubGluZScpIHtcbiAgICAgIHJldHVybiAnZXhwYW5kJztcbiAgICB9IGVsc2UgaWYgKHRoaXMubnpPcGVuICYmIHRoaXMuc3ViTWVudU1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgcmV0dXJuICdib3R0b20nO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uek9wZW4gJiYgdGhpcy5zdWJNZW51TW9kZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgcmV0dXJuICdmYWRlJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdoaWRkZW4nO1xuICAgIH1cbiAgfVxuXG4gIGdldCBvdmVybGF5UG9zaXRpb25zKCk6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSB7XG4gICAgaWYgKHRoaXMuc3ViTWVudU1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgcmV0dXJuIFsgUE9TSVRJT05fTUFQLmJvdHRvbUxlZnQgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFsgUE9TSVRJT05fTUFQLnJpZ2h0VG9wLCBQT1NJVElPTl9NQVAubGVmdFRvcCBdO1xuICAgIH1cbiAgfVxuXG4gIGNsaWNrU3ViTWVudVRpdGxlKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoKHRoaXMuc3ViTWVudU1vZGUgPT09ICdpbmxpbmUnKSAmJiAoIXRoaXMuaXNJbkRyb3BEb3duKSkge1xuICAgICAgdGhpcy5uek9wZW4gPSAhdGhpcy5uek9wZW47XG4gICAgICB0aGlzLm56T3BlbkNoYW5nZS5lbWl0KHRoaXMubnpPcGVuKTtcbiAgICB9XG4gIH1cblxuICBjbGlja1N1Yk1lbnVEcm9wRG93bigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0luRHJvcERvd24gfHwgKHRoaXMuc3ViTWVudU1vZGUgPT09ICd2ZXJ0aWNhbCcpIHx8ICh0aGlzLnN1Yk1lbnVNb2RlID09PSAnaG9yaXpvbnRhbCcpKSB7XG4gICAgICB0aGlzLiRtb3VzZVN1YmplY3QubmV4dChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHN1Yk1lbnVNb2RlKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMubnpNZW51RGlyZWN0aXZlLm56TW9kZSA9PT0gJ2lubGluZScpIHtcbiAgICAgIHJldHVybiAnaW5saW5lJztcbiAgICB9IGVsc2UgaWYgKCh0aGlzLm56TWVudURpcmVjdGl2ZS5uek1vZGUgPT09ICd2ZXJ0aWNhbCcpIHx8ICh0aGlzLmlzSW5TdWJNZW51KSkge1xuICAgICAgcmV0dXJuICd2ZXJ0aWNhbCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnaG9yaXpvbnRhbCc7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZUVudGVyRXZlbnQoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICgodGhpcy5zdWJNZW51TW9kZSA9PT0gJ2hvcml6b250YWwnKSB8fCAodGhpcy5zdWJNZW51TW9kZSA9PT0gJ3ZlcnRpY2FsJykgfHwgdGhpcy5pc0luRHJvcERvd24pIHtcbiAgICAgIHRoaXMuJG1vdXNlU3ViamVjdC5uZXh0KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VMZWF2ZUV2ZW50KGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoKHRoaXMuc3ViTWVudU1vZGUgPT09ICdob3Jpem9udGFsJykgfHwgKHRoaXMuc3ViTWVudU1vZGUgPT09ICd2ZXJ0aWNhbCcpIHx8IHRoaXMuaXNJbkRyb3BEb3duKSB7XG4gICAgICB0aGlzLiRtb3VzZVN1YmplY3QubmV4dChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51JylcbiAgZ2V0IHNldERyb3BEb3duU3VibWVudUNsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzSW5Ecm9wRG93bjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtc3VibWVudS1vcGVuJylcbiAgZ2V0IHNldE1lbnVTdWJtZW51T3BlbkNsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoIXRoaXMuaXNJbkRyb3BEb3duKSAmJiAodGhpcy5uek9wZW4pO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LXZlcnRpY2FsJylcbiAgZ2V0IHNldERyb3BEb3duVmVydGljYWxDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0luRHJvcERvd24gJiYgKHRoaXMuc3ViTWVudU1vZGUgPT09ICd2ZXJ0aWNhbCcpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LWhvcml6b250YWwnKVxuICBnZXQgc2V0RHJvcERvd25Ib3Jpem9udGFsQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNJbkRyb3BEb3duICYmICh0aGlzLnN1Yk1lbnVNb2RlID09PSAnaG9yaXpvbnRhbCcpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LWRpc2FibGVkJylcbiAgZ2V0IHNldERyb3BEb3duRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNJbkRyb3BEb3duICYmIHRoaXMubnpEaXNhYmxlZDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtc3VibWVudScpXG4gIGdldCBzZXRNZW51U3VibWVudUNsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5pc0luRHJvcERvd247XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LXN1Ym1lbnUtc2VsZWN0ZWQnKVxuICBnZXQgc2V0TWVudVN1Ym1lbnVTZWxlY3RlZENsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN1Ym1lbnVTZWxlY3RlZCB8fCB0aGlzLnN1Ykl0ZW1TZWxlY3RlZDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtc3VibWVudS12ZXJ0aWNhbCcpXG4gIGdldCBzZXRNZW51VmVydGljYWxDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCF0aGlzLmlzSW5Ecm9wRG93bikgJiYgKHRoaXMuc3ViTWVudU1vZGUgPT09ICd2ZXJ0aWNhbCcpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1zdWJtZW51LWhvcml6b250YWwnKVxuICBnZXQgc2V0TWVudUhvcml6b250YWxDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCF0aGlzLmlzSW5Ecm9wRG93bikgJiYgKHRoaXMuc3ViTWVudU1vZGUgPT09ICdob3Jpem9udGFsJyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LXN1Ym1lbnUtaW5saW5lJylcbiAgZ2V0IHNldE1lbnVJbmxpbmVDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCF0aGlzLmlzSW5Ecm9wRG93bikgJiYgKHRoaXMuc3ViTWVudU1vZGUgPT09ICdpbmxpbmUnKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtc3VibWVudS1kaXNhYmxlZCcpXG4gIGdldCBzZXRNZW51RGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICghdGhpcy5pc0luRHJvcERvd24pICYmIHRoaXMubnpEaXNhYmxlZDtcbiAgfVxuXG4gIHNldFRyaWdnZXJXaWR0aCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJNZW51TW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICB0aGlzLnRyaWdnZXJXaWR0aCA9IHRoaXMudHJpZ2dlci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgLyoqIHNob3VsZCByZW1vdmUgYWZ0ZXIgYWZ0ZXIgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL3B1bGwvODc2NSBtZXJnZWQgKiovXG4gICAgICBpZiAodGhpcy5jZGtPdmVybGF5ICYmIHRoaXMuY2RrT3ZlcmxheS5vdmVybGF5UmVmKSB7XG4gICAgICAgIHRoaXMuY2RrT3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVNpemUoe1xuICAgICAgICAgIHdpZHRoOiB0aGlzLnRyaWdnZXJXaWR0aFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIG9uUG9zaXRpb25DaGFuZ2UoJGV2ZW50OiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcbiAgICBpZiAoJGV2ZW50LmNvbm5lY3Rpb25QYWlyKSB7XG4gICAgICBjb25zdCBvcmlnaW5NYXAgPSB7XG4gICAgICAgIG9yaWdpblggOiAkZXZlbnQuY29ubmVjdGlvblBhaXIub3JpZ2luWCxcbiAgICAgICAgb3JpZ2luWSA6ICRldmVudC5jb25uZWN0aW9uUGFpci5vcmlnaW5ZLFxuICAgICAgICBvdmVybGF5WDogJGV2ZW50LmNvbm5lY3Rpb25QYWlyLm92ZXJsYXlYLFxuICAgICAgICBvdmVybGF5WTogJGV2ZW50LmNvbm5lY3Rpb25QYWlyLm92ZXJsYXlZXG4gICAgICB9O1xuICAgICAgY29uc3Qga2V5TGlzdCA9IFsgJ29yaWdpblgnLCAnb3JpZ2luWScsICdvdmVybGF5WCcsICdvdmVybGF5WScgXTtcbiAgICAgIGlmIChrZXlMaXN0LmV2ZXJ5KGtleSA9PiBvcmlnaW5NYXBbIGtleSBdID09PSBQT1NJVElPTl9NQVAubGVmdFRvcFsga2V5IF0pKSB7XG4gICAgICAgIHRoaXMucGxhY2VtZW50ID0gJ2xlZnRUb3AnO1xuICAgICAgfSBlbHNlIGlmIChrZXlMaXN0LmV2ZXJ5KGtleSA9PiBvcmlnaW5NYXBbIGtleSBdID09PSBQT1NJVElPTl9NQVAucmlnaHRUb3BbIGtleSBdKSkge1xuICAgICAgICB0aGlzLnBsYWNlbWVudCA9ICdyaWdodFRvcCc7XG4gICAgICB9XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVPcGVuRXZlbnQgPSAoZGF0YTogYm9vbGVhbikgPT4ge1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMubnpPcGVuICE9PSBkYXRhKSB7XG4gICAgICB0aGlzLm56T3BlbiA9IGRhdGE7XG4gICAgICB0aGlzLm56T3BlbkNoYW5nZS5lbWl0KHRoaXMubnpPcGVuKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubnpTdWJNZW51Q29tcG9uZW50KSB7XG4gICAgICB0aGlzLm56U3ViTWVudUNvbXBvbmVudC4kc3ViT3Blbi5uZXh0KHRoaXMubnpPcGVuKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubnpEcm9wRG93bkNvbXBvbmVudCkge1xuICAgICAgdGhpcy5uekRyb3BEb3duQ29tcG9uZW50LiRzdWJPcGVuLm5leHQodGhpcy5uek9wZW4pO1xuICAgIH1cbiAgICBpZiAodGhpcy5uekRyb3BEb3duQnV0dG9uQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLm56RHJvcERvd25CdXR0b25Db21wb25lbnQuJHN1Yk9wZW4ubmV4dCh0aGlzLm56T3Blbik7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIG56TWVudURpcmVjdGl2ZTogTnpNZW51RGlyZWN0aXZlLCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgQFNraXBTZWxmKCkgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuelN1Yk1lbnVDb21wb25lbnQ6IE56U3ViTWVudUNvbXBvbmVudCwgQEhvc3QoKSBAT3B0aW9uYWwoKSBwcml2YXRlIG56RHJvcERvd25Db21wb25lbnQ6IE56RHJvcERvd25Db21wb25lbnQsIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuekRyb3BEb3duQnV0dG9uQ29tcG9uZW50OiBOekRyb3BEb3duQnV0dG9uQ29tcG9uZW50KSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelN1Yk1lbnVDb21wb25lbnQpIHtcbiAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLm56U3ViTWVudUNvbXBvbmVudC5sZXZlbCArIDE7XG4gICAgICB0aGlzLmlzSW5TdWJNZW51ID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5uek1lbnVEaXJlY3RpdmUuc3ViTWVudXMucHVzaCh0aGlzKTtcbiAgICBjb25zdCAkY29tYmluZUFsbCA9IGNvbWJpbmVMYXRlc3QodGhpcy4kc3ViT3BlbiwgdGhpcy4kbW91c2VTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpKS5waXBlKG1hcCh2YWx1ZSA9PiB2YWx1ZVsgMCBdIHx8IHZhbHVlWyAxIF0pLCBhdWRpdFRpbWUoMTUwKSk7XG4gICAgJGNvbWJpbmVBbGwucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUodGhpcy5oYW5kbGVPcGVuRXZlbnQpO1xuICAgIHRoaXMuaXNJbkRyb3BEb3duID0gdGhpcy5uek1lbnVEaXJlY3RpdmUubnpJbkRyb3BEb3duO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==