import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-words",
  templateUrl: "./words.component.html",
  styleUrls: ["./words.component.css"]
})



export class WordsComponent implements OnInit {
  select = "all";
  hideForm = true;
  en ='';
  vn = '';
  arrWords = [
    { id: 1, en: "action", vn: "hành động", memorized: true },
    { id: 2, en: "actor", vn: "diễn viên", memorized: false },
    { id: 3, en: "activity", vn: "hoạt động", memorized: true },
    { id: 4, en: "active", vn: "chủ động", memorized: true },
    { id: 5, en: "bath", vn: "tắm", memorized: false },
    { id: 6, en: "bedroom", vn: "phòng ngủ", memorized: true }
  ];

  addObject(){
    var arrNew = {id:this.arrWords.length+1, en: this.en , vn: this.vn, memorized: true}
    //this.arrWords.push(arrNew)//thêm vào cuối mảng
    this.arrWords.unshift(arrNew) //Thêm vào đầu

    //xóa rỗng input
    this.en = '';
    this.vn = '';
    this.hideForm = true;
  }

  removeObject(id){
    const findById = this.arrWords.findIndex(arr => arr.id === id)
    this.arrWords.splice(findById,1)
  }

  constructor() {}

  ngOnInit() {}
}
