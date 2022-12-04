import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrxnComponent } from './trxn.component';

describe('TrxnComponent', () => {
  let component: TrxnComponent;
  let fixture: ComponentFixture<TrxnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrxnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrxnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
