import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-episodes',
    templateUrl: './episodes.page.html',
    styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {
    episodes: Observable<any>;

   items = [];
  numTimesLeft = 5;
    constructor(private router: Router, private http: HttpClient) { }

    ngOnInit() {
        this.episodes = this.http.get('https://breakingbadapi.com/api/episodes/')
        this.episodes.subscribe(data => {
            console.log('my data: ', data);
        });
    }

    openDetails(episode) {
        let episodeId = episode.episode_id;
       this.router.navigateByUrl(`/tabs/episodes/${episodeId}`);

    }
     loadData(event) {
    setTimeout(() => {
      console.log('Done');
      this.addMoreItems();
      this.numTimesLeft -= 1;
      event.target.complete();
    }, 2000);
  }

  addMoreItems() {
    for (let i=0; i<10; i++)
      this.items.push(i);
  }
}