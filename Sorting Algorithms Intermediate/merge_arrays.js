// Merges two already sorted arrays
function merge(arr1, arr2){
    let results = [];
    let arr1Index = 0;
    let arr2Index = 0;
    while(arr1Index < arr1.length && arr2Index < arr2.length){
        if(arr2[arr2Index] > arr1[arr1Index]){
            results.push(arr1[arr1Index]);
            arr1Index++;
        } else {
            results.push(arr2[arr2Index])
            arr2Index++;
        }
    }
    while(arr1Index < arr1.length) {
        results.push(arr1[arr1Index])
        arr1Index++;
    }
    while(arr2Index < arr2.length) {
        results.push(arr2[arr2Index])
        arr2Index++;
    }
    return results;
}
merge([100,200], [1,2,3,5,6])

