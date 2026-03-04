/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scale, 
  Briefcase, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  ChevronRight, 
  Menu, 
  X,
  Instagram,
  Facebook,
  Linkedin,
  ArrowRight
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Áreas de Atuação', href: '#practice' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-navy/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-2xl font-serif font-bold tracking-widest gold-gradient-text uppercase">Santos & Bastos</span>
          <span className="text-[10px] tracking-[0.3em] uppercase opacity-70 -mt-1">Advogados Associados</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-widest hover:text-brand-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/message/QVJ2TD35CE5DB1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-gold hover:bg-brand-gold-light text-brand-navy px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg"
          >
            Falar com Advogado
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-brand-gold" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-navy border-t border-white/10 p-6 flex flex-col space-y-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-serif tracking-widest hover:text-brand-gold"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/message/QVJ2TD35CE5DB1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-gold text-brand-navy px-6 py-3 rounded-full text-center font-bold uppercase tracking-widest"
            >
              WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000" 
          alt="Escritório de Advocacia" 
          className="w-full h-full object-cover opacity-20"
          width={2000}
          height={1200}
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand-navy/80 via-brand-navy to-brand-navy"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block py-1 px-3 rounded-full border border-brand-gold/30 text-brand-gold text-[10px] uppercase tracking-[0.3em] mb-6">
            Excelência Jurídica em cada detalhe
          </span>
          <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
            Defendendo seus <span className="italic gold-gradient-text">Direitos</span> com Rigor e Estratégia.
          </h1>
          <p className="text-lg text-brand-offwhite/70 mb-10 max-w-lg leading-relaxed">
            O escritório Santos & Bastos Advogados oferece soluções jurídicas personalizadas, focadas em resultados sólidos e na proteção integral dos interesses de nossos clientes.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="bg-brand-gold hover:bg-brand-gold-light text-brand-navy px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all duration-300 flex items-center group"
            >
              Agendar Consulta
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a 
              href="#practice" 
              className="border border-white/20 hover:border-brand-gold px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all duration-300"
            >
              Nossas Áreas
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1000" 
                alt="Justiça" 
                className="w-full h-auto"
                width={1000}
                height={667}
                loading="lazy"
                referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-brand-gold/50 rounded-tr-3xl z-0"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-brand-gold/50 rounded-bl-3xl z-0"></div>
        </motion.div>
      </div>
    </section>
  );
};

const PracticeAreas = () => {
  const areas = [
    {
      title: "Direito do Trabalho",
      description: "Defesa técnica em reclamações trabalhistas, análise de contratos e consultoria preventiva para empresas e empregados.",
      icon: <Briefcase className="text-brand-gold" size={32} />,
    },
    {
      title: "Direito do Consumidor",
      description: "Atuação em casos de falhas na prestação de serviços, publicidade enganosa, cobranças indevidas e danos morais.",
      icon: <ShieldCheck className="text-brand-gold" size={32} />,
    },
    {
      title: "Direito Civil",
      description: "Resolução de conflitos, contratos, responsabilidade civil e questões possessórias com foco na segurança jurídica.",
      icon: (
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800"
          alt="Estante de livros representando Direito Civil"
          className="w-10 h-10 object-cover rounded-md"
          width={40}
          height={40}
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      ),
    },
    {
      title: "Segurança e Saúde no Trabalho",
      description: "Consultoria especializada em normas regulamentadoras (NR) e prevenção de riscos ocupacionais.",
      icon: <ShieldCheck className="text-brand-gold" size={32} />,
    },
  ];

  return (
    <section id="practice" className="py-24 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Áreas de Atuação</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-brand-offwhite/60 max-w-2xl mx-auto">
            Oferecemos suporte jurídico especializado nas principais vertentes do direito contemporâneo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl hover:border-brand-gold/50 transition-all duration-500 group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {area.icon}
              </div>
              <h3 className="text-xl font-serif mb-4 group-hover:text-brand-gold transition-colors">{area.title}</h3>
              <p className="text-sm text-brand-offwhite/60 leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const partners = [
    {
      name: "Rafael Santos",
      role: "Sócio Fundador",
      description: "Advogado e Professor. Especialista em Direito e Processo do Trabalho. Com mais de 15 anos de atuação, une o rigor acadêmico à prática jurídica estratégica para a defesa dos direitos de seus clientes.",
      image: "https://media.licdn.com/dms/image/v2/C4D03AQEKCUmLqqx0FA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1651193525942?e=1773878400&v=beta&t=u5sVge0FbK3oMLux22kumM1vqmNBL7XjPrv9kkjrDck", 
    },
    {
      name: "Raquel Bastos",
      role: "Sócia Fundadora",
      description: "Advogada. Especialista em Direito Civil e do Consumidor. Com mais de 15 anos de experiência, destaca-se pela excelência técnica e pelo compromisso inabalável com o atendimento humanizado e resolutivo.",
      image: "https://media.licdn.com/dms/image/v2/C4D03AQFbMS0Ae3AhLg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1588478995805?e=1773878400&v=beta&t=7EWfR2kD1nTY07f0jMXx-cnZTRAoCqiLNjSGdUoREdA",
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#141b26]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Sócios Fundadores</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-brand-offwhite/60 max-w-2xl mx-auto">
            Liderança experiente e compromisso inabalável com a excelência jurídica e a defesa dos seus direitos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden rounded-3xl group"
            >
              <div className="grid md:grid-cols-2 h-full">
                <div className="h-80 md:h-full overflow-hidden">
                  <img 
                    src={partner.image} 
                    alt={partner.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    width={400}
                    height={400}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-brand-gold text-[10px] uppercase tracking-[0.3em] mb-2">{partner.role}</span>
                  <h3 className="text-2xl font-serif mb-4">{partner.name}</h3>
                  <p className="text-sm text-brand-offwhite/70 leading-relaxed mb-6">
                    {partner.description}
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className="text-[10px] uppercase tracking-widest opacity-50 font-bold">15+ Anos de Experiência</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Vamos Conversar?</h2>
            <p className="text-brand-offwhite/60 mb-12">
              Estamos prontos para ouvir seu caso e oferecer a melhor orientação jurídica. Entre em contato pelos canais abaixo ou visite nosso escritório.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-brand-gold mb-4">
                  <MapPin size={24} />
                </div>
                <h4 className="font-serif text-lg mb-2">Localização</h4>
                <p className="text-xs text-brand-offwhite/60 leading-relaxed">
                  Rua Sérgio Buarque de Holanda nº605, Cond. One World Offices,<br />
                  Bl.1A-Europe, Sala 723, Barra Olímpica, RJ.
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-brand-gold mb-4">
                  <Phone size={24} />
                </div>
                <h4 className="font-serif text-lg mb-2">Telefone</h4>
                <p className="text-xs text-brand-offwhite/60">21 97665-9196</p>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-brand-gold mb-4">
                  <Mail size={24} />
                </div>
                <h4 className="font-serif text-lg mb-2">E-mail</h4>
                <p className="text-xs text-brand-offwhite/60">atendimento@santosebastosadv.com.br</p>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="https://wa.me/message/QVJ2TD35CE5DB1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-brand-gold hover:bg-brand-gold-light text-brand-navy px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all duration-300 shadow-xl"
              >
                Falar no WhatsApp
                <MessageSquare className="ml-2" size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0d121a] py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex flex-col mb-8 md:mb-0">
            <span className="text-2xl font-serif font-bold tracking-widest gold-gradient-text uppercase">Santos & Bastos</span>
            <span className="text-[10px] tracking-[0.3em] uppercase opacity-70 -mt-1">Advogados Associados</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/santosebastosadv/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-all">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-white/5 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest opacity-50">
          <p>© {new Date().getFullYear()} Santos & Bastos Advogados. Todos os direitos reservados.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-gold transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default function App() {
  useEffect(() => {
    document.title = 'Santos & Bastos Advogados — Advocacia Trabalhista e Civil | Rio de Janeiro';

    const description = 'Santos & Bastos Advogados — escritório no Rio de Janeiro especializado em Direito do Trabalho, Civil e do Consumidor. Atendimento personalizado e defesa estratégica dos seus direitos.';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);

    const canonicalHref = 'https://santosebastosadv.com.br/';
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalHref);
  }, []);
  return (
    <div className="min-h-screen selection:bg-brand-gold/30 selection:text-brand-gold">
      <Navbar />
      <Hero />
      <PracticeAreas />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
