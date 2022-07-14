import { Component, OnInit, NgModule,HostListener } from '@angular/core';
declare let AOS: any;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }
  // services text and image 
  services: any[] = [
    {
      'heading': 'Engagement',
      'details':'We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.',
      'imgPath':'assets/images/Engagement.png'
    },
    {
      'heading': 'Communications',
      'details':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. ',
      'imgPath':'assets/images/Coominucation.png'
    },
    {
      'heading': 'facilitation',
      'details':'We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.',
      'imgPath':'assets/images/facilation.png'
    },
    {
      'heading': 'Consultation and Research',
      'details':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. ',
      'imgPath':'assets/images/Consultation.png'
    },
    {
      'heading': 'Traning & Mentoring',
      'details':'We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.',
      'imgPath':'assets/images/Training.png'
    }   
  ];

  // team slider 
  teams = [
    {image: 'assets/images/Person1.png', name : 'Jessica D’suza'},
    {image: 'assets/images/Person2.png', name : 'Johny Williams'},
    {image: 'assets/images/Person3.png', name : 'Sanya R,'}, 
    {image: 'assets/images/Person1.png', name : 'Jessica D’suza'},
    {image: 'assets/images/Person2.png', name : 'Johny Williams'},
  ];
  slideConfig = {
    "slidesToShow": 3, 
    "slidesToScroll": 1,
    "autoplay": false,
    "autoplaySpeed": 2000,
    "centerMode": true,
    "arrows": false,    
    "responsive": [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }    
    ]    
    
  };
  
// client logo 
  logos = [
    {image: 'assets/images/client/client1.png', hover : 'assets/images/client/client_hover1.png'},
    {image: 'assets/images/client/client2.png', hover : 'assets/images/client/client_hover2.png'},
    {image: 'assets/images/client/client3.png', hover : 'assets/images/client/client_hover3.png'},
    {image: 'assets/images/client/client4.png', hover : 'assets/images/client/client_hover4.png'},
    {image: 'assets/images/client/client5.png', hover : 'assets/images/client/client_hover5.png'},
    {image: 'assets/images/client/client6.png', hover : 'assets/images/client/client_hover6.png'},
    {image: 'assets/images/client/client7.png', hover : 'assets/images/client/client_hover7.png'},
    {image: 'assets/images/client/client8.png', hover : 'assets/images/client/client_hover8.png'},
    {image: 'assets/images/client/client9.png', hover : 'assets/images/client/client_hover9.png'},    
  ];

  
}


