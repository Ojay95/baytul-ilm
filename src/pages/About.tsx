import Header from '../components/Header'
import Footer from '../components/Footer'
import { BookOpen, Users, Award, Globe, Heart, Star } from 'lucide-react'

const stats = [
  { icon: Users, label: "Active Students", value: "50,000+" },
  { icon: BookOpen, label: "Courses Available", value: "500+" },
  { icon: Award, label: "Expert Instructors", value: "200+" },
  { icon: Globe, label: "Countries Reached", value: "80+" }
]

const team = [
  {
    name: "Dr. Ahmad Al-Mahmoud",
    role: "Founder & Chief Islamic Scholar",
    image: "https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg",
    bio: "PhD in Islamic Studies from Al-Azhar University with 20+ years of teaching experience."
  },
  {
    name: "Dr. Fatima Al-Zahra",
    role: "Head of Arabic Language Department",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg",
    bio: "Expert in Arabic linguistics and Quranic Arabic with extensive research background."
  },
  {
    name: "Sheikh Omar Ibn Khattab",
    role: "Director of Quran Studies",
    image: "https://images.pexels.com/photos/8111358/pexels-photo-8111358.jpeg",
    bio: "Hafiz and Qari with Ijazah in multiple Quranic recitations and 15 years of teaching."
  }
]

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-islamic-600 to-islamic-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About Baytul-Ilm
              </h1>
              <p className="text-xl text-islamic-100 mb-8 max-w-3xl mx-auto">
                Building bridges to Islamic knowledge through innovative online education
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  At Baytul-Ilm, we believe that Islamic knowledge should be accessible to everyone, 
                  regardless of their location or circumstances. Our mission is to provide high-quality, 
                  authentic Islamic education through modern technology and traditional scholarship.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  We strive to preserve and transmit the rich heritage of Islamic learning while 
                  making it relevant and applicable to contemporary life. Our platform connects 
                  students worldwide with qualified scholars and teachers.
                </p>
                <div className="flex items-center gap-4">
                  <Heart className="w-8 h-8 text-islamic-500" />
                  <span className="text-lg font-medium text-gray-900">
                    Spreading knowledge with love and dedication
                  </span>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg"
                  alt="Islamic learning"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-islamic-500 text-white p-6 rounded-xl">
                  <Star className="w-8 h-8 mb-2" />
                  <p className="font-bold text-lg">Excellence in Education</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-islamic-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Impact
              </h2>
              <p className="text-xl text-gray-600">
                Transforming lives through Islamic education worldwide
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                  <stat.icon className="w-12 h-12 text-islamic-500 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Meet Our Leadership
              </h2>
              <p className="text-xl text-gray-600">
                Dedicated scholars committed to authentic Islamic education
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-islamic-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-islamic-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-islamic-200">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-islamic-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Authentic Knowledge</h3>
                <p className="text-islamic-200">
                  We ensure all our content is based on authentic Islamic sources and verified by qualified scholars.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-islamic-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Community Focus</h3>
                <p className="text-islamic-200">
                  Building a global community of learners united in their pursuit of Islamic knowledge.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-islamic-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p className="text-islamic-200">
                  Committed to providing the highest quality education and learning experience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}