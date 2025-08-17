/*
Write a program that takes a score (0 to 100) and prints the grade:

90–100: "A"

80–89: "B"

70–79: "C"

60–69: "D"

Below 60: "F"

Use nested if-else blocks.
*/

let score = 50;
if(score<=100 && score>=90){
    console.log(`You have score A grade. Your marks are ${score}`)
}
else if(score<=86 && score>=80){
    console.log(`You have score B grade. Your marks are ${score}`)
}
else if(score<=79 && score>=60){
    console.log(`You have score C grade. Your marks are ${score}`)
}
else if(score<=59 && score>=50){
    console.log(`You have score D grade. Your marks are ${score}`)
}
else if(score<=49 && score>=35){
    console.log(`You have score E grade. Your marks are ${score}`)
}
else{
    console.log(`You have score F grade. Your marks are ${score}`)
}