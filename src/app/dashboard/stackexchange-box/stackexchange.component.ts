import { Component, Input, OnInit } from '@angular/core';
import {SearchService, ISearchResultItem} from "../../core/services/search.service";

@Component({
    selector: 'stackexchange-box',
    templateUrl: './stackexchange.component.html',
    styleUrls: ['./stackexchange.component.css']

})
export class StackexchangeComponent implements OnInit {
    @Input() tag: string;
    soquestions: Array<ISearchResultItem>;

    constructor(private sosearch: SearchService) {
        this.soquestions = [];
    }

    ngOnInit() {
        this.sosearch.search(this.tag).subscribe((data: any) => {
            // Get as many questions as possible, but stay within the 10 questions limit
            const questionCount = Math.min(10, data.items.length);

            for (let i = 0; i < questionCount; i++) {
                this.soquestions.push(data.items[i]);
            }

            console.log(this.tag, this.soquestions);
        });
    }
}