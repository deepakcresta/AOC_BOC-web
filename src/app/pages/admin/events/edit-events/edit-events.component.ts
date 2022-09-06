import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Events } from 'src/app/model/events.model';
import { EventService } from 'src/app/services/events.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-events',
  templateUrl: './edit-events.component.html',
  styleUrls: ['./edit-events.component.css']
})
export class EditEventsComponent implements OnInit {

  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: '18rem',
      minHeight: '5rem',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
};
  editEventForm: FormGroup = new FormGroup({});
  event: Events = new Events();

  constructor(
    private eventService: EventService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  get forms(): { [key: string]: AbstractControl } {
    return this.editEventForm.controls;
  }

  initForm() {
    this.editEventForm = this.formBuilder.group({
      content: undefined,
      status: 'DRAFT'
    });
  }

  onEventSubmit(event: any) {
    this.event.content = event.content.data;
    this.event.status = event.status;
    if (this.editEventForm.valid) {
      this.eventService.addEvent(event).subscribe((response: any)=> {
        Swal.fire(
          'Success', 'Event added successfully', 'success').then(()=> {
            this.router.navigate(['/']);
          });
      },
      (error) => {
              Swal.fire(
                'Error !!!',
                'Something went wrong. Try again !!!',
                'error'
              );
            }
      );
    }
  }

}
