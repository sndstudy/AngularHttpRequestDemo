import { Component, OnInit } from '@angular/core';
import { RequestDemoService } from './service/request-demo.service';

@Component({
  selector: 'app-request-demo',
  templateUrl: './request-demo.component.html',
  styleUrls: ['./request-demo.component.css'],
  providers: [RequestDemoService]
})
export class RequestDemoComponent implements OnInit {

  result: String = 'test';

  constructor(private service: RequestDemoService) { }

  ngOnInit() {

    this.result = this.service.request('hogehoge');

  }

}
