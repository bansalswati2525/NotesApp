import {Component, Input} from '@angular/core'
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
    selector: 'note-details',
    templateUrl: './note-details.component.html',
    styles: [`
            ul {
                list-style-type: none;

            }
            .item-border {
                width: 50%;
                padding: 10px 10px 6px 10px;
                height: 30px;
                border: 1px solid #f0f8ff;
                margin-bottom: 10px;
                background-color:#f8f8ff;
            },
            .cdk-drag-preview {
                box-sizing: border-box;
                border-radius: 4px;
                box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                            0 8px 10px 1px rgba(0, 0, 0, 0.14),
                            0 3px 14px 2px rgba(0, 0, 0, 0.12);
              }
              
              .cdk-drag-placeholder {
                opacity: 0;
              }
              
              .cdk-drag-animating {
                transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
              }`]
})

export class NoteDetailsComponent {
    @Input() notes: any
    constructor () {

    }

    ngOnInit() {
        console.log(this.notes);
    }

    ngOnChanges() {
        console.log(this.notes);
    }

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.notes, event.previousIndex, event.currentIndex);
    }

}