import moment from "moment";

export const BookingList = ({bookings}) => {
  return (
    <table className="table">
      <thead>
      <tr >
        <th role='columnheader'>#</th>
        <th role='columnheader'>Oil Type</th>
        <th role='columnheader'>Date</th>
      </tr>
      </thead>
      <tbody>
      {bookings.map((booking, index) => {
        return (
          <tr>
            <td>{index + 1}</td>
            <td>{booking.type}</td>
            <td>{moment(booking.date).format('MM/DD/YYYY HH:mma')}</td>
          </tr>
        )
      })}

      </tbody>
    </table>
  )
}
