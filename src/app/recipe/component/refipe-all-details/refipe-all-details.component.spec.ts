import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefipeAllDetailsComponent } from './refipe-all-details.component';

describe('RefipeAllDetailsComponent', () => {
  let component: RefipeAllDetailsComponent;
  let fixture: ComponentFixture<RefipeAllDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefipeAllDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RefipeAllDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
