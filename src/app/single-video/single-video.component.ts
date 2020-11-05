import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Service } from '../service.service';
import { SingleVideoModel } from './singleVideo.model';

@Component({
  selector: 'app-single-video',
  templateUrl: './single-video.component.html',
  styleUrls: ['./single-video.component.css']
})
export class SingleVideoComponent implements OnInit {
  data: SingleVideoModel;
  id: Params;
  show: string;
  constructor(
    private service: Service,
    private route: ActivatedRoute,
    private location: Location,
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    const link = this.location.path();
    const editLink = link.split('/');
    if (editLink[1] === 'movie') {
      this.service.singleVideo('movie', this.id);
    } else {
      this.service.singleVideo('tv', this.id);
    }
    this.service.keyWord.subscribe(resp => {
      this.data = resp;
    });
  }

  goBack() {
      this.location.back();
  }

}
