import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairesListComponent } from './formulaires-list.component';

describe('FormulairesListComponent', () => {
  let component: FormulairesListComponent;
  let fixture: ComponentFixture<FormulairesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulairesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulairesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
