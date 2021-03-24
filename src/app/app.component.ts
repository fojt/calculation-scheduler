import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'calculation-scheduler';
  public types = ['basic', 'full', 'fast'];
  public name = new FormControl('');
  public type = new FormControl(this.types[0]);
  public date = new FormControl('');
  public repeats = new FormControl('');
  public produceReport = new FormControl('');

  public schedulerList = [];

  constructor(public httpClient: HttpClient) {
  }

  public ngOnInit() {
    /* call load data */
  }

  /* this should be in a service */
  private loadSchedulerList(): void {
    this.httpClient
      .request('Get', 'testUrl/getList', {})
      .subscribe(
        (response) => {
          // this.schedulerList = response.data
        });
  }

  /* this should be in a service */
  public onSubmit(): void {
    this.httpClient
      .request('Post', 'testUrl/Post', {})
      .subscribe(
        (response) => {
        },
        error => {

        }
      );

  }

}
