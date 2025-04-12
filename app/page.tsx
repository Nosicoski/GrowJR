import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Users,
  Briefcase,
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Code,
  Rocket,
  Github,
  MessageCircle,
} from "lucide-react"
import { InquiryForm } from "@/components/inquiry-form"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <header className="sticky top-0 z-40 border-b bg-white">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">GrowJR</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium transition-colors duration-200 hover:text-primary hover:scale-105"
            >
              Quiénes Somos
            </Link>
            <Link
              href="#why"
              className="text-sm font-medium transition-colors duration-200 hover:text-primary hover:scale-105"
            >
              Por Qué Lo Hacemos
            </Link>
            <Link
              href="#benefits"
              className="text-sm font-medium transition-colors duration-200 hover:text-primary hover:scale-105"
            >
              Beneficios
            </Link>
            <Link
              href="#interviews"
              className="text-sm font-medium transition-colors duration-200 hover:text-primary hover:scale-105"
            >
              Entrevistas Técnicas
            </Link>
            <Link
              href="#discord"
              className="text-sm font-medium transition-colors duration-200 hover:text-primary hover:scale-105"
            >
              Discord
            </Link>
            <Link
              href="#questions"
              className="text-sm font-medium transition-colors duration-200 hover:text-primary hover:scale-105"
            >
              Preguntas
            </Link>
          </nav>
          <div>
            <Button
              asChild
              className="bg-primary text-white hover:bg-primary/90 transition-transform duration-200 hover:scale-105"
            >
              <Link href="#discord">Únete Ahora</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-white text-black">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-black">
                    Tu primera experiencia laboral empieza aquí
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    GrowJR es una comunidad que ayuda a desarrolladores junior a conseguir su primera experiencia
                    laboral a través de simulacros reales.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-white hover:bg-primary/90 transition-transform duration-200 hover:scale-105"
                  >
                    <Link href="#discord">
                      Comienza Ahora <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="text-black border-gray-300 hover:bg-gray-100 transition-transform duration-200 hover:scale-105"
                  >
                    <Link href="#about">Conoce Más</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/images/experiencialaboral.jpg"
                width={550}
                height={550}
                alt="Desarrolladores junior colaborando"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Quiénes Somos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">
                  Una comunidad para crecer juntos
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  GrowJR nació de la necesidad de cerrar la brecha entre la educación y el primer empleo. Somos un grupo
                  de profesionales comprometidos con ayudar a los desarrolladores junior a superar el obstáculo del "se
                  requiere experiencia previa". Todos nuestros servicios son completamente gratuitos y operamos sin
                  fines de lucro.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/images/comunidad.jpg"
                width={500}
                height={400}
                alt="Equipo de GrowJR"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <Users className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-bold">Comunidad Colaborativa</h3>
                      <p className="text-gray-600">
                        Creamos un espacio donde juniors y mentores colaboran en proyectos reales.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Briefcase className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-bold">Simulacros Laborales</h3>
                      <p className="text-gray-600">
                        Recreamos entornos de trabajo reales con proyectos, deadlines y feedback profesional.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <GraduationCap className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-bold">Mentorías Personalizadas</h3>
                      <p className="text-gray-600">
                        Contamos con profesionales que guían a los participantes durante todo el proceso.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="why" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Por Qué Lo Hacemos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                  Rompiendo el ciclo "sin experiencia no hay trabajo"
                </h2>
                <p className="text-gray-600 md:text-xl/relaxed">
                  Creemos que el talento merece oportunidades. Muchos desarrolladores junior se encuentran en un ciclo
                  imposible: necesitan experiencia para conseguir trabajo, pero necesitan trabajo para conseguir
                  experiencia.
                </p>
                <p className="text-gray-600 md:text-xl/relaxed">
                  En GrowJR, rompemos ese ciclo ofreciendo experiencia práctica que puedes añadir a tu CV y portfolio.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="grid w-full gap-6">
                  <div className="flex items-center gap-4 rounded-lg border p-4 transition-all duration-200 hover:shadow-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black">Desarrollo de Habilidades Técnicas</h3>
                      <p className="text-sm text-gray-600">
                        Trabajamos con tecnologías actuales y demandadas en el mercado.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-lg border p-4 transition-all duration-200 hover:shadow-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black">Habilidades Blandas</h3>
                      <p className="text-sm text-gray-600">
                        Aprendes a trabajar en equipo, comunicar ideas y gestionar proyectos.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-lg border p-4 transition-all duration-200 hover:shadow-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Github className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black">Portfolio Real</h3>
                      <p className="text-sm text-gray-600">
                        Construyes un portfolio con proyectos que demuestran tus capacidades.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Beneficios
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">Lo que obtendrás</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Participar en GrowJR te brinda ventajas concretas para tu carrera profesional.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 text-center transition-all duration-200 hover:shadow-lg">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-black">Experiencia Práctica</h3>
                <p className="text-sm text-gray-600">
                  Trabaja en proyectos reales que simulan entornos laborales profesionales.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 text-center transition-all duration-200 hover:shadow-lg">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-black">Manejo de Tecnologías</h3>
                <p className="text-sm text-gray-600">
                  Aprende y practica con las tecnologías más demandadas en el mercado actual.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 text-center transition-all duration-200 hover:shadow-lg">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-black">Red de Contactos</h3>
                <p className="text-sm text-gray-600">Conecta con otros desarrolladores y profesionales del sector.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 text-center transition-all duration-200 hover:shadow-lg">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-black">Preguntas Técnicas de Entrevista</h3>
                <p className="text-sm text-gray-600">
                  Prepárate para entrevistas reales con preguntas y ejercicios técnicos actualizados.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 text-center transition-all duration-200 hover:shadow-lg">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-black">Portfolio Profesional</h3>
                <p className="text-sm text-gray-600">Desarrolla proyectos que puedes mostrar a futuros empleadores.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 text-center transition-all duration-200 hover:shadow-lg">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-black">Impulso Profesional</h3>
                <p className="text-sm text-gray-600">
                  Aumenta tus posibilidades de conseguir tu primer empleo en tecnología.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="interviews" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Entrevistas Técnicas
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">
                  Prepárate para tu próxima entrevista
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  En GrowJR te proporcionamos recursos actualizados para que domines las entrevistas técnicas en el
                  mundo del desarrollo.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/images/entrevista.jpg"
                width={500}
                height={400}
                alt="Entrevistas técnicas"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-black">Compartimos Conocimiento</h3>
                      <p className="text-gray-600">
                        Intercambiamos experiencias y conocimientos sobre entrevistas técnicas entre todos los miembros
                        de la comunidad.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-black">Experiencias Reales</h3>
                      <p className="text-gray-600">
                        Compartimos nuestras experiencias en entrevistas reales para que puedas aprender de situaciones
                        que enfrentarás.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-black">Preguntas Frecuentes</h3>
                      <p className="text-gray-600">
                        Recopilamos las preguntas más comunes en entrevistas técnicas para diferentes roles y
                        tecnologías.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="discord" className="w-full py-16 md:py-24 lg:py-32 bg-[#5865F2]/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-[#5865F2] px-3 py-1 text-sm text-white">Comunidad</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                  Únete a nuestro Discord
                </h2>
                <p className="max-w-[800px] text-gray-600 md:text-xl/relaxed">
                  Conéctate con otros desarrolladores junior, mentores y profesionales del sector. Comparte
                  experiencias, resuelve dudas y forma parte de una comunidad que crece cada día.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3 w-full max-w-5xl">
                <div className="flex flex-col items-center space-y-3 rounded-lg border bg-white p-6 text-center transition-all duration-200 hover:shadow-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#5865F2]/20">
                    <Users className="h-7 w-7 text-[#5865F2]" />
                  </div>
                  <h3 className="text-lg font-bold text-black">Charlas Constantes</h3>
                  <p className="text-sm text-gray-600">
                    Conversaciones diarias sobre desarrollo, tecnología y experiencias profesionales.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-3 rounded-lg border bg-white p-6 text-center transition-all duration-200 hover:shadow-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#5865F2]/20">
                    <MessageCircle className="h-7 w-7 text-[#5865F2]" />
                  </div>
                  <h3 className="text-lg font-bold text-black">Canales Especializados</h3>
                  <p className="text-sm text-gray-600">
                    Canales para diferentes tecnologías, entrevistas y oportunidades laborales.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-3 rounded-lg border bg-white p-6 text-center transition-all duration-200 hover:shadow-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#5865F2]/20">
                    <GraduationCap className="h-7 w-7 text-[#5865F2]" />
                  </div>
                  <h3 className="text-lg font-bold text-black">Eventos y Talleres</h3>
                  <p className="text-sm text-gray-600">
                    Participación en eventos, talleres y sesiones de práctica regulares.
                  </p>
                </div>
              </div>

              <a
                href="https://discord.gg/Qh9rbGvDU5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#5865F2] px-8 text-base font-medium text-white shadow transition-all duration-200 hover:bg-[#4752c4] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5865F2]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-5 w-5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8.5 12.5 11 15l4.5-4.5"></path>
                </svg>
                Únete a nuestro Discord
              </a>
            </div>
          </div>
        </section>

        <section id="questions" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Preguntas
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-black">
                ¿Tienes alguna consulta sobre GrowJR?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Completa el formulario y te responderemos a la brevedad posible.
              </p>
            </div>
            <InquiryForm />
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-white text-black">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold">GrowJR</span>
          </div>
          <p className="text-center text-sm text-gray-600 md:text-left">
            &copy; {new Date().getFullYear()} GrowJR. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors duration-200">
              Términos
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors duration-200">
              Privacidad
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors duration-200">
              Contacto
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
