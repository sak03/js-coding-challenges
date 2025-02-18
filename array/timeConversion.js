/**
 * convert 12 hr mode to 24 hour mode
 * 
 * first test case
 * input: 12:01:00PM
 * output: 12:01:00
 * 
 * second test case
 * input: 07:45:15PM
 * output: 19:45:15
 * 
 */


const timeConversion = (s)=>{
    const [time, modifier] = s.split(/(AM|PM)/);
    let [hours, minutes, seconds] = time.split(':');
    if (hours == '12') {
        hours = modifier === 'AM' ? '00' : '12';
    } else {
        hours = modifier === 'PM' ? parseInt(hours, 10) + 12 : hours;
    }
    console.log(`${hours}:${minutes}:${seconds}`)
    return `${hours}:${minutes}:${seconds}`;
}
// timeConversion('12:01:00PM')
timeConversion('07:45:15PM');
