/* global bootstrap */

import 'bootstrap/dist/css/bootstrap.min.css'; // Importar el CSS de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js"
import { auth } from './FireBase.js'
import { mensaje } from './Mensaje.js'

document.addEventListener('DOMContentLoaded', function () {
    const registerform = document.querySelector('#register-form');

    registerform.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = registerform['registerEmail'].value;
        const password = registerform['registerPassword'].value;

        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredentials);

            const registerModal = document.querySelector('#RegisterModal');
            const modal = new bootstrap.Modal(registerModal); // Instancia el modal de Bootstrap correctamente
            modal.hide();

            mensaje("Bienvenido " + userCredentials.user.email);

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                mensaje("Correo ya existe", "error");
            } else if (error.code === 'auth/invalid-email') {
                mensaje("Correo inválido", "error");
            } else if (error.code === 'auth/weak-password') {
                mensaje("Contraseña débil", "error");
            } else {
                mensaje("Algo va mal", "error");
            }
        }
    });
});