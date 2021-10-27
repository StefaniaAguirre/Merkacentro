import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPermisosComponent } from './info-permisos.component';

describe('InfoPermisosComponent', () => {
  let component: InfoPermisosComponent;
  let fixture: ComponentFixture<InfoPermisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPermisosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
