import dayjs from 'dayjs';

export const timeToString = (date: Date) => {
  return dayjs(date).format('HH:mm:ss');
};

export const expectedTime = (date: Date, min:number) => {
  return dayjs(date).add(min, 'minute').format('HH:mm');
};

export const turmToString = (start: Date) => {
  const date1 = dayjs();
  const date2 = dayjs(start);
  return date1.diff(date2, 'm');
};

export const deleteMarker = (idx:number) => {
  const parent = document.querySelector('#map_div > div > div');
  if (parent != null) {
    while (parent.children.length > idx) {
      parent.removeChild(parent.children[idx]);
    }
  }
};
