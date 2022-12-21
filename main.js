// Write your JavaScript here

function handleClickEvent(e) {
  let amountDue = parseFloat($("#amount-due").val());
  let amountReceived = parseFloat($("#amount-received").val());
 

  let result = (amountReceived - amountDue) * 100;

  $("#your-change-is").html("$" + result / 100);

  let denomList =[
    {where: "#dollars-output", value: 100 }, 
    {where: "#quarters-output", value: 25 },
    {where: "#dimes-output", value: 10 },
    {where: "#nickels-output", value: 5 },
    {where: "#pennies-output"}
  ]

  denomList.forEach(function(item) {
   if (item.value){
    $(item.where).html(parseInt(result / item.value));
    result %= item.value;
   } else {
    $(item.where).html(Math.round(result));
   }
  })

}
