import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAutocompleteComponent } from './material-autocomplete.component';

describe('MaterialAutocompleteComponent', () => {
  let component: MaterialAutocompleteComponent;
  let fixture: ComponentFixture<MaterialAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialAutocompleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
