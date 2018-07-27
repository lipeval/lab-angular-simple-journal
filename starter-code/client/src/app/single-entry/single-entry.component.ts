import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RetrieveEntriesService} from '../retrieve-entries.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
  private retrieveEntriesService: RetrieveEntriesService) { }

  id: any;
  entrie: any;

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(params => {
      this.id = params.id;
      this.retrieveEntriesService.getSingleEntry(this.id)
      .subscribe(entry => {
        this.entrie = entry;
      })
    })
  }

}
