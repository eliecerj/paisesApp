import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css']
})
export class CountryInputComponent implements OnInit {

  
  @Input() placeholder: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  
  debouncer: Subject<string> = new Subject();
  
  termino: string = '';
  
  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( value => {
      this.onDebounce.emit(value)
      
    })
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  keyPress () {
    this.debouncer.next(this.termino)
  }
}
