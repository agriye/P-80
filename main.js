function firstpara(){
    var inputs = [];
    
    for (i=1; i<=6; i++)
    {
        inputs.push(document.getElementById("para1_input_box_" + i).value);
    }
    
    inputs.join(". ")
    document.getElementById("para1").innerHTML=inputs.join(". ");
}
function secondpara(){
    var input = [];
    for (i=11; i<=16; i++)
    {
        input.push(document.getElementById("para1_input_box_" + i).value);
    }
    input.join(". ")
    document.getElementById("para2").innerHTML=input.join(". ");
}