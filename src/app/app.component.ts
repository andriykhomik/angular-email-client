import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public signedin$: BehaviorSubject<boolean> = this.authService.signedin$;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.checkAuth().subscribe(() => {});
  }
}
