import {Component, OnInit} from '@angular/core';
import {ImageService} from '../../services/image.service';
import {Router} from '@angular/router';
import {Charge} from '../../models/charge';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
    image: any;

    constructor(private router: Router, private imageService: ImageService) {
        if (this.router.getCurrentNavigation().extras.state && this.router.getCurrentNavigation().extras.state.length > 0) {
            const charges = this.router.getCurrentNavigation().extras.state as Charge[];
            this.imageService.getImage(charges).then(image => {
                const reader = new FileReader();
                reader.addEventListener('load', () => {
                    this.image = reader.result;
                });
                if (image) {
                    reader.readAsDataURL(image);
                }
            });
        } else {
          this.router.navigate(['/home']).catch();
        }
    }

    ngOnInit() {
    }

}
