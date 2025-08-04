import {Component, Inject, OnInit} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatError, MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-add-book-dialog',
  imports: [
    MatDialogContent,
    ReactiveFormsModule,
    MatFormField,
    MatDialogActions,
    MatInput,
    MatDialogTitle,
    MatButton,
    MatLabel,
    MatError,
    MatFormField,
    MatDialogContent,
    MatLabel
  ],
  templateUrl: './add-book-dialog.html',
  styleUrl: './add-book-dialog.scss'
})
export class AddBookDialog implements OnInit {

  bookForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddBookDialog>
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['']
    });
  }

  onAdd(): void {
    if (this.bookForm.valid) {
      this.dialogRef.close(this.bookForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
