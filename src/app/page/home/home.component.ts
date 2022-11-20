import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: ApiServicesService) { }

  categoryList: any = ['all', 'hosting', 'ecommerce', 'finance', 'course', 'product', 'travel']
  showAllData: any = [];
  filterName: any;
  showData: any;
  filterDate: any = [];

  ngOnInit(): void {
    this.homeData()
  }

  homeData() {
    this.service.homeApi().subscribe((result) => {
      console.log(result);
      if (result.length > 0) {
        this.showAllData = result;
        this.showData = true;
      }
    })
  }

  
  onChange(event: any) {
    this.showData = false;
    this.filterName = event.target.value;
    this.filterDate = []
    this.showAllData.filter((element: any) => {
      if (this.filterName == 'All') {
        this.filterDate.push(element)
      }
      else {
        if (element.category == this.filterName.toLowerCase()) {
          this.filterDate.push(element)
        }
      }
    })
  }
}
