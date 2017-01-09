import { Component } from '@angular/core';
import { Platform,  MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { WelcomePage } from '../pages/welcome/welcome';
import { ProjectsPage } from '../pages/projects/projects';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage : any = WelcomePage;

  pages: Array<{title: string, component : any }> = [
    {title: 'Home', component: WelcomePage },
    {title: 'Projects', component: ProjectsPage }
  ] ;

  constructor(platform: Platform,  public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(component){
    this.rootPage = component;
    this.menuCtrl.close();
  }
}
