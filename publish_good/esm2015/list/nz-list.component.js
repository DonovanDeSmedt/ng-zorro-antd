/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, TemplateRef } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { InputBoolean } from '../core/util/convert';
import { NzI18nService } from '../i18n/nz-i18n.service';
export class NzListComponent {
    /**
     * @param {?} el
     * @param {?} cd
     * @param {?} updateHostClassService
     * @param {?} i18n
     */
    constructor(el, cd, updateHostClassService, i18n) {
        this.el = el;
        this.cd = cd;
        this.updateHostClassService = updateHostClassService;
        this.i18n = i18n;
        /* tslint:disable-next-line:no-any */
        this.locale = {};
        this.nzBordered = false;
        this._isHeader = false;
        this._header = '';
        this._isFooter = false;
        this._footer = '';
        this.nzItemLayout = 'horizontal';
        this.nzLoading = false;
        this.nzSize = 'default';
        this.nzSplit = true;
        this.prefixCls = 'ant-list';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzHeader(value) {
        if (value instanceof TemplateRef) {
            this._header = null;
            this._headerTpl = value;
        }
        else {
            this._header = value;
        }
        this._isHeader = !!value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzFooter(value) {
        if (value instanceof TemplateRef) {
            this._footer = null;
            this._footerTpl = value;
        }
        else {
            this._footer = value;
        }
        this._isFooter = !!value;
    }
    /**
     * @return {?}
     */
    _setClassMap() {
        /** @type {?} */
        const classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-vertical`]: this.nzItemLayout === 'vertical',
            [`${this.prefixCls}-lg`]: this.nzSize === 'large',
            [`${this.prefixCls}-sm`]: this.nzSize === 'small',
            [`${this.prefixCls}-split`]: this.nzSplit,
            [`${this.prefixCls}-bordered`]: this.nzBordered,
            [`${this.prefixCls}-loading`]: this.nzLoading,
            [`${this.prefixCls}-grid`]: this.nzGrid,
            [`${this.prefixCls}-something-after-last-item`]: !!(this.nzLoadMore || this.nzPagination || this._isFooter)
        };
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n$ = this.i18n.localeChange.subscribe(() => {
            this.locale = this.i18n.getLocaleData('Table');
            this.cd.detectChanges();
        });
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.i18n$.unsubscribe();
    }
}
NzListComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-list',
                template: "<ng-template #itemsTpl>\n  <ng-container *ngFor=\"let item of nzDataSource; let index = index\">\n    <ng-template\n      [ngTemplateOutlet]=\"nzRenderItem\"\n      [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\n  </ng-container>\n</ng-template>\n<div *ngIf=\"_isHeader\" class=\"ant-list-header\">\n  <ng-container *ngIf=\"_header; else _headerTpl\">{{ _header }}</ng-container>\n</div>\n<nz-spin [nzSpinning]=\"nzLoading\">\n  <ng-container *ngIf=\"nzDataSource\">\n    <div *ngIf=\"nzLoading && nzDataSource.length === 0\" [style.min-height.px]=\"53\"></div>\n    <div *ngIf=\"nzGrid; else itemsTpl\" nz-row [nzGutter]=\"nzGrid.gutter\">\n      <div nz-col [nzSpan]=\"nzGrid.span\" [nzXs]=\"nzGrid.xs\" [nzSm]=\"nzGrid.sm\" [nzMd]=\"nzGrid.md\" [nzLg]=\"nzGrid.lg\" [nzXl]=\"nzGrid.xl\" [nzXXl]=\"nzGrid.xxl\"\n        *ngFor=\"let item of nzDataSource; let index = index\">\n        <ng-template\n          [ngTemplateOutlet]=\"nzRenderItem\"\n          [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\n      </div>\n    </div>\n    <div *ngIf=\"!nzLoading && nzDataSource.length === 0\" class=\"ant-list-empty-text\">\n      {{locale.emptyText}}\n    </div>\n  </ng-container>\n  <ng-content></ng-content>\n</nz-spin>\n<div *ngIf=\"_isFooter\" class=\"ant-list-footer\">\n  <ng-container *ngIf=\"_footer; else _footerTpl\">{{ _footer }}</ng-container>\n</div>\n<ng-template [ngTemplateOutlet]=\"nzLoadMore\"></ng-template>\n<div *ngIf=\"nzPagination\" class=\"ant-list-pagination\">\n  <ng-template [ngTemplateOutlet]=\"nzPagination\"></ng-template>\n</div>",
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
    :host {
      display: block;
    }

    nz-spin {
      display: block;
    }
  `]
            }] }
];
/** @nocollapse */
NzListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NzUpdateHostClassService },
    { type: NzI18nService }
];
NzListComponent.propDecorators = {
    nzDataSource: [{ type: Input }],
    nzBordered: [{ type: Input }],
    nzGrid: [{ type: Input }],
    nzHeader: [{ type: Input }],
    nzFooter: [{ type: Input }],
    nzItemLayout: [{ type: Input }],
    nzRenderItem: [{ type: Input }],
    nzLoading: [{ type: Input }],
    nzLoadMore: [{ type: Input }],
    nzPagination: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzSplit: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzListComponent.prototype, "nzBordered", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzListComponent.prototype, "nzLoading", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzListComponent.prototype, "nzSplit", void 0);
function NzListComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzListComponent.prototype.locale;
    /** @type {?} */
    NzListComponent.prototype.i18n$;
    /** @type {?} */
    NzListComponent.prototype.nzDataSource;
    /** @type {?} */
    NzListComponent.prototype.nzBordered;
    /** @type {?} */
    NzListComponent.prototype.nzGrid;
    /** @type {?} */
    NzListComponent.prototype._isHeader;
    /** @type {?} */
    NzListComponent.prototype._header;
    /** @type {?} */
    NzListComponent.prototype._headerTpl;
    /** @type {?} */
    NzListComponent.prototype._isFooter;
    /** @type {?} */
    NzListComponent.prototype._footer;
    /** @type {?} */
    NzListComponent.prototype._footerTpl;
    /** @type {?} */
    NzListComponent.prototype.nzItemLayout;
    /** @type {?} */
    NzListComponent.prototype.nzRenderItem;
    /** @type {?} */
    NzListComponent.prototype.nzLoading;
    /** @type {?} */
    NzListComponent.prototype.nzLoadMore;
    /** @type {?} */
    NzListComponent.prototype.nzPagination;
    /** @type {?} */
    NzListComponent.prototype.nzSize;
    /** @type {?} */
    NzListComponent.prototype.nzSplit;
    /** @type {?} */
    NzListComponent.prototype.prefixCls;
    /** @type {?} */
    NzListComponent.prototype.el;
    /** @type {?} */
    NzListComponent.prototype.cd;
    /** @type {?} */
    NzListComponent.prototype.updateHostClassService;
    /** @type {?} */
    NzListComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibGlzdC9uei1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBb0J4RCxNQUFNOzs7Ozs7O0lBa0ZKLFlBQW9CLEVBQWMsRUFBVSxFQUFxQixFQUFVLHNCQUFnRCxFQUFVLElBQW1CO1FBQXBJLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUFVLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBMEI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFlOztzQkFoRjFJLEVBQUU7MEJBT3NCLEtBQUs7eUJBSS9CLEtBQUs7dUJBQ1AsRUFBRTt5QkFlQSxLQUFLO3VCQUNQLEVBQUU7NEJBZXVDLFlBQVk7eUJBSTFCLEtBQUs7c0JBTWQsU0FBUzt1QkFFRixJQUFJO3lCQU1uQixVQUFVO0tBb0I3Qjs7Ozs7SUFsRUQsSUFDSSxRQUFRLENBQUMsS0FBaUM7UUFDNUMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQ3pCO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUN0QjtRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FB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ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJy4uL2kxOG4vbnotaTE4bi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgTGlzdFNpemUsIE56TGlzdEdyaWQgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotbGlzdCcsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSBdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbIGBcbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICBuei1zcGluIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgYCBdXG59KVxuZXhwb3J0IGNsYXNzIE56TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIGxvY2FsZTogYW55ID0ge307XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIG56RGF0YVNvdXJjZTogYW55W107XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Qm9yZGVyZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKSBuekdyaWQ6IE56TGlzdEdyaWQ7XG5cbiAgX2lzSGVhZGVyID0gZmFsc2U7XG4gIF9oZWFkZXIgPSAnJztcbiAgX2hlYWRlclRwbDogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KClcbiAgc2V0IG56SGVhZGVyKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl9oZWFkZXIgPSBudWxsO1xuICAgICAgdGhpcy5faGVhZGVyVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hlYWRlciA9IHZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMuX2lzSGVhZGVyID0gISF2YWx1ZTtcbiAgfVxuXG4gIF9pc0Zvb3RlciA9IGZhbHNlO1xuICBfZm9vdGVyID0gJyc7XG4gIF9mb290ZXJUcGw6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekZvb3Rlcih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fZm9vdGVyID0gbnVsbDtcbiAgICAgIHRoaXMuX2Zvb3RlclRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9mb290ZXIgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLl9pc0Zvb3RlciA9ICEhdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKSBuekl0ZW1MYXlvdXQ6ICd2ZXJ0aWNhbCcgfCAnaG9yaXpvbnRhbCcgPSAnaG9yaXpvbnRhbCc7XG5cbiAgQElucHV0KCkgbnpSZW5kZXJJdGVtOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpMb2FkaW5nID0gZmFsc2U7XG5cbiAgQElucHV0KCkgbnpMb2FkTW9yZTogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KCkgbnpQYWdpbmF0aW9uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKSBuelNpemU6IExpc3RTaXplID0gJ2RlZmF1bHQnO1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNwbGl0ID0gdHJ1ZTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBzdHlsZXNcblxuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtbGlzdCc7XG5cbiAgcHJpdmF0ZSBfc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XG4gICAgICBbIHRoaXMucHJlZml4Q2xzIF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tdmVydGljYWxgIF0gICAgICAgICAgICAgICAgIDogdGhpcy5uekl0ZW1MYXlvdXQgPT09ICd2ZXJ0aWNhbCcsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1sZ2AgXSAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLm56U2l6ZSA9PT0gJ2xhcmdlJyxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXNtYCBdICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMubnpTaXplID09PSAnc21hbGwnLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tc3BsaXRgIF0gICAgICAgICAgICAgICAgICAgIDogdGhpcy5uelNwbGl0LFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tYm9yZGVyZWRgIF0gICAgICAgICAgICAgICAgIDogdGhpcy5uekJvcmRlcmVkLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tbG9hZGluZ2AgXSAgICAgICAgICAgICAgICAgIDogdGhpcy5uekxvYWRpbmcsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1ncmlkYCBdICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLm56R3JpZCxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXNvbWV0aGluZy1hZnRlci1sYXN0LWl0ZW1gIF06ICEhKHRoaXMubnpMb2FkTW9yZSB8fCB0aGlzLm56UGFnaW5hdGlvbiB8fCB0aGlzLl9pc0Zvb3RlcilcbiAgICB9O1xuICAgIHRoaXMudXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBjbGFzc01hcCk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgdXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUYWJsZScpO1xuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=