import { Component, OnInit } from '@angular/core';
import {RetrieveEntriesService} from '../retrieve-entries.service'



@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [RetrieveEntriesService]
})
export class EntryListComponent implements OnInit {

  constructor(private retrieveEntriesService : RetrieveEntriesService) { }


  entries: any;

  ngOnInit() {
    this.retrieveEntriesService.getEntries()
    .subscribe(entries => {
      this.entries = entries;
    })
  }

}
