import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-deaths',
    templateUrl: './deaths.page.html',
    styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {
    items = [];
    numTimesLeft = 5;
    deaths: Observable<any>;

    constructor(private router: Router, private http: HttpClient) { }

    ngOnInit() {
        this.deaths = this.http.get('https://breakingbadapi.com/api/death-count');
        this.deaths.subscribe(data => {
            console.log('my data: ', data);
        });
    }

    openDetails(death) {
        let deathId = death.death_id;
        this.router.navigateByUrl(`/tabs/death/${deathId}`);
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
        for (let i = 0; i < 10; i++)
            this.items.push(i);
    }


}