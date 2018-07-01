import { Component, OnInit } from '@angular/core';
import { RequestDemoService } from './service/request-demo.service';

@Component({
  selector: 'app-request-demo',
  templateUrl: './request-demo.component.html',
  styleUrls: ['./request-demo.component.css'],
  providers: [RequestDemoService]
})
export class RequestDemoComponent implements OnInit {

  result: String = '';

  constructor(private service: RequestDemoService) { }

  ngOnInit() {

    this.service.request().subscribe(

      // 通信が成功した場合
      data => {
        this.result = JSON.stringify(data);
      },

      // 失敗した場合
      error => {
        this.result = error;
      }

    );

  }

}
