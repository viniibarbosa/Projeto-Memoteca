import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralPensamentosComponent } from './mural-pensamentos.component';

describe('MuralPensamentosComponent', () => {
  let component: MuralPensamentosComponent;
  let fixture: ComponentFixture<MuralPensamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuralPensamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuralPensamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
