function gradeAssignment(){
    let grade = prompt("enter your grade");
    grade = parseInt(grade);

    if (grade >= 90){
        alert("excellent");
    }else if (grade >= 80){
        alert("good");
    }else if(grade >= 70){
        alert("fair");
    }else{
        alert("need improvement");
    }
}