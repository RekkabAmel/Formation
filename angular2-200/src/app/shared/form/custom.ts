import { FormControl } from '@angular/forms';

export class Custom {

    /**
     * Function to control email with custom validator
     *
     * @param control
     *
     * @returns {{sfeirEmail: boolean}}
     */
    static sfeirEmail(control: FormControl) {
        // email regex
        const regex = /^\w+\.\w@sfeir\.com$/;

        // returns control
        return regex.test(control.value) ? null : {
            sfeirEmail: true
        }
    }
}
