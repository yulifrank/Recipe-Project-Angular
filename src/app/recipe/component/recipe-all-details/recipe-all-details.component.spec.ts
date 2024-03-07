import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeAllDetailsComponent } from './recipe-all-details.component';

describe('RecipeAllDetailsComponent', () => {
  let component: RecipeAllDetailsComponent;
  let fixture: ComponentFixture<RecipeAllDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeAllDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipeAllDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
