//for The purpose of this exercice we are only formatting for french

export function formattedDistance(distance) {
  if (Number.isNaN(distance)) {
    return ''
  }
  if (distance > 1000 ) {
    //toLocaleString('fr', { style: 'unit', unit: 'kilometers' }) would have been nice, but works only on v8 as of today
    return  `${addSpacesAndComma((distance/1000).toFixed(1))} km`
  }
  return `${addSpacesAndComma(distance)} m`
}


export function addSpacesAndComma(number) {
  if (isInteger(number)) {
    return (
      parseInt(number)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    );
  }
  let parts = number.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return parts.join(',');
}

export function formattedDuration(seconds) {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds - hours * 3600) / 60).toString()

  return `${hours}h${minutes.padStart(2, '0')}`
}

function isInteger(number) {
  return number % 1 === 0
}