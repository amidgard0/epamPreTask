
const textArea = document.querySelector('.textarea__comm'),
      phoneInput = document.querySelector('.phone_input'),
      checkInput = document.querySelector('.check_input');

      let res,
          phone;
      
      textArea.addEventListener('input', () => {
        res = textArea.value;
        return res;
      });

      phoneInput.addEventListener('input', () => {
        phone = phoneInput.value;
        return phone;
      });

      checkInput.addEventListener('click', (event) => {
          event.preventDefault();
          if( /^\+375\d{9}$/.test(phone) ){
            alert('Номер введен верно')
          }
          else alert('Номер не верный')
          if(!res) {
            textArea.value = 'amidgard@list.ru'
            return textArea.value;
          }
         
      })




//Скролл, сразу скажу - писал не я. Позаимствовал с инета

const anchors = document.querySelectorAll('a[href*="#"]');

      for (let anchor of anchors) {
        anchor.addEventListener('click', (e) => {
          e.preventDefault();
          const blockID = anchor.getAttribute('href');
          document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: "start"
          });
        });
      }
     