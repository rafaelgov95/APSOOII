/* tslint:disable: member-ordering */
import { Component } from '@angular/core';


import { Hero }      from '../shared/hero';

@Component({
  selector: 'hero-form-template1',
  templateUrl: './hero-form-template1.component.html'
})
export class HeroFormTemplate1Component {

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = new Hero('','','','');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;

  addHero() {
    this.hero = new Hero('','','','');

    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/