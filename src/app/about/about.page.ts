import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
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
  IonButtons,
  IonButton,
  IonIcon,
  ScrollDetail } 
  from '@ionic/angular/standalone';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonIcon, RouterLink]
})

export class AboutPage implements OnInit {

  constructor() { 
    addIcons({ 'arrow-back-outline': arrowBackOutline });
  }
  handleScrollStart() {
    console.log('Iniciou o scroll');
  }

  handleScroll(event: CustomEvent<ScrollDetail>) {
    console.log('Scrollando...', event.detail.scrollTop);
  }

  handleScrollEnd() {
    console.log('Parou o scroll');
  }

  ngOnInit() {
  }

}
