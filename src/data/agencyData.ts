export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: 'ecommerce' | 'saas' | 'local' | 'corporate';
  description: string;
  image: string;
  tags: string[];
  results: {
    metric: string;
    label: string;
  }[];
  liveDemoUrl?: string;
  features: string[];
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  popularBadge?: boolean;
}

export interface DemoWebsite {
  id: string;
  name: string;
  category: string;
  themeColor: string;
  tagline: string;
  badge: string;
  desktopPreview: {
    heroTitle: string;
    heroSubtitle: string;
    ctaText: string;
    navItems: string[];
    features: { title: string; desc: string; icon: string }[];
    stat: { value: string; label: string };
  };
}

export const DEMO_WEBSITES: DemoWebsite[] = [
  {
    id: 'saas',
    name: 'PulseFlow AI Cloud',
    category: 'SaaS & Tech Startup',
    themeColor: 'from-blue-600 to-indigo-600',
    tagline: 'Modern software platform with real-time analytics',
    badge: 'Tech & B2B',
    desktopPreview: {
      heroTitle: 'Automate Customer Workflows With Intelligent AI',
      heroSubtitle: 'Connect your data sources in seconds and experience real-time actionable intelligence.',
      ctaText: 'Start 14-Day Free Trial',
      navItems: ['Product', 'Solutions', 'Pricing', 'Docs', 'Sign In'],
      features: [
        { title: 'Sub-millisecond Latency', desc: 'Global edge network spanning 320 cities', icon: 'Zap' },
        { title: 'Enterprise Encryption', desc: 'SOC2 Type II and HIPAA compliant vault', icon: 'ShieldCheck' },
        { title: 'Real-time Analytics', desc: 'Visualize 100k+ events every single second', icon: 'BarChart3' },
      ],
      stat: { value: '99.99%', label: 'Uptime SLA' }
    }
  },
  {
    id: 'ecommerce',
    name: 'Maison Luxe Furnishings',
    category: 'High-End E-Commerce',
    themeColor: 'from-amber-600 to-orange-600',
    tagline: 'Luxury artisan furniture with 3D room preview & Apple Pay',
    badge: 'E-Commerce Store',
    desktopPreview: {
      heroTitle: 'Handcrafted Heritage Pieces For The Mindful Home',
      heroSubtitle: 'Sustainable Scandinavian woods crafted by master artisans with lifetime guarantees.',
      ctaText: 'Shop Autumn Collection',
      navItems: ['Living', 'Dining', 'Lighting', 'Artisans', 'Bag (2)'],
      features: [
        { title: 'Instant 1-Click Checkout', desc: 'Stripe, Apple Pay & Klarna integration', icon: 'CreditCard' },
        { title: 'AR 3D Room Visualizer', desc: 'See furniture inside your living room', icon: 'Box' },
        { title: 'White Glove Delivery', desc: 'Complimentary assembly and unboxing', icon: 'Truck' },
      ],
      stat: { value: '₹35L+', label: 'Monthly GMV' }
    }
  },
  {
    id: 'clinic',
    name: 'Aura Dental & Wellness',
    category: 'Healthcare & Clinic',
    themeColor: 'from-teal-600 to-emerald-600',
    tagline: 'Patient-first booking with HIPAA-compliant intake forms',
    badge: 'Medical / Local Practice',
    desktopPreview: {
      heroTitle: 'Gentle, Advanced Dental Care Tailored To Your Smile',
      heroSubtitle: 'Award-winning cosmetic & family dentistry with zero wait times and calm sedation.',
      ctaText: 'Book New Patient Visit',
      navItems: ['Treatments', 'Our Doctors', 'Smile Gallery', 'Reviews', 'Portal'],
      features: [
        { title: 'Online 24/7 Booking', desc: 'Direct sync with clinic practice calendar', icon: 'Calendar' },
        { title: 'Zero Paperwork Intake', desc: 'Digital check-in on phone before arrival', icon: 'FileText' },
        { title: 'Transparent Cost Plans', desc: 'Clear insurance coverage and financing', icon: 'CheckCircle2' },
      ],
      stat: { value: '4.98 ★', label: 'Over 850+ Patient Reviews' }
    }
  },
  {
    id: 'restaurant',
    name: 'L’Osteria Botanica',
    category: 'Bistro & Hospitality',
    themeColor: 'from-rose-600 to-amber-700',
    tagline: 'Michelin-guide dining with OpenTable sync & digital wine list',
    badge: 'Restaurant & Bar',
    desktopPreview: {
      heroTitle: 'Farm-To-Table Italian Alchemy in Downtown',
      heroSubtitle: 'Fresh hand-rolled pasta, biodynamic wines, and wood-fired hearth flavors.',
      ctaText: 'Reserve Table Tonight',
      navItems: ['Seasonal Menu', 'Wine Cellar', 'Private Dining', 'Chef Story', 'Reserve'],
      features: [
        { title: 'Instant Table Reservation', desc: 'Connected to OpenTable & Resy APIs', icon: 'Clock' },
        { title: 'Interactive Dietary Menu', desc: 'Gluten-free, vegan, and allergen filters', icon: 'Utensils' },
        { title: 'Events & Gift Vouchers', desc: 'Instant PDF gift card generation', icon: 'Gift' },
      ],
      stat: { value: '98%', label: 'Weekend Table Fill Rate' }
    }
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'aurora-pay',
    title: 'Aurora Fintech Platform',
    client: 'Aurora Global Inc.',
    category: 'saas',
    description: 'A cutting-edge SaaS marketing website with interactive pricing, live API status sandbox, and lightning-fast page loads.',
    image: 'https://images.pexels.com/photos/29502370/pexels-photo-29502370.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Stripe API', 'Framer Motion'],
    results: [
      { metric: '+285%', label: 'Sign-up Conversion' },
      { metric: '0.4s', label: 'LCP Load Time' },
      { metric: '₹28 Cr', label: 'Seed Capital Raised' }
    ],
    features: ['Custom Dark/Light Theme', 'Interactive Pricing Calculator', 'Stripe Billing Portal', 'CMS Documentation']
  },
  {
    id: 'velour-botanics',
    title: 'Velour Clean Skincare',
    client: 'Velour Organics London',
    category: 'ecommerce',
    description: 'High-conversion DTC Shopify Plus & headless custom store with personalized skin quiz and 1-tap checkout.',
    image: 'https://images.pexels.com/photos/16675632/pexels-photo-16675632.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tags: ['E-Commerce', 'Shopify Plus', 'Tailwind', 'Klaviyo Sync', 'Multi-Currency'],
    results: [
      { metric: '+142%', label: 'Average Order Value' },
      { metric: '3.8%', label: 'Store Conversion Rate' },
      { metric: '100/100', label: 'Mobile Performance' }
    ],
    features: ['Personalized Skin Routine Quiz', 'Subscription Re-order Engine', 'Apple Pay 1-Tap', 'Trustpilot Reviews Sync']
  },
  {
    id: 'vanguard-legal',
    title: 'Vanguard Capital & Legal',
    client: 'Vanguard Partners LLP',
    category: 'corporate',
    description: 'Sophisticated corporate portal for international corporate law and asset management with multilingual capability.',
    image: 'https://images.pexels.com/photos/8534041/pexels-photo-8534041.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tags: ['Corporate', 'TypeScript', 'SEO Engine', 'Lead Scoring', 'Accessibility WCAG AAA'],
    results: [
      { metric: '+410%', label: 'Qualified Inbound Leads' },
      { metric: '#1 Rank', label: 'Target Search Keywords' },
      { metric: '3 Languages', label: 'English, French, German' }
    ],
    features: ['Case Study Filter Engine', 'Attorney Directory with Calendly Sync', 'Encrypted Client Portal', 'Instant PDF Briefs']
  },
  {
    id: 'soleil-bistro',
    title: 'Soleil Artisan Bakery & Cafe',
    client: 'Soleil Hospitality Group',
    category: 'local',
    description: 'Vibrant local culinary destination site featuring live table booking, digital takeout ordering, and automated catering quotes.',
    image: 'https://images.pexels.com/photos/6986455/pexels-photo-6986455.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tags: ['Local SEO', 'Online Ordering', 'Interactive Menu', 'Google Maps API'],
    results: [
      { metric: '3,200+', label: 'Monthly Online Orders' },
      { metric: '4.9 ★', label: 'Google Maps Rating' },
      { metric: '+180%', label: 'Catering Inquiries' }
    ],
    features: ['Real-time Kitchen Order Routing', 'Instagram Feed Integration', 'Allergy Filtered Menu', 'Gift Card Checkout']
  }
];

