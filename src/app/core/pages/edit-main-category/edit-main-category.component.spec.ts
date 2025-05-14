import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMainCategoryComponent } from './edit-main-category.component';

describe('EditMainCategoryComponent', () => {
  let component: EditMainCategoryComponent;
  let fixture: ComponentFixture<EditMainCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMainCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMainCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
