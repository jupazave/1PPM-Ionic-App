import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-project',
  templateUrl: 'project.html'
})
export class ProjectPage {

    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public params: NavParams) {


        let alert = alertCtrl.create({
            title: params.get('title'),
            subTitle: 'You have entered to a project!' ,
            buttons: ['OK']
        });
        alert.present();

    }

}