export const CLIENT_REVIEWS = [
  {
    name: 'Marcus Vance',
    role: 'Founder & CEO',
    company: 'Vance Robotics',
    avatar: 'https://images.pexels.com/photos/7752822/pexels-photo-7752822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    stars: 5,
    text: 'CraftWeb took our confusing product and transformed it into a world-class website that closed our Series A. Visitors immediately understand what we do. Our inbound demo requests skyrocketed by 310% within 30 days.',
    highlight: '310% increase in demo requests'
  },
  {
    name: 'Elena Rostova',
    role: 'Managing Partner',
    company: 'Aura Aesthetics Group',
    avatar: 'https://images.pexels.com/photos/5649997/pexels-photo-5649997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    stars: 5,
    text: 'Building a responsive clinic site that works flawlessly on mobile was our top priority since 82% of patients find us on their phones. CraftWeb delivered ahead of schedule and the design looks like a luxury magazine. Patient bookings have never been higher.',
    highlight: 'Flawless mobile experience & 82% mobile bookings'
  },
  {
    name: 'David Chen',
    role: 'Head of Growth',
    company: 'Kinetix Athletics',
    avatar: 'https://images.pexels.com/photos/38740728/pexels-photo-38740728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    stars: 5,
    text: 'Our previous site was painfully slow and losing checkout conversions. CraftWeb rebuilt our entire store with sub-second speeds and custom checkouts. Our bounce rate dropped in half and revenue increased ₹9.5 Lakhs in the first quarter alone.',
    highlight: 'Bounce rate halved, +₹9.5L Q1 revenue'
  }
];

