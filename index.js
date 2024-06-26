let fname="";
let lname="";
let email="";
let contact="";
let disc="";

let ffname=document.getElementById('fnameout');
let llname=document.getElementById('lnameout');
let eename=document.getElementById('emailout');
let ccontact=document.getElementById('contactout');
let ddsc=document.getElementById('discout');
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
  function submit(a){
    console.log(fname);
    console.log(lname);
    console.log(email);
    console.log(contact);
    console.log(disc);
    ffname.textContent = fname;
    llname.textContent = lname;
    eename.textContent = email;
    ccontact.textContent = contact;
    ddsc.textContent = disc;

  }

