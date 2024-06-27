let fname="";
let lname="";
let email="";
let contact="";
let disc="";
let img="";
let showDatas=document.getElementById('showdisplay');
// let ffname=document.getElementById('fnameout');
// let llname=document.getElementById('lnameout');
// let eename=document.getElementById('emailout');
// let ccontact=document.getElementById('contactout');
// let ddsc=document.getElementById('discout');
let arrayofdata=[]
 function firstname(a){
    fname=a;
 }
 function lastname(a){
    lname=a;
 }
 function e_email(a){
    email=a;
 }

 function c_contact(a){
    contact=a;
 }
 function d_discr(a){
    disc=a;
 }
 function i_img(a){
    img=a[0];
 }
  function submit(a){

    let variable = {
        fname: fname,
        lname:lname,
        email: email,
        contact: contact,
        disc: disc,
        img: img
    };
    arrayofdata.push(variable)
    showData()
    // ffname.textContent = fname;
    // llname.textContent = lname;
    // eename.textContent = email;
    // ccontact.textContent = contact;
    // ddsc.textContent = disc;

  }



  function showData(){
    showDatas.innerHTML=''
    arrayofdata.map((val,i)=>{
        showDatas.innerHTML+=`  <div class="border-2 border-blue-500 h-fit mt-40 ml-5 w-9/12 rounded-md shadow-lg  ">
        <div class="h-10 bg-blue-500  grid justify-items-center text-2xl font-semibold">IDENTITY CARD</div>
        <div class="my-5 px-5">
        <div><img src=${URL.createObjectURL(val.img)} class="w-24 h-24 ml-24 rounded-md border-2 border-black"/></div>
        <div class="mt-10 flex flex-col gap-2">
        <div class="grid grid-cols-2">
            <label class="">Full Name:</label>
            <p class="text-blue-500 border-black" id="fnameout">${val.fname}</p>
        </div>
        <div class="grid grid-cols-2 ">
            <label >Address:</label>
            <p class="text-blue-500 border-black" id="lnameout">${val.lname}</p>
        </div>
        <div class="grid grid-cols-2">
            <label >Email:</label>
            <p class="text-blue-500 border-black" id="emailout">${val.email}</p>
        </div>
        <div class="grid grid-cols-2">
            <label >Contact:</label>
            <p class="text-blue-500 border-black" id="contactout">${val.contact}</p>
        </div>
        <div class="grid grid-cols-2">
            <label >Discription:</label>
            <p class="text-blue-500 border-black" id="discout">${val.disc}</p>
        </div>
      </div>
    </div>


         </div>`
    })

  }

  showData()