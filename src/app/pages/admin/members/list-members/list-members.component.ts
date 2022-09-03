import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/services/members.service';
import { Members } from 'src/app/model/members.model';
@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.css']
})
export class ListMembersComponent implements OnInit {

  members: Members[] = [];
  toggleArray: { toggled: boolean }[] = [];
  showShortDesciption = true;
  total: number = 0;

  status: string = '';

  constructor(
    private memberService: MemberService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMember();
  }

  public getMember() {
    this.memberService
      .listAllMembers(this.status)
      .subscribe((response: any) => {
        this.members = response.members;
        this.total=response.total;
        this.members?.forEach(() =>
          this.toggleArray.push({ toggled: false })
        );
      });
  }

  onDeleteMember(id: any) {
    if (confirm('Are you sure you want to delete?')) {
      this.memberService.deleteMemberById(id).subscribe(
        (response: any) => {
          // this.toastrService.success('Testimonial deleted successfully!!!');
          this.ngOnInit();
        },
        (error: any) => {
          // this.toastrService.error('Something went wrong!!!');
        }
      );
    }
  }

  onEditMemberDetails(id: any) {
    this.router.navigate(['/members/edit-details', id]);
  }

  safeDescription(value: any) {
    if (value == null) {
      return '';
    }
    return value.replace(/(<([^>]+)>)/gi, '');
  }

  onFilterStatusData(event: any) {
    this.status = event;
    this.getMember();
  }

}
