import { Component } from '@angular/core';
import {Appointment} from '../models/appointment'
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  standalone: false,
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit {

  newAppointmentTitle : string = "";
  newAppointmentDate : Date = new Date();

  appointments: Appointment[] = []

  ngOnInit(): void {
    // Loading from local storage
    let savedAppointments = localStorage.getItem("appointments")

    // Check if there's a value in savedAppointments -> if there is (?), parse the data, if not (:) return an empty array.
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : []
  }

  addAppointment(){
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      // Pushing info into array
      this.appointments.push(newAppointment)

      // Values are reset & updated
      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();

      // Saving data into local storage as a JSON string
      localStorage.setItem("appointments", JSON.stringify(this.appointments))
    }
  }

  // Removing something from a given index in an array
  deleteAppointment(index: number){
    this.appointments.splice(index, 1)
    localStorage.setItem("appointments", JSON.stringify(this.appointments))
  }

}