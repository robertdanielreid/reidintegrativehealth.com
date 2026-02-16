export const siteConfig = {
  name: "REID INTEGRATIVE",
  title: "Reid Integrative Nutrition",
  description: "Ottawa’s premier integrative health hub. Specializing in mold toxicity, Lyme support, and executive performance.",
  location: "Ottawa, Ontario | Virtual Canada-Wide",
  contact: {
    email: "info@reidintegrative.ca",
    phone: "613-555-0123", // Placeholder
  },
  socials: {
    instagram: "https://instagram.com/reidintegrative",
  }
};

export const services = [
  {
    id: "integrative-nutrition",
    title: "1:1 Integrative Nutrition",
    description: "Personalized consulting focused on health optimization and chronic illness support.",
    features: [
      "Advanced Lab Interpretation",
      "Custom Supplement Protocols",
      "Lifestyle Optimization (EMF, Sleep)",
      "Continuous Monitoring"
    ],
    pricing: [
      { label: "Initial Consult", price: "$197 – $297" },
      { label: "Follow-Ups", price: "$97 – $147" },
      { label: "Transformation Package", price: "3-Month Intensive" }
    ]
  },
  {
    id: "corporate-wellness",
    title: "Corporate Wellness",
    description: "Executive workshops and seminars designed for high-performing teams.",
    features: [
      "Executive Performance Workshops",
      "Stress Management Seminars",
      "Biohacking for Productivity"
    ]
  }
];

export const digitalPrograms = [
  {
    title: "Mold Recovery Starter Plan",
    description: "A comprehensive guide to beginning your recovery from environmental mold toxicity.",
    price: "$49"
  },
  {
    title: "Neuroinflammation Support",
    description: "Targeted nutritional strategies to reduce brain fog and support cognitive health.",
    price: "$67"
  },
  {
    title: "Biohacker Foundations",
    description: "The essential data-driven protocols for optimizing longevity and performance.",
    price: "$89"
  }
];

export const shopProtocols = [
  {
    title: "The Biofilm Stack",
    description: "Fibrinolytics & Binders for complex detoxification support.",
    items: ["Proteolytic Enzymes", "Activated Charcoal/Clay", "Zeolite Binders"]
  },
  {
    title: "The Energy Stack",
    description: "Mitochondrial support for sustained cellular energy.",
    items: ["CoQ10 (Ubiquinol)", "PQQ", "NAD+ Precursors"]
  },
  {
    title: "The Inflammation Stack",
    description: "Liposomal Curcumin & Resolvins for systemic inflammation management.",
    items: ["Liposomal Curcumin", "SPM Resolvins", "Boswellia Serrata"]
  }
];

export const blogPosts = [
  {
    slug: "microplastics-mitochondria",
    title: "Microplastics & Mitochondria: The Invisible Drain on Your Energy",
    excerpt: "How environmental toxins are impacting our cellular powerhouses and what you can do about it.",
    content: `
      <p>Recent research in environmental toxicology has begun to shed light on a concerning trend: the presence of microplastics and nanoplastics within human tissues. But even more alarming is how these microscopic particles interact with our mitochondria—the powerhouses of our cells.</p>

      <h3>The Mechanism of Disruption</h3>
      <p>Mitochondria are responsible for producing ATP, the energy currency of the body. Nanoplastics, due to their size, can easily penetrate cellular membranes. Once inside, they cause oxidative stress, leading to a decrease in mitochondrial membrane potential. This essentially "shorts out" the cellular battery, resulting in chronic fatigue that doesn't respond to traditional rest.</p>

      <h3>Clinical Implications</h3>
      <p>At Reid Integrative, we look beyond basic blood panels. When a client presents with "unexplained" fatigue, we consider the environmental load. Supporting mitochondrial health requires a multi-faceted approach: reducing exposure, enhancing natural detoxification pathways (like the glymphatic system and liver phase II detoxification), and providing the specific co-factors needed for ATP production.</p>

      <h3>Actionable Steps</h3>
      <ul>
        <li>Filter your water using high-quality reverse osmosis.</li>
        <li>Avoid heating food in plastic containers.</li>
        <li>Support glutathione production through N-Acetyl Cysteine (NAC) and sulfur-rich foods.</li>
      </ul>
    `,
    date: "2024-05-15",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
  },
  {
    slug: "recognizing-mold-toxicity",
    title: "Beyond Fatigue: Recognizing the Signs of Mold Toxicity",
    excerpt: "Mold toxicity can manifest in mysterious ways. Learn the clinical markers and symptoms to watch for.",
    content: `
      <p>Chronic Inflammatory Response Syndrome (CIRS), often triggered by water-damaged buildings, is one of the most under-diagnosed conditions in modern clinical practice. In Ottawa's climate, basement dampness and aging infrastructure make this a significant local health issue.</p>

      <h3>The Symptom Cluster</h3>
      <p>Mold toxicity rarely presents as a simple allergy. Instead, it affects multiple systems:
        <ul>
          <li><strong>Neurological:</strong> Brain fog, executive dysfunction, and "ice-pick" headaches.</li>
          <li><strong>Physical:</strong> Migratory joint pain and static shocks (due to ADH/osmolality imbalances).</li>
          <li><strong>Respiratory:</strong> Chronic sinus congestion and shortness of breath.</li>
        </ul>
      </p>

      <h3>Our Approach</h3>
      <p>We utilize the Shoemaker Protocol and subsequent integrative refinements to help clients navigate recovery. This involves removing the source of exposure, using specific sequestering agents (binders), and addressing the resulting hormonal and inflammatory imbalances.</p>
    `,
    date: "2024-05-10",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop"
  },
  {
    slug: "red-light-therapy",
    title: "Red Light Therapy: Why We Use High-Output Panels",
    excerpt: "Not all photobiomodulation is created equal. We dive into the science of irradiance and dosage.",
    content: `
      <p>Red Light Therapy (RLT), or photobiomodulation, has moved from the fringes of biohacking into the clinical spotlight. However, the market is flooded with underpowered devices that fail to deliver a therapeutic dose.</p>

      <h3>The Science of Irradiance</h3>
      <p>For RLT to be effective, the light must penetrate the skin to reach the mitochondria in deeper tissues. This requires high irradiance (measured in mW/cm²). Many consumer-grade masks or "light belts" lack the power density to achieve these results.</p>

      <h3>Why It Matters for Recovery</h3>
      <p>At the Reid Longevity Studio (Coming Soon), we utilize high-output panels that provide the specific wavelengths (660nm and 850nm) proven to:
        <ul>
          <li>Enhance collagen production and skin health.</li>
          <li>Reduce systemic inflammation.</li>
          <li>Accelerate muscle recovery and mitochondrial function.</li>
        </ul>
      </p>
    `,
    date: "2024-05-05",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop"
  }
];
