import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from '../../api/user.service';
import { UserModel } from '../../model/user.model';

@Component({
  selector: 'join-contact-slide',
  templateUrl: './join-contact-slide.component.html',
  styleUrls: ['./join-contact-slide.component.scss']
})
export class JoinContactSlideComponent implements OnInit {
  public static MAX_YEAR = 2001;
  public static MIN_YEAR = 1988;

  public years: Array<number>;
  public months: Array<number>;
  public days: Array<number>;

  public openJoinForm: boolean = false;
  public openContactForm: boolean = false;

  public user: UserModel;

  public userForm: FormGroup;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    // Default User
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl(''),
      birth: new FormGroup({
        day: new FormControl(1),
        month: new FormControl(1),
        year: new FormControl(2001)
      }),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      invitedBy: new FormControl('', Validators.required),
      group: new FormControl('')
    });

    // Init date combos
    this.years = this.range(JoinContactSlideComponent.MIN_YEAR,
                            JoinContactSlideComponent.MAX_YEAR, false);
    this.months = this.range(1, 12);
    this.refreshDays();
  }

  public get birth() {
    return this.user.birth.val;
  }

  /* Date combos */
  public range(from, to, asc = true) {
    const f = asc ? ((_, i) => from + i) :
                    ((_, i) => to - i);
    return Array.apply(null, Array(to - from + 1)).map(f);
  }

  public refreshDays() {
    const { year, month, day } = this.userForm.value.birth;

    const days = new Date(year, month, 0).getDate();
    this.days = this.range(1, days);

    if (day > days) {
      (this.userForm.controls['birth'] as FormGroup)
                    .controls['day'].setValue(days);
    }
  }

  /* */

  public onSubmitForm(value) {
    const { birth, ...apiUser } = value;
    apiUser.birth = birth.day + '/' + birth.month + '/' + birth.year;
    const user = new UserModel().fromApi(apiUser);
    console.log('submit form', user);

    this.userService
      .newUser(user)
      .subscribe(() => console.log('User registered'));
  }
}
