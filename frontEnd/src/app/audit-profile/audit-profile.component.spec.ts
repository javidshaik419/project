import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditProfileComponent } from './audit-profile.component';

describe('AuditProfileComponent', () => {
  let component: AuditProfileComponent;
  let fixture: ComponentFixture<AuditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
