import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop connected sorting group
 */
@Component({
  selector: 'cdk-drag-drop-connected-sorting-group-example',
  templateUrl: 'cdk-drag-drop-connected-sorting-group-example.html',
  styleUrls: ['cdk-drag-drop-connected-sorting-group-example.css'],
})
export class CdkDragDropConnectedSortingGroupExample {

  themes = [
    {
      id: 0,
      title: 'Theme 1',
      subthemes: [
        {
          code: [
            'Value - work experience as a teacher',
            'Value - work experience as a teacher',
            'Value - work experience as a teacher',
            'Value - work experience as a teacher',
          ],
          quote: '“They’re just like, give me stuff to do. That’s hard to work with. too much like class as opposed to research. So that’s why this is a really long quote – it allows us to show...”',
          member: ['Person1', 'BM'],
          hidden: true,
        },
        {
          code: ['Value - work experience as a teacher'],
          quote: '“They’re just like, give me stuff to do. That’s hard to work with. too much like class as opposed to research. So that’s why this is a really long quote – it allows us to show...”',
          member: ['Person1', 'BM'],
          hidden: true,
        },
      ],
    },
    {
      id: 1,
      title: 'Theme 2',
      subthemes: [
        {
          code: [
            'Value - work experience as a teacher',
            'Value - work experience as a teacher',
            'Value - work experience as a teacher',
            'Value - work experience as a teacher',
          ],
          quote: '“They’re just like, give me stuff to do. That’s hard to work with. too much like class as opposed to research. So that’s why this is a really long quote – it allows us to show...”',
          member: ['Person1', 'BM'],
          hidden: true,
        },
        {
          code: ['Value - work experience as a teacher'],
          quote: '“They’re just like, give me stuff to do. That’s hard to work with. too much like class as opposed to research. So that’s why this is a really long quote – it allows us to show...”',
          member: ['Person1', 'BM'],
          hidden: true,
        },
      ],
    }
  ]

  dropItem(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  getConnectedList(): any[] {
    return this.themes.map(x => `${x.id}`);
  }

  dropGroup(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.themes, event.previousIndex, event.currentIndex);
  }

  addTheme(){
    const object = {
      id: this.themes.length,
      title: 'Theme 1',
      subthemes: [
        {
          code: [
            'Value - work experience as a teacher',
            'Value - work experience as a teacher',
            'Value - work experience as a teacher',
            'Value - work experience as a teacher',
          ],
          quote: '“They’re just like, give me stuff to do. That’s hard to work with. too much like class as opposed to research. So that’s why this is a really long quote – it allows us to show...”',
          member: ['Person1', 'BM'],
          hidden: true,
        },
        {
          code: ['Value - work experience as a teacher'],
          quote: '“They’re just like, give me stuff to do. That’s hard to work with. too much like class as opposed to research. So that’s why this is a really long quote – it allows us to show...”',
          member: ['Person1', 'BM'],
          hidden: true,
        },
      ],
    }
    this.themes.push(object);
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */