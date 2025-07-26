import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Accueil */}
      <section id="accueil" className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Développeur <span className="text-blue-600">Odoo</span> Freelance
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Expert en solutions ERP personnalisées avec Python, DevOps et automatisation. 
                Transformez votre entreprise avec des systèmes sur mesure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
                >
                  Démarrer un projet
                </a>
                <a
                  href="#projets"
                  className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors text-center"
                >
                  Voir mes projets
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-blue-600 rounded-full flex items-center justify-center">
                <div className="text-white text-8xl font-bold">DC</div>
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
            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Pourquoi me choisir ?</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Solutions sur mesure adaptées à votre métier</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Expertise technique approfondie</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Approche DevOps pour une mise en production fiable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Accompagnement personnalisé tout au long du projet</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences Section */}
      <section id="competences" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mes compétences</h2>
            <p className="text-xl text-gray-600">Technologies et outils maîtrisés</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Développement */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-blue-600 text-4xl mb-4">🐍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Développement</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Python / Odoo Framework</li>
                <li>• Modules personnalisés</li>
                <li>• API REST & XML-RPC</li>
                <li>• JavaScript / OWL Framework</li>
                <li>• PostgreSQL</li>
              </ul>
            </div>

            {/* ERP/CRM */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-green-600 text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">ERP/CRM</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Workflows métier</li>
                <li>• Intégration e-commerce</li>
                <li>• Gestion stock/facturation</li>
                <li>• Automatisation processus</li>
                <li>• Portails clients</li>
              </ul>
            </div>

            {/* DevOps */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-purple-600 text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">DevOps</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• GitHub Actions CI/CD</li>
                <li>• Docker / Containerisation</li>
                <li>• Déploiement automatisé</li>
                <li>• Monitoring & logs</li>
                <li>• Infrastructure cloud</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projets Section */}
      <section id="projets" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Projets réalisés</h2>
            <p className="text-xl text-gray-600">Solutions Odoo personnalisées pour différents secteurs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Projet 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-blue-600 text-3xl mb-4">🛍️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">E-commerce B2B Intégré</h3>
              <p className="text-gray-600 mb-4">
                Synchronisation automatique entre boutique en ligne et ERP Odoo avec gestion des stocks en temps réel.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">API</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Stock</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Webhook</span>
              </div>
            </div>

            {/* Projet 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-green-600 text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dashboard Analytique RH</h3>
              <p className="text-gray-600 mb-4">
                Tableau de bord personnalisé pour le suivi des KPI RH avec indicateurs de performance en temps réel.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">BI</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">RH</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Reporting</span>
              </div>
            </div>

            {/* Projet 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-purple-600 text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automatisation Facturation</h3>
              <p className="text-gray-600 mb-4">
                Système automatisé de génération et envoi de factures avec relances clients personnalisées.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Automation</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Email</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Cron</span>
              </div>
            </div>

            {/* Projet 4 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-red-600 text-3xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Portail Client Avancé</h3>
              <p className="text-gray-600 mb-4">
                Interface client personnalisée pour consultation commandes, factures et documents en self-service.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Portal</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">UX</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Self-service</span>
              </div>
            </div>

            {/* Projet 5 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-yellow-600 text-3xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gestion Stock Multi-Entrepôts</h3>
              <p className="text-gray-600 mb-4">
                Solution complète de gestion des stocks avec traçabilité, codes-barres et optimisation des emplacements.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Inventory</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Barcode</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">WMS</span>
              </div>
            </div>

            {/* Projet 6 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-indigo-600 text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">CRM Lead Scoring</h3>
              <p className="text-gray-600 mb-4">
                Système intelligent de scoring des prospects avec workflow automatisé et notifications commerciales.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">CRM</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Scoring</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">ML</span>
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
                  <span>danis.cindrak@example.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-3">📱</span>
                  <span>+33 6 XX XX XX XX</span>
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
