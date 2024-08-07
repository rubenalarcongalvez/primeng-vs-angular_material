import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/style/material/material.module';
import { PrimeNgModule } from '../../shared/style/prime-ng/prime-ng.module';
import { Observable, map, startWith } from 'rxjs';
import { Country, countries } from '../../shared/services/countries.service';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [MaterialModule, PrimeNgModule, ReactiveFormsModule],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss'
})
export class AutocompleteComponent {
  formGroup: FormGroup = new FormGroup({
    selectedCountry: new FormControl<object | string>('')
  });

  filteredCountries: any[] | undefined;
  filteredCountriesMaterial?: Observable<Country[]>;

  constructor() {}

  ngOnInit() {
    this.filteredCountriesMaterial = this.formGroup?.get('selectedCountry')?.valueChanges.pipe(
      startWith(''),
      map(value => this.filterCountriesMaterial(value))
    );
  }

  displayFn(option?: any) {
    return option ? option.name : '';
  }

  private filterCountriesMaterial(value: string | Country): Country[] {
    let filterValue = '';
    if (typeof value === 'string') {
      filterValue = value.toLowerCase();
    } else {
      filterValue = value?.name?.toLowerCase();
    }
    return countries.filter(country => country.name.toLowerCase().startsWith(filterValue) || country.code.toLowerCase().startsWith(filterValue));
  }

  filterCountry(event: AutoCompleteCompleteEvent) {
      let filtered: any[] = [];
      let query = event.query;

      for (const country of countries) {
        if (country.name.toLowerCase().startsWith(query.toLowerCase()) || country.code.toLowerCase().startsWith(query.toLowerCase())) {
          filtered.push(country);
        }
      }

      this.filteredCountries = filtered;
  }
}
