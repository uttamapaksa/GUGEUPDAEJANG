import dayjs from 'dayjs';

export const timeToString = (date:Date) =>{
    return dayjs(date).format("HH:mm:ss")
  }