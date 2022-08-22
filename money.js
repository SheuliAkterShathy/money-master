function getInputFieldValueById (inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseInt(inputFieldValueString);
    return inputFieldValue  
}

function getTextFieldValueById (textFieldId){
    const textField = document.getElementById(textFieldId);
    const textFieldValueString = textField.innerText;
    const textFieldValue = parseInt(textFieldValueString);
    
  return textFieldValue}

function setTextFieldValueById (textFieldId, newValue){
    const textField = document.getElementById(textFieldId);
    textField.innerText = newValue; 
    
}


function inputValidation(){
  const inputFields =document.getElementsByClassName('input');
  for(let inputField of inputFields){
   const inputValue=inputField.value;
   if(isNaN(inputValue)){
    alert('provide a valid number');
    return true;
   }
   else if(inputValue=== ""){
      alert('provide a number');
      return true;
   }
   else if(inputValue<0){
    alert('provide a positive number');
    return true;
   }
  }
}
// addeventhandler
document.getElementById('calculator-btn').addEventListener('click',function(){
  if (inputValidation()) {
    return;
  }
    const incomeField = getInputFieldValueById('income-field');
    const foodCostField = getInputFieldValueById('food-cost-field');
    const rentCostField = getInputFieldValueById('rent-cost-field');
    const clothCostField = getInputFieldValueById('cloth-cost-field');
   
  // //total cost
const totalCost=foodCostField+rentCostField+clothCostField;
if(totalCost>incomeField){
 alert('Income must be greater than cost');
 return;
}
setTextFieldValueById('total-expenses',totalCost);
 
// //balances
 const balances=incomeField-totalCost;
 setTextFieldValueById('balances-text',balances);

});

 document.getElementById('save-btn').addEventListener('click',function(){
    const incomeField = getInputFieldValueById('income-field');
     const save=getInputFieldValueById('save-field');

       if(save>100 || save<0 || isNaN(save) || save===""){
        alert('provide within 100');
        return;
       }
     //  //percentage
     const percentage=save/100;
     const savePercentage=parseInt(incomeField*percentage);
     const foodCostField = getInputFieldValueById('food-cost-field');
     const rentCostField = getInputFieldValueById('rent-cost-field');
     const clothCostField = getInputFieldValueById('cloth-cost-field');
 
  const totalCost=foodCostField+rentCostField+clothCostField;
 
  const balances=incomeField-totalCost;
  if(savePercentage>balances){
    alert('Save amount can not greater than balances');
    return;
  }
  setTextFieldValueById('saving-amount-text',savePercentage);
  const remainingBalance = balances-savePercentage;
  setTextFieldValueById('remaining-bln',remainingBalance)

 })