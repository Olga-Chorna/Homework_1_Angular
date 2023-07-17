import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstQuoteComponent } from './first-quote.component';

describe('FirstQuoteComponent', () => {
  let component: FirstQuoteComponent;
  let fixture: ComponentFixture<FirstQuoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstQuoteComponent]
    });
    fixture = TestBed.createComponent(FirstQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
