import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Events } from 'src/app/model/events.model';
import { EventService } from 'src/app/services/events.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';

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
  event: Events = new Events();
  editEventForm: FormGroup = new FormGroup({});

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
    private location: Location,
    private eventService: EventService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.editEventForm = this.formBuilder.group({
      content: [undefined, Validators.required],
      status: [undefined]
    });
    this.activatedRoute.params.subscribe((param) => {
      this.id = param['id'];
    });
    this.initEventById(this.id);
  }

  get forms(): { [key: string]: AbstractControl } {
    return this.editEventForm.controls;
  }

  initEventById(id: number) {
    this.eventService.getEventById(id).subscribe(
      (response: any) => {
        this.event = response;
        this.editEventForm.patchValue(this.event);
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

  onEventSubmit(eventData: any) {
    this.submitted = true;
    this.event.content = eventData.content;

    if (
      this.editEventForm.valid
    ) {
      this.isSubmitting = true;
      this.editEvent(this.event);
    }
  }

  editEvent(event: any) {
    this.eventService.editEventById(this.id, event).subscribe(
      (response: any) => {
        Swal.fire(
          'Success', 'Event edited successfully', 'success').then(()=> {
            this.location.back();
            this.isSubmitting = false;
          });
      },
      (error: any) => {
        this.isSubmitting = false;
        Swal.fire(
          'Error !!!',
          'Something went wrong. Try again !!!',
          'error'
        ); 
      }
    );
  }

  onCancel() {
    this.location.back();
  }


}
