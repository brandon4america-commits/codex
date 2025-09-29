import React from 'react';

// --- Data & Constants ------------------------------------------------------
const navLinks = [
  { id: 'home', title: 'Home' },
  { id: 'challenge', title: 'The Challenge' },
  { id: 'portfolio', title: 'Portfolio' },
  { id: 'roadmap', title: 'Roadmap' },
  { id: 'support', title: 'Get Involved' },
];

// --- SVG Icons (for a professional look) -----------------------------------
const MenuIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const XIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const FlagIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
    <line x1="4" y1="22" x2="4" y2="15"></line>
  </svg>
);

const UsersIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const TargetIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

// --- Mock Data based on the Proposal ---
const mockMascots = [
  {
    id: 1,
    state: 'California',
    type: 'Shape',
    title: 'The Golden Shape',
    description:
      'A mascot shaped like the state of California, radiating with golden sun rays.',
    imageUrl: 'https://placehold.co/600x400/FFD700/000000?text=CA+Shape',
  },
  {
    id: 2,
    state: 'California',
    type: 'Culture',
    title: 'Poppy the Bear',
    description:
      'A friendly bear adorned with the state flower, the California Poppy, representing natural heritage.',
    imageUrl: 'https://placehold.co/600x400/E69138/FFFFFF?text=CA+Culture',
  },
  {
    id: 3,
    state: 'California',
    type: 'Sport',
    title: 'Wave Rider',
    description:
      "A dynamic character embodying California's surf culture and forward-moving energy.",
    imageUrl: 'https://placehold.co/600x400/4FC3F7/FFFFFF?text=CA+Sport',
  },
  {
    id: 4,
    state: 'Texas',
    type: 'Shape',
    title: 'The Lone Star',
    description:
      'The iconic shape of Texas with a single, bright star at its heart.',
    imageUrl: 'https://placehold.co/600x400/BF0A30/FFFFFF?text=TX+Shape',
  },
  {
    id: 5,
    state: 'Texas',
    type: 'Culture',
    title: 'Armadillo Armorer',
    description:
      'A mascot in stylized cowboy attire, celebrating Texas heritage with a modern twist.',
    imageUrl: 'https://placehold.co/600x400/966F33/FFFFFF?text=TX+Culture',
  },
  {
    id: 6,
    state: 'Florida',
    type: 'Sport',
    title: 'Rocket Racer',
    description:
      'A futuristic mascot inspired by the Space Coast, symbolizing innovation and speed.',
    imageUrl: 'https://placehold.co/600x400/FF6347/FFFFFF?text=FL+Sport',
  },
];

const roadmapPhases = [
  {
    number: 1,
    title: 'LA Pilot',
    date: 'Q4 2025 – Q2 2026',
    description: 'Launch with LAUSD & LAPL, deploy MVP webapp, and run first workshops.',
  },
  {
    number: 2,
    title: 'Schools & Libraries',
    date: 'Q2 – Q4 2026',
    description: 'California-wide rollout and national onboarding waves begin.',
  },
  {
    number: 3,
    title: 'Local Government',
    date: 'Q3 2026 – Q2 2027',
    description:
      'City/county showcases, fair integrations, and official recognition.',
  },
  {
    number: 4,
    title: 'National Rollout & Voting',
    date: 'Q3 – Q4 2027',
    description:
      'Regional finals, national online voting portal, and media features.',
  },
  {
    number: 5,
    title: 'Olympic Integration',
    date: 'Q1 – Summer 2028',
    description:
      'Torch Relay tie-ins, Fan Zone exhibitions, and Opening Ceremony moments.',
  },
];

const kpiData = [
  { value: '50', label: 'States Participating' },
  { value: '2,500+', label: 'Schools Engaged' },
  { value: '1,000+', label: 'Library Branches' },
  { value: '5M+', label: 'Votes Targeted' },
  { value: '151', label: 'Mascots to be Created' },
  { value: '50M+', label: 'Digital Impressions' },
];

const KPIHighlights = () => (
  <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
    {kpiData.map((item) => (
      <div
        key={item.label}
        className="rounded-xl border border-gray-200 bg-white/80 p-4 shadow-sm"
      >
        <div className="text-2xl font-bold text-gray-900">{item.value}</div>
        <div className="mt-1 text-xs uppercase tracking-wide text-gray-500">
          {item.label}
        </div>
      </div>
    ))}
  </div>
);

