import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/services/members.service';
import { Members } from 'src/app/model/members.model';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.css']
})
export class AddMembersComponent implements OnInit {

  // Model Class
  member: Members = new Members();
  addMemberForm: FormGroup = new FormGroup({});

  submitted: boolean = false;
  isPresentFile = false;
  imageURL: string = '';
  imageType: string[] = ['image/jpg', 'image/jpeg', 'image/png'];
  imageTypeError: boolean = false;
  isSubmitting: boolean = false;
  hawa: string = 'PUBLISHED';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private memberService: MemberService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.addMemberForm = this.formBuilder.group({
      name: [undefined, Validators.required],
      address: [undefined, Validators.required],
      cname: [undefined, Validators.required],
      post: [undefined, Validators.required],
      contact: [undefined, Validators.required],
      status: ['DRAFT']
    });
  }

  get forms(): { [key: string]: AbstractControl } {
    return this.addMemberForm.controls;
  }

  onFileSelected(event: any) {
    this.imageTypeError = false;
    this.isPresentFile = true;
    if (
      !this.imageType.includes(event.target.files[0].type) ||
      event.target.files[0].size > 5242880
    ) {
      this.imageTypeError = true;
    }

    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSubmit(memberData: any) {
    this.submitted = true;
    this.member.name = memberData.name;
    this.member.address = memberData.address;
    this.member.crewname = memberData.cname;
    this.member.post = memberData.post;
    this.member.contact = memberData.contact;
    this.member.status = this.hawa;
    if (
      this.addMemberForm.valid
    ) {
      this.isSubmitting = true;
      this.addMember(this.member);
    }
  }

  addMember(member: any) {
    this.memberService.addMember(member).subscribe(
      (response: any) => {
        this.location.back();
        this.isSubmitting = false;
      },
      (error: any) => {
        this.isSubmitting = false;
      }
    );
  }

  onCancel() {
    this.location.back();
  }

}
