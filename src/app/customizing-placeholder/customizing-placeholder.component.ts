import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
/**
 * @title Drag&Drop custom placeholder
 */
@Component({
  selector: 'app-customizing-placeholder',
  templateUrl: './customizing-placeholder.component.html',
  styleUrls: ['./customizing-placeholder.component.css']
})
export class CustomizingPlaceholderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

}
