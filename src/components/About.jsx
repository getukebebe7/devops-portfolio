import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-wide">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Software Engineer & DevOps Specialist passionate about building <span className="text-blue-400 font-semibold">secure, scalable, and high-performance systems</span>. Experienced in Java, Spring Boot, Apache Camel, and CI/CD pipelines, delivering reliable fintech solutions.
          </p>
        </motion.div>

        {/* Professional Summary */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-gray-900 rounded-xl p-8 border-l-4 border-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-xl relative overflow-hidden">
            {/* Optional subtle animated glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-10 animate-pulse pointer-events-none"></div>
            
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4 relative z-10">
              Professional Summary
            </h3>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg relative z-10">
              Dedicated Software Engineer and Arba Minch University graduate specializing in software development, system integration, and enterprise solutions. Experienced in Java, J2EE, Spring Boot, Apache Camel, and WSO2 for banking and fintech applications. Proficient in database management (Oracle, MySQL, PostgreSQL, Redis), application deployment (WildFly, Docker, Kubernetes), and CI/CD automation using Jenkins, ArgoCD, and Ansible. Passionate about building <span className="text-green-400 font-semibold">secure, high-performance, and scalable systems</span> with smooth deployments and observability powered by ELK, Prometheus, and Grafana.
            </p>
          </div>
        </div>

        {/* Detailed Experience */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-8"
        >
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            I have led backend development for USSD banking and SMS marketing projects, integrating <span className="text-blue-400 font-semibold">instant payment systems</span>, RESTful and SOAP services, and microservices architectures. I ensure high-quality, secure, and reliable systems while collaborating with cross-functional teams.
          </p>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            My DevOps expertise includes <span className="text-green-400 font-semibold">containerization with Docker</span>, orchestration with Kubernetes, CI/CD pipelines with Jenkins and ArgoCD, infrastructure automation with Ansible, and monitoring with ELK and Prometheus/Grafana. I aim to deliver efficient, automated, and production-ready solutions.
          </p>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            With experience in <span className="text-purple-400 font-semibold">With experience in enterprise banking systems, mobile banking, remittance, instant payment, and e-commerce platforms</span>, I am committed to building scalable and maintainable software that meets business and technical requirements.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default About
