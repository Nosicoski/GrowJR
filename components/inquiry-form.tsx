"use client"

import React, { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = useState<{ success?: boolean; message?: string }>({})
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_u3i41h3",      // tu service_id
          template_id: "template_3k8q7j6",    // tu template_id
          user_id: "5ATI1AvvrOFaMK4qu",       // tu user_id (Account key)
          template_params: {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
          },
        }),
      })

      if (!response.ok) {
        throw new Error(`EmailJS error: ${response.statusText}`)
      }

      setFormState({
        success: true,
        message: "¡Consulta enviada correctamente! Te responderemos a la brevedad.",
      })
      formRef.current?.reset()
    } catch (error) {
      console.error("Error al enviar la consulta:", error)
      setFormState({
        success: false,
        message: "Error al enviar la consulta. Por favor, inténtalo de nuevo o contáctanos directamente.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-4">
      <form className="grid gap-4" onSubmit={handleSubmit} ref={formRef}>
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-black">
            Nombre completo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Juan Pérez"
            required
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-black shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
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
          <label htmlFor="subject" className="block text-sm font-medium text-black">
            Asunto
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Consulta sobre GrowJR"
            required
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-black shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-black">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Escribe tu consulta aquí..."
            rows={4}
            required
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-black shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="cursor-pointer bg-primary text-white hover:bg-primary/90 h-11 px-8 rounded-md transition-transform duration-200 hover:scale-105"
        >
          {isSubmitting ? "Enviando..." : "Enviar Consulta"}
        </Button>

        {formState.message && (
          <div
            className={`p-3 rounded-md ${
              formState.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
            }`}
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
