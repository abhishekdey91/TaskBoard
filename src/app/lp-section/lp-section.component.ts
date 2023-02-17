import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import * as landingPageJSON from '../../assets/Json/landingpage.json';
import * as _ from 'lodash';

@Component({
  selector: 'app-lp-section',
  templateUrl: './lp-section.component.html',
  styleUrls: ['./lp-section.component.css'],
  //animations: [
  //  trigger('onOff', [
  //    transition(':enter', [style({
  //      opacity: 0,
  //      transform: 'translateX(-100%)'
  //    }),
  //    animate(400)
  //    ])
  //  ])
  //]
})
  export class LpSectionComponent implements OnInit {
    constructor() { }
    eventsSubject: Subject<void> = new Subject<void>();
    items: any
    grpItemKeys;
    grpItem = {};
    dataList = [];
    currentDataList;
    recordView = !true;
    totalItem = this.dataList.length;
    item1 = 1;
    item2 = 10;
    itemsPerPage = 10;
    cardView = !false;
    index = 0;
    data = []


    


    ngOnInit() {
      const key = 'date';
      this.data = [{date: new Date('03-1-1986'), type: 'Final Aggregate/ Claim Report', category: 'Open Enrollment', responsibility: 'Internal Account Team', client: 'Apple Inc'   },{date: new Date('03-1-1986'), type: 'Final Aggregate/ Claim Report2', category: 'Open Enrollment', responsibility: 'Internal Account Team', client: 'Apple Inc'   }, {date: new Date('03-1-1986'), type: 'Final Aggregate/ Claim Reportspan 3', category: 'Open Enrollment', responsibility: 'Internal Account Team', client: 'Apple Inc'   }, {date: new Date('04-1-1986'), type: 'Final Aggregate/ Claim Report', category: 'Open Enrollment', responsibility: 'Internal Account Team', client: 'Apple Inc' }, {date: new Date('03-1-1990'), type: 'Final aggreagete Output',category: 'Open Enrollment', responsibility: 'Internal Account Team', client: 'Apple Inc' }, {date: new Date('03-1-1990'), type: 'Final aggreagete Output 74949',category: 'Open Enrollment', responsibility: 'Internal Account Team', client: 'Apple Inc' }, {date: new Date('3-1-1959'), type: 'Final Aggregate/ Claim Report', category: 'Open Enrollment', responsibility: 'Internal Account Team', client: 'Apple Inc'}];
      this.dataList = [{policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites1', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, {policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites2', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort in house source Register', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, {policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites3', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, {policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, {policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, {policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, {policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, {policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, {policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, {policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, {policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, {policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, {policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites13', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }];
      this.currentDataList = [...this.dataList];
      this.currentDataList = this.currentDataList.splice(this.item1 , this.itemsPerPage);
      this.totalItem = this.dataList.length;
      this.data.sort(dateComparison);
      function dateComparison(dateCurrent, dateUpcoming) {
        return dateCurrent.date - dateUpcoming.date;
      }
      this.grpItem = _.groupBy(this.data, key);
      this.grpItemKeys = Object.keys(this.grpItem);
      console.log(this.data);
      //console.log(this.grpItem[this.grpItemKeys[0]]);
    }

    toggleView() {
      this.cardView = !this.cardView;
      this.recordView = !this.recordView;
    }

    drop(event: CdkDragDrop<string[]>) {
      if (event.previousContainer === event.container) { 
        moveItemInArray(event.container.data , event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      }
    }

    previousItem() {
      if(this.index >=1 ) {
        this.index--;
        this.item1 = this.itemsPerPage * this.index;
        this.item2 = this.item1 + this.itemsPerPage;
        this.currentDataList = [...this.dataList];
        this.currentDataList = this.currentDataList.splice(this.item1 , this.itemsPerPage);
      }
    }

    nextItem() {
      if(this.index + 1 <this.totalItem/this.itemsPerPage ) {
        this.index++;
        this.item1 = this.itemsPerPage * this.index;
        this.item2 = this.item1 + this.itemsPerPage;
        this.currentDataList = [...this.dataList];
        this.currentDataList = this.currentDataList.splice(this.item1 , this.itemsPerPage);
      }
    }

    // checkDate(date1, date2) {
    //   console.log(new Date(date1).getTime());
    //   console.log(date2.getTime());
    //   return new Date(date1).getTime() - new Date(date2).getTime() === 0;
    // }

    connect(date) {
      console.log(this.grpItemKeys.filter((data) => data !== date));
      return this.grpItemKeys.filter((data) => data !== date);
    }
  }