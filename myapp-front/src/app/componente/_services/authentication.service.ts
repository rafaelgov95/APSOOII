import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

    constructor(private http: Http) { }
    // private loginUrl = 'http://localhost:3000/autentica';

    // login(username: string, password: string) {
    //     console.log('teste');


    //     let body = new URLSearchParams();
    //     body.set('username', username);
    //     body.set('password', password);
    //     // return this.http.post('http://localhost:3000/autentica', JSON.stringify({ email: username, senha: password }))
    //     return this.http.post(this.loginUrl, { 'username': username, 'password': password }, this.headers)

    //         .map((response: Response) => {
    //             console.log(JSON.stringify({ email: username, senha: password }));
    //             // login successful if there's a jwt token in the response
    //             let user = response.json();
    //             console.log(user);
    //             if (user && user.token) {
    //                 // store user details and jwt token in local storage to keep user logged in between page refreshes
    //                 localStorage.setItem('currentUser', JSON.stringify(user));
    //             }
    //         });
    // }
    login(username, password) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('email', username);
        urlSearchParams.append('senha', password);
        let body = urlSearchParams.toString()
        return this.http.post('http://localhost:3000/autentica', body, { headers: headers })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let body = response.json();
                if (body) {
                    if (body.user && body.user.accessToken) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentUser', JSON.stringify(body));
                    }
                }
                else {
                    console.log("erro");
                    return body;
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}