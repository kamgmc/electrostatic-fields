import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoadingController} from '@ionic/angular';
import {Charge} from '../models/charge';

@Injectable({
    providedIn: 'root'
})
export class ImageService {
    image: any;

    constructor(private httpClient: HttpClient, private loadingController: LoadingController) {
    }

    async getImage(charges: Charge[]): Promise<Blob> {
        const loading = await this.loadingController.create({
            message: 'Bee Bup...'
        });
        await loading.present();
        console.log(charges);
        return this.httpClient.post('https://electrostatic-fields.herokuapp.com/', {charges}, {responseType: 'blob'})
            .toPromise()
            .finally(() => loading.dismiss());
    }
}
