"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var TaskComponent = (function () {
    function TaskComponent(fb) {
        this.fb = fb;
        this.deleted = new core_1.EventEmitter();
    }
    TaskComponent.prototype.ngOnInit = function () {
        this.defaultName = this.name;
        this.taskForm = this.fb.group({
            name: [this.defaultName, forms_1.Validators.required]
        });
    };
    TaskComponent.prototype.revert = function () {
        this.taskForm.controls['name'].setValue(this.defaultName);
    };
    TaskComponent.prototype.removed = function () {
        this.deleted.emit(this.id);
        console.log("Removed ");
    };
    TaskComponent.prototype.save = function () {
        this.taskForm.get('name').reset(this.name);
    };
    return TaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], TaskComponent.prototype, "id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TaskComponent.prototype, "name", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TaskComponent.prototype, "deleted", void 0);
TaskComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'task',
        templateUrl: './task.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], TaskComponent);
exports.TaskComponent = TaskComponent;
