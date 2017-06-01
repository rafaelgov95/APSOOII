import {AbstractControl} from '@angular/forms';
export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
       let senha = AC.get('senha').value; // to get value in input tag
       let confirmaSenha = AC.get('confirmaSenha').value; // to get value in input tag
        if(senha != confirmaSenha) {
            console.log('false');
            AC.get('confirmaSenha').setErrors( {MatchPassword: true} )
        } else {
            console.log('true');
            return null
        }
    }
}