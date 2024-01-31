import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, Input, Renderer2, ViewChild } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

constructor(public  auth:AuthService){}

  @ViewChild('swiperContainer', { static: true }) swiperContainer!: ElementRef;
  images: string[] = ['/assets/home4.jpg', '/assets/slide1.png'];
  galerie: string[] = [
    '/assets/finance.jpg',
    '/assets/dev.jpg',
    '/assets/commerce.avif',
    '/assets/gestcom.jpeg',
    '/assets/mark.png',
    '/assets/infoges.jpg',
    '/assets/gestent.jpg'
  ];
  formation =
  [
    {
      content: '/assets/sage.png',
      title: "Formation Sage"
    },
    {
      content:    '/assets/word.jpg',
      title:"Informatique de Bureautique"
    },
    {
      content: '/assets/tcf.jpg',
      title:'Préparation aux Tests Internationaux (TCF,TEF)'
    }
  ];
  formation2=
  [
    {
      content:'/assets/anglais.jpeg',
      title:'Communication Professionnelle à l’Orale et à l’écrit en Anglais'
    },
    {
      content:'/assets/web2.jpg',
      title:'Formation développement Web'
    },
    {
      content:'/assets/com.png',
      title:'Formation Community Management'
    },
    {
      content:'/assets/exel.jpeg',
      title:'Microsoft Excel'
    },
    {
      content:'/assets/wordpress.png',
      title:'Formation WordPress'
    }
  ]
tem=[
  '/assets/tem2.mp4',
  '/assets/tem3.mp4',
  '/assets/tem4.mp4'
]


  hideForm = true
  changeForm(){
    if(this.hideForm==true){
      this.hideForm = false
    }
    else{
      this.hideForm = true
    }
  }
  hideForm2 = true
  changeForm2(){
    if(this.hideForm2==true){
      this.hideForm2 = false
    }
    else{
      this.hideForm2= true
    }
  }


  interval = 2000;
  currentSlideIndex = 0;
  private intervalId: any; // Variable to store the interval ID

  ngOnInit() {
    this.startSlideshow();

    }



  ngOnDestroy() {
    this.stopSlideshow(); // Stop the slideshow when the component is destroyed
  }

  showSlide(index: number) {
    this.currentSlideIndex = index;
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;
  }

  startSlideshow() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 10000); // Change slide every 3 seconds
  }

  stopSlideshow() {
    clearInterval(this.intervalId);
  }
  chunkArray(array: any[], chunkSize: number): any[] {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

  carouselOptions = {
    items: 3,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  };

  newsItems = [
    {
      title: 'IFC X UC',
      link: '/fr/399/ifc-x-uc',
      imageWebp: '/uploads/content/small/1702540160_article.webp',
      imageSrcset: '/uploads/content/small/1702540160_article.jpg 220w, /uploads/content/medium/1702540160_article.jpg 360w, /uploads/content/large/1702540160_article.jpg 460w',
      imageDefault: '/uploads/content/default.png',
      imageWidth: 400,
      imageHeight: 225,
      description: 'L’Université Centrale est fière d\'annoncer un partenariat avec IFC, qui manifeste notre engagement ...',
    },
    // Add more news items following the same pattern
  ];
}
