import { Component, ViewChild, ElementRef,HostListener } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

@ViewChild("outsideElement", {static: true}) outsideElement : ElementRef;
  @ViewChild('modalView', {static: true}) modalView$ : ElementRef;

  openModal() {
    this.modalView$.nativeElement.classList.add('visible');
  }

  closeModal() {
    this.modalView$.nativeElement.classList.remove('visible');
  }

  

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const outsideElement = this.outsideElement.nativeElement.contains(targetElement);
    if (outsideElement) {
      this.modalView$.nativeElement.classList.remove('visible');
    } 
  }
}
