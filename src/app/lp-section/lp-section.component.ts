import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import * as _ from 'lodash';

@Component({
  selector: 'app-lp-section',
  templateUrl: './lp-section.component.html',
  styleUrls: ['./lp-section.component.css'],
})

export class LpSectionComponent implements OnInit {
  constructor() { }
  eventsSubject: Subject<void> = new Subject<void>();
  items: any
  grpItemKeys;
  grpItem = {};
  dataList = [];
  currentDataList;
  recordView = true;
  totalItem = this.dataList.length;
  item1 = 1;
  item2 = 10;
  itemsPerPage = 10;
  cardView = false;
  index = 0;
  data = [];
  key = 'date';
  keyTableR = 8;
  dataListKeys = ['Policy Number','Status','Group Name','Notes','Effective Date','TPA','Underwriter','Producer'];
  keyTable = this.dataListKeys[0];

  ngOnInit() {
    this.data = [{ date: new Date('03-1-1986'), type: 'Final Aggregate/ Claim Report', category: 'Open Enrollmentio', responsibility: 'Internal Account Team', client: 'Apple Inc 9000' },
    { date: new Date('03-1-1986'), type: 'Final Aggregate/ Claim Report2', category: 'Open Enrollment', responsibility: 'Internal Account Team', client: 'Apple Inc uioo' },
    { date: new Date('03-1-1986'), type: 'Final Aggregate/ Claim Reportspan 3', category: 'Open Enrollment', responsibility: 'Internal Account Team', client: 'Apple Inc uir' },
    { date: new Date('04-1-1986'), type: 'Final Aggregate/ Claim Report', category: 'Open Enrollment', responsibility: 'Internal Account Team', client: 'Apple Inc' },
    { date: new Date('03-1-1990'), type: 'Final aggreagete Output', category: 'Open Enrollment', responsibility: 'Internal Account Team', client: 'Apple Inc' },
    { date: new Date('03-1-1990'), type: 'Final aggreagete Output 74949', category: 'Open Enrollment', responsibility: 'Internal Account Team', client: 'Apple Inc' },
    { date: new Date('3-1-1959'), type: 'Final Aggregate/ Claim Report', category: 'Open Enrollment', responsibility: 'Internal Account Team', client: 'Apple Inc' }];
    this.dataList = [{ policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites1', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, { policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites2', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort in house source Register', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, { policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites3', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, { policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, { policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, { policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, { policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, { policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, { policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, { policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, { policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, { policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, { policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites13', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }];
    this.currentDataList = [...this.dataList];
    this.currentDataList = this.currentDataList.splice(this.item1, this.itemsPerPage);
    this.totalItem = this.dataList.length;
    this.check(null);
    this.displayTableDetails(this.keyTable, false);
  }

  toggleView() {
    this.cardView = !this.cardView;
    this.recordView = !this.recordView;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  previousItem() {
    if (this.index >= 1) {
      this.index--;
      this.item1 = this.itemsPerPage * this.index;
      this.item2 = this.item1 + this.itemsPerPage;
      this.currentDataList = [...this.dataList];
      this.currentDataList = this.currentDataList.splice(this.item1, this.itemsPerPage);
    }
  }

  nextItem() {
    if (this.index + 1 < this.totalItem / this.itemsPerPage) {
      this.index++;
      this.item1 = this.itemsPerPage * this.index;
      this.item2 = this.item1 + this.itemsPerPage;
      this.currentDataList = [...this.dataList];
      this.currentDataList = this.currentDataList.splice(this.item1, this.itemsPerPage);
    }
  }

  connect(date) {
    return this.grpItemKeys.filter((data) => data !== date);
  }


  dateComparison(dateCurrent, dateUpcoming) {
    return dateCurrent.date - dateUpcoming.date;
  }

  check(event: any) { // without type info
    this.key = event && event.target.value || this.key;
    this.grpItem = _.groupBy(this.data, this.key);
    this.grpItemKeys = Object.keys(this.grpItem);
    if (this.key === 'date') {
      this.data.sort(this.dateComparison);
    }
    this.grpItem = _.groupBy(this.data, this.key);
    this.grpItemKeys = Object.keys(this.grpItem);
  }

  checkTable(event: any) {
    this.keyTable = event && event.target.value || this.keyTable;
  }

  checkTotalRow(event: any) {
    this.keyTableR = event && event.target.value || this.keyTableR;
  }

  displayTableRecords(index) {
    return index <= this.keyTableR - 1;
  }

  displayTableDetails(key, isRequired) {
    return isRequired || key !== this.keyTable;
  }
}