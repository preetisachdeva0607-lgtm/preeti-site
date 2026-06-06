export const siteConfig = {
  name: "Student Success Academy",
  tagline: "Empower • Educate • Evolve",
  phone: "+918920038298",
  email: "studentsuccessacademy@gmail.com",
  address: "Senior Citizen Society, Greater Noida, Uttar Pradesh, India",
  hours: "Monday - Saturday, 9:00 AM - 7:00 PM",
  social: {
    linkedin: "https://linkedin.com/in/preeti-sachdeva-13435815b",
    facebook: "https://facebook.com/profile.php?id=100069835637863",
    instagram: "https://www.instagram.com/studentsuccessacademy.in",
  },
  whatsapp: "https://wa.me/918920038298",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Awards", href: "#awards" },
  { label: "Gallery", href: "#gallery" },
  { label: "Wall of Fame", href: "#wall-of-fame" },
  { label: "Books", href: "#books" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
];

export const heroBadges = [
  { icon: "GraduationCap", label: "Parenting Coach" },
  { icon: "Brain", label: "CogniPrint Analyst" },
  { icon: "BookOpen", label: "Educator" },
  { icon: "Lightbulb", label: "NLP Coach" },
];

export const stats = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 1000, suffix: "+", label: "Lives Transformed" },
  { value: 50, suffix: "+", label: "Certifications & Awards" },
  { value: 100, suffix: "%", label: "Satisfaction Rate" },
  { value: 5, suffix: "/5", label: "Google Rating" },
];

export const aboutText = {
  heading: "About Student Success Academy",
  paragraphs: [
    "With over 15 years of dedicated experience in child psychology, positive parenting, and NLP coaching, Student Success Academy has been transforming lives across the Delhi NCR region.",
    "As a certified CogniPrint analyst and parenting coach, we specialize in helping parents understand their children's innate potential through Multiple Intelligence profiling, personalized counselling, and evidence-based parenting strategies.",
    "Our mission is to empower every student with the tools and knowledge to nurture confident, resilient, and emotionally intelligent minds.",
  ],
};

export const services = [
  {
    icon: "Fingerprint",
    title: "CogniPrint Analysis",
    description:
      "Multiple intelligence profiling assessment based on Howard Gardner's MI Theory for children aged 6-18 and adults. Discover innate strengths and optimal learning styles.",
  },
  {
    icon: "Users",
    title: "1-on-1 Counselling",
    description:
      "Personalized sessions for parents and children addressing learning, behavior, and development challenges with evidence-based techniques.",
  },
  {
    icon: "Presentation",
    title: "Parenting Workshops",
    description:
      "Interactive workshops on child psychology, positive parenting techniques, and communication strategies for groups and organizations.",
  },
  {
    icon: "Sparkles",
    title: "Memory Enhancement",
    description:
      "Brain training techniques to improve memory, focus, and retention for children and adults using scientifically-backed methods.",
  },
];

export const awards = [
  {
    title: "Certified Parenting Coach",
    org: "International Association of Counsellors",
    year: "2020",
  },
  {
    title: "DMIT Practitioner Certification",
    org: "Brain Mapping Academy",
    year: "2019",
  },
  {
    title: "NLP Master Practitioner",
    org: "ANLP International",
    year: "2021",
  },
  {
    title: "Excellence in Education Award",
    org: "National Education Forum",
    year: "2022",
  },
  {
    title: "Best Parenting Coach - Delhi NCR",
    org: "Parenting India Awards",
    year: "2023",
  },
  {
    title: "Memory Training Specialist",
    org: "World Memory Sports Council",
    year: "2021",
  },
];

export const wallOfFame = [
  { name: "Aarav S.", age: 14, achievement: "Memory Champion", color: "teal" },
  { name: "Priya M.", age: 12, achievement: "Academic Excellence", color: "orange" },
  { name: "Rohan K.", age: 16, achievement: "Public Speaking", color: "purple" },
  { name: "Ananya D.", age: 10, achievement: "Creative Arts", color: "pink" },
  { name: "Vihaan R.", age: 15, achievement: "Science Olympiad", color: "blue" },
  { name: "Ishita P.", age: 13, achievement: "Leadership Award", color: "green" },
  { name: "Arjun T.", age: 11, achievement: "Math Wizard", color: "amber" },
  { name: "Sanya G.", age: 17, achievement: "Scholarship Winner", color: "rose" },
];

