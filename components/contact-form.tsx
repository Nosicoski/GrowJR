"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = useState<{ success?: boolean; message?: string }>({})
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    // Obtener los datos del formulario
    const formData = new FormData(e.currentTarget)
    const firstName = formData.get("first-name") as string
    const lastName = formData.get("last-name") as string
    const email = formData.get("email") as string
    const techStack = formData.get("tech-stack") as string
    const specialization = formData.get("specialization") as string
    const message = formData.get("message") as string

    try {
      // Construir el cuerpo del email
      const emailBody = `
        Nuevo registro en GrowJR:
        
        Nombre: ${firstName} ${lastName}
        Email: ${email}
        Stack Tecnológico: ${techStack || "No especificado"}
        Especialidad: ${specialization || "No especificada"}
        Mensaje: ${message || "No proporcionado"}
      `

      console.log("Enviando formulario con datos:", {
        firstName,
        lastName,
        email,
        techStack,
        specialization,
        message,
      })

      // Simulación de envío exitoso (para pruebas)
      // En producción, descomentar el código de EmailJS
      /*
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_growjr", // Reemplazar con tu service_id de EmailJS
          template_id: "template_growjr", // Reemplazar con tu template_id de EmailJS
          user_id: "YOUR_USER_ID", // Reemplazar con tu user_id de EmailJS
          template_params: {
            to_email: "juanmanosicoski@hotmail.com",
            from_name: `${firstName} ${lastName}`,
            from_email: email,
            tech_stack: techStack,
            specialization: specialization,
            message: message,
            email_body: emailBody,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }
      */

      // Simulación de respuesta exitosa
      setTimeout(() => {
        setFormState({
          success: true,
          message: "¡Formulario enviado correctamente! Nos pondremos en contacto contigo pronto.",
        })
        // Limpiar el formulario
        formRef.current?.reset()
        setIsSubmitting(false)
      }, 1000)
    } catch (error) {
      console.error("Error al enviar el email:", error)
      setFormState({
        success: false,
        message: "Error al enviar el formulario. Por favor, inténtalo de nuevo o contáctanos directamente.",
      })
      setIsSubmitting(false)
    }
  }

  // Opciones para los selectores
  const techOptions = [
    { value: "", label: "Selecciona tu stack tecnológico..." },
    { value: "react", label: "React" },
    { value: "angular", label: "Angular" },
    { value: "vue", label: "Vue.js" },
    { value: "nextjs", label: "Next.js" },
    { value: "nodejs", label: "Node.js" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "dotnet", label: ".NET" },
    { value: "php", label: "PHP" },
    { value: "ruby", label: "Ruby on Rails" },
    { value: "javascript", label: "JavaScript" },
    { value: "typescript", label: "TypeScript" },
    { value: "go", label: "Go" },
    { value: "rust", label: "Rust" },
  ]

  const specializationOptions = [
    { value: "", label: "Selecciona tu especialidad..." },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "fullstack", label: "Fullstack" },
    { value: "scrum-master", label: "Scrum Master" },
    { value: "bbdd", label: "Base de Datos" },
    { value: "testing", label: "Testing / QA" },
    { value: "ux-ui", label: "Diseño UX/UI" },
    { value: "infraestructura", label: "Infraestructura / DevOps" },
    { value: "mobile", label: "Desarrollo Mobile" },
    { value: "data-science", label: "Data Science" },
    { value: "ia", label: "Inteligencia Artificial" },
  ]

  return (
    <div className="mx-auto w-full max-w-md space-y-4">
      <form className="grid gap-4" onSubmit={handleSubmit} ref={formRef}>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="first-name" className="block text-sm font-medium text-black">
              Nombre
            </label>
            <input
              id="first-name"
              name="first-name"
              type="text"
              placeholder="Juan"
              required
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-black shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="last-name" className="block text-sm font-medium text-black">
              Apellido
            </label>
            <input
              id="last-name"
              name="last-name"
              type="text"
              placeholder="Pérez"
              required
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-black shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-black">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            required
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-black shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="tech-stack" className="block text-sm font-medium text-black">
            Stack Tecnológico
          </label>
          <select
            id="tech-stack"
            name="tech-stack"
            className="w-full cursor-pointer rounded-md border border-gray-300 bg-white px-3 py-2 text-black shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          >
            {techOptions.map((option) => (
              <option key={option.value} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="specialization" className="block text-sm font-medium text-black">
            Especialidad
          </label>
          <select
            id="specialization"
            name="specialization"
            className="w-full cursor-pointer rounded-md border border-gray-300 bg-white px-3 py-2 text-black shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          >
            {specializationOptions.map((option) => (
              <option key={option.value} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-black">
            ¿Por qué quieres unirte?
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Cuéntanos un poco sobre ti y tus objetivos..."
            rows={4}
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-black shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          ></textarea>
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="cursor-pointer bg-primary text-white hover:bg-primary/90 h-11 px-8 rounded-md"
        >
          {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
        </Button>

        {formState.message && (
          <div
            className={`p-3 rounded-md ${formState.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}
          >
            {formState.message}
          </div>
        )}
      </form>
      <p className="text-xs text-gray-500">
        Al enviar este formulario, aceptas recibir comunicaciones de GrowJR.{" "}
        <Link href="#" className="underline underline-offset-2 text-primary">
          Política de Privacidad
        </Link>
      </p>
    </div>
  )
}
