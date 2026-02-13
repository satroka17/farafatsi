import Image from "next/image";
import MemberCard from "@/components/MemberCard";
import ActivityCard from "@/components/ActivityCard";

export default function Home() {
  return (
    <main className="pt-20">

      {/* HERO SECTION - Convoi dans la forêt épineuse */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="/hero-action.jpeg" // NOUVELLE IMAGE HERO
            alt="Contrôle du transport illicite de charbon dans l'AP Ranobe PK32"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl py-20">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 mx-auto bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/30">
              <span className="text-6xl">🌳</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Association FARAFATSI
          </h1>

          <p className="text-xl md:text-2xl mb-6 text-gray-100 font-light italic">
            Fiarovana ny tontonlo iainana ARAhina Fampandrosoana ho an'ny Faritra ATSImo
          </p>

          <p className="text-lg md:text-xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            FARAFATSI s'engage à redonner vie à l'AP PK32 Ranobe et à garantir un avenir plus sain pour les générations futures.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#about"
              className="bg-green-600 hover:bg-green-700 px-10 py-4 rounded-full transition-all transform hover:scale-105 font-semibold shadow-lg text-lg"
            >
              Découvrir notre mission
            </a>
            <a
              href="#contact"
              className="border-2 border-white px-10 py-4 rounded-full hover:bg-white hover:text-green-900 transition-all transform hover:scale-105 font-semibold backdrop-blur-sm text-lg"
            >
              Nous contacter
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* HISTORIQUE - L'impact de la déforestation */}
      {/* 
        SECTION HISTORIQUE - AMÉLIORÉE 
        CHANGEMENTS :
        1.  Fond clair (bg-gray-50) : Crée un contraste et un rythme visuel après la section Hero foncée.
        2.  Couleurs de texte sombres : Pour une lisibilité parfaite sur fond clair.
        3.  Disposition inversée (Texte | Image) : Crée un effet "zig-zag" dynamique avec la section suivante.
        4.  Titre à gauche : Plus standard pour un titre de section, améliore le flux de lecture.
      */}
      <section id="about" className="py-24 bg-gray-50 text-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <div className="inline-block bg-green-100 text-green-900 px-8 py-3 rounded-full border-2 border-green-200">
              <h2 className="text-3xl md:text-4xl font-bold">Historique</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Colonne de texte */}
            <div className="space-y-6">
              <p className="leading-relaxed text-lg">
                L’Association Farafatsi a été fondée en 2025 avec pour objectif principal la protection de l’AP PK32 Ranobe.
              </p>
              <p className="leading-relaxed text-lg">
                Cette Aire protégée a été touchée par une déforestation alarmante, et la situation s’est aggravée au fil du temps.
              </p>
              <p className="leading-relaxed text-lg">
                Les noyaux durs de la forêt, jadis préservés, ne reçoivent plus d’attention, laissant place à l’installation humaine qui entraîne une perte graduelle de son capital forestier suite à l’explosion de la culture sur brûlis, le foisonnement des coupes sélectives et la ruée vers le charbonnage illicite.
              </p>
            </div>
            {/* Colonne d'image */}
            <div>
              <img
                src="/limite-ap-ranobe.jpeg" // NOUVELLE IMAGE HISTORIQUE
                alt="Panneau d'entrée de l'Aire Protégée PK-32 Ranobe"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 
        SECTION MISSION & ACTIONS - FUSIONNÉE ET AMÉLIORÉE
        CHANGEMENT : Fusion de "Objectif" et "Activités" en une seule section logique.
        L'image de la communauté est conservée ici car elle illustre la "sensibilisation de la population".
      */}
      <section id="mission" className="py-24 bg-gradient-to-b from-green-900 to-green-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <div className="inline-block bg-orange-500/20 backdrop-blur-sm px-8 py-3 rounded-full border-2 border-orange-500/50">
              <h2 className="text-3xl md:text-4xl font-bold text-orange-300">
                Notre Mission
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Colonne d'image */}
            <div>
              <img
                src="/community-meeting.jpeg"
                alt="Concertation avec les communautés locales pour la protection de la forêt"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            {/* Colonne de texte */}
            <div className="space-y-6">
              <h3 className="text-green-50 leading-relaxed text-2xl font-bold">
                Contribution à la préservation de l’environnement et de la biodiversité ainsi qu’à l’atteinte du Développement durable.
              </h3>
              <p className="text-green-100 leading-relaxed pt-4">
                Nos activités se focalisent sur le contrôle forestier et l’application de la loi pour réduire la déprédation des ressources. FARAFATSI s’engage à surveiller les activités illégales et à appliquer les réglementations pour protéger les écosystèmes forestiers fragilisés.
              </p>
              <p className="text-green-100 leading-relaxed font-semibold mt-4">
                L’association vise également à :
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                  <p className="text-green-50 leading-relaxed">Sensibiliser la population à la préservation de l’écosystème.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                  <p className="text-green-50 leading-relaxed">Mettre en œuvre des projets de développement durable et de gouvernance environnementale.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                  <p className="text-green-50 leading-relaxed">Intégrer la dimension changement climatique dans toutes les actions.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                  <p className="text-green-50 leading-relaxed">Promouvoir des pratiques agricoles durables.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVITÉS & DOMAINES D'EXPERTISE */}
      <section id="activities" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Activités et Actualités
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Nos actions concrètes pour la protection de l'AP Ranobe PK32 et la préservation des ressources forestières
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ActivityCard
              tag="Conservation"
              tagColor="green"
              icon="🛡️"
              title="Brigade de conservation"
              description="Réalisation de descente de brigade de conservation au sein de l'AP Ranobe PK 32 et au cœur des noyaux durs de l'AP"
            />
            <ActivityCard
              tag="Intervention"
              tagColor="red"
              icon="⚠️"
              title="Dissuasion des occupants illicites"
              description="Dissuasion des occupants illicites au cœurs des noyaux durs de l'AP à libérer les lieux"
            />
            <ActivityCard
              tag="Communauté"
              tagColor="blue"
              icon="👥"
              title="Mobilisation de l'OMC"
              description="Tournée de Police Générale dans le but d'identifier les types de pressions que subit l'AP Ranobe PK32 et d'inciter les communautés locales à prendre conscience de l'intérêt de la préservation des ressources naturelles"
            />
            <ActivityCard
              tag="Dialogue"
              tagColor="orange"
              icon="🤝"
              title="Concertation communautaire"
              description="Concertation avec les communautés locales dans l'objectif d'identifier des solutions communes afin de limiter le spiral de dégradation des ressources forestières"
            />
            <ActivityCard
              tag="Surveillance"
              tagColor="purple"
              icon="🔍"
              title="Patrouilles forestières"
              description="Réalisation de patrouilles (jour et de nuit) le long des axes routiers desservant l'AP Ranobe PK 32 afin de contrôler la circulation des produits forestiers illicites"
            />
            <ActivityCard
              tag="Application"
              tagColor="red"
              icon="⚖️"
              title="Répression des délits"
              description="Contrôle et réprimande des acteurs à l'origine des délits forestiers et application des réglementations en vigueur"
            />
          </div>
        </div>
      </section>

      {/* MEMBRES DE L'ÉQUIPE */}
      <section id="members" className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Les Membres
            </h2>
            <p className="text-gray-600 mb-4 text-lg">
              Une équipe passionnée et expérimentée dédiée à la conservation de la biodiversité de l'AP Ranobe PK32
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <MemberCard
              name="EMELINE"
              role="Présidente"
              description="Professionnelle de la conservation avec plus de 7 ans d'expérience dans la gestion des Aires Protégées, le développement des projets environnementaux et de la coordination d'équipes locales. Diplômée du département de Biologie & Écologie Végétales de l'Université d'Antananarivo."
              image="/members/emeline.jpg"
            />
            <MemberCard
              name="ANDRIANANTENAINA William Peterson"
              role="Secrétaire Général"
              description="20 ans d'expérience dans la préservation de l'environnement avec une expertise confirmée dans le domaine du reboisement et la restauration forestière. Diplômé du département de Biologie & Écologie Végétales de l'Université d'Antananarivo."
              image="/members/peterson.jpg"
            />
            <MemberCard
              name="MIASOARISON Sandrine Arivola"
              role="Trésorière"
              description="2 ans d'expérience dans le domaine de secrétariat et comptabilité. Expérience confirmée en marketing et en animation. Diplômée de l'Enseignement technique et Professionnelle de Tuléar."
              image="/members/arivola.jpg"
            />
            <MemberCard
              name="RATOVONJANAHARY Georges"
              role="Agent de terrain"
              description="Véritable homme de terrain avec des compétences avérées en gestion de logistique et mobilisation communautaire. 13 années d'expériences professionnelle en tant qu'agent de terrain et chef d'équipe de patrouilleurs."
              image="/members/georges.jpg"
            />
          </div>
        </div>
      </section>

      {/* SECTION CONTACT - La base de vie de l'association */}
      <section id="contact" className="py-24 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Contactez-nous</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Prénom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Votre prénom"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="votre.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Sujet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Sujet de votre demande"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Décrivez votre situation et vos besoins..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-900 hover:bg-green-800 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  Envoyer la demande
                </button>
              </form>
            </div>

            <div className="relative">
              <img
                src="/base-vie.jpeg" // IMAGE MODIFIÉE
                alt="Base vie et bureau de l'association FARAFATSI"
                className="rounded-3xl shadow-2xl w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 space-y-4">
                <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-l-4 border-green-600">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-green-900">WhatsApp</p>
                      <p className="text-gray-700">+261 XX XX XXX XX</p>
                    </div>
                  </div>
                </div>
                <div className="bg-orange-500/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-white">Horaires d'ouverture</p>
                      <p className="text-orange-50">Ouvert 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}