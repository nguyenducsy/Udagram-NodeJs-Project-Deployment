import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent } from './signin.component';
import { AuthService } from '../../services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  //declare mock
  let authServiceMock;


  beforeEach(async () => {
    authServiceMock = jasmine.createSpyObj<AuthService>(['login','logout']);

    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, BrowserDynamicTestingModule],
      declarations: [SigninComponent], // Declare the component here
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA], // Optionally add these schemas,
      providers:[
        provideHttpClientTesting(),
        {provide:AuthService, useValue:  authServiceMock}
      ]
    })
    .compileComponents().catch(e => console.log(e));

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
