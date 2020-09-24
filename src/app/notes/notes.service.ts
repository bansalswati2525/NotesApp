import {Injectable} from '@angular/core'
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const serverURL = 'http://demo0242938.mockable.io/todo';
const localURL = 'assets/data/dummy.json';

@Injectable()

export class NotesService {
    constructor(private http: HttpClient) { 

    }

    getNotes(): Observable<any> {
        if(environment.production) {
            return this.http.get(serverURL);
        }
        return this.http.get(localURL);
    }
}