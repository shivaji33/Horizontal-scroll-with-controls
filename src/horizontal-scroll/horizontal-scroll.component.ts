import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-horizontal-scroll',
  templateUrl: './horizontal-scroll.component.html',
  styleUrls: ['./horizontal-scroll.component.css'],
  imports: [CommonModule],
})
export class HorizontalScrollComponent implements OnInit, AfterViewInit {
  items = Array.from({ length: 5 }, (_, k) => {
    return {
      id: k,
      url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
    };
  });
  @ViewChild('container') containerEl: ElementRef;
  isLeftButtonHidden = true;
  isRightButtonHidden = false;
  constructor() {}

  ngAfterViewInit(): void {
    this.containerEl.nativeElement.addEventListener('wheel', (event) => {
      // if (event.deltaX > 0) {
      //   console.log('Mouse wheel scrolled to the right');
      // } else if (event.deltaX < 0) {
      //   console.log('Mouse wheel scrolled to the left');
      // }
    });
  }

  ngOnInit() {
    this.hideButtonsIfNeeded();
  }

  scrollLeft(): void {
    this.containerEl.nativeElement.scrollLeft -= 100;
    this.hideButtonsIfNeeded();
  }

  scrollRight(): void {
    this.containerEl.nativeElement.scrollLeft += 100;
    this.hideButtonsIfNeeded();
  }

  hideButtonsIfNeeded(): void {
    const containerWidth = this.containerEl.nativeElement.clientWidth;
    const contentWidth = this.containerEl.nativeElement.scrollWidth;
    const scrollLeft = this.containerEl.nativeElement.scrollLeft;
    const maxScroll = contentWidth - containerWidth;

    if (scrollLeft <= 0) {
      this.isLeftButtonHidden = true;
    } else {
      this.isLeftButtonHidden = false;
    }

    if (scrollLeft >= maxScroll) {
      this.isRightButtonHidden = true;
    } else {
      this.isRightButtonHidden = false;
    }
  }
}
