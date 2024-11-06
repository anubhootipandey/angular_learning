import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiIntegrationComponent } from './api-integration.component';

describe('ApiIntegrationComponent', () => {
  let component: ApiIntegrationComponent;
  let fixture: ComponentFixture<ApiIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiIntegrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