export const AGENCY_FAQS = [
  {
    q: 'How long does it take to design and launch my website?',
    a: 'Most standard business websites are delivered within 2 to 3 weeks. Fast-track landing pages can be turned around in as little as 5 to 7 business days. Complex custom e-commerce stores or SaaS web applications typically take 4 to 6 weeks. We provide clear milestone dates before kickoff so you always know what to expect.'
  },
  {
    q: 'Will my website look and work great on mobile phones & tablets?',
    a: '100% yes! We practice mobile-first design and rigorous cross-device testing. We test every page across real iOS and Android screens, iPads, and high-resolution desktop monitors to guarantee smooth scrolling, perfect readability, and swift touch interactions.'
  },
  {
    q: 'Do I own the website and source code once it is completed?',
    a: 'Absolutely. Unlike agencies that lock you into proprietary restrictive platforms, you own 100% of your code, design assets, domain, and content. There are zero licensing fees or hostage clauses. You receive full GitHub repository access and admin credentials.'
  },
  {
    q: 'Can I easily edit text, images, and add blog posts myself?',
    a: 'Yes. We integrate user-friendly headless CMS platforms (like Sanity, Strapi, or WordPress backend) where anyone on your team can edit text, swap images, add blog posts, or launch new products without writing a single line of code.'
  },
  {
    q: 'What is included in your SEO and Speed optimization?',
    a: 'Every site we build comes with technical on-page SEO: optimized semantic HTML, automated OpenGraph social preview cards, schema markup, XML sitemaps, image compression with WebP/AVIF, and guaranteed 95+ Google PageSpeed scores for top search ranking.'
  },
  {
    q: 'What happens after the website goes live? Do you offer support?',
    a: 'Every project includes 30 days of complimentary post-launch support, bug fixing, and team training. We also offer optional monthly Care & Growth retainers that cover security patches, automated backups, speed tuning, and ongoing feature updates.'
  }
];
