function delay(t) {
    return new Promise(function (resolve) {
        setTimeout(resolve, t)
        console.log("delay")

    });
}


export default async function selectionSort(array, setArr) {

        let n = array.length;

        for(let i = 0; i < n; i++) {
            // Finding the smallest number in the subarray
            let min = i;

            await delay(250)
            setArr({arr: [...array], front: array[i], middle: array[min]})

            for(let j = i+1; j < n; j++){
                await delay(250)
                setArr({arr: [...array], front: array[i], middle: array[min],end: array[j]})
                if(array[j] < array[min]) {
                    min=j;
                    await delay(250)
                    setArr({arr: [...array], front: array[i], middle: array[min]})
                }
            }
            if (min !== i) {
                // Swapping the elements
                let tmp = array[i];
                array[i] = array[min];
                array[min] = tmp;
                await delay(250)
                setArr({arr: [...array], front: array[min], middle: array[i]})
            }
        }
        console.log(array)
}