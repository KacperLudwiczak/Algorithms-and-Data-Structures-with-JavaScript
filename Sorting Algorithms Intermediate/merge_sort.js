// Merge function from earlier
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

// Recursive Merge Sort
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

mergeSort([10,24,76,73])

// example:
// arr = [10,24,76,73]
// mid = Math.floor(arr.length/2) -> 2
// mergeSort(arr.splice(0,mid)) -> mergeSort(arr.splice(0,2)) -> mergeSort([10,24])
// left = [10,24]
    // mid = Math.floor(arr.length/2) -> 1
    // left:
    // mergeSort(arr.splice(0,mid)) -> mergeSort(arr.splice(0,1)) -> mergeSort([10])
    // arr = [10]
    // right:
    // mergeSort(arr.splice(mid)) -> mergeSort(arr.splice(1)) -> mergeSort([24])
    // arr = [24]
    // merge(left, right) -> merge(10, 24) -> [10,24] -> it is sorted
// mergeSort(arr.splice(mid)) -> mergeSort(arr.splice(2)) -> mergeSort([76,73])
// right = [76,73]
    // mid = Math.floor(arr.length/2) -> 1
    // left:
    // mergeSort(arr.splice(0,mid)) -> mergeSort(arr.splice(0,1)) -> mergeSort([76])
    // arr = [76]
    // right:
    // mergeSort(arr.splice(mid)) -> mergeSort(arr.splice(1)) -> mergeSort([73])
    // arr = [73]
    // merge(left, right) -> merge(76, 73) -> [73,76] -> it is sorted
// merge(left, right) -> merge([10,24], [73,76]) -> [10,24,73,76] -> it is sorted


// Splices examples:
// [10,24].splice(0,1) = [10]
// [10,24].splice(1) = [24]
// [76,73].splice(0,1) = [76]
// [76,73].splice(1) = [73]