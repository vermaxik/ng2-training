import {Component, ViewChild, TemplateRef, ViewContainerRef, ViewRef} from "@angular/core";

import { ActivatedRoute } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'ex-tasks-list',
  templateUrl: './tasks-list.component.html',
  styles: ['']
})
export class ExTasksListComponent {

  @ViewChild('hello') hello: TemplateRef<any>;
  @ViewChild('bye') bye: TemplateRef<any>;
  @ViewChild('temp1', {read: ViewContainerRef}) temp1: ViewContainerRef;

  constructor(router: ActivatedRoute) {
    console.log(router.snapshot.data);
  }

  insertTmp1() {
    let view: ViewRef = this.hello.createEmbeddedView(null);
    this.temp1.clear();
    this.temp1.insert(view);
  }

  insertTmp2() {
    let view: ViewRef = this.bye.createEmbeddedView(null);
    this.temp1.insert(view);
  }
}
