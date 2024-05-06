import dayjs from 'dayjs';
import { atom } from 'recoil';

const selectedDateState = atom({
  key: 'selectedDate',
  default: dayjs().format('YYYY-MM-DD'),
});

export default selectedDateState;
