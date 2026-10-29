import { createClient } from '@/utils/supabase/server'
import TestimonialsContent from './TestimonialsContent'

export default async function Testimonials({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? 'h1' : 'h2';
  const supabase = await createClient()

  const { data: testimonials } = await supabase
    .from('testimonials')
    .select('*')
    .eq('is_approved', true)
    .order('created_at', { ascending: false })

  return (
    <section className="testimonials-section legacy-editorial">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-heading"><div><p className="eyebrow">VOCES DE VIAJEROS</p><Heading>Lo mejor de viajar,<br /><em>es poder contarlo.</em></Heading></div><p className="section-intro">Historias y opiniones de quienes compartieron una salida con Blue Ocean.</p></div>

        <TestimonialsContent testimonials={testimonials || []} />
      </div>
    </section>
  )
}