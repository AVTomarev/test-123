import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-with-tooltip',
  templateUrl: './image-with-tooltip.component.html',
  styleUrls: ['./image-with-tooltip.component.scss']
})
export class ImageWithTooltipComponent implements OnInit {
  @Input()
  public src: string = '';

  @Input()
  public alt: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
