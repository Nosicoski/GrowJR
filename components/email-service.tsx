"use client"

// Este componente se puede usar para cargar el script de EmailJS en la aplicación
// Colócalo en un layout o en un componente que se cargue temprano

import { useEffect } from "react"

export function EmailJSLoader() {
  useEffect(() => {
    // Cargar el script de EmailJS
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
    script.async = true
    script.onload = () => {
      // Inicializar EmailJS con tu clave pública
      // @ts-ignore
      window.emailjs?.init("YOUR_PUBLIC_KEY")
    }
    document.body.appendChild(script)

    return () => {
      // Limpiar el script cuando el componente se desmonte
      document.body.removeChild(script)
    }
  }, [])

  return null
}
