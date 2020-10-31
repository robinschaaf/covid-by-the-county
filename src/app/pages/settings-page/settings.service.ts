import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {
    private settingsSubject = new Subject<any>();
    public settings$ = this.settingsSubject.asObservable();

    constructor() {
    }
    publishSettings(data: any) {
      this.settingsSubject.next(data);
    }
}
