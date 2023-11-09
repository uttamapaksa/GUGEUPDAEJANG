import dayjs from 'dayjs';

export const timeToString = (date: Date) => {
  return dayjs(date).format('HH:mm:ss');
};

export const turmToString = (start: Date) => {
  const date1 = dayjs();
  const date2 = dayjs(start);
  return date1.diff(date2, 'm');
};

export const deleteMarker = () => {
  const parent = document.querySelector('#map_div > div > div');
  console.log(console.log('deleteMarker'));
  console.log(parent);
  if (parent != null) {
    while (parent.children.length > 3) {
      parent.removeChild(parent.children[3]);
    }
  }
};
