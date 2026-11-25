import { useState } from "react";
import Swal from "sweetalert2";

export const useLogin = () => { 
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    async function handleLogin(event: any): Promise<void> {
        event.preventDefault()
        
        try {
            const response = await fetch('http://localhost/5000/api/authentication/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application.json' },
                body: JSON.stringify({ email, password })
            })

            const data = await response.json()

            if (response.ok) {
                Swal.fire({
                    title: "Berhasil Login",
                    icon: "success",
                    timer: 2000,
                    showCancelButton: true,
                    cancelButtonText: "Tutup",
                }).then((value) => {
                    if (value.isDismissed) {
                        window.location.href = '/dashboard'
                    }
                })
            }

            console.log(data)
        } catch (error: any) {
            Swal.fire({
                title: 'Terjadi Kesalahan',
                text: error.message,
                icon: 'error',
                timer: 2000,
                showCancelButton: true,
                cancelButtonText: "Tutup",
            }).then((value) => {
                if (value.isDismissed) {
                    window.location.href = '/dashboard'
                }
            })
        }
    }

    return {
        handleLogin,
        setEmail,
        setPassword
    }
}

export const useSignin = () => {
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    async function handleSignin(event: any): Promise<void>{
        event.preventDefault();
        
        try {
            const response = await fetch('http://localhost:5000/api/authentication/signin', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ username, email, password })
            })

            const data = await response.json()

            if (response.ok) {
                Swal.fire({
                    title: "Berhasil Login",
                    icon: "success",
                    timer: 2000,
                    showCancelButton: true,
                    cancelButtonText: "Tutup",
                }).then((value) => {
                    if (value.isDismissed) {
                        window.location.href = '/dashboard'
                    }
                })
            }

            console.log(data)            
        } catch(error: any) {
            Swal.fire({
                title: 'Terjadi Kesalahan',
                text: error.message,
                icon: 'error',
                timer: 2000,
                showCancelButton: true,
                cancelButtonText: "Tutup",
            }).then((value) => {
                if (value.isDismissed) {
                    window.location.href = '/dashboard'
                }
            })
        }
    }

    return {
        handleSignin,
        setUsername,
        setEmail,
        setPassword
    }
}