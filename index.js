var weightInput = document.getElementById("wightInput");
var HeightInput = document.getElementById("HeightInput");
var checkBTN = document.getElementById("checkBTN");
var ResetBTn = document.getElementById("ResetBTn");
var bmiCode = document.getElementById("bmiCode");
var bmiMessage = document.getElementById("bmiMessage");


checkBTN.addEventListener("click", OwnerHandler)
ResetBTn.addEventListener("click", resetBTn)

function checkBTn(){
          let height,weight,bmi;
          height = parseInt(HeightInput.value);
          weight = parseInt(weightInput.value);
          bmi = weight / (height * 0.0254 * height * 0.0254)
          bmiCode.innerHTML = bmi.toFixed(2);
          let mssg = showMessage(bmi)
          bmiMessage.innerHTML = mssg;
}
function resetBTn(){
          HeightInput.value = "";
          weightInput.value = "";
          bmiCode.innerHTML = "00";
          bmiMessage.innerHTML = "";
}
function showMessage(bmiValue){
          if(bmiValue < 16){
                    return "You Are Severe Thin"
          }else if(bmiValue >= 16 && bmiValue <=17){
                    return "You Are Moderate Thin"
          }else if(bmiValue > 17 && bmiValue <= 18.5){
                    return "You Are Mid Thin"
          }else if(bmiValue > 18.5 && bmiValue <= 25){
                    return "You Are Normal"
          }else if(bmiValue > 25){
                    return "You Are Overweight"
          }
}


function OwnerHandler (){
          if(parseInt(HeightInput.value) && parseInt(weightInput.value)){
                    checkBTn();
          }else{
                    alert("Please input your valid Number")
                    resetBTn()
          }
}