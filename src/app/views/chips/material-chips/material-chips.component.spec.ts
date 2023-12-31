import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialChipsComponent } from './material-chips.component';

describe('MaterialChipsComponent', () => {
  let component: MaterialChipsComponent;
  let fixture: ComponentFixture<MaterialChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialChipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
