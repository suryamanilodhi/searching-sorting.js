// 1.Implement Binary Search
// 2.Implement Merge Sort
// 3.Implement Quick Sort
// 4.Implement Insertion Sort
// 5.Write a program to sort list of strings (similar to that of dictionary)




//Q.1->Implement Binary Search?



let counter = 0;
const findIndexOfElementUsingBinarySearch = (element) => {
    const sortedList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let minIndex = 0;
    let maxIndex = sortedList.length - 1;
    
    if (element === sortedList[minIndex]) {
        counter++;
        return minIndex;
    } else if (element === sortedList[maxIndex]) {
        counter++;
        return maxIndex;
    }

    while (minIndex <= maxIndex) {
        counter++;
        let middleIndex = Math.floor((minIndex + maxIndex) / 2);
        if (element === sortedList[middleIndex]) {
            return middleIndex;
        } else if (element > sortedList[middleIndex]) {
            
            minIndex = middleIndex + 1;
            if (sortedList[minIndex] === element) {
                return minIndex;
            }
        } else { 
          
            maxIndex = middleIndex - 1;
            
            if (sortedList[maxIndex] === element) {
                return maxIndex;
            }
        }
    }
    return -1;
}


console.log('Index of Element Using Binary Search is: ', findIndexOfElementUsingBinarySearch(10));
console.log('Counter: ', counter);

//---------------------------------------------------------------------------------------------------------------------


//Q.2->Implement Merge Sort?


let Counter = 0;
const merge = (left, right) => {
    let arr = [];
    while (left.length && right.length) {
        Counter++;
        if (left[0] < right[0]) { 
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }

    //concatenate left right and sorted arr[]//
    return [...arr, ...left, ...right];
}

const mergeSort = (array) => {
    if (array.length < 2) {
        return array;
    }

    const half = array.length / 2;
    const left = array.splice(0, half);
    return merge(mergeSort(left), mergeSort(array));
}


const unsortedList = [4, 8, 1, 7, 3, 10, 2, 9, 5, 6, 11, 12 ];

console.log('Sorted Array', mergeSort(unsortedList));
console.log('Counter', Counter);


//-------------------------------------------------------------------------------------------------------------------



// 3.Implement Quick Sort?

const UnsortedList = [4, 8, 1, 7, 3, 10, 2, 9, 5, 6];

let COUNTER = 0;

const partition = (arr, start, end) => {
    let pivotElement = arr[end];
    let pivotIndex = start;
  
    for (let i = start; i < end; i++) {
        COUNTER++;
        if (arr[i] < pivotElement) {
          
            // swapping //
            [arr[i], [arr[pivotIndex]]] = [arr[pivotIndex], [arr[i]]]
            
            pivotIndex++;
        }
    }
  
    //swap pivot index to place it in the middle//
  
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    return pivotIndex;
}

const QuickRecursionSort = (list, start, end) => {
    if (end <= start) {
        return;
    }
    let index = partition(list, start, end);
  
    //recursively call the self method again with new list, start & end
   QuickRecursionSort(list, start, index - 1);
    QuickRecursionSort(list, index + 1, end);
}

QuickRecursionSort(UnsortedList, 0, UnsortedList.length - 1);

console.log(' Sorted List Is', UnsortedList);
console.log('COUNTER: ', COUNTER);


//-------------------------------------------------------------------------------------------------------------------



//Q.4->Implement Insertion Sort?




let innerLoop = 0;
let outerLoop = 0;
const insertionSort = () => {
    const listLength = UnSortedList.length;
    for (let i = 1; i < listLength; i++) {
        outerLoop++;
        let currentValue = UnSortedList[i];
        let j = i - 1;
        while (j >= 0 && UnSortedList[j] > currentValue) {
            innerLoop++;
           
            UnSortedList[j + 1] = UnSortedList[j];
            j--;
        }
        UnSortedList[j + 1] = currentValue;
          
    }
    return UnSortedList;
}

const UnSortedList = [4, 8, 1, 7, 3, 10, 2, 9, 5, 6];

console.log('*** Sorted List ***', insertionSort());
console.log('innerLoop: ', innerLoop);
console.log('outerLoop: ', outerLoop);

//-------------------------------------------------------------------------------------------------------------------------------



//Q.5->Write a program to sort list of strings (similar to that of dictionary)?


let mp = new Map();
 
function comp(a, b)
{
 
    for (let i = 0; i < Math.min(a.length, b.length);i++) {
 
        
        if (mp.get(a[i]) != mp.get(b[i]))
            return mp.get(b[i]) - mp.get(a[i]);
    }
 
    return (b.length - a.length);
}
 

function printSorted(words,order)
{
 

    for (let i = 0; i < order.length; i++)
        mp.set(order[i],i);
 
    // Sorting with custom sort function
    words.sort(comp);
 
    // Printing the sorted order of words
    for (let x of words)
      
     console.log(x +" ");
        
}
 
// Driver code //

let words = ["row", "word", "world" ];
let order = ["worldabcefghijkmnpqstuvxyz" ];
 

console.log(printSorted(words, order));