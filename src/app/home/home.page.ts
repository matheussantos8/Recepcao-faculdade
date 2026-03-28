import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowForwardOutline } from 'ionicons/icons';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonAvatar,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAvatar, IonButton, RouterLink, IonIcon],
})
export class HomePage {
  constructor() {addIcons({ 'arrow-forward-outline': arrowForwardOutline });}
}
