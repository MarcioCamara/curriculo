import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  selected: any = null;

  states = [
    'SP',
    'RJ',
  ];

  skillsList = [
    'Java',
    'Angular',
    'Laravel',
    'PHP',
  ];

  socialMediasList = [
    {
      name: 'LinkedIn',
      icon: 'linkedin',
    },
    {
      name: 'Instagram',
      icon: 'instagram',
    },
    {
      name: 'Facebook',
      icon: 'facebook',
    },
    {
      name: 'Twitter',
      icon: 'twitter',
    },
    {
      name: 'Medium',
      icon: 'medium',
    },
    {
      name: 'Site Pessoal',
      icon: 'global',
    },
  ];

  themeCards = [
    {
      id: 1,
      title: 'Minimalista',
      description: 'Minimalismo é sinônimo de essência!',
      cover: 'assets/minimalista.jpg',
    },
    {
      id: 2,
      title: 'Elegante',
      description: 'Elegância é o bom senso vestido de simplicidade!',
      cover: 'assets/elegante.jpg',
    },
    {
      id: 3,
      title: 'Artístico',
      description: 'Quando fazemos algo com o ❤️, o trabalho se torna arte!',
      cover: 'assets/artistico.jpg',
    },
  ]

  constructor(
    private fb: FormBuilder,
    private addressResource: AddressResource,
    private router: Router,
  ) { }

  get socialMedias() {
    return this.resumeForm.controls['socialMedias'] as FormArray;
  }

  get courses() {
    return this.resumeForm.controls['courses'] as FormArray;
  }

  get jobs() {
    return this.resumeForm.controls['jobs'] as FormArray;
  }

  get certifications() {
    return this.resumeForm.controls['certifications'] as FormArray;
  }

  get additionalInformations() {
    return this.resumeForm.controls['additionalInformations'] as FormArray;
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
      socialMedias: this.fb.array([
        this.fb.group({
          name: [''],
          url: [''],
        }),
      ]),
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
      certifications: this.fb.array([
        this.fb.group({
          name: [''],
          institution: [''],
          yearOfConclusion: [''],
          yearOfExpiration: [''],
        }),
      ]),
      additionalInformations: this.fb.array([
        this.fb.group({
          additionalInformation: [''],
        }),
      ]),
      theme: [null],
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

  addSocialMedia() {
    const socialMediaForm = this.fb.group({
      name: [''],
      url: [''],
    });

    this.socialMedias.push(socialMediaForm);
  }

  deleteSocialMedia(socialMediaIndex: number) {
    this.socialMedias.removeAt(socialMediaIndex);
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

  addCertification() {
    const certificationForm = this.fb.group({
      name: [''],
      institution: [''],
      yearOfConclusion: [''],
      yearOfExpiration: [''],
    });

    this.certifications.push(certificationForm);
  }

  deleteCertification(certificationIndex: number) {
    this.certifications.removeAt(certificationIndex);
  }

  addAdditionalInformation() {
    const additionalInformationForm = this.fb.group({
      additionalInformation: [''],
    });

    this.additionalInformations.push(additionalInformationForm);
  }

  deleteAdditionalInformation(additionalInformationIndex: number) {
    this.additionalInformations.removeAt(additionalInformationIndex);
  }

  generateResume(): void {
    console.log(this.resumeForm.value);
    this.router.navigateByUrl('/resume', { state: this.resumeForm.value });
  }

  resetForm(): void {
    this.resumeForm.reset();
  }
}
