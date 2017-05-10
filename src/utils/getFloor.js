export default function getFloor(arr) {
    for (let i in arr) {
        let floor = "";
        for (let j = 0; j < arr.length; j++) {          
            if (arr[j].id === arr[i].reply_id) {
                floor = j + 1;
                break;
            }

        }
        arr[i].floor = floor;
    }
    return arr;
}