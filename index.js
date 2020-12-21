



    var input_text=document.querySelectorAll("input")[0];
    var button_item1=document.querySelectorAll("button")[0];
    var button_item2=document.querySelectorAll("button")[1];


    var output = document.getElementById("output");


    var x= '<i class="fas fa-times">Mo</i>';


    // Add action __________________________________________________
    button_item1.addEventListener('click',()=>{
        if (input_text.value.length>15  ){
            alert("\"The field cannot be  Greater than  15 Letters  \" ");
            input_text.value=" ";

        }else if (input_text.value.length==''){
            alert("\"The field cannot be  empty  \" ");
            input_text.value=" ";
        }
        else {

            var  my_span  = document.createElement("span");
        output.appendChild(my_span);
        my_span.style.border='solid 1px ';
        my_span.className += "d-flex border-info  form-control d-flex justify-content-between ";
        my_span.style.padding ='2px 0px -4px 14px';
        my_span.style.marginBottom='6px';
        my_span.style.fontSize='20px';
        my_span.style.cursor='';

        var  checkbox  = document.createElement("input");
             checkbox.type = 'checkbox';
             checkbox.value = input_text.value;
             checkbox.style.marginTop='10px';
        my_span.appendChild(checkbox);


        checkbox.addEventListener('click',()=>{
            label.style.textDecoration='line-through';
        })


        var label = document.createElement('label')
        label.htmlFor = input_text.value;
        label.style.paddingLeft='20px';
        label.className += " ";
        label.appendChild(document.createTextNode(input_text.value));
        my_span.appendChild(label);
        var set_i=my_span.appendChild(label);


        var  icon  = document.createElement("I");
        icon.appendChild(document.createTextNode(''));
        my_span.appendChild(icon);
        icon.className +="fas fa-times ";

            icon.addEventListener('click',()=>{
                output.animate([
                    { transform: 'translateY(0px)' },
                    { transform: 'translateY(20px)' }
                ], { duration: 1000},{delay:4});
                my_span.parentNode.removeChild(my_span);
            });



            var br = document.createElement('br');
        my_span.appendChild(br);


            if (input_text.value==" "){
                alert("\"The field cannot be  empty   \" ");
                input_text.value=" ";
                my_span.parentNode.removeChild(my_span);
            }



        }
        input_text.value=" ";
    });

    // var myVar = setInterval(mo, 3000);

    // Delete  action __________________________________________________
    button_item2.addEventListener('click',()=> {

    });


    //  Set name
  onload=()=> {
    var tedo=document.getElementById("tedo");
        if (localStorage.getItem("name") == null || localStorage.getItem("name") == '' ) {
            var name = prompt("What is Your Name ? ");
            localStorage.setItem('name', name);
            tedo.innerText += "Type Your Name ";
            location.reload();
        } else {
            tedo.innerText += " " + localStorage.getItem("name");
        }
      output.focus();
 //  Set Value


  }

 tedo.addEventListener('click', ()=> {
          localStorage.removeItem('name', name);
     if (localStorage.getItem("name") == null  || localStorage.getItem("name") == ' ' ) {
         var name = prompt("What is Your Name ? ");
         localStorage.setItem('name', name);
         location.reload();
     }
    });

    //Time ___________________________________________________________
    var d = new Date();
    function myTimer() {
        var d = new Date();
        var t = d.toLocaleTimeString();
        var set_interval =document.getElementById('set_interval');
        set_interval.innerText = (d.getMonth()+1)+ "/" +d.getDate() + "/"+d.getFullYear();
        set_interval.style.border=" 3px solid red";
    }
    // var myVar = setInterval(myTimer, 1000);





    // if (localStorage.getItem('input_text') == null){
    //     massage.innerText='You have not task';};
    //
    // localStorage.setItem('input_text',input_text.value);
    // massage.innerHTML= localStorage.getItem('input_text');


    // onload=     massage.innerHTML= localStorage.getItem('input_text');