export const books = [
  {
    title: "The User Manual for Your Mind",
    subtitle: "An NLP Guide for Teenagers",
    description:
      "A definitive guide that decodes the teenage brain, offering NLP techniques to handle peer pressure, anxiety, and self-doubt. Perfect for teens looking to master their mindset.",
    price: "499",
    currency: "INR",
    publisher: "Amazon KDP",
    amazonUrl: "https://a.co/d/0ciNGDEV",
    audience: "Teenagers 13-18",
    cover: "/images/book-user-manual.svg",
    buyLabel: "Buy on Amazon",
  },
  {
    title: "Train Your Brain",
    subtitle: "Memory Enhancement",
    description:
      "Practical exercises and proven strategies to boost retention, focus, and recall speed for students tackling demanding curriculums. Unlock your brain's true potential.",
    price: null,
    currency: "INR",
    publisher: null,
    amazonUrl: "https://wa.me/918920038298?text=Hi%20Preeti%2C%20I'm%20interested%20in%20ordering%20Train%20Your%20Brain%20book",
    audience: "Students",
    cover: "/images/book-train-your-brain.svg",
    buyLabel: "Order via WhatsApp",
  },
];

// Keep backward compat for any component still referencing `book`
export const book = books[0];

export const pricing = [
  {
    ageRange: "Ages 6-8",
    price: "3,999",
    features: [
      "Comprehensive profile report",
      "Career guidance overview",
      "Study strategy recommendations",
      "3 counselling sessions",
    ],
    popular: false,
  },
  {
    ageRange: "Ages 9-12",
    price: "4,999",
    features: [
      "Detailed intelligence profile",
      "Career guidance & aptitude mapping",
      "Personalized study strategies",
      "3 counselling sessions",
    ],
    popular: true,
  },
  {
    ageRange: "Ages 13-16",
    price: "5,999",
    features: [
      "Advanced intelligence profiling",
      "Stream selection guidance",
      "Study & exam strategies",
      "3 counselling sessions",
    ],
    popular: false,
  },
  {
    ageRange: "Ages 17+",
    price: "6,999",
    features: [
      "Full intelligence analysis",
      "Career path recommendations",
      "Professional development plan",
      "3 counselling sessions",
    ],
    popular: false,
  },
];

export const testimonials = [
  {
    name: "Meera Sharma",
    text: "Student Success Academy completely changed our approach to parenting. Our son is now more confident and focused than ever before.",
    rating: 5,
  },
  {
    name: "Rajesh Gupta",
    text: "The CogniPrint analysis was eye-opening. We finally understood our daughter's unique strengths and how to support her learning.",
    rating: 5,
  },
  {
    name: "Sunita Verma",
    text: "The parenting workshop was incredibly insightful. I learned practical techniques I use every day with my children.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    text: "Memory enhancement sessions transformed my child's academic performance. Highly recommend Student Success Academy!",
    rating: 5,
  },
  {
    name: "Kavita Singh",
    text: "Professional, caring, and deeply knowledgeable. The team at Student Success Academy is a blessing for parents in Greater Noida.",
    rating: 5,
  },
];

export const blogPosts = [
  {
    title: "Understanding Your Child's Learning Style",
    excerpt:
      "Every child learns differently. Discover the key learning styles and how to identify your child's unique approach to education.",
    date: "2026-03-15",
    category: "Parenting",
    image: "/images/blog-1.jpg",
  },
  {
    title: "The Power of Positive Reinforcement",
    excerpt:
      "Learn how positive reinforcement can transform your child's behavior and build lasting self-confidence.",
    date: "2026-03-01",
    category: "Child Psychology",
    image: "/images/blog-2.jpg",
  },
  {
    title: "Digital Wellness: Screen Time Guidelines for Children",
    excerpt:
      "Navigate the digital age with evidence-based screen time recommendations for different age groups.",
    date: "2026-02-15",
    category: "Digital Wellness",
    image: "/images/blog-3.jpg",
  },
];

export const mediaAppearances = [
  { label: "Parenting Today Podcast", type: "Podcast" },
  { label: "Delhi NCR Parenting Summit", type: "Speaker" },
  { label: "GNIOT Educators Felicitation", type: "Award" },
  { label: "NLP Mastery Webinar", type: "Webinar" },
  { label: "Child Psychology Workshop", type: "Workshop" },
  { label: "Mind & Memory Summit", type: "Speaker" },
  { label: "Parenting India Awards", type: "Award" },
  { label: "Digital Parenting Podcast", type: "Podcast" },
  { label: "Brain Development Seminar", type: "Seminar" },
];

export const communityBenefits = [
  "Exclusive parenting tips & resources",
  "Live Q&A sessions with our experts",
  "Expert guidance on child development",
  "Supportive community of parents",
];
