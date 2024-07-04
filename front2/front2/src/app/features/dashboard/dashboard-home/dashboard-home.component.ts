import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';
import { AuthenticationService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  currentUser: any;
  isActiveIce = true;
  isActiveHot = false;
  isActiveJuice = false;

  isClassActivedrink = true;
  isClassActiveabout = false;
  isClassActivespecial = false;
  isClassActivecontact = false;

  constructor(private notificationService: NotificationService,
    private authService: AuthenticationService,
    private titleService: Title,
    private logger: NGXLogger) {
  }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.titleService.setTitle('Dashboard');
    this.logger.log('Dashboard loaded');

    setTimeout(() => {
      this.notificationService.openSnackBar('Welcome!');
    });
  }

  changeMenuItem(item: any) {
    console.log(item);
    this.isClassActivedrink = false;
    this.isClassActiveabout = false;
    this.isClassActivespecial = false;
    this.isClassActivecontact = false;
    switch (item) {
      case 'drink':
        this.isClassActivedrink = true;
        break;
      case 'about':
        this.isClassActiveabout = true;
        break;
      case 'special':
        this.isClassActivespecial = true;
          break;
      case 'contact':
        this.isClassActivecontact = true;
          break;
      default:
        
    }
  }

  toggleActive(menu: any){
    this.isActiveIce = false;
    this.isActiveHot = false;
    this.isActiveJuice = false;
    switch (menu) {
      case 'ice':
        this.isActiveIce = true;
        break;
      case 'hot':
        this.isActiveHot = true;
        break;
      case 'juice':
        this.isActiveJuice = true;
          break;
      default:
        
    }
  }
}
