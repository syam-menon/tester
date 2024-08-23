import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { interval, share, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  @ViewChild('toggleButton') toggleButton!: ElementRef;

   one = new Subject<number>()
  title = 'test-app';

  showingAlert = false;

  ngOnInit(): void {
   throw new Error('oninit not implemented');
    
  }
  showAlert() {
    alert('Button clicked!');
  }

  toggleAlert() {
    this.showingAlert = !this.showingAlert;
  }

  onSubmit() {
    alert('Form submitted!');
  }
}
