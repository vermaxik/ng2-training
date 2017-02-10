"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var TaskComponent = (function () {
    function TaskComponent() {
        this.deleted = new core_1.EventEmitter();
    }
    TaskComponent.prototype.removed = function () {
        this.deleted.emit(this.id);
        console.log("Removed ");
    };
    return TaskComponent;
}());
__decorate([
    core_1.Input()
], TaskComponent.prototype, "id", void 0);
__decorate([
    core_1.Input()
], TaskComponent.prototype, "name", void 0);
__decorate([
    core_1.Output()
], TaskComponent.prototype, "deleted", void 0);
TaskComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'task',
        templateUrl: 'task.component.html'
    })
], TaskComponent);
exports.TaskComponent = TaskComponent;