const FilterButton = ({ isActive, label, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={isActive}
    className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
      isActive
        ? 'border border-transparent bg-blue-600 text-white shadow-sm'
        : 'border bg-white text-gray-700 hover:bg-gray-100'
    }`}
  >
    {label}
  </button>
);

// --- Main App Component ---
export default function App() {
  const getInitialSection = () => {
    if (typeof window === 'undefined') {
      return 'home';
    }

    const hash = window.location.hash.replace('#', '');
    return navLinks.some((link) => link.id === hash) ? hash : 'home';
  };

  const [activeSection, setActiveSection] = React.useState(getInitialSection);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleNavClick = React.useCallback((section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  }, []);

  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (navLinks.some((link) => link.id === hash)) {
        setActiveSection(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  React.useEffect(() => {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      return undefined;
    }

    const sectionElements = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (sectionElements.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0.25, 0.5, 0.75, 1] },
    );

    sectionElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="bg-gray-50 text-gray-800 min-h-screen"
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-gray-900">
            National Mascot Challenge <span className="text-blue-600">| LA28</span>
          </div>
          <nav
            className="hidden items-center space-x-8 md:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors text-gray-600 hover:text-blue-600 ${
                  activeSection === link.id
                    ? 'font-semibold text-blue-600'
                    : ''
                }`}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.title}
              </a>
            ))}
          </nav>
          <a
            href="#support"
            onClick={() => handleNavClick('support')}
            className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-transform hover:scale-105"
          >
            Sponsor
          </a>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800"
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="md:hidden border-t border-gray-200 bg-white"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className="block px-6 py-3 text-center text-gray-600 hover:bg-gray-100"
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.title}
              </a>
            ))}
            <div className="p-4">
              <a
                href="#support"
                onClick={() => handleNavClick('support')}
                className="block text-center bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
              >
                Sponsor
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main id="main-content">
        {activeSection === 'home' && <HeroSection onNavClick={handleNavClick} />}
        {activeSection === 'challenge' && <ChallengeSection />}
        {activeSection === 'portfolio' && <PortfolioSection />}
        {activeSection === 'roadmap' && <RoadmapSection />}
        {activeSection === 'support' && <SupportSection />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="container mx-auto px-6 py-8 text-center text-gray-500">
          <p className="font-bold text-lg text-gray-800 mb-2">
            National Mascot Challenge
          </p>
          <p>
            &copy; {new Date().getFullYear()} · A civic-arts initiative presented in the
            spirit of the LA28 Olympic &amp; Paralympic Games.
          </p>
          <p className="text-sm mt-4">
            Contact: Program Lead (TBD) · Partnerships (TBD) · Educator Support (TBD)
          </p>
        </div>
      </footer>
    </div>
  );
}

// --- Page Section Components ---

const HeroSection = ({ onNavClick }) => (
  <div id="home" className="relative text-center py-20 md:py-32 bg-white">
    <div className="absolute inset-0 bg-grid-gray-200/40 [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
    <div className="container mx-auto px-6 relative">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-gray-900 leading-tight">
        50 States. 1 Nation. <br />
        <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-teal-400 bg-clip-text text-transparent">
          Countless Mascots.
        </span>
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
        A USA-first civic-arts campaign mobilizing communities to co-create a
        national portfolio of mascots for the LA28 Games.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href="#challenge"
          onClick={() => onNavClick('challenge')}
          className="bg-blue-600 text-white text-lg px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-transform hover:scale-105 shadow-md w-full sm:w-auto"
        >
          Learn About the Challenge
        </a>
        <a
          href="#portfolio"
          onClick={() => onNavClick('portfolio')}
          className="bg-white text-blue-600 border border-gray-300 text-lg px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto"
        >
          View Current Submissions
        </a>
      </div>
      <KPIHighlights />
    </div>
  </div>
);

const Section = ({ id, title, subtitle, children }) => (
  <div id={id} className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">{subtitle}</p>
      </div>
      {children}
    </div>
  </div>
);

