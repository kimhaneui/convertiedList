import { Component, OnInit, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  viewModel: any
  public sampleList: any;
  convertedList: any


  list = [
    {
      consultingCategoryCode: 'IC01',
      questionTitle: '문의드립니다',
      travelFromDate: '2020/10/11',
      consultingTypeCode: 'IC005',
      questionDetail: 'hello',
    },
    {
      consultingCategoryCode: 'IC02',
      questionTitle: '취소',
      travelFromDate: '2020/08/01',
      consultingTypeCode: 'IC005',
      questionDetail: '취소하려구요',
    },
    {
      consultingCategoryCode: 'IC03',
      questionTitle: '예약',
      travelFromDate: '2020/11/01',
      consultingTypeCode: 'IC005',
      questionDetail: '예약하려구요',
    }
  ]
  ngOnInit() {
    this.getQnaList();
  }


  detailView() {
    //모달창 띄우기
  }

  getQnaList() {

    const tmp: any = [];

    // api받아오는 데이터를 convertedList 로 변환된 데이터로 바꾸는 작업이다.
    // 데이터중에 consultingCategoryCode를 기준으로 해서 데이터를 가공

    this.sampleList.forEach((item: any) => {
      tmp[item.consultingCategoryCode] = tmp[item.consultingCategoryCode] || [];
      tmp[item.consultingCategoryCode].push(item);
    });

    console.log(this.sampleList);

    // 가공된 데이터를 다시 뷰모델 리스트에 집어넣어서 보여준다.
    this.viewModel.consulting.list = this.sampleList;
    this.convertedList = tmp;

  }


}
