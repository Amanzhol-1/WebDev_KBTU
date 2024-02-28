import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreamerComponent } from './screamer.component';

describe('ScreamerComponent', () => {
  let component: ScreamerComponent;
  let fixture: ComponentFixture<ScreamerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreamerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
