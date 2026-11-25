/* ============================================================
   CONFIG : prix, liens de paiement, Black Friday, FAQ.
   C'est le seul endroit à modifier pour changer une offre.
   ============================================================ */
const CONFIG = {
  prices: {                      // en euros, sans le symbole
    foundations: 97,
    foundationsBarred: 147,
    engine: 97,
    engineBarred: 147,
    bundle: 169,                 // parcours complet, prix normal
    bundleBarred: 194,
    bonusValue: 17,              // valeur du bonus Nutrition Autopilote
    protocolMonthly: 39,
    protocolMonthlyBarred: 59,
    protocol3m: 97
  },
  links: {
    foundations:  "https://app.jimmycoach.com/pay/e9LGJoYY",
    engine:       "https://app.jimmycoach.com/pay/mtbYnKkr",
    bundle:       "https://app.jimmycoach.com/pay/45pFmUqU",
    protocolMois: "https://app.jimmycoach.com/pay/EmCQuXwi",
    protocolTri:  "https://app.jimmycoach.com/pay/EUAGyP5b",
    coaching:     "https://cal.com/jimmycoach/coaching-call"   // réservation de l'appel coaching (s'ouvre en pop-up sur la page)
  },
  /* Vidéos Mux des programmes */
  videos: {
    f: "mwyvIpbQhjGKj7HBK01q01xH0101G4jzs71Que4py9NoDuk",
    e: "s8XwvcvEPUHagCGqCRskoxwicr01aywCGHAQI56qXzRs",
    p: "clbqnIWqsB902q00y2Ni2IQIxl00016LD6Nt400bnVCfx1VY"
  },
  // Retours vidéo de clients en coaching 1:1 (Mux), affichés dans la section coaching
  coachingReviews: [
    { id: "OAE3YMvuffvd3I7qEpYhDlgH9gTSyn4IcpK9xTNPS00I", who: "Oli" },
    { id: "xRkAmwC00Y01700ajeE3014xQ15CynRLTAgonviNltdng5E", who: "Julien" }
  ],
  /* Black Friday : s'allume et s'éteint tout seul entre start et end.
     Test : ajouter ?bf=1 à l'adresse. Simuler une date : ?now=2026-11-28T00:00:00Z */
  blackFriday: {
    start: "2026-11-19T00:00:00+01:00",
    end:   "2026-11-27T23:59:59+01:00",      // vendredi 27 novembre, 23h59 heure de Paris
    bundlePrice: 119,
    referencePrice: 194,                     // prix barré : Foundations 97 + Engine 97 achetés séparément
    bundleCheckoutUrl: "https://app.jimmycoach.com/pay/mv4ZJnv3"
  },
  /* FAQ sous les offres. Les réponses entre crochets sont à valider par Quentin.
     Tant que enabled est false, elle reste cachée en ligne (aperçu : ?faq=1). */
  faq: {
    enabled: false,
    items: [
      ["J'ai accès combien de temps ?", "[Accès à vie. Tu paies une fois.]"],
      ["J'ai besoin de quel matériel ?", "[À compléter par Quentin. La page parle d'alternatives matériel.]"],
      ["C'est pour quel niveau ?", "[À compléter par Quentin.]"],
      ["Où je trouve mes séances ?", "[Dans l'appli Jimmy. Tu choisis ta date de départ.]"]
    ]
  }
};
