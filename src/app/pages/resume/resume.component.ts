import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  resume: any = {};

  constructor(
    private location: Location,
  ) { }

  ngOnInit(): void {
    // this.resume = this.location.getState();

    this.resume = {
      name: 'Marcio F. Câmara Jr.',
      desiredRole: 'Desenvolvedor Front-End',
      postalCode: '13465-000',
      address: 'Rua Teste, 123',
      block: 'Vl. Teste',
      state: 'SP',
      city: 'Americana',
      phone: '+55 (19) 3465-5678',
      cellphone: '+55 (19) 91234-5678',
      email: 'marciocamarajr@gmail.com',
      summary: 'Desenvolvedor pragmático em desenvolvimento com mais de 7 anos de experiência na área; Profissional certificado Desenvolvedor Angular pela GDE; Profissional certificado Scrum Foundation; Sólidos conhecimentos em padrões de código e Clean Code; Apaixonado por programação e como ela pode mudar o mundo;',
      socialMedias: [
        {
          username: 'camaraxcodes',
          icon: 'linkedin',
          url: 'https://www.linkedin.com/in/camaraxcodes/',
        },
        {
          username: 'camaraxcodes',
          icon: 'instagram',
          url: 'https://www.linkedin.com/in/camaraxcodes/',
        },
      ],
      courses: [{
        name: 'Tecnólogo em Jogos Digitais',
        institution: 'Uninove - Universidade Nove de Julho',
        yearOfConclusion: '2024',
      }],
      jobs: [
        {
          enterprise: 'NAVA - Technology for Business',
          entry: 'Outubro/2021',
          departure: 'Atual',
          role: 'Analista Programador IV | Santander Geração Digital',
          location: 'São Paulo/SP'
        },
        {
          enterprise: 'Followize Softwares',
          entry: 'Setembro/2020',
          departure: 'Setembro/2021',
          role: 'Desenvolvedor Front-End Pleno II',
          location: 'Itu/SP'
        },
      ],
      skills: ['Angular', 'SCSS', 'Clean Code'],
      certifications: [{
        name: 'Angular - The Complete Guide',
        institution: 'Udemy',
        yearOfConclusion: '2022',
        yearOfExpiration: '',
      }],
      additionalInformations: [{
        additionalInformation: 'Inglês B1',
      }],
      theme: 1,
    };
  }
}
