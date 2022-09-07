import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Events } from 'src/app/model/events.model';
import { EventService } from 'src/app/services/events.service';
import Swal from 'sweetalert2';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit {

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
  eventForm: FormGroup = new FormGroup({});
  event: Events = new Events();

  constructor(
    private eventService: EventService,
    private formBuilder: FormBuilder,
    private router: Router,
    private location:  Location
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  get forms(): { [key: string]: AbstractControl } {
    return this.eventForm.controls;
  }

  initForm() {
    this.eventForm = this.formBuilder.group({
      content: undefined,
      status: 'PUBLISHED'
    });
  }

  onEventSubmit(event: any) {
    this.event.content = event.content.data;
    this.event.status = event.status;
    if (this.eventForm.valid) {
      this.eventService.addEvent(event).subscribe((response: any)=> {
        Swal.fire(
          'Success', 'Event added successfully', 'success').then(()=> {
            this.location.back();
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

  onCancel() {
    this.location.back();
  }

}
