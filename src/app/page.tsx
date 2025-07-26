import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Accueil */}
      <section id="accueil" className="relative pt-16 min-h-screen flex items-center overflow-hidden">
        {/* Modern gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full text-blue-300 text-sm font-medium border border-blue-500/30 backdrop-blur-sm">
                  🚀 Développeur Expert
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Développeur <span className="gradient-text">Odoo</span> Freelance
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Expert en solutions ERP personnalisées avec Python, DevOps et automatisation. 
                Transformez votre entreprise avec des systèmes sur mesure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 text-center transform hover:scale-105"
                >
                  <span className="relative z-10">Démarrer un projet</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href="#projets"
                  className="group relative glass text-white px-8 py-4 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 text-center transform hover:scale-105"
                >
                  Voir mes projets
                </a>
              </div>
            </div>
            <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="relative">
                {/* Modern avatar with glassmorphism */}
                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl rotate-6 animate-float"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl flex items-center justify-center glass-dark transform -rotate-6">
                    <div className="text-white text-6xl font-bold">DC</div>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-2xl animate-float" style={{animationDelay: '0.5s'}}>
                  🐍
                </div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center text-2xl animate-float" style={{animationDelay: '1s'}}>
                  ⚙️
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* À propos Section */}
      <section id="apropos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">À propos de moi</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionné par l&apos;innovation ERP et l&apos;automatisation business
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mon parcours</h3>
              <p className="text-gray-600 mb-6">
                Fort de 6 mois d&apos;expérience intensive en développement Odoo et 6 mois en tant qu&apos;ingénieur DevOps 
                dans un environnement ERP/CRM chez LVMH avec Salesforce Commerce Cloud, je me spécialise dans la création 
                de solutions métier innovantes.
              </p>
              <p className="text-gray-600 mb-6">
                Mon expertise couvre l&apos;ensemble du cycle de développement, de l&apos;analyse des besoins à la mise en 
                production, en passant par l&apos;intégration de systèmes complexes et l&apos;automatisation des processus.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">6 mois Odoo</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">6 mois DevOps ERP</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">LVMH Experience</span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Pourquoi me choisir ?</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Solutions sur mesure adaptées à votre métier</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Expertise technique approfondie</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Approche DevOps pour une mise en production fiable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Accompagnement personnalisé tout au long du projet</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences Section */}
      <section id="competences" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full text-blue-600 text-sm font-medium border border-blue-200 mb-6">
              💪 Expertise technique
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Mes compétences</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Technologies et outils maîtrisés pour créer des solutions ERP innovantes</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Développement */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🐍
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Développement</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-3"></div>
                    Python / Odoo Framework
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-3"></div>
                    Modules personnalisés
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-3"></div>
                    API REST & XML-RPC
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-3"></div>
                    JavaScript / OWL Framework
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-3"></div>
                    PostgreSQL
                  </li>
                </ul>
              </div>
            </div>

            {/* ERP/CRM */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  ⚙️
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">ERP/CRM</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3"></div>
                    Workflows métier
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3"></div>
                    Intégration e-commerce
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3"></div>
                    Gestion stock/facturation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3"></div>
                    Automatisation processus
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3"></div>
                    Portails clients
                  </li>
                </ul>
              </div>
            </div>

            {/* DevOps */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🚀
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">DevOps</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-3"></div>
                    GitHub Actions CI/CD
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-3"></div>
                    Docker / Containerisation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-3"></div>
                    Déploiement automatisé
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-3"></div>
                    Monitoring & logs
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-3"></div>
                    Infrastructure cloud
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projets Section */}
      <section id="projets" className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-pink-50/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full text-blue-600 text-sm font-medium border border-blue-200 mb-6">
              🚀 Réalisations
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Projets réalisés</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Solutions Odoo personnalisées et innovantes pour différents secteurs d&apos;activité</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Projet 1 */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-3">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🛍️
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">E-commerce B2B Intégré</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Synchronisation automatique entre boutique en ligne et ERP Odoo avec gestion des stocks en temps réel.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium">API</span>
                  <span className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium">Stock</span>
                  <span className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium">Webhook</span>
                </div>
              </div>
            </div>

            {/* Projet 2 */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 transform hover:-translate-y-3">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  📊
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">Dashboard Analytique RH</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Tableau de bord personnalisé pour le suivi des KPI RH avec indicateurs de performance en temps réel.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-2 rounded-lg text-sm font-medium">BI</span>
                  <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-2 rounded-lg text-sm font-medium">RH</span>
                  <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-2 rounded-lg text-sm font-medium">Reporting</span>
                </div>
              </div>
            </div>

            {/* Projet 3 */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 transform hover:-translate-y-3">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🔄
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">Automatisation Facturation</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Système automatisé de génération et envoi de factures avec relances clients personnalisées.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 px-3 py-2 rounded-lg text-sm font-medium">Automation</span>
                  <span className="bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 px-3 py-2 rounded-lg text-sm font-medium">Email</span>
                  <span className="bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 px-3 py-2 rounded-lg text-sm font-medium">Cron</span>
                </div>
              </div>
            </div>

            {/* Projet 4 */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 transform hover:-translate-y-3">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  👥
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">Portail Client Avancé</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Interface client personnalisée pour consultation commandes, factures et documents en self-service.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gradient-to-r from-red-100 to-pink-100 text-red-700 px-3 py-2 rounded-lg text-sm font-medium">Portal</span>
                  <span className="bg-gradient-to-r from-red-100 to-pink-100 text-red-700 px-3 py-2 rounded-lg text-sm font-medium">UX</span>
                  <span className="bg-gradient-to-r from-red-100 to-pink-100 text-red-700 px-3 py-2 rounded-lg text-sm font-medium">Self-service</span>
                </div>
              </div>
            </div>

            {/* Projet 5 */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 transform hover:-translate-y-3">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  📦
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">Gestion Stock Multi-Entrepôts</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Solution complète de gestion des stocks avec traçabilité, codes-barres et optimisation des emplacements.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 px-3 py-2 rounded-lg text-sm font-medium">Inventory</span>
                  <span className="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 px-3 py-2 rounded-lg text-sm font-medium">Barcode</span>
                  <span className="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 px-3 py-2 rounded-lg text-sm font-medium">WMS</span>
                </div>
              </div>
            </div>

            {/* Projet 6 */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 transform hover:-translate-y-3">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🎯
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">CRM Lead Scoring</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Système intelligent de scoring des prospects avec workflow automatisé et notifications commerciales.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-3 py-2 rounded-lg text-sm font-medium">CRM</span>
                  <span className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-3 py-2 rounded-lg text-sm font-medium">Scoring</span>
                  <span className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-3 py-2 rounded-lg text-sm font-medium">ML</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section id="testimonials" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ce que disent mes clients</h2>
            <p className="text-xl text-gray-600">Témoignages de partenaires satisfaits</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Témoignage 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 mb-6">
                &ldquo;Danis a transformé notre gestion commerciale avec une solution Odoo sur mesure. 
                L&apos;automatisation nous fait gagner 15h par semaine !&rdquo;
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">Marie Dubois</p>
                <p className="text-gray-500 text-sm">Directrice, TechnoSolutions</p>
              </div>
            </div>

            {/* Témoignage 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 mb-6">
                &ldquo;Approche très professionnelle et technique irréprochable. 
                Le portail client développé dépasse nos attentes.&rdquo;
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">Laurent Martin</p>
                <p className="text-gray-500 text-sm">CEO, InnovaCorp</p>
              </div>
            </div>

            {/* Témoignage 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 mb-6">
                &ldquo;Migration complexe réalisée sans accroc. 
                Danis maîtrise parfaitement l&apos;écosystème Odoo et les bonnes pratiques DevOps.&rdquo;
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">Sophie Leroy</p>
                <p className="text-gray-500 text-sm">DSI, MegaDistrib</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Travaillons ensemble</h2>
            <p className="text-xl text-gray-300">
              Prêt à optimiser votre entreprise avec Odoo ?
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Discutons de votre projet</h3>
              <p className="text-gray-300 mb-8">
                Que vous souhaitiez implémenter Odoo, développer des modules personnalisés, 
                ou optimiser votre système existant, je suis là pour vous accompagner.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-blue-400 mr-3">📧</span>
                  <span>daniscin@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-3">💼</span>
                  <span>Disponible pour missions freelance</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h4 className="text-xl font-bold mb-6">Demander un devis gratuit</h4>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-400 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-400 focus:outline-none"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Décrivez votre projet..."
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-400 focus:outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 Danis Cindrak - Développeur Odoo Freelance. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
