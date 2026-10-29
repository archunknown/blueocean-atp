'use client';
import TestimonialsClient from './TestimonialsClient';
import TestimonialForm from './TestimonialForm';
interface Testimonial {
  id: number;
  name: string;
  location: string;
  content: string;
  rating: number;
}
export default function TestimonialsContent({ testimonials }: { testimonials: Testimonial[] }) {
  return <div className="testimonial-content"><TestimonialsClient testimonials={testimonials} /><TestimonialForm /></div>;
}
