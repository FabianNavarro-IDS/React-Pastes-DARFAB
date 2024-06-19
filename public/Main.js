import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js"
import { auth } from '../src/JS/Firebase/FireBase.js'
import { loginCheck } from '../src/JS/Firebase/LoginCheck.js'

import '../src/JS/Firebase/Register.js'
import '../src/JS/Firebase/login.js'
import '../src/JS/Firebase/Logout.js'


onAuthStateChanged(auth, async (user) => {
    loginCheck(user)
})