import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Phone, Mail, Shield, Clock, Users, Star, CheckCircle, Truck } from "lucide-react"

export default function PickupRentalLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg animate-pulse hover:animate-none transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="ml-2 hidden sm:inline">WhatsApp</span>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-transparent z-10"
          style={{
            backgroundImage: `url('/banner-modelos-L200.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="space-y-8 bg-black/50 p-8 rounded-lg">
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight">
              Poder. Confiabilidad.
              <span className="block text-amber-400">Donde lo Necesites.</span>
            </h1>

            <p className="font-sans text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Pickups premium 2024-2025 para individuos, empresas, instituciones y ONGs – listas cuando las necesites.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 text-lg">
                <MessageCircle className="mr-2 h-5 w-5" />
                Reservar por WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg bg-transparent"
              >
                Ver Catálogo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-sm">Totalmente Asegurado</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-green-400" />
                <span className="text-sm">Soporte 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-sm">Términos Flexibles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              ¿Por Qué Elegir Nuestros Pickups?
            </h2>
            <p className="font-sans text-xl text-slate-600 max-w-3xl mx-auto">
              Flota moderna, mantenimiento impecable y atención personalizada para cada cliente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Truck className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-serif text-xl font-bold">Flota Moderna</h3>
                <p className="text-slate-600">Pickups 2024-2025 con la última tecnología y máximo rendimiento.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-serif text-xl font-bold">Mantenimiento Impecable</h3>
                <p className="text-slate-600">Revisiones constantes y mantenimiento preventivo garantizado.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="font-serif text-xl font-bold">Disponibilidad Inmediata</h3>
                <p className="text-slate-600">Reserva hoy y recoge mañana. Proceso rápido y sin complicaciones.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-serif text-xl font-bold">Atención Personalizada</h3>
                <p className="text-slate-600">Asesoría especializada para encontrar el pickup perfecto para ti.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-6">Nuestra Flota Premium</h2>
            <p className="font-sans text-xl text-slate-600">Pickups 2024-2025 listas para cualquier desafío</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ford F-150 2024",
                capacity: "1,200 kg",
                fuel: "Gasolina",
                image: "modern Ford F-150 pickup truck 2024 silver metallic professional photo",
              },
              {
                name: "Chevrolet Silverado 2025",
                capacity: "1,400 kg",
                fuel: "Híbrido",
                image: "Chevrolet Silverado 2025 pickup truck black professional studio lighting",
              },
              {
                name: "RAM 1500 2024",
                capacity: "1,300 kg",
                fuel: "Gasolina",
                image: "RAM 1500 2024 pickup truck white professional outdoor photography",
              },
              {
                name: "Toyota Hilux 2025",
                capacity: "1,000 kg",
                fuel: "Diesel",
                image: "Toyota Hilux 2025 pickup truck red professional lighting construction site",
              },
              {
                name: "Nissan Frontier 2024",
                capacity: "1,100 kg",
                fuel: "Gasolina",
                image: "Nissan Frontier 2024 pickup truck blue professional photography",
              },
              {
                name: "GMC Sierra 2025",
                capacity: "1,500 kg",
                fuel: "Híbrido",
                image: "GMC Sierra 2025 pickup truck gray professional studio photography",
              },
            ].map((truck, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src="/abstract-geometric-shapes.png"
                    alt={truck.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-amber-500 text-black">Disponible</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-3">{truck.name}</h3>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex justify-between">
                      <span>Capacidad:</span>
                      <span className="font-semibold">{truck.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Combustible:</span>
                      <span className="font-semibold">{truck.fuel}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Reservar por WhatsApp
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Soluciones Para Cada Necesidad
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <img
                  src="/placeholder-gp9jn.png"
                  alt="Consumidores"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-serif text-xl font-bold">Consumidores</h3>
                <p className="text-slate-600">Viajes de fin de semana, mudanzas — tenemos la potencia que necesitas.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <img
                  src="/government-pickup-truck.png"
                  alt="Instituciones"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-serif text-xl font-bold">Instituciones</h3>
                <p className="text-slate-600">Soporte de flota para servicio público y operaciones gubernamentales.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <img
                  src="/business-pickup-truck-logistics.png"
                  alt="Empresas"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-serif text-xl font-bold">Empresas</h3>
                <p className="text-slate-600">Socios logísticos confiables para el crecimiento de tu negocio.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <img src="/placeholder-ber3z.png" alt="ONGs" className="w-full h-32 object-cover rounded-lg mb-4" />
                <h3 className="font-serif text-xl font-bold">ONGs</h3>
                <p className="text-slate-600">Confiabilidad robusta para misiones de campo y trabajo humanitario.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-6">Reserva Tu Pickup Ahora</h2>
            <p className="font-sans text-xl text-slate-600">Completa el formulario y te contactaremos por WhatsApp</p>
          </div>

          <Card className="p-8">
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre Completo</Label>
                  <Input id="name" placeholder="Tu nombre completo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp</Label>
                  <Input id="whatsapp" placeholder="+52 55 1234 5678" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="vehicle">Selecciona tu Pickup</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Elige el modelo que prefieres" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ford-f150">Ford F-150 2024</SelectItem>
                    <SelectItem value="chevrolet-silverado">Chevrolet Silverado 2025</SelectItem>
                    <SelectItem value="ram-1500">RAM 1500 2024</SelectItem>
                    <SelectItem value="toyota-hilux">Toyota Hilux 2025</SelectItem>
                    <SelectItem value="nissan-frontier">Nissan Frontier 2024</SelectItem>
                    <SelectItem value="gmc-sierra">GMC Sierra 2025</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="start-date">Fecha de Inicio</Label>
                  <Input id="start-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-date">Fecha de Fin</Label>
                  <Input id="end-date" type="date" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje Adicional (Opcional)</Label>
                <Textarea id="message" placeholder="Cuéntanos más sobre tu proyecto o necesidades específicas..." />
              </div>

              <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white">
                <MessageCircle className="mr-2 h-5 w-5" />
                Enviar Reserva por WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Lo Que Dicen Nuestros Clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                role: "Directora de Logística",
                company: "Constructora del Valle",
                review:
                  "Excelente servicio. Los pickups siempre están en perfectas condiciones y el proceso de reserva por WhatsApp es súper rápido.",
                rating: 5,
                image: "professional woman construction industry headshot",
              },
              {
                name: "Carlos Mendoza",
                role: "Coordinador de Campo",
                company: "ONG Ayuda Humanitaria",
                review:
                  "Confiables al 100%. Hemos usado sus pickups en múltiples misiones y nunca nos han fallado. Altamente recomendados.",
                rating: 5,
                image: "professional man humanitarian worker headshot",
              },
              {
                name: "Ana Rodríguez",
                role: "Propietaria",
                company: "Familia Rodríguez",
                review:
                  "Perfectos para nuestra mudanza. El pickup Ford F-150 tenía toda la potencia que necesitábamos. Proceso muy fácil.",
                rating: 5,
                image: "happy family woman customer headshot",
              },
            ].map((review, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 italic">"{review.review}"</p>
                  <div className="flex items-center gap-3">
                    <img
                      src="/abstract-geometric-shapes.png"
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-slate-500">{review.role}</p>
                      <p className="text-sm text-slate-500">{review.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-6">¿Listo Para Reservar?</h2>
          <p className="font-sans text-xl text-slate-600 mb-12">
            Contáctanos por WhatsApp para una respuesta inmediata o usa nuestras alternativas de contacto
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-serif text-xl font-bold">WhatsApp</h3>
                <p className="text-slate-600">+52 55 1234 5678</p>
                <Button className="bg-green-500 hover:bg-green-600 text-white">Chatear Ahora</Button>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-serif text-xl font-bold">Teléfono</h3>
                <p className="text-slate-600">+52 55 9876 5432</p>
                <Button variant="outline">Llamar</Button>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-serif text-xl font-bold">Email</h3>
                <p className="text-slate-600">info@rentapickup.com</p>
                <Button variant="outline">Enviar Email</Button>
              </CardContent>
            </Card>
          </div>

          <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-12 py-4 text-xl">
            <MessageCircle className="mr-2 h-6 w-6" />
            Reservar Ahora por WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold">Servicios Shaddai</h3>
              <p className="text-slate-300">Tu socio confiable para renta de pickups premium 2024-2025.</p>
            </div>

            <div className="space-y-4">
              <h4 className="font-serif text-lg font-semibold">Contacto</h4>
              <div className="space-y-2 text-slate-300">
                <p className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  +52 55 1234 5678
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +52 55 9876 5432
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  info@rentapickup.com
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-serif text-lg font-semibold">Servicios</h4>
              <div className="space-y-2 text-slate-300">
                <p>Renta por días</p>
                <p>Renta por semanas</p>
                <p>Renta corporativa</p>
                <p>Renta para ONGs</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-serif text-lg font-semibold">Legal</h4>
              <div className="space-y-2 text-slate-300">
                <p>Términos y Condiciones</p>
                <p>Política de Privacidad</p>
                <p>Política de Seguros</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Servicios Shaddai. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
