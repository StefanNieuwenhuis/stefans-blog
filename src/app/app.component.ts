
import {Component, OnInit} from '@angular/core';
import {Observable} from '../../node_modules/rxjs';
import {AngularFirestore} from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  items: Observable<any>;

  constructor(private db: AngularFirestore) {
  }

  ngOnInit() {
    this.items = this.db.collection('blogposts').valueChanges();
    console.log(this.items);
  }
}
