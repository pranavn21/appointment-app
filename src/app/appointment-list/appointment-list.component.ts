import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

export class AppointmentListComponent {

  newAppointmentTitle : string = "";
  newAppointmentDate : Date = new Date();

  appointments: Appointment[] = []

  addAppointment(){
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment)
      this.newAppointmentDate = new Date();

      alert(this.appointments.length)
    }

  }
    
  deleteAppointment(index: number){
    this.appointments.splice(index, 1)
  }
    // {
    //   id: 1,
    //   title: "Take dog for a walk",
    //   date: new Date('2023-07-30')
    // }
}
