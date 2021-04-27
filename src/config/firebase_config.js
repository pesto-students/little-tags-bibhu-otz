import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
        apiKey: "AIzaSyCm9NWbX2HEhDNCXaDfUuB9z16I3Hz-Bww",
        authDomain: "little-tags-e139f.firebaseapp.com",
        databaseURL: "https://little-tags-e139f-default-rtdb.firebaseio.com",
        projectId: "little-tags-e139f",
        storageBucket: "little-tags-e139f.appspot.com",
        messagingSenderId: "115799661387",
        appId: "1:115799661387:web:d892ddc48b46196e3ba6ce"
      };    

      class Firebase {
        constructor() {
          this.app = app.initializeApp(firebaseConfig);
          this.db = app.database();
          this.auth = app.auth();
          this.googleAuthProvider = new app.auth.GoogleAuthProvider();
          this.facebookAuthProvider = new app.auth.FacebookAuthProvider();
        }
      
        doGoogleSignIn = () => this.auth.signInWithPopup(this.googleAuthProvider);
        doFacebookSignIn = () => this.auth.signInWithPopup(this.facebookAuthProvider);
      
        doPhoneSignIn = (phone, recaptcha) => {
          return this.auth.signInWithPhoneNumber(phone, recaptcha);
        };
        user = (uid) => this.db.ref(`/users/${uid}`);
      }
      
      export default Firebase;