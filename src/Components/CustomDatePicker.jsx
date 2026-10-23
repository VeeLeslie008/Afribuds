import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CustomDatePicker({ selected, onChange, placeholderText = "Select a date..." }) {
  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      minDate={new Date()} // Prevents booking in the past
      placeholderText={placeholderText}
      className="custom-datepicker-input"
      dateFormat="MMMM d, yyyy"
      showPopperArrow={false}
      popperPlacement="bottom-start"
    />
  );
}

export default CustomDatePicker;