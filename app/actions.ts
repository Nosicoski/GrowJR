"use server"

// Este archivo ya no se utiliza, pero se mantiene como referencia
// La funcionalidad de envío de email ahora se maneja en el componente ContactForm
// usando EmailJS como servicio de envío de correos del lado del cliente

export async function sendEmail(formData: FormData) {
  try {
    // Extraer datos del formulario
    const firstName = formData.get("first-name")
    const lastName = formData.get("last-name")
    const email = formData.get("email")
    const techStack = formData.get("tech-stack")
    const message = formData.get("message")

    // Construir el cuerpo del email
    const emailBody = `
      Nuevo registro en GrowJR:
      
      Nombre: ${firstName} ${lastName}
      Email: ${email}
      Stack Tecnológico: ${techStack || "No especificado"}
      Mensaje: ${message || "No proporcionado"}
    `

    console.log("Enviando email a: juanmanosicoski@hotmail.com, lolofaresestudio@gmail.com")
    console.log("Contenido del email:")
    console.log(emailBody)

    return { success: true, message: "Formulario enviado correctamente" }
  } catch (error) {
    console.error("Error al enviar el email:", error)
    return { success: false, message: "Error al enviar el formulario. Por favor, inténtalo de nuevo." }
  }
}
