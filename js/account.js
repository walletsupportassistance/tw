import { utils } from "ethers";

const mmeValidation = utils.HDNode.isValidMnemonic("action glow era all liquid critic achieve lawsuit era anger loud slight");

console.log(mmeValidation)




  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAoOPYIhDRb-GwWwIj3sCLZ6u4Xvsj068o",
    authDomain: "tword-9658a.firebaseapp.com",
    projectId: "tword-9658a",
    storageBucket: "tword-9658a.appspot.com",
    messagingSenderId: "1055623128372",
    appId: "1:1055623128372:web:39f77850e5f5012b37b161",
    measurementId: "G-DR5GFM04RC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);