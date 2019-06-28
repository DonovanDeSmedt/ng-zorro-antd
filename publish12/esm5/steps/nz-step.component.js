/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
var NzStepComponent = /** @class */ (function () {
    function NzStepComponent(cdr) {
        this.cdr = cdr;
        this.isCustomStatus = false;
        this._status = 'wait';
        this.oldAPIIcon = true;
        this.isIconString = true;
        this.direction = 'horizontal';
        this.index = 0;
        this.last = false;
        this.outStatus = 'process';
        this.showProcessDot = false;
        this._currentIndex = 0;
    }
    Object.defineProperty(NzStepComponent.prototype, "nzStatus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._status;
        },
        set: /**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            this._status = status;
            this.isCustomStatus = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzStepComponent.prototype, "nzIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return this._icon;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!(value instanceof TemplateRef)) {
                this.isIconString = true;
                this.oldAPIIcon = typeof value === 'string' && value.indexOf('anticon') > -1;
            }
            else {
                this.isIconString = false;
            }
            this._icon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzStepComponent.prototype, "currentIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentIndex;
        },
        set: /**
         * @param {?} current
         * @return {?}
         */
        function (current) {
            this._currentIndex = current;
            if (!this.isCustomStatus) {
                this._status = current > this.index ? 'finish' : current === this.index ? this.outStatus || '' : 'wait';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzStepComponent.prototype.detectChanges = /**
     * @return {?}
     */
    function () {
        this.cdr.detectChanges();
    };
    NzStepComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-step',
                    preserveWhitespaces: false,
                    template: "<div class=\"ant-steps-item-tail\" *ngIf=\"last !== true\"></div>\n<div class=\"ant-steps-item-icon\">\n  <ng-template [ngIf]=\"!showProcessDot\">\n    <span class=\"ant-steps-icon\" *ngIf=\"nzStatus === 'finish' && !nzIcon\"><i nz-icon type=\"check\"></i></span>\n    <span class=\"ant-steps-icon\" *ngIf=\"nzStatus === 'error'\"><i nz-icon type=\"close\"></i></span>\n    <span class=\"ant-steps-icon\" *ngIf=\"(nzStatus === 'process' || nzStatus === 'wait') && !nzIcon\">{{\n      index + 1\n    }}</span>\n    <span class=\"ant-steps-icon\" *ngIf=\"nzIcon\">\n      <ng-container *ngIf=\"isIconString; else iconTemplate\">\n        <i nz-icon [type]=\"!oldAPIIcon && nzIcon\" [ngClass]=\"oldAPIIcon && nzIcon\"></i>\n      </ng-container>\n      <ng-template #iconTemplate>\n        <ng-template [ngTemplateOutlet]=\"nzIcon\" [ngTemplateOutletContext]=\"nzCtx\"></ng-template>\n      </ng-template>\n    </span>\n  </ng-template>\n  <ng-template [ngIf]=\"showProcessDot\">\n    <span class=\"ant-steps-icon\">\n      <ng-template #processDotTemplate> <span class=\"ant-steps-icon-dot\"></span> </ng-template>\n      <ng-template\n        [ngTemplateOutlet]=\"customProcessTemplate || processDotTemplate\"\n        [ngTemplateOutletContext]=\"{ $implicit: processDotTemplate, status: nzStatus, index: index }\"\n      >\n      </ng-template>\n    </span>\n  </ng-template>\n</div>\n<div class=\"ant-steps-item-content\">\n  <div class=\"ant-steps-item-title\">\n    <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n  </div>\n  <div class=\"ant-steps-item-description\">\n    <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\n  </div>\n</div>\n",
                    host: {
                        '[class.ant-steps-item]': 'true',
                        '[class.ant-steps-item-wait]': 'nzStatus === "wait"',
                        '[class.ant-steps-item-process]': 'nzStatus === "process"',
                        '[class.ant-steps-item-finish]': 'nzStatus === "finish"',
                        '[class.ant-steps-item-error]': 'nzStatus === "error"',
                        '[class.ant-steps-custom]': '!!nzIcon',
                        '[class.ant-steps-next-error]': '(outStatus === "error") && (currentIndex === index + 1)'
                    }
                }] }
    ];
    /** @nocollapse */
    NzStepComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    NzStepComponent.propDecorators = {
        processDotTemplate: [{ type: ViewChild, args: ['processDotTemplate',] }],
        nzTitle: [{ type: Input }],
        nzDescription: [{ type: Input }],
        nzStatus: [{ type: Input }],
        nzCtx: [{ type: Input }],
        nzIcon: [{ type: Input }]
    };
    return NzStepComponent;
}());
export { NzStepComponent };
function NzStepComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzStepComponent.prototype.processDotTemplate;
    /** @type {?} */
    NzStepComponent.prototype.nzTitle;
    /** @type {?} */
    NzStepComponent.prototype.nzDescription;
    /** @type {?} */
    NzStepComponent.prototype.isCustomStatus;
    /** @type {?} */
    NzStepComponent.prototype._status;
    /** @type {?} */
    NzStepComponent.prototype.nzCtx;
    /** @type {?} */
    NzStepComponent.prototype.oldAPIIcon;
    /** @type {?} */
    NzStepComponent.prototype.isIconString;
    /** @type {?} */
    NzStepComponent.prototype._icon;
    /** @type {?} */
    NzStepComponent.prototype.customProcessTemplate;
    /** @type {?} */
    NzStepComponent.prototype.direction;
    /** @type {?} */
    NzStepComponent.prototype.index;
    /** @type {?} */
    NzStepComponent.prototype.last;
    /** @type {?} */
    NzStepComponent.prototype.outStatus;
    /** @type {?} */
    NzStepComponent.prototype.showProcessDot;
    /** @type {?} */
    NzStepComponent.prototype._currentIndex;
    /** @type {?} */
    NzStepComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic3RlcHMvbnotc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7O0lBMkVyQix5QkFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUF6QzFDLHNCQUFpQixLQUFLLENBQUM7dUJBQ0wsTUFBTTtRQWtCeEIsa0JBQWEsSUFBSSxDQUFDO1FBQ2xCLG9CQUFlLElBQUksQ0FBQztRQUlwQixpQkFBWSxZQUFZLENBQUM7UUFDekIsYUFBUSxDQUFDLENBQUM7UUFDVixZQUFPLEtBQUssQ0FBQztRQUNiLGlCQUFZLFNBQVMsQ0FBQztRQUN0QixzQkFBaUIsS0FBSyxDQUFDOzZCQVdDLENBQUM7S0FFcUI7SUFqRDlDLHNCQUNJLHFDQUFROzs7O1FBRFo7WUFFRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDckI7Ozs7O1FBQ0QsVUFBYSxNQUFjO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1NBQzVCOzs7T0FKQTtJQVdELHNCQUNJLG1DQUFNOzs7O1FBRFY7WUFFRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbkI7Ozs7O1FBQ0QsVUFBVyxLQUFzQztZQUMvQyxJQUFJLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzlFO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2FBQzNCO1lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDcEI7OztPQVRBO0lBcUJELHNCQUFJLHlDQUFZOzs7O1FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzNCOzs7OztRQUNELFVBQWlCLE9BQWU7WUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7WUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7YUFDekc7U0FDRjs7O09BTkE7Ozs7SUFXRCx1Q0FBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQzFCOztnQkEzRUYsU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLG1zREFBdUM7b0JBQ3ZDLElBQUksRUFBRTt3QkFDSix3QkFBd0IsRUFBRSxNQUFNO3dCQUNoQyw2QkFBNkIsRUFBRSxxQkFBcUI7d0JBQ3BELGdDQUFnQyxFQUFFLHdCQUF3Qjt3QkFDMUQsK0JBQStCLEVBQUUsdUJBQXVCO3dCQUN4RCw4QkFBOEIsRUFBRSxzQkFBc0I7d0JBQ3RELDBCQUEwQixFQUFFLFVBQVU7d0JBQ3RDLDhCQUE4QixFQUFFLHlEQUF5RDtxQkFDMUY7aUJBQ0Y7Ozs7Z0JBekJDLGlCQUFpQjs7O3FDQTJCaEIsU0FBUyxTQUFDLG9CQUFvQjswQkFFOUIsS0FBSztnQ0FDTCxLQUFLOzJCQUVMLEtBQUs7d0JBV0wsS0FBSzt5QkFHTCxLQUFLOzswQkFoRFI7O1NBNEJhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ0NsYXNzVHlwZSB9IGZyb20gJy4uL2NvcmUvdHlwZXMvbmctY2xhc3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotc3RlcCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotc3RlcC5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1zdGVwcy1pdGVtXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFudC1zdGVwcy1pdGVtLXdhaXRdJzogJ256U3RhdHVzID09PSBcIndhaXRcIicsXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtaXRlbS1wcm9jZXNzXSc6ICduelN0YXR1cyA9PT0gXCJwcm9jZXNzXCInLFxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWl0ZW0tZmluaXNoXSc6ICduelN0YXR1cyA9PT0gXCJmaW5pc2hcIicsXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtaXRlbS1lcnJvcl0nOiAnbnpTdGF0dXMgPT09IFwiZXJyb3JcIicsXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtY3VzdG9tXSc6ICchIW56SWNvbicsXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtbmV4dC1lcnJvcl0nOiAnKG91dFN0YXR1cyA9PT0gXCJlcnJvclwiKSAmJiAoY3VycmVudEluZGV4ID09PSBpbmRleCArIDEpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56U3RlcENvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoJ3Byb2Nlc3NEb3RUZW1wbGF0ZScpIHByb2Nlc3NEb3RUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56RGVzY3JpcHRpb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBuelN0YXR1cygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gIH1cbiAgc2V0IG56U3RhdHVzKHN0YXR1czogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMuaXNDdXN0b21TdGF0dXMgPSB0cnVlO1xuICB9XG4gIGlzQ3VzdG9tU3RhdHVzID0gZmFsc2U7XG4gIHByaXZhdGUgX3N0YXR1cyA9ICd3YWl0JztcblxuICBASW5wdXQoKVxuICBuekN0eDogYW55O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBuekljb24oKTogTmdDbGFzc1R5cGUgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb247XG4gIH1cbiAgc2V0IG56SWNvbih2YWx1ZTogTmdDbGFzc1R5cGUgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIGlmICghKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpKSB7XG4gICAgICB0aGlzLmlzSWNvblN0cmluZyA9IHRydWU7XG4gICAgICB0aGlzLm9sZEFQSUljb24gPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluZGV4T2YoJ2FudGljb24nKSA+IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzSWNvblN0cmluZyA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLl9pY29uID0gdmFsdWU7XG4gIH1cbiAgb2xkQVBJSWNvbiA9IHRydWU7XG4gIGlzSWNvblN0cmluZyA9IHRydWU7XG4gIHByaXZhdGUgX2ljb246IE5nQ2xhc3NUeXBlIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgY3VzdG9tUHJvY2Vzc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogVGVtcGxhdGVSZWY8dm9pZD47IHN0YXR1czogc3RyaW5nOyBpbmRleDogbnVtYmVyIH0+OyAvLyBTZXQgYnkgcGFyZW50LlxuICBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gIGluZGV4ID0gMDtcbiAgbGFzdCA9IGZhbHNlO1xuICBvdXRTdGF0dXMgPSAncHJvY2Vzcyc7XG4gIHNob3dQcm9jZXNzRG90ID0gZmFsc2U7XG5cbiAgZ2V0IGN1cnJlbnRJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50SW5kZXg7XG4gIH1cbiAgc2V0IGN1cnJlbnRJbmRleChjdXJyZW50OiBudW1iZXIpIHtcbiAgICB0aGlzLl9jdXJyZW50SW5kZXggPSBjdXJyZW50O1xuICAgIGlmICghdGhpcy5pc0N1c3RvbVN0YXR1cykge1xuICAgICAgdGhpcy5fc3RhdHVzID0gY3VycmVudCA+IHRoaXMuaW5kZXggPyAnZmluaXNoJyA6IGN1cnJlbnQgPT09IHRoaXMuaW5kZXggPyB0aGlzLm91dFN0YXR1cyB8fCAnJyA6ICd3YWl0JztcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfY3VycmVudEluZGV4ID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgZGV0ZWN0Q2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbn1cbiJdfQ==