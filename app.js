 function shop() {
        let name = prompt('What is your name?');
        let email = prompt('What is your email address?');

        if (name === '' || email === '') {
          alert('Please provide both name and email address');
        } else {
          alert(`Thank you ${name}. We will contact you at ${email}.`);
        }
      }

      let shopButton = document.querySelector('.shop-button');
      shopButton.addEventListener('click', shop);