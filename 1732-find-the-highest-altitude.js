/*
    Problem: There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

    You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.
*/

function largestAltitude(gain) {
    let arr = [];
    let sum = 0;

    for(let i=0; i<gain.length; i++) {
        if(gain[0] < 0) {
            arr.push(0);
        }
        sum += gain[i];
    }

    const maxAltitude = Math.max(...arr);

    return maxAltitude;
}