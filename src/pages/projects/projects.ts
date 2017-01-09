import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

import { ProjectPage } from '../project/project';

@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html'
})
export class ProjectsPage {

    items: Array <{title: string, key: string}> = [
        {title: 'Pokémon Yellow', key: 'pokemon-yellow'},
        {title: 'Super Metroid', key: 'super-metroid'},
        {title: 'Mega Man X', key: ''},
        {title: 'The Legend of Zelda', key: ''},
        {title: 'Pac-Man', key: ''},
        {title: 'Super Mario World', key: ''},
        {title: 'Street Fighter II', key: ''},
        {title: 'Half Life', key: ''},
        {title: 'Final Fantasy VII', key: ''},
        {title: 'Star Fox', key: ''},
        {title: 'Tetris', key: ''},
        {title: 'Donkey Kong III', key: ''},
        {title: 'GoldenEye 007', key: ''},
        {title: 'Doom', key: ''},
        {title: 'Fallout', key: ''},
        {title: 'GTA', key: ''},
        {title: 'Halo', key: '' }
    ];

    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public params: NavParams) {

    }

    itemSelected(item: {title: string, key: string}) {
        this.navCtrl.push(ProjectPage , item);
    }

}
