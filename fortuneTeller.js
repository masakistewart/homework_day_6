 function getRandom(min, max){
   return Math.floor(Math.random() * (max - min));
}

function futures(){
    var spouses = ["Creg", "Jamie", "Lizzy", "Shawnda", "hannah", "Sarah", "Alex"];
    var jobs = ["Fullstack Developer", "Fighter", "UI developer", "Rails Developer"];
    var numberOfChildren = [0, 1, 2,3,4,5,6,7,8,9,10];
    var future = "You will marrie " + spouses[getRandom(0, spouses.length)] + " You will be a " + jobs[getRandom(0, jobs.length)] + " and you will have"+ numberOfChildren[getRandom(0, numberOfChildren.length)] + " Children";
    console.log(future);
}

futures();