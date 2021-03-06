import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageWithTooltipComponent } from './image-with-tooltip.component';

describe('ImageWithTooltipComponent', () => {
  let component: ImageWithTooltipComponent;
  let fixture: ComponentFixture<ImageWithTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageWithTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageWithTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
