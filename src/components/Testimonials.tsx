import React from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Amina Hassan",
    role: "Student from Canada",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg",
    rating: 5,
    text: "Baytul-Ilm has transformed my understanding of Islam. The quality of instruction and the depth of knowledge shared by the scholars is exceptional. I've completed 3 courses and each one has been a spiritual journey.",
    course: "Quran Recitation & Tafseer"
  },
  {
    id: 2,
    name: "Omar Abdullah",
    role: "Student from UK",
    image: "https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg",
    rating: 5,
    text: "The Arabic language course helped me connect with the Quran in ways I never imagined. The structured approach and patient instructors made learning enjoyable and effective. Highly recommended!",
    course: "Arabic Grammar Mastery"
  },
  {
    id: 3,
    name: "Fatima Al-Zahra",
    role: "Student from Australia",
    image: "https://images.pexels.com/photos/8111358/pexels-photo-8111358.jpeg",
    rating: 5,
    text: "As a working mother, the flexibility of online learning was perfect for me. The Islamic History course was incredibly detailed and well-presented. I feel more connected to my faith than ever before.",
    course: "Islamic History & Civilization"
  },
  {
    id: 4,
    name: "Ahmed Ibrahim",
    role: "Student from USA",
    image: "https://images.pexels.com/photos/8111359/pexels-photo-8111359.jpeg",
    rating: 5,
    text: "The Hadith Sciences course opened my eyes to the beautiful methodology of Islamic scholarship. The instructors are not just knowledgeable but truly passionate about teaching. A life-changing experience.",
    course: "Hadith Sciences & Authentication"
  },
  {
    id: 5,
    name: "Khadija Mohammed",
    role: "Student from Germany",
    image: "https://images.pexels.com/photos/8111360/pexels-photo-8111360.jpeg",
    rating: 5,
    text: "The Fiqh course provided practical guidance for daily life while maintaining scholarly rigor. The interactive sessions and Q&A opportunities made complex topics accessible and relevant.",
    course: "Islamic Jurisprudence (Fiqh)"
  },
  {
    id: 6,
    name: "Yusuf Ali",
    role: "Student from Malaysia",
    image: "https://images.pexels.com/photos/8111361/pexels-photo-8111361.jpeg",
    rating: 5,
    text: "Baytul-Ilm combines traditional Islamic scholarship with modern teaching methods perfectly. The platform is user-friendly, and the community aspect makes learning even more enriching.",
    course: "Quranic Tafseer Fundamentals"
  }
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our global community of learners about their transformative journey with Islamic education
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-islamic-200" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Course */}
              <div className="mb-6">
                <span className="bg-islamic-100 text-islamic-700 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.course}
                </span>
              </div>

              {/* Student Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-islamic-600 to-islamic-700 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Join Our Success Stories</h3>
            <p className="text-islamic-100 mb-6 max-w-2xl mx-auto">
              Start your Islamic learning journey today and become part of our thriving global community
            </p>
            <button className="bg-gold-500 text-islamic-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gold-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Learning Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials