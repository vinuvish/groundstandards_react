import * as React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import * as dateFns from 'date-fns';

interface Props {
  label: string;
  id: string;
  defaultValue?: any;
}

const ZTimeDatePicker: React.FC<Props> = ({ label, id, defaultValue }) => {
  const [selectedDate, handleDateChange] = React.useState<Date | null>(new Date());
  React.useEffect(() => {
    console.log('Date', dateFns.getDate(defaultValue));
  });
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <TimePicker value={selectedDate} onChange={handleDateChange} label={label} margin='dense' id={id} defaultValue={defaultValue} />
      </MuiPickersUtilsProvider>
    </div>
  );
};

ZTimeDatePicker.defaultProps = {};

export default ZTimeDatePicker;
