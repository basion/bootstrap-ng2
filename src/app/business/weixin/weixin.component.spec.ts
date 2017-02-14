/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WeixinComponent } from './weixin.component';

describe('WeixinComponent', () => {
  let component: WeixinComponent;
  let fixture: ComponentFixture<WeixinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeixinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeixinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
