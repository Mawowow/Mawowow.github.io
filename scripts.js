const btn = document.getElementById('calculate');

btn.addEventlistener('click', function(){

	let height = document.querySelector('#height').value;
	let weight = document.querySelector('#weight').value;

    if(height == '' || weight == ''){
       alert('please fill out the input fields!');
       return;
	}

    //BMI = weight in KG / (height in m * height in m)

	height = height / 100

	let BMI =( weight / (height * height));

	BMI = BMI.toFixed(2);

	document.querySelector('#result'). innerHTML = BMI;

	let status = '';

	if(BMI < 18,5){
		status = "underweight";
	}
	if(BMI >=18.5 && BMI < 25){
		status =  "healthy";
	}
    if(BMI >=25 && BMI < 30){
		status =  "overweight";
	}
	if(BMI >=30){
		status =  "obese";
	}
	document.querySelector('.comment').innerHTML = 'comment:
	 you are <span id="comment">${status}</span';

});

