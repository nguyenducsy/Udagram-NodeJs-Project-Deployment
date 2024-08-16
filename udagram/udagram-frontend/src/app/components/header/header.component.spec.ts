import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core'; // Optionally import these to avoid schema errors
import { AuthService } from '../../services/auth.service';
import {  provideHttpClientTesting } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  //declare mock
  let authServiceMock;

  beforeEach(async () => {
    authServiceMock = jasmine.createSpyObj<AuthService>(['login','logout']);

    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, BrowserDynamicTestingModule],
      declarations: [HeaderComponent], // Declare the component here
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA], // Optionally add these schemas,
      providers:[
        provideHttpClientTesting(),
        {provide:AuthService, useValue:  authServiceMock}
      ]
    })
    .compileComponents().catch(e => console.log(e));

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
