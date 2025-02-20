import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  standalone: false,
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {

  newAppointmentTitle : string = ""
  newAppointmentDate : Date = new Date()

  appointment: Appointment[] = []
    
    // {
    //   id: 1,
    //   title: "Take dog for a walk",
    //   date: new Date('2023-07-30')
    // }
}
