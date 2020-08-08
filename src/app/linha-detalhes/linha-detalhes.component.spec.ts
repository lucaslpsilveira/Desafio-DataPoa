import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhaDetalhesComponent } from './linha-detalhes.component';

describe('LinhaDetalhesComponent', () => {
  let component: LinhaDetalhesComponent;
  let fixture: ComponentFixture<LinhaDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinhaDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinhaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
