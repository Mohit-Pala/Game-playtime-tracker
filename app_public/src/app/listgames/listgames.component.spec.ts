import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListgamesComponent } from './listgames.component';

describe('ListgamesComponent', () => {
  let component: ListgamesComponent;
  let fixture: ComponentFixture<ListgamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListgamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