const challengePillars = [
  {
    number: '01',
    title: 'State Shape',
    description:
      "A baseline mascot styled as the state's geographic outline. The foundation of each trio.",
  },
  {
    number: '02',
    title: 'Costume & Culture',
    description:
      'Celebrating heritage, local traditions, historical attire, and cultural identity.',
  },
  {
    number: '03',
    title: 'Sport & Future',
    description:
      'Embodying athletic energy, innovation, and a forward-looking vision for the state.',
  },
];

const challengeOutcomes = [
  {
    title: 'Civic Unity',
    description: 'Celebrate state identities under a national banner.',
    Icon: FlagIcon,
  },
  {
    title: 'Access & Inclusion',
    description: 'Engage urban, rural, tribal, and Title I communities.',
    Icon: UsersIcon,
  },
  {
    title: 'Educational Impact',
    description: 'Cross-disciplinary learning in art, civics, and history.',
    Icon: TargetIcon,
  },
  {
    title: 'Lasting Legacy',
    description: 'Open educational resources and a touring exhibition.',
    Icon: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </svg>
    ),
  },
];

const ChallengeSection = () => (
  <Section
    id="challenge"
    title="The National Mascot Challenge"
    subtitle="Celebrating state identity, civic unity, and creative expression ahead of LA28."
  >
    <div className="mx-auto grid max-w-4xl gap-8 text-center md:grid-cols-3">
      {challengePillars.map((pillar) => (
        <article
          key={pillar.number}
          className="rounded-xl border border-gray-200 bg-gray-50 p-8"
        >
          <p className="mb-2 text-3xl font-bold text-blue-600">{pillar.number}</p>
          <h3 className="text-xl font-semibold text-gray-900">{pillar.title}</h3>
          <p className="mt-2 text-gray-600">{pillar.description}</p>
        </article>
      ))}
    </div>
    <div className="mx-auto mt-12 max-w-4xl rounded-xl border-l-4 border-blue-500 bg-blue-50 p-8 text-center">
      <h3 className="text-2xl font-semibold text-gray-900">Objectives &amp; Outcomes</h3>
      <div className="mt-6 grid gap-6 text-left sm:grid-cols-2 md:grid-cols-4">
        {challengeOutcomes.map(({ title, description, Icon }) => (
          <div key={title} className="flex items-start space-x-3">
            <Icon className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600" />
            <div>
              <h4 className="font-semibold text-gray-900">{title}</h4>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const filters = ['All', 'Shape', 'Culture', 'Sport'];

const MascotCard = ({ mascot }) => (
  <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-shadow hover:shadow-xl">
    <img
      src={mascot.imageUrl}
      alt={mascot.title}
      className="h-48 w-full object-cover"
      loading="lazy"
    />
    <div className="p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
        {mascot.state} · {mascot.type}
      </p>
      <h3 className="mt-1 text-xl font-bold text-gray-900">{mascot.title}</h3>
      <p className="mt-2 text-sm text-gray-600">{mascot.description}</p>
    </div>
  </article>
);

const PortfolioSection = () => {
  const [filter, setFilter] = React.useState('All');

  const filteredMascots = React.useMemo(
    () =>
      mockMascots.filter(
        (mascot) => filter === 'All' || mascot.type === filter,
      ),
    [filter],
  );

  return (
    <Section
      id="portfolio"
      title="Mascot Portfolio"
      subtitle="Explore the creative submissions from schools and communities across the nation."
    >
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        {filters.map((filterOption) => (
          <FilterButton
            key={filterOption}
            label={filterOption}
            isActive={filter === filterOption}
            onClick={() => setFilter(filterOption)}
          />
        ))}
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredMascots.map((mascot) => (
          <MascotCard key={mascot.id} mascot={mascot} />
        ))}
        <aside className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900">
            Your State&apos;s Mascot Awaits!
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Submit your idea and see it featured here. Toolkits and guidelines are
            available now.
          </p>
          <a
            href="#challenge"
            className="mt-4 rounded-lg bg-gray-200 px-5 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            Get Started
          </a>
        </aside>
      </div>
    </Section>
  );
};

const RoadmapCard = ({ phase, align = 'left', className = '' }) => (
  <div
    className={`rounded-xl border border-gray-200 bg-white p-6 shadow-md ${
      align === 'right' ? 'text-right' : 'text-left'
    } ${className}`}
  >
    <p className="text-sm font-semibold text-blue-600">{phase.date}</p>
    <h3 className="mt-1 text-xl font-bold text-gray-900">{phase.title}</h3>
    <p className="mt-2 text-sm text-gray-600">{phase.description}</p>
  </div>
);

const RoadmapItem = ({ alignment, phase }) => {
  const isLeft = alignment === 'left';

  return (
    <li
      className="relative flex w-full flex-col items-center gap-6 md:flex-row md:gap-8 md:after:absolute md:after:left-1/2 md:after:top-12 md:after:h-full md:after:w-0.5 md:after:-translate-x-1/2 md:after:bg-gray-200 md:last:after:hidden"
    >
      <div className="hidden w-full md:flex md:w-1/2 md:justify-end md:pr-8">
        {isLeft ? (
          <RoadmapCard phase={phase} align="right" />
        ) : (
          <div className="hidden h-px w-full md:block" aria-hidden="true" />
        )}
      </div>
      <div className="relative flex items-center justify-center">
        <span className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white shadow-md">
          {phase.number}
        </span>
      </div>
      <div className="w-full md:w-1/2 md:pl-8">
        <RoadmapCard
          phase={phase}
          className={isLeft ? 'md:hidden' : ''}
        />
      </div>
    </li>
  );
};

const RoadmapSection = () => (
  <Section
    id="roadmap"
    title="Project Roadmap"
    subtitle="Our phased approach ensures a successful national rollout from 2025 to 2028."
  >
    <div className="relative mx-auto max-w-5xl">
      <span
        className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gray-200 md:block"
        aria-hidden="true"
      ></span>
      <ol className="flex flex-col gap-12 md:gap-16">
        {roadmapPhases.map((phase, index) => (
          <RoadmapItem
            key={phase.number}
            phase={phase}
            alignment={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </ol>
    </div>
  </Section>
);

const educatorResources = [
  {
    label: 'Download Educator Toolkit (PDF)',
    href: '#',
  },
  {
    label: 'Register Your School/Library',
    href: '#',
  },
];

const SupportLink = ({ href, label }) => (
  <a
    href={href}
    className="block w-full rounded-lg border border-blue-200 bg-blue-50 p-4 text-center font-semibold text-blue-700 transition hover:bg-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
  >
    {label}
  </a>
);

const SupportSection = () => (
  <Section
    id="support"
    title="Get Involved &amp; Support the Challenge"
    subtitle="This national initiative is made possible through a blend of public and private support."
  >
    <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
      <div>
        <h3 className="mb-4 text-2xl font-bold text-gray-900">
          For Educators, Libraries &amp; Local Governments
        </h3>
        <p className="mb-6 text-gray-600">
          Download our free toolkits, lesson plans, and workshop guides to bring the National Mascot Challenge to your community.
          Register your school or library to get started.
        </p>
        <div className="space-y-4">
          {educatorResources.map((resource) => (
            <SupportLink key={resource.label} href={resource.href} label={resource.label} />
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-2xl font-bold text-gray-900">
          For Corporate &amp; Media Sponsors
        </h3>
        <p className="mb-6 text-gray-600">
          Partner with us to engage millions of students, educators, and families across the USA. Explore our sponsorship
          packages to find the right fit for your organization.
        </p>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h4 className="text-lg font-bold text-gray-900">Funding Progress (Phase 1 &amp; 2)</h4>
          <p className="mb-3 text-sm text-gray-500">Target: $1.5M</p>
          <div className="h-4 w-full rounded-full bg-gray-200" role="presentation">
            <div
              className="h-4 rounded-full bg-gradient-to-r from-blue-500 to-teal-400"
              style={{ width: '38%' }}
              aria-hidden="true"
            ></div>
          </div>
          <p className="mt-1 text-right text-xs font-semibold text-gray-700">38% Funded</p>
        </div>
        <a
          href="#"
          className="mt-6 block w-full rounded-lg bg-blue-600 p-4 text-center font-semibold text-white shadow-md transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        >
          View Sponsorship Packages
        </a>
      </div>
    </div>
  </Section>
);

export { HeroSection, ChallengeSection, PortfolioSection, RoadmapSection, SupportSection };
