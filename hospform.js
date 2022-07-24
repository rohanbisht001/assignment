const form = document.getElementById('appointmentform');
var all = document.querySelectorAll("#appointmentform input, #appointmentform select");
localStorage.setItem("submitform","Submit Form");

for (let field of all)
{
    field.addEventListener("change",function(e){
        e.preventDefault();
        localStorage.setItem(field.id,field.value)
    });
}

if(localStorage.length > 0)
{
    for(let field of all)
    {
        field.value = localStorage.getItem(field.id);
    }
}


var today = new Date();
var dd = today.getDate() ;
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
var curr_hours = today.getHours() + 8;
var curr_min = today.getMinutes();


today = yyyy + '-' + mm + '-' + dd;
var curr_time = curr_hours+":"+curr_min;
console.log(curr_time);
document.getElementById("dob").setAttribute("max", today);
document.getElementById("doa").setAttribute("min", today);
document.getElementById("toa").setAttribute("min",curr_time);


form.addEventListener("submit",function(e){
    e.preventDefault();
    let fname = hasValue(form.elements["fname"],"Enter First Name");
    let lname = hasValue(form.elements["lname"],"Enter last Name");
    let email = hasValue(form.elements["email"],"Enter Email");
    let dob = hasValue(form.elements["dob"],"Enter Date of Birth");
    let doa = hasValue(form.elements["doa"],"Enter Date of Appointment");
    if(fname && lname && email && dob && doa)
    {
        localStorage.clear();
        location.reload();
    }
    
});

function showMessage(input, message, type) {
	
    input.setAttribute("placeholder",message);
   
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return true;
}