console.log('this is postman clone')
//hiding the parametersBox as default type is json

let parametersBox=document.getElementById('parametersBox')
parametersBox.style.display='none';
let jsonBox=document.getElementById('requestJsonBox')
 
//if content type is json then hide parameters box and show jsonbox and vice versa
let jsonRadio=document.getElementById('jsonRadio');
jsonRadio.addEventListener('click',function(){
    parametersBox.style.display='none';
    requestJsonBox.style.display='block';
})


let paramsRadio=document.getElementById('paramsRadio');
paramsRadio.addEventListener('click',function(){
    parametersBox.style.display='block';
    requestJsonBox.style.display='none';
})

function getElementFromString(string){
    let div=document.createElement('div')
    div.innerHTML=string
    return div.firstElementChild
}
let addParamCount=0;
let addParam=document.getElementById('addParam')
addParam.addEventListener('click',function(){
    let params=document.getElementById('params')
    let string=`<div class="form-row">
    <label for="url" class="col-sm-2 col-form-label">Parameter ${addParamCount+2}</label>
    <div class="col-md-4">
        <input type="text" class="form-control" id="parameterKey${addParamCount+2}" placeholder="Enter Parameter ${addParamCount+2} Key">
    </div>
    <div class="col-md-4">
        <input type="text" class="form-control" id="parameterValue${addParamCount+2}" placeholder="Enter Parameter ${addParamCount+2} Value">
    </div>
    <button  class="btn btn-primary delParam">-</button>
</div>`
addParamCount++;
let paramElement=getElementFromString(string)
// console.log(paramElement)
params.appendChild(paramElement)
let delParam=document.getElementsByClassName('delParam')
for(item of delParam){
    item.addEventListener('click',function(e){
            // console.log(e.target.parentElement)
            e.target.parentElement.remove();
    })
}

})

//pressing submit

let submit=document.getElementById('submit');
submit.addEventListener('click',function(){
    document.getElementById('responseJsonText').value='pls wait fetching details'   
})



