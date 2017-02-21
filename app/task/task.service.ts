import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TaskService implements InMemoryDbService {
  createDb() {
    let tasks = [
      { id: 1, name: 'Add angular' },
      { id: 2, name: 'Change In memory to backend' },
      { id: 3, name: 'Third' },
    ];
    return {tasks};
  }
}
