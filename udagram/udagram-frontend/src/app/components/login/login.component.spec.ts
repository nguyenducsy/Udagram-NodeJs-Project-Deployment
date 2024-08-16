import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '../../services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
    //declare mock
    let authServiceMock;


    beforeEach(async () => {
        authServiceMock = jasmine.createSpyObj<AuthService>(['login','logout']);
    
        await TestBed.configureTestingModule({
          imports: [ RouterTestingModule, BrowserDynamicTestingModule],
          declarations: [LoginComponent], // Declare the component here
          schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA], // Optionally add these schemas,
          providers:[
            provideHttpClientTesting(),
            {provide:AuthService, useValue:  authServiceMock}
          ]
        })
        .compileComponents().catch(e => console.log(e));
    
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
      });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
