import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NavParams, Loading } from 'ionic-angular';

import { ProjectPage } from '../project/project';

import {FameService} from '../../providers/fame-service';

@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
  providers: [FameService]
})
export class ProjectsPage {

    items: any = undefined;

    people: Array <{username: string, otherUrl: string, githubUrl: string, projects: Array<any>}> = [];

    loading: boolean = false;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public params: NavParams, public fameService: FameService) {
        //let loading = Loading.create();
        //navCtrl.present(loading); //nav instance of NavController
        this.loadPeople();

    }

    refresh(refresher: any) {
        this.loadPeople(refresher);
    }


    loadPeople(refresher: any = null){
        this.fameService.load()
        .then(data => {
            this.people = data.users;
            this.loading = false;

            if(refresher) refresher.complete();

            console.log(this.people)
            //loading.dismiss();
        }).catch(err => {
            if(refresher) refresher.complete();
        });
    }

    itemSelected(item: {username: string, otherUrl: string, githubUrl: string, projects: any}) {
        this.navCtrl.push(ProjectPage , item);
    }

}
