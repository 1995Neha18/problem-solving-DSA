function findUniqueKey(obj) {
 const keyCount = {}; // Object to store the count of each key
 const pathCount = {}; // Object to store the count of each key path

 // Function to recursively traverse the object
 function traverse(obj, path = '') {
   for (let key in obj) {
     const currentPath = path ? `${path}.${key}` : key;
     if (typeof obj[key] === 'object') {
       // If the value is an object, recursively traverse it
       traverse(obj[key], currentPath);
     } else {
       // If the value is not an object, count occurrences of the key path
       if (keyCount[key]) {
         keyCount[key]++;
       } else {
         keyCount[key] = 1;
       }
       if (pathCount[currentPath]) {
         pathCount[currentPath]++;
       } else {
         pathCount[currentPath] = 1;
       }
     }
   }
 }

 // Start the traversal
 traverse(obj);

 // Find the unique key paths
 const uniqueKeys = Object.keys(pathCount).filter(path => pathCount[path] === 1);

 // Return the unique keys if found, otherwise return 'not found'
 return uniqueKeys.length > 0 ? uniqueKeys : 'not found';
}

// Example object
const nestedObject = {
 a: {
   b: 2,
   c: 3
 },
 d: {
   e: 4,
   f: {
     g: 5,
     h: 6
   }
 },
 i: 7
};

console.log(findUniqueKey(nestedObject)); 
