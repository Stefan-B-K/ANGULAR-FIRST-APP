import { Component, OnInit } from "@angular/core";
import { IProduct } from "./IProduct";
import { ProductService } from "./product.service";

@Component({
    selector: "app-products",
    templateUrl: "product-list.component.html",
    styleUrls: ['product-list.component.css'],
    providers: [ProductService]
})
export class ProductListComponent implements OnInit {
    pageTitle = 'Product List'
    imageWidth = 50
    imageMargin = 2
    showImage = false
    listFilter = ''
    products: IProduct[] = []

    constructor (private productService: ProductService) {}

    get filteredProducts (): IProduct[] {
        return this.products.filter(
            product => product.productName
                .toLocaleLowerCase()
                .includes(this.listFilter.toLocaleLowerCase())
        )
    }

    toggleImage (): void {
        this.showImage = !this.showImage
    }

    onRatingClicked(message: string) {
        alert(message)
    }

    ngOnInit (): void {
       this.products = this.productService.getProducts()
    }
}
