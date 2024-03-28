import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationConfig } from '@angular/core';
import { MyComponent } from './app/body.component';

const config: ApplicationConfig = { providers: [] };
bootstrapApplication(MyComponent, config);
