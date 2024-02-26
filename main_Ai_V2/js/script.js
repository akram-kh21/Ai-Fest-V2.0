let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};



//psiah

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('main');
    const name = document.getElementById('name');
    const family = document.getElementById('family');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if(checkInput()){
        showModal();
      }
    });
  
    name.addEventListener('input', () =>{
      validateField(name, name.value.trim() !== '', 'Invalid Name');
    });
    family.addEventListener('input', () =>{
      validateField(family, family.value.trim() !== '',  'Invalid family_Name');
    });
    email.addEventListener('input', () =>{
      validateField(email, isEmail(email.value.trim()),  'Not a valid email');
    });
    phone.addEventListener('input', () =>{
      validateField(phone, isPhone(phone.value.trim()),  'Not a valid phone_number');
    });
  
    function checkInput(){
      let isValid = true;
      validateField(name, name.value.trim() !== '', 'Invalid Name');
      validateField(family, family.value.trim() !== '',  'Invalid family_Name');
      validateField(email, isEmail(email.value.trim()),  'Not a valid email');
      validateField(phone, isPhone(phone.value.trim()),  'Not a valid phone_number');
      
      document.querySelectorAll('.form_func').forEach((el) => {
        if(el.classList.contains('error')){
          isValid = false;
        }
      });
      return isValid;
    }
    function validateField(input, condition, errorMessage){
      if(condition){
        setSuccess(input);
      }else{
        setError(input, errorMessage);
      }
    }
    function setError(input, message){
      const form_func = input.parentElement;
      const icon = form_func.querySelector(' .icon');
      form_func.className = 'form_func error';
      icon.className = 'icon fas fa-times-circle';
      input.placeholder = message;
    }
    function setSuccess(input){
      const form_func = input.parentElement;
      const icon = form_func.querySelector(' .icon');
      form_func.className = 'form_func success';
      icon.className = 'icon fas fa-check-circle';
    }
    function isEmail(email){
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
    function isPhone(phone){
      return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone);
    }
  
    function showModal(){
      const modal = document.getElementById('success'); // Corrected ID attribute
      modal.style.display = 'block';
  
      const closebtn = modal.querySelector('.closebtn');
      closebtn.onclick = function(){
        modal.style.display = 'none';
      };
      window.onclick = function(event){
        if(event.target == modal){
          modal.style.display = 'none';
        }
      };
    }
  });
    