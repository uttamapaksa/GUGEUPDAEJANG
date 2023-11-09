import dayjs from 'dayjs';

export const timeToString = (date: Date) => {
  return dayjs(date).format('HH:mm:ss');
};

export const deleteMarker = () => {
  const parent = document.querySelector('#map_div > div > div');
  console.log(console.log("deleteMarker"));
  console.log(parent);
  if (parent != null) {
    while (parent.children.length > 3) {
      parent.removeChild(parent.children[3]);
    }
  }
  // for (let i = 0; i < paraRequestMarkers.length; i++) {
  //     paraRequestMarkers[i].setMap(null);
  // }
  // setParaRequestMarkers([]);
};
