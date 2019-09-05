import { Component, ViewChild } from '@angular/core';
import { ApiCallsService } from '../api-calls.service';
import { AtlasMapComponent } from '@acaisoft/angular-azure-maps';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent {
    constructor(private httpService: ApiCallsService) { }
    @ViewChild('maper', { static: false }) maper: AtlasMapComponent;
}