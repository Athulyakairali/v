import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  fullName: string = '';
  email: string = '';
  phoneNumber: string = '';
  address: string = '';
  vaccineType: string = '';
  appointmentDate: string = '';

  bookingDetails: string = '';

  displayDetails() {
    this.bookingDetails = `
        <h3>Booking Details:</h3>
        <p><strong>Name:</strong> ${this.fullName}</p>
        <p><strong>Email:</strong> ${this.email}</p>
        <p><strong>Phone Number:</strong> ${this.phoneNumber}</p>
        <p><strong>Address:</strong> ${this.address}</p>
        <p><strong>Vaccine Type:</strong> ${this.vaccineType}</p>
        <p><strong>Appointment Date:</strong> ${this.appointmentDate}</p>
    `;
  }
}
