import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisChileComponent } from './pais-chile.component';

describe('PaisChileComponent', () => {
  let component: PaisChileComponent;
  let fixture: ComponentFixture<PaisChileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisChileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisChileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
