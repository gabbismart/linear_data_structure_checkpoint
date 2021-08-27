/*
Objective
At this checkpoint you are asked to write an algorithm that fulfill the following description:

Description:

Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set.
Example:
Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
Output: 13 (distinct elements - 4, 7, 2 )
Give two Solution to this problem, using a different type of data structures each time.
Now, given two sets of integers, write also two algorithms to print the sum of overlapping elements in two sets. The elements in each set are unique or there are no duplicates within a set.
Example: 

Set 1: [12, 13, 6, 10]
Set 2: [13, 10, 16, 15]
Sum of overlapping elements: 46
Explanation: Common elements are 10, 13
Instructions
Problem 1, Solution 1 with an array.
Initialize sum = 0. Compare each element of set one with the second set and if element is not present then add that element to sum. Then do the vice versa to add elements from the second set. 
Problem 1, Solution 2 with an hash table.
Insert all the elements from both the sets with the element as key and its count (in both arrays).
Now iterate through the constructed map and sum all the elements with count = 1.
Problem 2, same approaches with little modifications.
*/

ANSWER

 Algorthm = numbersArray
VAR
   tab : Array.i[3]; // declaring the array and define its length.
   i : INTEGER; // declaring the index for each element in the array.
BEGIN
  tab = [3,1,7,9]; // inserting the elements directly in the array.
  Write('Print Array :')
  FOR (i < 0 = 3 STEP 1  DO);   // the index of arrays start from 0;
     Write(tab[i]) // to access the element, we use the name_array[indexation]
  END_FOR
END
