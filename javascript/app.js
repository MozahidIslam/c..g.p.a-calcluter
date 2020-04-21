
const myFunction = () => {
  let user1 = document.getElementById("user1").value;
  let user2 = document.getElementById("user2").value;
  let user3 = document.getElementById("user3").value;
  let user4 = document.getElementById("user4").value;
  let user5 = document.getElementById("user5").value;
  let user6 = document.getElementById("user6").value;
  let user7 = document.getElementById("user7").value;
  let user8 = document.getElementById("user8").value;
  

  let totalGread = parseFloat(user1) + parseFloat(user2) + parseFloat(user3) + parseFloat(user4) + parseFloat(user5) + parseFloat(user6) + parseFloat(user7) + parseFloat(user8);
  let per = (totalGread/800) * 100;

  debugger;

  if(per <= 100 && per >= 80) {
        Grades = 'A +'; 
  } else if( per <= 79 && per >= 75) {
    Grades = 'A'; 
  } else if (per <= 74 && per >= 70) {
    Grades = 'A- '; 

  } else if(per <=69 && per >= 65) {
         Grades = 'B+'; 
  } else if (per <= 64 && per >= 60) {
    Grades = 'B'; 
  } else if (per <= 59 && per >= 55) {
    Grades = 'B-'; 
  } else if (per <= 54 && per >= 50 ) {
    Grades = 'C+'; 
  } else if (per <= 49 && per >= 45 ) {
    Grades = 'C'; 
  } else if (per <= 44 && per >= 40) {
    Grades = 'D'; 
  } else {
    Grades = 'F';
  }

if(per >= 40) {
  document.getElementById('values').innerHTML = ` Out of 800 your total is  ${totalGread} and percentage is ${per}%. <br> Your grade is ${ Grades}. You are Pass. `
  } else {
    document.getElementById('values').innerHTML = ` Out of 800 your total is  ${totalGread} and percentage is ${per}%. <br> Your grade is ${ Grades}. You are Fail. `

  }
}

</script>