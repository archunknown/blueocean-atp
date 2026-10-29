'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const instagramPosts = [
  { id: 1, imageUrl: '/instagram/post-1.png', likes: 123, comments: 12 },
  { id: 2, imageUrl: '/instagram/post-2.png', likes: 245, comments: 34 },
  { id: 3, imageUrl: '/instagram/post-3.png', likes: 89, comments: 8 },
  { id: 4, imageUrl: '/instagram/post-4.png', likes: 301, comments: 56 },
  { id: 5, imageUrl: '/instagram/post-5.png', likes: 199, comments: 21 },
  { id: 6, imageUrl: '/instagram/post-6.png', likes: 450, comments: 78 },
];

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const, // <-- AÑADIR 'as const'
    },
  },
};

export default function InstagramFeed() {
  return (
    <section className="instagram-section legacy-editorial">
      <div className="container mx-auto px-4">
        <p className="eyebrow">DESDE NUESTRO INSTAGRAM</p>
        <h2 className="display-heading">
          El viaje sigue aquí.
        </h2>
        <p className="instagram-intro">
          @blue_ocean_paracas - Tus aventuras, nuestra pasión.
        </p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {instagramPosts.map((post) => (
            <motion.div
              key={post.id}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-md"
              variants={itemVariants}
            >
              <Image
                src={post.imageUrl}
                alt={`Instagram post ${post.id}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-3 right-3 bg-white px-3 py-2 text-xs text-oceanBlue" aria-hidden="true">↗</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            href="https://www.instagram.com/blue_ocean_paracas/" // <-- MODIFICADO
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-oceanBlue px-8 py-3 font-bold text-black shadow-lg transition-all duration-300 hover:bg-turquoise hover:scale-105"
          >
            Ver más en Instagram
          </Link>
        </div>
      </div>
    </section>
  );
}