import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.scss']
})
export class AdmissionsComponent implements OnInit {
  closeResult = '';
  model: NgbDateStruct;
  constructor(private modalService: NgbModal,) { }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  admission = [
    {
      icon: '#icon_ethicalEdu',
      description: `Ethical
      Education`,
    },
    {
      icon: '#icon_nurturing',
      description: `Nurturing
      Individual
      Passion`,
    },
    {
      icon: '#icon_community',
      description: `Building
A Community`,
    }
  ];

  admission_2 = [
    {
      title: `Admission to Foundation Stage`,
      bar: 'pp0',
      description: `Activity Based Learning 
for 5 years`,
    },
    {
      title: 'Admission to Preparatory Stage',
      bar: 'pp1',
      description: `Discovery, Play and Interactive 
Classroom learning 
for 3 years`,
    },
    {
      title: 'Admission to Middle Stage',
      bar: 'pp2',
      description: `Experiential learning in 
Mamatics, Science, Arts, etc. 
for 3 years`,
    },
    {
      title: 'Admission to Secondary Stage',
      bar: 'pp3',
      description: `Flexibility in choice of subjects 
with multidisciplinary study 
for 4 years`,
    }
  ];



  ngOnInit() {
  }

}
