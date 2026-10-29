import { Star } from 'lucide-react';
interface Testimonial {
  id: number;
  name: string;
  location: string;
  content: string;
  rating: number;
}
export default function TestimonialsClient({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  if (!testimonials.length)
    return (
      <p className="empty-editorial">
        Tu historia puede ser la primera. Cuéntanos cómo viviste tu salida.
      </p>
    );
  return (
    <div className="testimonial-grid">
      {testimonials.map((item, index) => (
        <figure className="traveler-quote" key={`${item.id}-${index}`}>
          <div
            className="quote-stars"
            aria-label={`${item.rating} de 5 estrellas`}
          >
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                size={13}
                fill={i < item.rating ? 'currentColor' : 'none'}
              />
            ))}
          </div>
          <blockquote>“{item.content}”</blockquote>
          <figcaption>
            <span aria-hidden="true">{item.name.charAt(0)}</span>
            <div>
              {item.name}
              <small>{item.location}</small>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
