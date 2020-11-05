import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { AbstractResponse } from 'src/app/shared/data-structure/abstract-response';
import { HelperService } from 'src/app/shared/services/helper.service';

@Injectable()

export class LoginService extends HelperService {
    private loginBS: BehaviorSubject<any> = new BehaviorSubject({});
    loginBSO = this.loginBS.asObservable();
    constructor(private http: HttpClient) {
        super();
    }

    test() {
        this.http.get('http://localhost:3000/test').subscribe((res: any) => {
            if (res.status) {
                this.loginBS.next(res.data)
            }
        });
    }
}