let historique = document.querySelector('#historique')
let password= document.getElementById("generator");
// let monTableau = []
    function genPassword() {
   let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let passwordLength = 12;
   let password = "";
   for (let i = 0; i <= passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber +1);
    }
        document.getElementById("password").value = password;
  
        savePwd(password)
        API.notifNotification();
    }
  function copyPassword() {
  let copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 999);
  navigator.clipboard.writeText(copyText.value)
  alert("Copied the text: " + copyText.value);
  }
// console.log(password.value);
historique.addEventListener('click', () => {
API.secondWindow()
})

function savePwd(password) {
  API.setPassword(password)
}