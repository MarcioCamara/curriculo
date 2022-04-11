import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/models/Address';
import { AddressResource } from 'src/app/resources/address/address.resource';

@Component({
  selector: 'app-generate-resume',
  templateUrl: './generate-resume.component.html',
  styleUrls: ['./generate-resume.component.scss']
})
export class GenerateResumeComponent implements OnInit {
  resumeForm!: FormGroup;
  isLoading = false;

  states = [
    'SP',
    'RJ',
  ];

  skillsList = [
    'Java',
    'Angular',
    'Laravel',
    'PHP',
  ]

  constructor(
    private fb: FormBuilder,
    private addressResource: AddressResource,
  ) { }

  get courses() {
    return this.resumeForm.controls['courses'] as FormArray;
  }

  get jobs() {
    return this.resumeForm.controls['jobs'] as FormArray;
  }

  ngOnInit(): void {
    this.resumeForm = this.fb.group({
      name: [''],
      desiredRole: [''],
      postalCode: [''],
      address: [''],
      block: [''],
      state: [''],
      city: [''],
      phone: [''],
      cellphone: [''],
      email: ['', [Validators.email]],
      courses: this.fb.array([
        this.fb.group({
          name: [''],
          institution: [''],
          yearOfConclusion: [''],
        }),
      ]),
      jobs: this.fb.array([
        this.fb.group({
          name: [''],
          entry: [''],
          departure: [''],
          role: [''],
        }),
      ]),
      skills: [null],
    });
  }

  populateAddress(): void {
    if (!this.resumeForm.get('postalCode')?.value) {
      return;
    }

    this.isLoading = true;

    this.addressResource.get(this.resumeForm.get('postalCode')?.value).subscribe({
      next: (response: Address) => {
        this.resumeForm.patchValue({ address: response.logradouro });
        this.resumeForm.patchValue({ block: response.bairro });
        this.resumeForm.patchValue({ state: response.uf });
        this.resumeForm.patchValue({ city: response.localidade });
      },
      error: () => {
        this.isLoading = false;
        this.addressResource.handleError('Houve um erro ao realizar a busca. Verifique o CEP informado e tente novamente.');
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  addCourse() {
    const courseForm = this.fb.group({
      name: [''],
      institution: [''],
      yearOfConclusion: [''],
    });

    this.courses.push(courseForm);
  }

  deleteCourse(courseIndex: number) {
    this.courses.removeAt(courseIndex);
  }

  addJob() {
    const jobForm = this.fb.group({
      name: [''],
      entry: [''],
      departure: [''],
      role: [''],
    });

    this.jobs.push(jobForm);
  }

  deleteJob(jobIndex: number) {
    this.jobs.removeAt(jobIndex);
  }

  generateResume(): void {
    console.log(this.resumeForm.value);
  }

  resetForm(): void {
    this.resumeForm.reset();
  }
}
