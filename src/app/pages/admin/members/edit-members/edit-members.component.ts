import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Members } from 'src/app/model/members.model';
import { MemberService } from 'src/app/services/members.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-members',
  templateUrl: './edit-members.component.html',
  styleUrls: ['./edit-members.component.css']
})
export class EditMembersComponent implements OnInit {

  // Model Class
  member: Members = new Members();
  editMemberForm: FormGroup = new FormGroup({});

  submitted: boolean = false;
  isPresentFile = false;
  imageURL: string = '';
  imageType: string[] = ['image/jpg', 'image/jpeg', 'image/png'];
  imageTypeError: boolean = false;
  isSubmitting: boolean = false;
  id: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private memberService: MemberService,
    private location: Location,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.editMemberForm = this.formBuilder.group({
      name: [undefined, Validators.required],
      address: [undefined, Validators.required],
      crewname: [undefined, Validators.required],
      post: [undefined, Validators.required],
      contact: [undefined, Validators.required]
    });
    this.activatedRoute.params.subscribe((param) => {
      this.id = param['id'];
    });
    this.initMembersById(this.id);
  }

  get forms(): { [key: string]: AbstractControl } {
    return this.editMemberForm.controls;
  }

  initMembersById(id: number) {
    this.memberService.getMemberById(id).subscribe(
      (response: any) => {
        this.member = response;
        this.editMemberForm.patchValue(this.member);
        // this.file = this.testimoni.image.url;
      },
      (error: any) => {
        console.log(error);
      }
    );
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
    this.member.crewname = memberData.crewname;
    this.member.post = memberData.post;
    this.member.contact = memberData.contact;

    if (
      this.editMemberForm.valid
    ) {
      this.isSubmitting = true;
      this.editMember(this.member);
    }
  }

  editMember(member: any) {
    this.memberService.editMemberById(this.id, member).subscribe(
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
