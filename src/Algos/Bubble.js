
function delay(t) {
    return new Promise(function (resolve) {
        setTimeout(resolve, t)
        console.log("delay")

    });
}


export default async function bblSort(array, setArr) {


    for (let i = 0; i < array.length; i++) {

        // Last i elements are already in place
        for (let j = 0; j < (array.length - i - 1); j++) {
            await delay(250)
            setArr({arr: [...array], front: array[j],middle:array[j + 1],  end: array[array.length - i]})

            // Checking if the item at present iteration
            // is greater than the next iteration
            if (array[j] > array[j + 1]) {


                // If the condition is true then swap them
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
                await delay(250)
                setArr({arr: [...array], front: array[j+1],middle:array[j],  end: array[array.length - i]})
            }
        }
    }
    // Print the sorted array
    console.log(array);
}