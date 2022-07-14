import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})
export class StarComponent implements OnChanges {
    maxStars = 5
    fieldWidth = 75
    cropWidth = this.fieldWidth
    @Input() rating = 0
    @Output() clicked = new EventEmitter<string>()

    ngOnChanges (): void {
        this.cropWidth = this.rating * this.fieldWidth / this.maxStars
    }

    onClick() {
        this.clicked.emit(`The rating ${this.rating} was clicked`)
    }
}
