function collectOddValues(arr){
    let newArr = [];   
    if(arr.length === 0) {
        return newArr;
    }        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }      
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5])
// collectOddValues([1,2,3,4,5]) -> if(arr[0] % 2 !== 0) -> if(1 % 2 !== 0) -> true (it is odd/nieparzysty) -> 
// newArr.push(arr[0]) -> newArr.push(1) -> newArr = [1]
// newArr = newArr.concat(collectOddValues(arr.slice(1))) -> [1].concat(collectOddValues(arr.slice(1))) ->
// [1].concat(collectOddValues([2,3,4,5]))
    // collectOddValues([2,3,4,5]) -> if(arr[0] % 2 !== 0) -> if(2 % 2 !== 0) -> false ->
    // newArr = newArr.concat(collectOddValues(arr.slice(1))) -> [].concat(collectOddValues(arr.slice(1))) ->
    // [].concat(collectOddValues([3,4,5]))
        // collectOddValues([3,4,5]) -> if(arr[0] % 2 !== 0) -> if(3 % 2 !== 0) -> true ->
        // newArr.push(arr[0]) -> newArr.push(3) -> newArr = [3]
        // newArr = newArr.concat(collectOddValues(arr.slice(1))) -> [3].concat(collectOddValues(arr.slice(1))) ->
        // [3].concat(collectOddValues([4,5]))
            // collectOddValues([4,5]) -> if(arr[0] % 2 !== 0) -> if(4 % 2 !== 0) -> false ->
            // newArr = newArr.concat(collectOddValues(arr.slice(1))) -> [].concat(collectOddValues(arr.slice(1))) ->
            // [].concat(collectOddValues([5]))
                // collectOddValues([5]) -> if(arr[0] % 2 !== 0) -> if(5 % 2 !== 0) -> true ->
                // newArr.push(arr[0]) -> newArr.push(5) -> newArr = [5]
                // newArr = newArr.concat(collectOddValues(arr.slice(1))) -> [5].concat(collectOddValues(arr.slice(1))) ->
                // [5].concat(collectOddValues([]))
                    // collectOddValues([]) -> if(arr.length === 0) -> if(0 === 0) -> true ->
                    // return newArr -> return []
                // back to [5].concat(collectOddValues([])) -> [5].concat([]) -> [5]
            // [].concat(collectOddValues([5])) -> [].concat([5]) -> [5]
        // [3].concat(collectOddValues([5])) -> [3].concat([5]) -> [3,5]
    // [].concat(collectOddValues([3,5])) -> [].concat([3,5]) -> [3,5]
// [1].concat(collectOddValues([3,5])) -> [1].concat([3,5]) -> [1,3,5]

// example of slice:
// [2,3,4,5].slice(1) -> return [3,4,5]