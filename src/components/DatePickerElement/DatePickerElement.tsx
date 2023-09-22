import DatePicker from "react-datepicker";

import "./DatePickerElement.css";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerElementProps {
  value: any;
  onChange: any;
};

const DatePickerElement = ({ value, onChange }: DatePickerElementProps) => {
  return (
    <DatePicker
      dateFormat="dd/MM/yyyy"
      selected={value}
      closeOnScroll={true}
      showYearDropdown
      dropdownMode="select"
      withPortal
      onChange={onChange}
    />
  );
};

export default DatePickerElement;
