import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service } from '../service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchForm: FormGroup;
  show: string = 'tv';
  constructor(
    private fb: FormBuilder,
    private service: Service,
    private location: Location) { }

  ngOnInit(): void {
    const link = this.location.path();
    console.log(link);
    if (link == '/movie') {
      this.show = 'movie';
      this.service.topMovies(this.show);
    } else {
      this.show = 'tv';
      this.service.topMovies(this.show);
    }
    this.searchForm = this.fb.group({
      search: ['', Validators.minLength(3)]
    });
  }

  search() {
    let keyWord = this.searchForm.get('search').value;
    this.service.search(keyWord, this.show);
  }
  movie() {
    this.show = 'movie';
    this.search();
  }
  tv() {
    this.show = 'tv';
    this.search();
  }
}
