import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPresentationComponent } from './web-presentation.component';

describe('WebPresentationComponent', () => {
  let component: WebPresentationComponent;
  let fixture: ComponentFixture<WebPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebPresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
