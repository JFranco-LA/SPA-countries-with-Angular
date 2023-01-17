import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisUruguayComponent } from './pais-uruguay.component';

describe('PaisUruguayComponent', () => {
  let component: PaisUruguayComponent;
  let fixture: ComponentFixture<PaisUruguayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisUruguayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisUruguayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
