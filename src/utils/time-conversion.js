export default function timeConvert(minutes) {
  
  return (
    parseInt(minutes / 24 / 60) +
    ' days, ' +
    parseInt((minutes / 60) % 24) +
    ' hours, ' +
    parseInt(minutes % 60) +
    ' minutes'
  );
}
