import {Component} from '@angular/core';

/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'sidenav-autosize-example',
  templateUrl: 'minivariant.component.html',
  styleUrls: ['minivariant.component.css'],
})
export class SidenavAutosizeExample {
  isExpanded = false;
  element: HTMLElement;

  toggleActive(event:any){
    debugger;
    event.preventDefault();
    if(this.element !== undefined){
      this.element.style.backgroundColor = "white";
    } 
    var target = event.currentTarget;
    target.style.backgroundColor = "#e51282";
    this.element = target;
  }
}


/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */