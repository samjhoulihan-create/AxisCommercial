import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  BarChart3, 
  CheckCircle2, 
  ChevronDown, 
  Clock, 
  LayoutDashboard, 
  LineChart, 
  Menu, 
  Package, 
  Plus, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  X,
  ArrowUpRight,
  Zap,
  Target,
  Layers,
  Activity
} from 'lucide-react';

// --- Components ---

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline'; 
  className?: string;
  [key: string]: any;
}) => {
  const baseStyles = "px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wider";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20",
    secondary: "bg-white text-black hover:bg-gray-100",
    outline: "border border-black/10 text-black hover:bg-black/5"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const SectionHeading = ({ 
  title, 
  subtitle, 
  light = false,
  centered = true 
}: { 
  title: string; 
  subtitle?: string; 
  light?: boolean;
  centered?: boolean;
}) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`font-mono text-xs uppercase tracking-[0.3em] mb-4 block ${light ? 'text-white/60' : 'text-blue-600'}`}
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-4xl md:text-6xl font-bold tracking-tight text-balance ${light ? 'text-white' : 'text-black'}`}
    >
      {title}
    </motion.h2>
  </div>
);

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/5 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <span className="text-xl font-semibold group-hover:text-blue-600 transition-colors">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="p-2 rounded-full bg-black/5"
        >
          <Plus className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-gray-600 leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Sections ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [salary, setSalary] = useState(100000);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F5] selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl py-4 border-b border-black/5' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rotate-45" />
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">Axis Commercial</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#insight" className="text-sm font-medium hover:text-blue-600 transition-colors">Insight</a>
            <a href="#solution" className="text-sm font-medium hover:text-blue-600 transition-colors">Solution</a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-blue-600 transition-colors">Process</a>
            <a href="#calculator" className="text-sm font-medium hover:text-blue-600 transition-colors">Calculator</a>
            <Button variant="outline" className="py-2 px-6">Book a Strategy Call</Button>
          </div>
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-blue-600 mb-6 block">
                Embedded Commercial Consulting for Australian SMEs
              </span>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-8 text-balance">
                Fix the systems behind your <span className="text-blue-600">cash flow</span>, inventory, and profit.
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
                We help wholesale, ecommerce, and retail businesses between $3M–$30M revenue align supply chain, finance, and marketing into one clear commercial system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button>Book a Strategy Call <ArrowRight className="w-4 h-4" /></Button>
                <Button variant="outline">View Our Process</Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Abstract System Visual */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full hidden lg:block pointer-events-none opacity-20">
          <div className="relative w-full h-full">
            <motion.div 
              animate={{ 
                rotate: 360,
                transition: { duration: 60, repeat: Infinity, ease: "linear" }
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-black/10 rounded-full"
            />
            <motion.div 
              animate={{ 
                rotate: -360,
                transition: { duration: 40, repeat: Infinity, ease: "linear" }
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-black/10 rounded-full"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-blue-600/20 rounded-full flex items-center justify-center">
              <Activity className="w-12 h-12 text-blue-600" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Pattern Interrupt / Insight Section */}
      <section id="insight" className="py-24 bg-black text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold leading-tight mb-8"
              >
                Most growing businesses don’t have a revenue problem. <br/>
                <span className="text-blue-500">They have a control problem.</span>
              </motion.h2>
            </div>
            <div className="space-y-8">
              {[
                { title: "Revenue is up, but cash is still tight.", icon: <TrendingUp className="w-6 h-6" /> },
                { title: "Stock levels are constantly wrong.", icon: <Package className="w-6 h-6" /> },
                { title: "Marketing and operations are disconnected.", icon: <Layers className="w-6 h-6" /> }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-6 p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors"
                >
                  <div className="p-3 bg-blue-600 rounded-lg">
                    {item.icon}
                  </div>
                  <p className="text-xl font-medium">{item.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pain Amplification Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading 
            subtitle="The Reality of Growth" 
            title="Does this sound like your business?" 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Cash tied up in stock", 
                desc: "Your bank balance doesn't reflect your sales because it's sitting on warehouse shelves.",
                icon: <Clock />
              },
              { 
                title: "Best sellers unavailable", 
                desc: "You run out of your most profitable items right when demand peaks.",
                icon: <Target />
              },
              { 
                title: "Slow stock killing margin", 
                desc: "Dead inventory is eating your profits and taking up valuable space.",
                icon: <Zap />
              },
              { 
                title: "Marketing misalignment", 
                desc: "Marketing is pushing demand for products you can't fulfill properly.",
                icon: <Users />
              },
              { 
                title: "No clear visibility", 
                desc: "You're making critical decisions based on gut feel rather than real-time data.",
                icon: <BarChart3 />
              },
              { 
                title: "Reactive decision-making", 
                desc: "You're constantly putting out fires instead of steering the ship.",
                icon: <Activity />
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-8 border border-black/5 rounded-3xl hover:border-blue-600/20 hover:shadow-xl hover:shadow-blue-600/5 transition-all group"
              >
                <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Reframe Section */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              The problem isn’t any one function. <br/>
              <span className="opacity-60">It’s how everything connects.</span>
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-12 leading-relaxed">
              Demand, supply, and cash flow must operate as one cohesive system. Most businesses operate in silos—Axis Commercial builds the bridge.
            </p>
            <div className="inline-flex items-center gap-4 p-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
              <div className="px-6 py-2 bg-white text-blue-600 rounded-full font-bold text-sm uppercase tracking-wider">The Solution</div>
              <span className="pr-6 text-sm font-medium">Axis Commercial fixes the system.</span>
            </div>
          </motion.div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full" />
        </div>
      </section>

      {/* 5. Solution Section */}
      <section id="solution" className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: "Align Demand & Inventory", desc: "Ensure your marketing efforts match your stock availability and cash flow capacity.", icon: <Package /> },
                  { title: "Visibility & Clarity", desc: "Build custom dashboards and reporting structures that show you exactly where your business stands.", icon: <LayoutDashboard /> },
                  { title: "Operating Rhythm", desc: "Establish the structure and meeting cadence required for high-performance commercial decisions.", icon: <LineChart /> }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 flex gap-6"
                  >
                    <div className="shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading 
                centered={false}
                subtitle="Our Approach" 
                title="We fix the commercial system behind your business." 
              />
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We don't just give advice. We embed ourselves in your business to build the systems, processes, and visibility you need to scale profitably.
              </p>
              <Button>Book a Strategy Call</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Credibility Section */}
      <section className="py-24 bg-white border-y border-black/5">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-black text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="relative z-10">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-blue-500 mb-8 block">Operator-Led Consulting</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-12 leading-tight">
                Built by someone who has actually run a $25M business.
              </h2>
              <div className="grid md:grid-cols-3 gap-12">
                <div>
                  <div className="text-4xl font-bold text-blue-500 mb-2">$25M</div>
                  <p className="text-white/60 uppercase tracking-widest text-xs font-bold">Wholesale Ops</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-500 mb-2">P&L</div>
                  <p className="text-white/60 uppercase tracking-widest text-xs font-bold">Full Ownership</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-500 mb-2">10+ YRS</div>
                  <p className="text-white/60 uppercase tracking-widest text-xs font-bold">Real Experience</p>
                </div>
              </div>
              <p className="mt-12 text-xl text-white/80 leading-relaxed max-w-3xl">
                This isn't traditional consulting fluff. I've been in the trenches—managing marketing teams, ecommerce platforms, and complex supply chains. I know what it's like to have your cash tied up in stock and your best sellers out of reach.
              </p>
            </div>
            {/* Abstract background pattern */}
            <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. How It Works */}
      <section id="how-it-works" className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-6">
          <SectionHeading 
            subtitle="The Process" 
            title="Simple. Practical. Effective." 
          />
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-black/5 -translate-y-1/2 z-0" />
            
            {[
              { step: "01", title: "Diagnose", desc: "We identify the specific bottlenecks in your cash flow, inventory, and marketing alignment." },
              { step: "02", title: "Build", desc: "We implement the visibility tools, reporting structures, and operating rhythms your business lacks." },
              { step: "03", title: "Optimize", desc: "We work with your team to improve decision-making and drive profitable, sustainable growth." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-black/5 relative z-10"
              >
                <div className="text-5xl font-bold text-blue-600/10 mb-6">{item.step}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Outcomes Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-blue-50 rounded-[3rem] p-12 md:p-20">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <SectionHeading 
                  centered={false}
                  subtitle="The Results" 
                  title="What control looks like." 
                />
                <div className="space-y-4">
                  {[
                    "Better cash flow control and predictability",
                    "Improved inventory turn and performance",
                    "Clearer forecasting for demand and supply",
                    "Stronger, data-driven commercial decisions",
                    "More profitable growth with less chaos"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                      <span className="text-lg font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5">
                    <div className="text-3xl font-bold text-blue-600 mb-1">92%</div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Inventory Accuracy</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5">
                    <div className="text-3xl font-bold text-blue-600 mb-1">3.5x</div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Cash Velocity</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5">
                    <div className="text-3xl font-bold text-blue-600 mb-1">15%</div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Margin Uplift</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5">
                    <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Visibility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Ideal Client Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6">
          <SectionHeading 
            light
            subtitle="Who We Help" 
            title="Is Axis Commercial right for you?" 
          />
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="p-10 border border-white/10 rounded-[2rem] bg-white/5">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <CheckCircle2 className="text-blue-500" /> This is for you if:
              </h3>
              <ul className="space-y-6">
                {[
                  "You are a product-based SME (Wholesale, Ecommerce, Retail)",
                  "Your revenue is between $3M and $30M",
                  "You have inventory-heavy operations",
                  "You're growing but feel like you're losing control",
                  "You want practical, hands-on support, not just a report"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 border border-white/10 rounded-[2rem] opacity-50">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <X className="text-red-500" /> This is NOT for you if:
              </h3>
              <ul className="space-y-6">
                {[
                  "You are an early-stage startup with no revenue",
                  "You are a service-based business with no inventory",
                  "Your revenue is under $1M",
                  "You just want generic advice or a one-off strategy document",
                  "You aren't ready to change your internal systems"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-white/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Offer Structure */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading 
            subtitle="Engagement" 
            title="How we work together." 
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                title: "Diagnostic", 
                price: "Initial Review", 
                desc: "A deep dive into your current systems, inventory performance, and cash flow bottlenecks.",
                features: ["Full commercial audit", "Bottleneck identification", "Strategic roadmap"]
              },
              { 
                title: "Embedded Support", 
                price: "Ongoing Retainer", 
                desc: "We become part of your team, implementing systems and running your commercial rhythm.",
                features: ["System implementation", "Weekly commercial meetings", "Ongoing optimization"],
                featured: true
              },
              { 
                title: "Project Based", 
                price: "Specific Scope", 
                desc: "Focused support for specific challenges like ERP implementation or supply chain overhaul.",
                features: ["Defined deliverables", "Fixed timeline", "Specialist expertise"]
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className={`p-10 rounded-[2.5rem] border transition-all ${item.featured ? 'bg-black text-white border-black shadow-2xl scale-105 z-10' : 'bg-white text-black border-black/5'}`}
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <div className={`text-sm font-bold uppercase tracking-widest mb-6 ${item.featured ? 'text-blue-400' : 'text-blue-600'}`}>
                  {item.price}
                </div>
                <p className={`mb-8 leading-relaxed ${item.featured ? 'text-white/70' : 'text-gray-600'}`}>
                  {item.desc}
                </p>
                <ul className="space-y-4 mb-10">
                  {item.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-medium">
                      <ShieldCheck className={`w-5 h-5 ${item.featured ? 'text-blue-400' : 'text-blue-600'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant={item.featured ? 'primary' : 'outline'} className="w-full">Enquire Now</Button>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 10.5 Employee Cost Calculator */}
      <section id="calculator" className="py-24 bg-white border-y border-black/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <SectionHeading 
                  centered={false}
                  subtitle="The True Cost" 
                  title="What does an employee actually cost you?" 
                />
                <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                  Most business owners only look at the base salary. In reality, the "true cost" of a full-time senior operator in Australia is often 30-40% higher when you factor in the hidden overheads.
                </p>
                
                <div className="space-y-8">
                  <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                    <h4 className="font-bold mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-blue-600" /> Why Axis Commercial?
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Engaging us as a fractional partner removes the burden of payroll tax, superannuation, leave accruals, and recruitment costs. You get senior-level output for a fraction of the total employment cost.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#0A0A0A] text-white p-10 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="mb-10">
                    <label className="block text-xs font-mono uppercase tracking-widest text-white/40 mb-4">Annual Base Salary (AUD)</label>
                    <div className="flex items-end gap-4 mb-6">
                      <span className="text-4xl md:text-6xl font-bold tracking-tighter">$</span>
                      <input 
                        type="number" 
                        value={salary} 
                        onChange={(e) => setSalary(Number(e.target.value))}
                        className="bg-transparent border-b-2 border-white/20 text-4xl md:text-6xl font-bold tracking-tighter w-full focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <input 
                      type="range" 
                      min="80000" 
                      max="250000" 
                      step="5000"
                      value={salary}
                      onChange={(e) => setSalary(Number(e.target.value))}
                      className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                    <div className="flex justify-between mt-2 text-[10px] font-mono text-white/40 uppercase tracking-widest">
                      <span>$80k</span>
                      <span>$250k+</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-10">
                    {[
                      { label: "Base Salary (Monthly)", value: salary / 12 },
                      { label: "Superannuation (11.5%)", value: (salary * 0.115) / 12 },
                      { label: "Payroll Tax & Workers Comp", value: (salary * 0.065) / 12 },
                      { label: "Leave Accruals & Loading", value: (salary * 0.09) / 12 },
                      { label: "Overheads (IT, Desk, Recruitment)", value: 1250 }
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-white/5">
                        <span className="text-sm text-white/60">{item.label}</span>
                        <span className="font-mono text-sm">${Math.round(item.value).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold uppercase tracking-widest text-blue-400">Total True Monthly Cost</span>
                      <motion.span 
                        key={salary}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold tracking-tighter"
                      >
                        ${Math.round((salary * 1.27 + 15000) / 12).toLocaleString()}
                      </motion.span>
                    </div>
                    <p className="text-[10px] text-white/30 font-mono uppercase tracking-widest text-right">
                      *Estimated for Australian SME context
                    </p>
                  </div>

                  <Button className="w-full mt-10 bg-blue-600 hover:bg-blue-700">
                    Save up to 40% with Axis
                  </Button>
                </div>

                {/* Background glow */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ Section */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <SectionHeading 
              subtitle="Questions" 
              title="Everything you need to know." 
            />
            <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-sm border border-black/5">
              {[
                { 
                  q: "What is a fractional commercial consultant?", 
                  a: "A fractional consultant provides high-level expertise (like a COO or Commercial Director) on a part-time or project basis. You get the experience of a senior operator without the $250k+ full-time salary." 
                },
                { 
                  q: "How is this different from hiring a full-time role?", 
                  a: "Hiring full-time is expensive and often unnecessary for SMEs. We provide the systems and structure first. Once the system is running, you may choose to hire a lower-cost role to manage it, or keep us on for high-level oversight." 
                },
                { 
                  q: "Do you work with Australian SMEs only?", 
                  a: "While we specialize in the Australian market (and understand the local logistics and finance landscape), we work with inventory-heavy businesses globally that have an Australian presence." 
                },
                { 
                  q: "What industries do you work with?", 
                  a: "We specialize in product-based businesses: Wholesale, Ecommerce, Retail, and Distribution. If you hold inventory and sell products, we can help." 
                },
                { 
                  q: "What does engagement look like?", 
                  a: "It starts with a diagnostic. We need to see under the hood. From there, we typically work on a monthly retainer where we are 'embedded' in your business—attending meetings, building tools, and driving decisions." 
                }
              ].map((item, i) => (
                <FAQItem key={i} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. Final CTA */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
              If your business is growing but feels harder to control, let’s fix the system behind it.
            </h2>
            <p className="text-xl md:text-2xl text-white/60 mb-12">
              Practical conversation. No hard sell. Just a clear look at your commercial system.
            </p>
            <div className="flex flex-col items-center gap-6">
              <Button className="px-12 py-6 text-lg">Book a Strategy Call <ArrowUpRight className="w-5 h-5" /></Button>
              <div className="flex items-center gap-2 text-white/40 text-sm font-mono uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" /> 100% Confidential & Practical
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Background visual */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
          <div className="grid grid-cols-12 h-full w-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-white/5 h-full" />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-white border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:row items-center justify-between gap-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 border-2 border-white rotate-45" />
              </div>
              <span className="text-lg font-bold tracking-tighter uppercase">Axis Commercial</span>
            </div>
            <div className="text-white/40 text-sm">
              © {new Date().getFullYear()} Axis Commercial Consulting. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
