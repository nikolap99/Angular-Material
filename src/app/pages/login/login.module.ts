import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { LoginCardComponent } from './login-card/login-card.component';

@NgModule({
  declarations: [LoginComponent, LoginCardComponent],
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  exports: [LoginComponent]
})
export class LoginModule {}
