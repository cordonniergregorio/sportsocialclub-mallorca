export type Language = "fr" | "en" | "es";

export interface Translations {
  clubName: string;
  header: {
    nav: {
      team: string;
      concept: string;
      projects: string;
      investment: string;
    };
    investorsAccess: string;
  };
  hero: {
    title: string;
    titleHighlight: string;
    description: string;
    secondaryDescription: string;
    cta: string;
  };
  team: {
    title: string;
    titleHighlight: string;
    description: string;
    members: {
      antonio: {
        name: string;
        role: string;
        description: string;
      };
      gregorio: {
        name: string;
        role: string;
        description: string;
      };
      irene: {
        name: string;
        role: string;
        description: string;
      };
    };
  };
  banner: {
    title: string;
    titleHighlight: string;
    description: string;
    cards?: string[];
  };
  concept: {
    title: string;
    titleHighlight: string;
    description: string;
    cards: {
      families: {
        title: string;
        description: string;
      };
      gastronomy: {
        title: string;
        description: string;
      };
      wellbeing: {
        title: string;
        description: string;
      };
      technology: {
        title: string;
        description: string;
      };
    };
  };
  projects: {
    title: string;
    titleHighlight: string;
    description: string;
    viewDetails: string;
    equityBadge: string;
    investment: string;
    mainFeatures: string;
    businessModel: string;
    contact: string;
    detailedInfo: string;
    accessInvestors: string;
    santaPonca: {
      name: string;
      features: string[];
      businessModel: string[];
    };
    palmanova: {
      name: string;
      features: string[];
      businessModel: string[];
    };
  };
  investment: {
    title: string;
    titleHighlight: string;
    description: string;
    points: {
      value: {
        title: string;
        description: string;
      };
      demand: {
        title: string;
        description: string;
      };
      complementary: {
        title: string;
        description: string;
      };
      competition: {
        title: string;
        description: string;
      };
      sustainability: {
        title: string;
        description: string;
      };
      return: {
        title: string;
        description: string;
      };
    };
  };
  investorsGate: {
    title: string;
    titleHighlight: string;
    description: string;
  };
  passwordGate: {
    title: string;
    placeholder: string;
    button: string;
    verifying: string;
    error: string;
  };
  investorsContent: {
    financial: {
      title: string;
      subtitle: string;
      investment: string;
      guarantees: string;
      guaranteesNote: string;
      ebitda: string;
      excelNote: string;
      concessionNote: string;
    };
    value: {
      title: string;
      p1: string;
      p2: string;
      p3: string;
    };
    location: {
      title: string;
      items: string[];
    };
    market: {
      title: string;
      residents: {
        title: string;
        description: string;
      };
      tourism: {
        title: string;
        description: string;
      };
      trends: {
        title: string;
        description: string;
      };
    };
    competition: {
      title: string;
      highEnd: {
        title: string;
        description: string;
      };
      lowEnd: {
        title: string;
        description: string;
      };
      opportunity: {
        title: string;
        description: string;
      };
    };
    opportunity: {
      title: string;
      items: string[];
    };
    business: {
      title: string;
      items: string[];
    };
    future: {
      title: string;
      items: string[];
      note: string;
    };
    marketing: {
      title: string;
      acquisition: {
        title: string;
        items: string[];
      };
      retention: {
        title: string;
        items: string[];
      };
    };
    roadmap: {
      title: string;
      year2026: {
        year: string;
        description: string;
      };
      year2027: {
        year: string;
        description: string;
      };
      year2028: {
        year: string;
        description: string;
      };
      year2030: {
        year: string;
        description: string;
      };
    };
    exit: {
      title: string;
      option1: {
        title: string;
        description: string;
      };
      option2: {
        title: string;
        description: string;
      };
    };
  };
  footer: {
    description: string;
    navigation: string;
    contact: string;
    copyright: string;
    nav: {
      team: string;
      concept: string;
      projects: string;
      investment: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    clubName: "Club Sportif Majorque",
    header: {
      nav: {
        team: "L'Équipe",
        concept: "Le Concept",
        projects: "Projets",
        investment: "Investissement",
      },
      investorsAccess: "Accès investisseurs",
    },
    hero: {
      title: "Un nouveau concept de club social et sportif",
      titleHighlight: "à Majorque",
      description:
        "Une proposition unique qui intègre sport, gastronomie et bien-être pour les familles à Majorque.",
      secondaryDescription:
        "Deux projets complémentaires qui transformeront l'offre sportive de l'île.",
      cta: "Découvrir les projets",
    },
    team: {
      title: "Qui sommes-nous",
      titleHighlight: "L'Équipe",
      description:
        "Nous sommes une équipe multidisciplinaire avec une vaste expérience en gestion sportive, hôtellerie et création de projets familiaux.",
      members: {
        antonio: {
          name: "Antonio Cordonnier",
          role: "Directeur",
          description:
            "Directeur de cinq clubs de tennis en Amérique du Sud, avec une vaste expérience dans la gestion de centres sportifs et la coordination d'équipes de travail.",
        },
        gregorio: {
          name: "Gregorio Cordonnier",
          role: "Fondateur",
          description:
            "Ancien joueur professionnel ATP et entrepreneur dans le secteur sportif. Il a participé à la gestion et au développement de projets sportifs, travaillant avec des joueurs et des équipes multidisciplinaires.",
        },
        irene: {
          name: "Irene Oliver",
          role: "Architecte",
          description:
            "Architecte reconnue dans la région avec une expérience dans les projets sportifs de grande envergure.",
        },
      },
    },
    banner: {
      title: "Transformer le",
      titleHighlight: "sport",
      description:
        "Un espace où le sport, la gastronomie et la communauté se rencontrent pour créer des moments uniques",
      cards: ["Valeur sociale", "Emplacement privilégié", "Rentabilité"],
    },
    concept: {
      title: "Le concept de",
      titleHighlight: "Club Social Sportif",
      description:
        "Les deux projets partagent une même vision : créer des clubs modernes, dynamiques et familiaux, avec des espaces sportifs de premier niveau et une approche sociale pour profiter toute l'année.",
      cards: {
        families: {
          title: "Clubs familiaux",
          description:
            "Des espaces conçus pour profiter en famille tout au long de l'année, créant un environnement accueillant et sûr pour tous les âges.",
        },
        gastronomy: {
          title: "Gastronomie intégrée",
          description:
            "Restaurants et rooftops de haute qualité comme partie essentielle de l'expérience, où le sport et la gastronomie se rencontrent.",
        },
        wellbeing: {
          title: "Bien-être et communauté",
          description:
            "Activités, événements et espaces pour enfants qui favorisent la vie sociale et le bien-être intégral de toute la famille.",
        },
        technology: {
          title: "Technologie moderne",
          description:
            "Réservations en ligne, gestion innovante et expérience numérique fluide qui facilite l'accès et la gestion des services.",
        },
      },
    },
    projects: {
      title: "Nos projets en développement",
      titleHighlight: "pour Majorque",
      description:
        "Propositions complémentaires pour transformer l'offre sportive à Majorque",
      viewDetails: "Voir les détails du projet",
      equityBadge: "Capital",
      investment: "Investissement estimé",
      mainFeatures: "Caractéristiques principales",
      businessModel: "Modèle d'affaires",
      contact: "Contact",
      detailedInfo: "Pour des informations détaillées du projet",
      accessInvestors: "zone privée des investisseurs",
      santaPonca: {
        name: "Santa Ponça, Majorque",
        features: [
          "3 courts de padel couverts",
          "7 courts de tennis",
          "Restaurant avec salles de bain et espaces communs (300 m²)",
          "Rooftop avec vues panoramiques sur tout le club",
          "Améliorations potentielles : plus de courts de padel, piscine, salle de sport",
        ],
        businessModel: [
          "Ticket minimum de 200.000€",
          "Sponsors corporatifs (branding + avantages)",
          "Camps d'été, premium, adultes et enfants",
          "Location à l'heure (courts et cours particuliers)",
          "Événements, restauration, beauté, boutique",
        ],
      },
      palmanova: {
        name: "Palmanova, Majorque",
        features: [
          "8 courts de padel",
          "Restaurant",
          "Terrain de football 11",
          "Panneaux photovoltaïques",
        ],
        businessModel: [
          "Programmes pour touristes",
          "Location de courts",
          "École sportive",
          "Restauration et espaces communs (200m²)",
        ],
      },
    },
    investment: {
      title: "Investissement",
      titleHighlight: "et Opportunité",
      description:
        "Une opportunité unique de faire partie de l'avenir du sport et de la communauté à Majorque",
      points: {
        value: {
          title: "Valeur différentielle",
          description:
            "Club multisport, familial et de moyenne-haute gamme, avec des services intégrés (sport, restauration, bien-être, garde d'enfants) qui le distinguent des clubs traditionnels.",
        },
        demand: {
          title: "Demande croissante à Majorque",
          description:
            "Majorque a un potentiel exceptionnel, avec une demande tant de résidents que de touristes ; il existe un besoin réel de clubs de qualité intégrale toute l'année.",
        },
        complementary: {
          title: "Projets complémentaires",
          description:
            "Au-delà du sport —courts, salle de sport, wellness—, des services comme restaurant, événements, activités familiales, bien-être sont intégrés, ce qui multiplie les sources de revenus.",
        },
        competition: {
          title: "Concurrence vs avantage stratégique",
          description:
            "Face aux clubs traditionnels ou de gamme moyenne, l'offre intégrale du club (sport + bien-être + loisirs + famille) et sa structure professionnelle représentent un avantage concurrentiel clair.",
        },
        sustainability: {
          title: "Durabilité",
          description:
            "Grâce à la diversification des services, au modèle d'adhésions et à une gestion professionnelle dès le départ, le projet a des bases solides pour fonctionner toute l'année et offrir de la qualité aux résidents de la zone, réduisant les risques de saisonnalité.",
        },
        return: {
          title: "Opportunité de retour",
          description:
            "En combinant structure solide, demande, diversification des revenus et gestion efficace, le projet représente un haut potentiel de rentabilité et de valorisation.",
        },
      },
    },
    investorsGate: {
      title: "Zone Privée",
      titleHighlight: "des Investisseurs",
      description:
        "Informations exclusives pour les investisseurs du projet Santa Ponça",
    },
    passwordGate: {
      title: "Accès investisseurs",
      placeholder: "Mot de passe",
      button: "Accéder",
      verifying: "Vérification...",
      error: "Mot de passe incorrect",
    },
    investorsContent: {
      financial: {
        title: "Modèle Financier",
        subtitle: "Santa Ponça - Mallorca Racket Club",
        investment: "Investissement rénovations + opérations",
        guarantees: "Garanties",
        guaranteesNote: "via aval/caution",
        ebitda: "EBITDA objectif année 4",
        excelNote: "*Un fichier excel est disponible pour plus de détails",
        concessionNote: "Valeur de la concession comme actif transférable",
      },
      value: {
        title: "Proposition de Valeur",
        p1: "Club social sportif intégral de haute qualité dans la meilleure zone de Majorque.",
        p2: "Transformation d'un club municipal en un centre sportif-social de premier niveau avec plusieurs lignes d'affaires rentables.",
        p3: "Concession publique à 31 ans → accès à un actif stratégique sans nécessité d'achat de terrain.",
      },
      location: {
        title: "Localisation",
        items: [
          "15 mins de Palma et aéroport",
          "Pouvoir d'achat élevé",
          "300 mts de la plage",
          "Beaucoup de gens résidant annuellement et touristes visiteurs",
          "Offre hôtelière",
          "Zone la plus chère de Palma de Majorque",
        ],
      },
      market: {
        title: "Marché",
        residents: {
          title: "Résidents locaux :",
          description:
            "Population de Calvià (50k hab.) et environs, avec revenu moyen élevé. Palma et Andratx (Autres 400.000)",
        },
        tourism: {
          title: "Tourisme :",
          description:
            "Plus de 10 millions de touristes annuels à Majorque, demande saisonnière forte.",
        },
        trends: {
          title: "Tendances :",
          description:
            "Essor du padel, stabilité du tennis, intérêt croissant pour les clubs sociaux.",
        },
      },
      competition: {
        title: "Concurrence",
        highEnd: {
          title: "High-end :",
          description:
            "Mallorca Country Club, Bendinat, Palma Sport → exclusifs et chers.",
        },
        lowEnd: {
          title: "Low-end :",
          description:
            "Polideportivos locaux ou clubs avec mauvaise attention et faible qualité → accessibles mais avec services de base.",
        },
        opportunity: {
          title: "Opportunité :",
          description:
            "Se positionner dans le segment moyen-haut, avec des prix compétitifs et une qualité premium.",
        },
      },
      opportunity: {
        title: "Opportunité",
        items: [
          "Modèle basé sur concession, non sur achat → moindre CAPEX initial.",
          "Retours via opération (canon fixe + revenus sportifs, restauration, événements).",
          "Possibilité de cession autorisée dans le futur comme voie de sortie.",
        ],
      },
      business: {
        title: "Modèle économique",
        items: [
          "Sponsors corporatifs (branding + avantages)",
          "Summer, premium, adults and kids camps",
          "Location à l'heure (courts et cours particuliers)",
          "Événements, restauration, beauté, boutique",
        ],
      },
      future: {
        title: "Potentiel Futur",
        items: [
          "Extension avec plus de courts de padel pour répondre à la demande croissante",
          "Développement de membres privés premium pour améliorer le service",
        ],
        note: "Cela augmenterait significativement la rentabilité à long terme",
      },
      marketing: {
        title: "Marketing et Ventes",
        acquisition: {
          title: "Acquisition :",
          items: [
            "Équipe de ventes dédiée à l'acquisition d'entreprises et clients en programmes annuels",
            "Alliances avec académies et clubs internationaux, écoles et clubs nautiques",
            "Alliances avec hôtels et tour-opérateurs",
          ],
        },
        retention: {
          title: "Rétention :",
          items: [
            "Programmes de fidélisation pour membres",
            "Événements sociaux et sportifs au niveau local et international",
            "Stratégies avec influenceurs sportifs sur les réseaux sociaux",
          ],
        },
      },
      roadmap: {
        title: "Feuille de Route",
        year2026: {
          year: "2026",
          description:
            "Adjudication de la concession. Début de la rénovation des courts, construction du padel couvert et habilitation du restaurant. Mise en marche progressive des différentes lignes d'affaires.",
        },
        year2027: {
          year: "2027",
          description:
            "Développement du rooftop avec ses programmes principaux, ouverture du club social, salle de sport et zone infantile. Focus stratégique sur le positionnement et le renforcement de la marque.",
        },
        year2028: {
          year: "2028 – 2029",
          description:
            "Consolidation des lignes d'affaires et de l'identité de marque. Lancement de nouvelles sous-lignes et extensions de services.",
        },
        year2030: {
          year: "2030",
          description:
            "Club et lignes d'affaires pleinement consolidés, atteignant l'EBITDA objectif.",
        },
      },
      exit: {
        title: "Sortie Future",
        option1: {
          title: "Option 1 :",
          description:
            "Vente de la concession à une académie ou club social de plus grande taille.",
        },
        option2: {
          title: "Option 2 :",
          description: "Vente à un fonds de capital privé (Private Equity).",
        },
      },
    },
    footer: {
      description: "Un nouveau concept de club social et sportif à Majorque",
      navigation: "Navigation",
      contact: "Contact",
      copyright: "Club Deportivo Mallorca. Tous droits réservés.",
      nav: {
        team: "L'Équipe",
        concept: "Le Concept",
        projects: "Projets",
        investment: "Investissement",
      },
    },
  },
  en: {
    clubName: "Mallorca Racket Club",
    header: {
      nav: {
        team: "The Team",
        concept: "The Concept",
        projects: "Projects",
        investment: "Investment",
      },
      investorsAccess: "Investor Access",
    },
    hero: {
      title: "A new concept of social and sports club",
      titleHighlight: "in Mallorca",
      description:
        "A unique proposal that integrates sports, gastronomy and wellness for families in Mallorca.",
      secondaryDescription:
        "Two complementary projects that will transform the sports offering on the island.",
      cta: "Discover the projects",
    },
    team: {
      title: "Who We Are",
      titleHighlight: "The Team",
      description:
        "We are a multidisciplinary team with extensive experience in sports management, hospitality and creating family projects.",
      members: {
        antonio: {
          name: "Antonio Cordonnier",
          role: "Director",
          description:
            "Director of five tennis clubs in South America, with extensive experience in managing sports centers and coordinating work teams.",
        },
        gregorio: {
          name: "Gregorio Cordonnier",
          role: "Founder",
          description:
            "Former professional ATP player and entrepreneur in the sports sector. He has participated in the management and development of sports projects, working with players and multidisciplinary teams.",
        },
        irene: {
          name: "Irene Oliver",
          role: "Architect",
          description:
            "Recognized architect in the area with experience in large-scale sports projects.",
        },
      },
    },
    banner: {
      title: "Transforming",
      titleHighlight: "sport",
      description:
        "A space where sports, gastronomy and community come together to create unique moments",
      cards: ["Social Value", "Prime Location", "Profit"],
    },
    concept: {
      title: "The concept of",
      titleHighlight: "Social Sports Club",
      description:
        "Both projects share the same vision: creating modern, vibrant and family-friendly clubs, with first-class sports facilities and a social approach to enjoy year-round.",
      cards: {
        families: {
          title: "Family clubs",
          description:
            "Spaces designed to enjoy with family throughout the year, creating a welcoming and safe environment for all ages.",
        },
        gastronomy: {
          title: "Integrated gastronomy",
          description:
            "High-quality restaurants and rooftops as an essential part of the experience, where sports and gastronomy meet.",
        },
        wellbeing: {
          title: "Wellness and community",
          description:
            "Activities, events and spaces for children that promote social life and the integral well-being of the whole family.",
        },
        technology: {
          title: "Modern technology",
          description:
            "Online reservations, innovative management and smooth digital experience that facilitates access and service management.",
        },
      },
    },
    projects: {
      title: "Our projects in development",
      titleHighlight: "for Mallorca",
      description:
        "Complementary proposals to transform the sports offering in Mallorca",
      viewDetails: "View project details",
      equityBadge: "Equity",
      investment: "Estimated investment",
      mainFeatures: "Main features",
      businessModel: "Business model",
      contact: "Contact",
      detailedInfo: "For detailed project information",
      accessInvestors: "private investor area",
      santaPonca: {
        name: "Santa Ponça, Mallorca",
        features: [
          "3 covered padel courts",
          "7 tennis courts",
          "Restaurant with bathrooms and common areas (300 m²)",
          "Rooftop with panoramic views of the entire club",
          "Potential improvements: more padel courts, pool, gym",
        ],
        businessModel: [
          "Minimum ticket of 200.000€",
          "Corporate sponsors (branding + benefits)",
          "Summer, premium, adults and kids camps",
          "Hourly rental (courts and private lessons)",
          "Events, restaurant, beauty, shop",
        ],
      },
      palmanova: {
        name: "Palmanova, Mallorca",
        features: [
          "8 padel courts",
          "Restaurant",
          "11-a-side football field",
          "Photovoltaic panels",
        ],
        businessModel: [
          "Programs for tourists",
          "Court rental",
          "Sports school",
          "Restaurant and common areas (200m²)",
        ],
      },
    },
    investment: {
      title: "Investment",
      titleHighlight: "and Opportunity",
      description:
        "A unique opportunity to be part of the future of sports and community in Mallorca",
      points: {
        value: {
          title: "Differential value",
          description:
            "Multi-sports, family and mid-high-end club, with integrated services (sports, restaurant, wellness, childcare) that distinguish it from traditional clubs.",
        },
        demand: {
          title: "Growing demand in Mallorca",
          description:
            "Mallorca has exceptional potential, with demand from both residents and tourists; there is a real need for quality integral clubs year-round.",
        },
        complementary: {
          title: "Complementary projects",
          description:
            "Beyond sports —courts, gym, wellness—, services such as restaurant, events, family activities, wellness are incorporated, which multiplies revenue sources.",
        },
        competition: {
          title: "Competition vs strategic advantage",
          description:
            "Compared to traditional or mid-range clubs, the club's integral offering (sports + wellness + leisure + family) and its professional structure represent a clear competitive advantage.",
        },
        sustainability: {
          title: "Sustainability",
          description:
            "Thanks to service diversification, the membership model and professional management from the start, the project has solid foundations to operate year-round and offer quality to area residents, reducing seasonality risks.",
        },
        return: {
          title: "Return opportunity",
          description:
            "By combining solid structure, demand, revenue diversification and efficient management, the project represents high potential for profitability and valuation.",
        },
      },
    },
    investorsGate: {
      title: "Private Area",
      titleHighlight: "for Investors",
      description:
        "Exclusive information for investors of the Santa Ponça project",
    },
    passwordGate: {
      title: "Investor access",
      placeholder: "Password",
      button: "Access",
      verifying: "Verifying...",
      error: "Incorrect password",
    },
    investorsContent: {
      financial: {
        title: "Financial Model",
        subtitle: "Santa Ponça - Mallorca Racket Club",
        investment: "Investment renovations + operations",
        guarantees: "Guarantees",
        guaranteesNote: "via guarantee/bond",
        ebitda: "EBITDA target year 4",
        excelNote: "*An excel file is available for more details",
        concessionNote: "Value of the concession as a transferable asset",
      },
      value: {
        title: "Value Proposition",
        p1: "High-quality integral social sports club in the best area of Mallorca.",
        p2: "Transformation of a municipal club into a first-class sports-social center with several profitable business lines.",
        p3: "31-year public concession → access to a strategic asset without the need to purchase land.",
      },
      location: {
        title: "Location",
        items: [
          "15 mins from Palma and airport",
          "High purchasing power",
          "300 mts from the beach",
          "Many people residing annually and visiting tourists",
          "Hotel offer",
          "Most expensive area of Palma de Mallorca",
        ],
      },
      market: {
        title: "Market",
        residents: {
          title: "Local residents:",
          description:
            "Population of Calvià (50k inhabitants) and surroundings, with high average income. Palma and Andratx (Other 400,000)",
        },
        tourism: {
          title: "Tourism:",
          description:
            "More than 10 million annual tourists in Mallorca, strong seasonal demand.",
        },
        trends: {
          title: "Trends:",
          description:
            "Rise of padel, stability of tennis, growing interest in social clubs.",
        },
      },
      competition: {
        title: "Competition",
        highEnd: {
          title: "High-end:",
          description:
            "Mallorca Country Club, Bendinat, Palma Sport → exclusive and expensive.",
        },
        lowEnd: {
          title: "Low-end:",
          description:
            "Local sports centers or clubs with poor service and low quality → accessible but with basic services.",
        },
        opportunity: {
          title: "Opportunity:",
          description:
            "Positioning in the mid-high segment, with competitive prices and premium quality.",
        },
      },
      opportunity: {
        title: "Opportunity",
        items: [
          "Model based on concession, not purchase → lower initial CAPEX.",
          "Returns via operation (fixed fee + sports revenue, restaurant, events).",
          "Possibility of authorized transfer in the future as an exit route.",
        ],
      },
      business: {
        title: "Business Model",
        items: [
          "Corporate sponsors (branding + benefits)",
          "Summer, premium, adults and kids camps",
          "Hourly rental (courts and private lessons)",
          "Events, restaurant, beauty, shop",
        ],
      },
      future: {
        title: "Future Potential",
        items: [
          "Expansion with more padel courts to meet growing demand",
          "Development of premium private memberships to improve service",
        ],
        note: "This would significantly increase long-term profitability",
      },
      marketing: {
        title: "Marketing and Sales",
        acquisition: {
          title: "Acquisition:",
          items: [
            "Sales team dedicated to acquiring companies and clients in annual programs",
            "Alliances with academies and international clubs, schools and yacht clubs",
            "Alliances with hotels and tour operators",
          ],
        },
        retention: {
          title: "Retention:",
          items: [
            "Loyalty programs for members",
            "Social and sports events at local and international level",
            "Strategies with sports influencers on social networks",
          ],
        },
      },
      roadmap: {
        title: "Roadmap",
        year2026: {
          year: "2026",
          description:
            "Award of the concession. Start of court renovation, construction of covered padel and restaurant setup. Progressive launch of different business lines.",
        },
        year2027: {
          year: "2027",
          description:
            "Development of the rooftop with its main programs, opening of the social club, gym and children's area. Strategic focus on positioning and brand strengthening.",
        },
        year2028: {
          year: "2028 – 2029",
          description:
            "Consolidation of business lines and brand identity. Launch of new sub-lines and service extensions.",
        },
        year2030: {
          year: "2030",
          description:
            "Club and business lines fully consolidated, reaching target EBITDA.",
        },
      },
      exit: {
        title: "Future Exit",
        option1: {
          title: "Option 1:",
          description:
            "Sale of the concession to a larger academy or social club.",
        },
        option2: {
          title: "Option 2:",
          description: "Sale to a private equity fund (Private Equity).",
        },
      },
    },
    footer: {
      description: "A new concept of social and sports club in Mallorca",
      navigation: "Navigation",
      contact: "Contact",
      copyright: "All rights reserved.",
      nav: {
        team: "The Team",
        concept: "The Concept",
        projects: "Projects",
        investment: "Investment",
      },
    },
  },
  es: {
    clubName: "Club Deportivo Mallorca",
    header: {
      nav: {
        team: "El Equipo",
        concept: "El Concepto",
        projects: "Proyectos",
        investment: "Inversión",
      },
      investorsAccess: "Acceso para inversores",
    },
    hero: {
      title: "Un nuevo concepto de club social y deportivo",
      titleHighlight: "en Mallorca",
      description:
        "Una propuesta única que integra deporte, gastronomía y bienestar para familias en Mallorca.",
      secondaryDescription:
        "Dos proyectos complementarios que transformarán la oferta deportiva en la isla.",
      cta: "Descubre los proyectos",
    },
    team: {
      title: "Quiénes somos",
      titleHighlight: "El Equipo",
      description:
        "Somos un equipo multidisciplinario con amplia experiencia en gestión deportiva, hostelería y creación de proyectos familiares.",
      members: {
        antonio: {
          name: "Antonio Cordonnier",
          role: "Director",
          description:
            "Director de cinco clubes de tenis en Sudamérica, con amplia experiencia en la gestión de centros deportivos y en la coordinación de equipos de trabajo.",
        },
        gregorio: {
          name: "Gregorio Cordonnier",
          role: "Fundador",
          description:
            "Ex jugador profesional ATP y emprendedor en el sector deportivo. Ha participado en la gestión y desarrollo de proyectos deportivos, trabajando con jugadores y equipos multidisciplinarios.",
        },
        irene: {
          name: "Irene Oliver",
          role: "Arquitecta",
          description:
            "Arquitecta reconocida en la zona con experiencia en proyectos deportivos de gran escala.",
        },
      },
    },
    banner: {
      title: "Transformando el",
      titleHighlight: "deporte",
      description:
        "Un espacio donde el deporte, la gastronomía y la comunidad se encuentran para crear momentos únicos",
      cards: ["Valor social", "Ubicación privilegiada", "Rentabilidad"],
    },
    concept: {
      title: "El concepto de",
      titleHighlight: "Club Social Deportivo",
      description:
        "Proyectos con una misma visión: crear clubes modernos, vibrantes y familiares, con espacios deportivos de primer nivel y un enfoque social para disfrutar todo el año.",
      cards: {
        families: {
          title: "Clubes familiares",
          description:
            "Espacios diseñados para disfrutar en familia durante todo el año, creando un ambiente acogedor y seguro para todas las edades.",
        },
        gastronomy: {
          title: "Gastronomía integrada",
          description:
            "Restaurantes y rooftops de alta calidad como parte esencial de la experiencia, donde el deporte y la gastronomía se encuentran.",
        },
        wellbeing: {
          title: "Bienestar y comunidad",
          description:
            "Actividades, eventos y espacios para niños que fomentan la vida social y el bienestar integral de toda la familia.",
        },
        technology: {
          title: "Tecnología moderna",
          description:
            "Reservas online, gestión innovadora y experiencia digital fluida que facilita el acceso y la gestión de servicios.",
        },
      },
    },
    projects: {
      title: "Nuestros proyectos en desarrollo",
      titleHighlight: "para Mallorca",
      description:
        "Propuestas complementarias para transformar la oferta deportiva en Mallorca",
      viewDetails: "Ver detalles del proyecto",
      equityBadge: "Capital",
      investment: "Inversión estimada",
      mainFeatures: "Características principales",
      businessModel: "Modelo de negocio",
      contact: "Contacto",
      detailedInfo: "Para información detallada del proyecto",
      accessInvestors: "área privada de inversores",
      santaPonca: {
        name: "Santa Ponça, Mallorca",
        features: [
          "3 canchas de pádel techadas",
          "7 canchas de tenis",
          "Restaurante con baños y zonas comunes (300 m²)",
          "Rooftop con vistas panorámicas a todo el club",
          "Mejoras potenciales: más canchas de pádel, piscina, gimnasio",
        ],
        businessModel: [
          "Ticket mínimo de 200.000€",
          "Sponsors corporativos (branding + beneficios)",
          "Summer, premium, adults and kids camps",
          "Alquiler por horas (pistas y clases particulares)",
          "Eventos, restauración, beauty, tienda",
        ],
      },
      palmanova: {
        name: "Palmanova, Mallorca",
        features: [
          "8 canchas de pádel",
          "Restaurante",
          "Campo de fútbol 11",
          "Paneles fotovoltaicos",
        ],
        businessModel: [
          "Programas para turistas",
          "Alquiler de pistas",
          "Escuela deportiva",
          "Restauración y zonas comunes (200m²)",
        ],
      },
    },
    investment: {
      title: "Inversión",
      titleHighlight: "y Oportunidad",
      description:
        "Una oportunidad única para formar parte del futuro del deporte y la comunidad en Mallorca",
      points: {
        value: {
          title: "Valor diferencial",
          description:
            "Club multideportivo, familiar y de media-alta gama, con servicios integrados (deporte, restauración, bienestar, cuidado infantil) que lo distinguen de clubes tradicionales.",
        },
        demand: {
          title: "Demanda creciente en Mallorca",
          description:
            "Mallorca tiene un potencial excepcional, con demanda tanto de residentes como de turistas; existe una necesidad real de clubes de calidad integral durante todo el año.",
        },
        complementary: {
          title: "Proyectos complementarios",
          description:
            "Más allá del deporte —pistas, gimnasio, wellness—, se incorporan servicios como restaurante, eventos, actividades familiares, bienestar, lo que multiplica las fuentes de ingresos.",
        },
        competition: {
          title: "Competencia vs ventaja estratégica",
          description:
            "Frente a clubes tradicionales o de gama media, la oferta integral del club (deporte + bienestar + ocio + familia) y su estructura profesional representan una ventaja competitiva clara.",
        },
        sustainability: {
          title: "Sostenibilidad",
          description:
            "Gracias a diversificar servicios, al modelo de membresías y a una gestión profesional desde el inicio, el proyecto tiene bases sólidas para funcionar todo el año y ofrecer calidad a residentes de la zona, reduciendo riesgos de estacionalidad.",
        },
        return: {
          title: "Oportunidad de retorno",
          description:
            "Combinando estructura sólida, demanda, diversificación de ingresos y gestión eficiente, el proyecto representa un alto potencial de rentabilidad y valorización.",
        },
      },
    },
    investorsGate: {
      title: "Área Privada",
      titleHighlight: "de Inversores",
      description:
        "Información exclusiva para inversores del proyecto Santa Ponça",
    },
    passwordGate: {
      title: "Acceso para inversores",
      placeholder: "Contraseña",
      button: "Acceder",
      verifying: "Verificando...",
      error: "Contraseña incorrecta",
    },
    investorsContent: {
      financial: {
        title: "Modelo Financiero",
        subtitle: "Santa Ponça - Mallorca Racket Club",
        investment: "Inversión renovaciones + operaciones",
        guarantees: "Garantías",
        guaranteesNote: "vía aval/caución",
        ebitda: "EBITDA objetivo año 4",
        excelNote: "*Un archivo excel está disponible para más detalle",
        concessionNote: "Valor de la concesión como activo transferible",
      },
      value: {
        title: "Propuesta de Valor",
        p1: "Club social deportivo integral de alta calidad en la mejor zona de Mallorca.",
        p2: "Transformación de un club municipal en un centro deportivo-social de primer nivel con varias líneas de negocio rentables.",
        p3: "Concesión pública a 31 años → acceso a un activo estratégico sin necesidad de compra de terreno.",
      },
      location: {
        title: "Ubicación",
        items: [
          "15 mins de Palma y aeropuerto",
          "Poder adquisitivo alto",
          "300 mts de la playa",
          "Mucha gente residiendo anualmente y turistas visitantes",
          "Oferta Hotelera",
          "Zona más cara de Palma de Mallorca",
        ],
      },
      market: {
        title: "Mercado",
        residents: {
          title: "Residentes locales:",
          description:
            "Población de Calvià (50k hab.) y alrededores, con alta renta media. Palma y Andratx (Otros 400.000)",
        },
        tourism: {
          title: "Turismo:",
          description:
            "Más de 10 millones de turistas anuales en Mallorca, demanda estacional fuerte.",
        },
        trends: {
          title: "Tendencias:",
          description:
            "Auge del pádel, estabilidad del tenis, creciente interés en clubes sociales.",
        },
      },
      competition: {
        title: "Competencia",
        highEnd: {
          title: "High-end:",
          description:
            "Mallorca Country Club, Bendinat, Palma Sport → exclusivos y caros.",
        },
        lowEnd: {
          title: "Low-end:",
          description:
            "Polideportivos locales o clubes con mala atención y baja calidad → accesibles pero con servicios básicos.",
        },
        opportunity: {
          title: "Oportunidad:",
          description:
            "Posicionarse en el segmento medio-alto, con precios competitivos y calidad premium.",
        },
      },
      opportunity: {
        title: "Oportunidad",
        items: [
          "Modelo basado en concesión, no en compra → menor CAPEX inicial.",
          "Retornos vía operación (canon fijo + ingresos deportivos, restauración, eventos).",
          "Posibilidad de cesión autorizada en el futuro como vía de salida.",
        ],
      },
      business: {
        title: "Modelo de Negocio",
        items: [
          "Sponsors corporativos (branding + beneficios)",
          "Summer, premium, adults and kids camps",
          "Alquiler por horas (pistas y clases particulares)",
          "Eventos, restauración, beauty, tienda",
        ],
      },
      future: {
        title: "Potencial Futuro",
        items: [
          "Ampliación con más canchas de pádel para atender demanda creciente",
          "Desarrollo de membresías privadas premium para mejorar el servicio",
        ],
        note: "Esto aumentaría significativamente la rentabilidad a largo plazo",
      },
      marketing: {
        title: "Marketing y Ventas",
        acquisition: {
          title: "Captación:",
          items: [
            "Equipo de ventas dedicado a la captación de empresas y clientes en programas anuales",
            "Alianzas con academias y clubes internacionales, colegios y clubes náuticos",
            "Alianzas con hoteles y touroperadores",
          ],
        },
        retention: {
          title: "Retención:",
          items: [
            "Programas de fidelización para miembros",
            "Eventos sociales y deportivos a nivel local e internacional",
            "Estrategias con influencers deportivos en redes sociales",
          ],
        },
      },
      roadmap: {
        title: "Hoja de Ruta",
        year2026: {
          year: "2026",
          description:
            "Adjudicación de la concesión. Inicio de la remodelación de las pistas, construcción del pádel cubierto y habilitación del restaurante. Puesta en marcha progresiva de las distintas líneas de negocio.",
        },
        year2027: {
          year: "2027",
          description:
            "Desarrollo del rooftop con sus programas principales, apertura del club social, gimnasio y área infantil. Enfoque estratégico en el posicionamiento y fortalecimiento de la marca.",
        },
        year2028: {
          year: "2028 – 2029",
          description:
            "Consolidación de las líneas de negocio y de la identidad de marca. Lanzamiento de nuevas sublíneas y ampliaciones de servicios.",
        },
        year2030: {
          year: "2030",
          description:
            "Club y líneas de negocio plenamente consolidadas, alcanzando el EBITDA objetivo.",
        },
      },
      exit: {
        title: "Salida Futura",
        option1: {
          title: "Opción 1:",
          description:
            "Venta de la concesión a una academia o club social de mayor tamaño.",
        },
        option2: {
          title: "Opción 2:",
          description: "Venta a un fondo de capital privado (Private Equity).",
        },
      },
    },
    footer: {
      description: "Un nuevo concepto de club social y deportivo en Mallorca",
      navigation: "Navegación",
      contact: "Contacto",
      copyright: "Todos los derechos reservados.",
      nav: {
        team: "El Equipo",
        concept: "El Concepto",
        projects: "Proyectos",
        investment: "Inversión",
      },
    },
  },
};
