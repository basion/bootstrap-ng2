/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QqComponent } from './qq.component';

describe('QqComponent', () => {
  let component: QqComponent;
  let fixture: ComponentFixture<QqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
