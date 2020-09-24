import {Component} from '@angular/core'
import {NotesService} from './notes.service'

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styles: [`
        .category-tabs{
            float: right;
        }
        .center {
            margin: auto;
            width: 70%;
            padding: 10px;
          }
        .tab-label {
            margin-right: 25px;
            text-align: center;
            font-size: 20px;
        }
        .notes-container {
            padding-top: 8em;
        }
    `]
})

export class AppNotesComponent {
    notesData: any;
    checked = false;
    selectedOption: string;
    selectedTabNotes: any;
    constructor(private notesService: NotesService) {
        this.notesData = [];
    }
    getNotes() {
        this.notesService.getNotes()
          .subscribe(response => {
            this.notesData = this.mergeNotesData(response.Project);
            console.log(response.Project);
          });
    }

    mergeNotesData(notes: any) {
        let finalNotes = [];
        for(let i=0; i<notes.length; i++){
            var index = finalNotes.findIndex(el=>el.Name===notes[i].Name);
            if(index>=0){
                finalNotes[index].Tasks = finalNotes[index].Tasks.concat(notes[i].Tasks);
            } else {
                finalNotes.push(notes[i]);
            }
        }
        return finalNotes;
    }

    ngOnInit() {
        this.getNotes();
    }

    updateNotes (value:any) {
        console.log(value);
        let selectedtabs = this.notesData.filter(
            tabObj => tabObj.Name === value);
        this.selectedTabNotes = selectedtabs[0].Tasks;
        
    }

}