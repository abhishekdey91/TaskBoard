import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, CdkDragEnter, CdkDragMove, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import * as _ from 'lodash';

@Component({
  selector: 'app-lp-section',
  templateUrl: './lp-section.component.html',
  styleUrls: ['./lp-section.component.css'],
})

export class LpSectionComponent implements OnInit {
  constructor() { }
  items: any
  grpItemKeys;
  grpItem = {};
  dataList = [];
  currentDataList;
  currentData;
  recordView = !true;
  totalItem = this.dataList.length;
  itemsPerPage = 10;
  cardView = !false;
  index = 0;
  item1 = this.itemsPerPage * this.index + 1;
  item2 = this.item1 + this.itemsPerPage - 1;
  data = [];
  key = 'date';
  keyTableIds = 7;
  dataListKeys = ['Policy Number','Status','Group Name','Notes','Effective Date','TPA','Underwriter','Producer'];
  keyTable = 4;

  ngOnInit() {
    this.data = [{ date: new Date('03-1-1985'), type: 'Final Aggregate/ Claim Report', category: 'Open Enrollmentio', responsibility: 'Internal Account Team', client: 'Apple Inc 9000' },{ date: new Date('03-1-1986'), type: 'Final Aggregate/ Claim Report', category: 'Open Enrollmentio', responsibility: 'Internal Account Team', client: 'Apple Inc 9000' },
    { date: new Date('03-1-1986'), type: 'Final Aggregate/ Claim Report2', category: 'Open Enrollment', responsibility: 'Internal Account Team weoo', client: 'Apple Inc uioo' },
    { date: new Date('03-1-1986'), type: 'Final Aggregate/ Claim Reportspan 3', category: 'Open Enrollment', responsibility: 'Internal Account Team', client: 'Apple Inc uir' },
    { date: new Date('04-1-1986'), type: 'Final Aggregate/ Claim Report', category: 'Open Enrollment', responsibility: 'Internal Account Team kop', client: 'Apple Inc' },
    { date: new Date('03-1-1990'), type: 'Final aggreagete Output', category: 'Open Enrollment', responsibility: 'Internal Account Team', client: 'Apple Inc' },
    { date: new Date('03-1-1990'), type: 'Final aggreagete Output 74949', category: 'Open Enrollment', responsibility: 'Internal Account Team ioo', client: 'Apple Inc' },
    { date: new Date('3-1-1959'), type: 'Final Aggregate/ Claim Report', category: 'Open Enrollment', responsibility: 'Internal Account Team', client: 'Apple Inc' }];
    this.dataList = [{ policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites1', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, { policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites2', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort in house source Register', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, { policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites3', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, { policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, { policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, { policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, { policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, { policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, { policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, { policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, { policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, { policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }, { policyNumber: 'NGXE1006-2022R7', status: 'Collecting Policy Prerequisites13', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }];
    this.currentData = [...this.data];
    this.currentData.map((data, index) => {data.index = index, data});
    this.currentDataList = [...this.dataList];
    this.currentDataList = this.currentDataList.splice(this.item1 - 1, this.itemsPerPage);
    this.totalItem = this.dataList.length;
    this.check(null);
    this.displayTableDetails(this.keyTable, false);
    //console.log(this.data);
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
      this.item1 = this.itemsPerPage * this.index + 1;
      this.item2 = this.item1 + this.itemsPerPage -1;
      this.currentDataList = [...this.dataList];
      this.currentDataList = this.currentDataList.splice(this.item1 - 1, this.itemsPerPage);
    }
  }

  nextItem() {
    if (this.index + 1 < this.totalItem / this.itemsPerPage) {
      this.index++;
      this.item1 = this.itemsPerPage * this.index + 1;
      this.item2 = this.item1 + this.itemsPerPage - 1;
      this.currentDataList = [...this.dataList];
      this.currentDataList = this.currentDataList.splice(this.item1 - 1, this.itemsPerPage);
    }
  }

  connect(date) {
    return this.grpItemKeys.filter((data) => data !== date);
  }


  dateComparison(dateCurrent, dateUpcoming) {
    return dateCurrent.date - dateUpcoming.date;
  }

  check(event: any) {
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
    this.keyTable = parseInt(event && event.target.value || this.keyTable, 10);
  }

  checkTotalCol(event: any) {
    this.keyTableIds = parseInt(event && event.target.value || this.keyTableIds, 10);
  }

  displayTableRecords(index) {
    return index <= this.keyTableIds;
  }

  displayTableDetails(key, isRequired) {
    return isRequired || (key !== this.keyTable);
  }
  
  hideExtraCol(index) {
    return (index > this.keyTable || index!== this.keyTableIds);
  }

  displayTableu(index) {
    return Object.keys(this.dataList[index])[this.keyTable];
  }

  dragEntered(event: CdkDragDrop<any>, id) {
    let dropList = event.container;
    //let  dropListitem = event.item.dropContainer.data;
    let dropIndex = dropList.data;
    //this.grpItem[dropList.id] = dropIndex;
    //dropListitem[0][this.key] = this.key === 'date' ?  new Date(`${dropList.id}`) : `${dropList.id}`;
    //this.data[id][this.key] = this.key === 'date' ?  new Date(`${dropList.id}`) : `${dropList.id}`;
    //console.log(this.data, event.item.dropContainer.id, dropList.id);
    //this.data[[this.key]dropListitem[0][this.key] = new Date(`${dropList.id}`);
    // setTimeout(() => {dropListitem = dropListitem.map((data) => { 
    //   if(data.index === id) {
    //     console.log(id, data.index,'ssssss');
    //     this.data[data['index']][this.key] = this.key === 'date' ? new Date(`${dropList.id}`) : `${dropList.id}`, 
    //     data[this.key] = this.key === 'date' ? new Date(`${dropList.id}`) : `${dropList.id}`,
    //     data,
    //     console.log( `${event.item.dropContainer.id}`);
    //   }
    // })}, 1000);
    setTimeout(() => {
      dropIndex.forEach((data) => { 
      if(data.index === id) {
        // console.log(id, data.index, `${event.item.dropContainer.id}`, `${dropList.id}`);
        this.currentData[data.index][this.key] = this.key === 'date' ? new Date(`${dropList.id}`) : `${dropList.id}`, 
        data[this.key] = this.key === 'date' ? new Date(`${dropList.id}`) : `${dropList.id}`,
        data
      }
    });
    //  if(!dropIndex.length) {
    //   //this.data[id][this.key] = this.key === 'date' ? new Date(`${dropList.id}`) : `${dropList.id}` 
    // }
    }, 500);
    
      // this.data[data['index']][this.key] = this.key === 'date' ? new Date(`${dropList.id}`) : `${dropList.id}`, 
      // data[this.key] = this.key === 'date' ? new Date(`${dropList.id}`) : `${dropList.id}`,
      // data,
      // console.log(dropList.id, dropListitem);
    
  }

}