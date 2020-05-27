import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomePage} from './home.page';
import {HomePageRoutingModule} from './home-routing.module';
import {ImageComponent} from './image/image.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [
        HomePage,
        ImageComponent
    ]
})
export class HomePageModule {
}
