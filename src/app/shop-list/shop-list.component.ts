import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import {FormArray, FormGroup, FormControl, Validators, FormBuilder, REACTIVE_FORM_DIRECTIVES} from "@angular/forms";
import {FilterPipe} from "./filter.pipe";


@Component({
  moduleId: module.id,
  selector: 'app-shop-list',
  templateUrl: 'shop-list.component.html',
  styleUrls: ['shop-list.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES],
  pipes: [FilterPipe]
})



export class ShopListComponent implements OnInit {
  items: FirebaseListObservable<any>;
  branch2: FirebaseListObservable<any>;
  branch3: FirebaseListObservable<any>;
  myForm: FormGroup;
  selectedValue: string = "xxx";

  constructor(public af: AngularFire,
              private formBuilder: FormBuilder) {
    this.items = af.database.list('/messages');
    this.branch2 = af.database.list('/branch2');

    this.branch3 = af.database.list('/branch2', {
      query: {
        orderByChild: 'description',
        equalTo: 'pop'
      }
    });
    this.myForm = new FormGroup({
      'name': new FormControl(),
      'price': new FormControl(),
      'description': new FormControl()
    });
  }

  add(newName: string) {
    this.items.push({ text: newName });
  }
  update(key: string, newName: string) {
    this.items.update(key, { text: newName});
  }
  deleteItem(key: string) {
    this.items.remove(key);
  }
  deleteEverything() {
    this.items.remove();
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    // this.myForm = this.formBuilder.group({
    //   name: [name, Validators.required]
    // });
  }

  onSubmit() {
    console.log(this.myForm);
    const newForm = this.myForm.value;
    this.branch2.push({name: newForm.name,
                       price: newForm.price,
                       description: newForm.description
                      });
  }
}
