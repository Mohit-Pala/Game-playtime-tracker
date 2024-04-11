import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssTesterComponent } from './css-tester.component';

describe('CssTesterComponent', () => {
  let component: CssTesterComponent;
  let fixture: ComponentFixture<CssTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CssTesterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CssTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
