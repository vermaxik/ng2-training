"use strict";
var TaskService = (function () {
    function TaskService() {
    }
    TaskService.prototype.createDb = function () {
        var tasks = [
            { id: 1, name: 'Add angular' },
            { id: 2, name: 'Change In memory to backend' },
            { id: 3, name: 'Third' },
        ];
        return { tasks: tasks };
    };
    return TaskService;
}());
exports.TaskService = TaskService;
