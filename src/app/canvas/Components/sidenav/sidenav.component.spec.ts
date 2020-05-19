import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavComponent1 } from './sidenav.component';

describe('SidenavComponent1', () => {
  let component: SidenavComponent1;
  let fixture: ComponentFixture<SidenavComponent1>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavComponent1 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
