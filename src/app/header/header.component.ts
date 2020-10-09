import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  FormLogin
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log('Component app-header inciado...');
    this.FormLogin = this.fb.group({
      cpf: ['']
    });
  }

}
