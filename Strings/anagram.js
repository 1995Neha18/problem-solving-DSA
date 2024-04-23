
function anagramDetector(s1,s2){
    
 let x = s1.split("").sort().join("").trim();
 let y = s2.split("").sort().join("").trim();

 if (x == y)
     console.log("True");
 else
     console.log("False");
}