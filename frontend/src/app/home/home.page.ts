import {Component} from '@angular/core';
import {Charge} from '../models/charge';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ImageService} from '../services/image.service';
import {Router} from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    charges: Charge[] = [];
    formGroup: FormGroup;

    constructor(private formBuilder: FormBuilder, private router: Router) {
        this.formGroup = formBuilder.group({
            q: ['', Validators.required],
            x: ['', Validators.required],
            y: ['', Validators.required]
        });
    }

    addCharge() {
        this.charges.push(this.formGroup.value);
        this.formGroup.reset();
    }

    removeCharge(i: number) {
        this.charges.splice(i, 1);
    }

    graph() {
        this.router.navigate(['/home/image'], {state: this.charges}).catch();
    }
}
