import { ToDoItem } from './todoObject';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.scss']
})
export class TodoappComponent implements OnInit {
  etkinlikListesi = [
    { description: "kahvaltı", action: "no" }
  ];

  error = false;

  addItem(value: string) {
    if (value !== "") {
      this.error = false;
      this.etkinlikListesi.push({ description: value, action: "no" })
    }
    else {
      this.error = true;//burda this önceden eroor tanımladık onu değiştirioz tarzında
    }
  }

  changeAction(i: number) {
    this.etkinlikListesi[i].action = "yes";
  }

  display: boolean = true;
  getItems() {
    if (this.display) {
      return this.etkinlikListesi;
    }
    return this.etkinlikListesi.filter(item => item.action === "no"); //etkinliklistesindeki elemanları item'a kopyalayıp onun action özelliği no olanları döndürecek
  }

  ngOnInit(): void {
  }

}
