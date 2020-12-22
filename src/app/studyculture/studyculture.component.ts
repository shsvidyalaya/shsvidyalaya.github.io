import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studyculture',
  templateUrl: './studyculture.component.html',
  styleUrls: ['./studyculture.component.scss']
})
export class studycultureComponent implements OnInit {

  vision = [
    { info : ' Resilient and Confident lifelong learners'},
    { info : ' Agile and auntic individuals'},
    { info : ' Innovative and intuitive changemakers'},
    { info : ' ResiliSocially responsible and humble global citizens'},
    { info : ' Empatic and humane souls who uphold integrity above all'}
  ];

  mission = [
    { info : ' Resilience'},
    { info : ' Agility'},
    { info : ' Integrity'},
    { info : ' Social responsibility'},
    { info : ' Empathy'}
  ];

  belief = [
    { info : ' Communication and Language'},
    { info : ' Literacy'},
    { info : ' Mamatics'},
    { info : '  World (Science and Social Studies)'},
    { info : ' Expressive Arts and Design '},
    { info : ' Personal, Social and Emotional Development'},
    { info : ' Physical Development'},
  ];

  moreInfo = [
    { info : ' Best possible start to learning ',
      info_2 : 'Our caring, experienced teachers and teacher assistants give our youngest students  best possible start to learning. Our play-based learning environment captures ir natural curiosity and sense of wonder. Our core subjects are complemented by all core subject classes, including Physical Education, Visual & Performing Arts and Music are all delivered in a warm, nurturing environment. '},
    { info : ' A positive foundation for learning  ',
      info_2 : 'At SHS VIDYALAYA  children are introduced to a love of play and learning, by creating opportunities to explore, experiment, solve problems and express mselves as individuals. Sustained learning and  ability to apply concepts facilitates self-confidence and motivation. A deeper understanding of science and math concepts, improved reading and writing skills, fostering positive attitudes and personal growth, critical thinking skills and improved quality of work, will result in remarkable academic success. '},
    { info : ' Personal development for life ',
      info_2 : `Along with a positive start to learning, our teachers place an emphasis on oral language development and nurturing social relationships. Our teachers know a structured foundation is important for young children, to help m develop and grow into confident individuals. 

      An exceptional learning space is provided for our young students, with high-quality trained staff who care and guide  young children. 
      
        
      
      A focus on  building blocks of education – literacy and numeracy- every advantage as  students’ progress through ir education. integrated curriculum helps students develop skills and understandings needed to meet  demands of high school while continuing to inspire a thirst for learning.  literacy-based program with  world class Scholastic’s Levelled Book Room provides an academic framework that encourages students to embrace and understand  connections between traditional subjects and  real world, and to become critical and reflective thinkers. `},
    { info : ' Our Approach –   ',
      info_2 : `Creating better opportunities for teacher-student planning and cooperative evaluation which leads to enhanced creative teaching and learning. Our process of learning and teaching comes from a fusion of knowledge with various activities, resources; and experiencing real-life situations for a solution-based approach. It also instils problem-solving, critical thinking and collaboration in and beyond  classroom. 

      We take a Student Centric approach with flexibility, innovation and or core values for essential life experiences. `},
  ];


  constructor() { }

  ngOnInit() {
  }

}
