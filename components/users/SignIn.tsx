import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase";

const SignIn = () => {
    // const auth = getAuth();

    console.log(auth)

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;

        console.log(`User Id ${uid}`)
        // ...
    } else {
          console.log(`User not signed in`)
        // User is signed out
        // ...
      }
    });



  return (
    <div>SignIn</div>
  )
}

export default SignIn