import { useParams, Link } from 'react-router';
import { ArrowLeft, Calendar, Users, Trophy, Gamepad2, ExternalLink, Clock } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ProjectCarousel } from '../components/ProjectCarousel';
import { motion } from 'motion/react';
import { DynamicBackground } from '../components/DynamicBackground';

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}

/**
 * CUSTOMIZE YOUR PROJECT COLORS HERE
 *
 * Each game has an 'accentColor' property.
 * Make sure the colors here match the ones in Home.tsx for consistency.
 */
const gamesData: Record<string, {
  title: string;
  role: string;
  year: string;
  platform: string;
  team: string;
  timeSpent: string;
  pageLink: string;
  overview: string;
  responsibilities: string[];
  images: { url: string; caption: string }[];
  videos: { url: string; caption: string }[];
  designDetails: { title: string; description: string; media?: { type: 'image' | 'video'; url: string } }[];
  achievements: string[];
  accentColor: string;
}> = {
  'fantasy-quest': {
    title: 'Fantasy Quest',
    role: 'Lead Game Designer',
    year: '2025',
    platform: 'PC, Console',
    team: '20+ developers',
    timeSpent: '18 months',
    pageLink: 'https://store.steampowered.com/fantasy-quest',
    overview: 'Fantasy Quest is an epic RPG adventure that reimagines traditional combat mechanics with a unique stance-based system. Players embark on a journey through a richly detailed fantasy world where every choice matters and impacts the branching narrative.',
    accentColor: '#8B5CF6',
    responsibilities: [
      'Led the design of the core combat system and player progression',
      'Designed and balanced 50+ unique abilities across 8 character classes',
      'Created narrative branching system with 15+ major story outcomes',
      'Collaborated with writers to develop quest design and world-building',
      'Conducted playtesting sessions and iterated based on player feedback'
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&q=80', caption: 'Combat system in action' },
      { url: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=1200&q=80', caption: 'Character customization screen' },
      { url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80', caption: 'Open world environment' },
      { url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80', caption: 'Boss battle mechanics' }
    ],
    videos: [
      { url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', caption: 'Gameplay trailer showcasing combat mechanics' },
      { url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', caption: 'Developer walkthrough of level design' }
    ],
    designDetails: [
      {
        title: 'Combat System Design',
        description: 'Detailed breakdown of the stance-based combat mechanics, including balance considerations and player feedback integration. The system allows players to switch between offensive, defensive, and balanced stances in real-time, creating dynamic combat scenarios.',
        media: { type: 'image', url: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80' }
      },
      {
        title: 'Progression Framework',
        description: 'Documentation of the character progression system, skill trees, and reward structures designed to maintain player engagement. Features include multiple progression paths, meaningful choices at each level, and customizable playstyles.',
        media: { type: 'image', url: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&q=80' }
      },
      {
        title: 'Narrative Design',
        description: 'Outline of the branching narrative structure, key decision points, and how player choices impact the story. The narrative system tracks over 50 variables to create unique story outcomes based on player decisions throughout the game.'
      }
    ],
    achievements: [
      'Achieved 90+ Metacritic score',
      'Over 2 million copies sold in first month',
      'Nominated for Best Game Design at Game Awards 2025'
    ]
  },
  'puzzle-kingdom': {
    title: 'Puzzle Kingdom',
    role: 'Game Designer',
    year: '2024',
    platform: 'iOS, Android',
    team: '12 developers',
    timeSpent: '14 months',
    pageLink: 'https://apps.apple.com/puzzle-kingdom',
    overview: 'A unique hybrid game that combines match-3 puzzle mechanics with kingdom building strategy. Players solve puzzles to gather resources and build their medieval kingdom.',
    accentColor: '#F59E0B',
    responsibilities: [
      'Designed core puzzle mechanics and power-up systems',
      'Created kingdom building progression and resource economy',
      'Balanced difficulty curve across 500+ levels',
      'Designed monetization strategy and IAP offerings',
      'Implemented A/B testing framework for feature optimization'
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80', caption: 'Match-3 puzzle gameplay' },
      { url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&q=80', caption: 'Kingdom overview screen' },
      { url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80', caption: 'Resource management UI' }
    ],
    videos: [
      { url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', caption: 'Core gameplay loop demonstration' }
    ],
    designDetails: [
      {
        title: 'Economy Design',
        description: 'Comprehensive resource economy design including generation rates, sinks, and balance mechanics. Created sustainable loops that encourage long-term engagement.',
        media: { type: 'image', url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80' }
      },
      {
        title: 'Level Design Guidelines',
        description: 'Framework for creating engaging puzzle levels with appropriate difficulty progression across 500+ levels.'
      }
    ],
    achievements: [
      '10 million+ downloads',
      'Featured by Apple App Store',
      '4.7 star average rating'
    ]
  },
  'space-raiders': {
    title: 'Space Raiders',
    role: 'Systems Designer',
    year: '2024',
    platform: 'PC, Console',
    team: '15 developers',
    timeSpent: '12 months',
    pageLink: 'https://store.steampowered.com/space-raiders',
    overview: 'A fast-paced space shooter featuring procedurally generated levels and deep upgrade systems. Players pilot customizable spacecraft through endless waves of enemies.',
    accentColor: '#3B82F6',
    responsibilities: [
      'Designed procedural level generation algorithms',
      'Created weapon and upgrade progression systems',
      'Balanced enemy AI and difficulty scaling',
      'Designed scoring and combo systems',
      'Implemented player feedback and juice mechanics'
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=1200&q=80', caption: 'Space combat gameplay' },
      { url: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200&q=80', caption: 'Ship upgrade interface' },
      { url: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200&q=80', caption: 'Boss encounter design' }
    ],
    videos: [
      { url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', caption: 'Gameplay montage' }
    ],
    designDetails: [
      {
        title: 'Procedural Generation System',
        description: 'Technical design for the procedural level generation ensuring variety and fairness. Built custom algorithms to create balanced yet unpredictable encounters.',
        media: { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
      },
      {
        title: 'Progression Balance',
        description: 'Documentation of upgrade systems and progression curves to maintain player engagement throughout hundreds of runs.',
        media: { type: 'image', url: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80' }
      }
    ],
    achievements: [
      'Steam "Very Positive" rating',
      'Featured in Summer Game Fest',
      '500K+ players in first year'
    ]
  },
  'city-builder': {
    title: 'Metropolis',
    role: 'Economy Designer',
    year: '2023',
    platform: 'PC',
    team: '25+ developers',
    timeSpent: '20 months',
    pageLink: 'https://store.steampowered.com/metropolis',
    overview: 'An intricate city-building simulation with realistic economic systems and resource management. Players design and manage a thriving metropolis.',
    accentColor: '#10B981',
    responsibilities: [
      'Designed complex economic simulation systems',
      'Created resource production and consumption chains',
      'Balanced city services and citizen satisfaction mechanics',
      'Designed disaster and crisis management systems',
      'Collaborated with programmers on simulation optimization'
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&q=80', caption: 'City overview' },
      { url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80', caption: 'Economic dashboard' },
      { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80', caption: 'Industrial zones' }
    ],
    videos: [
      { url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', caption: 'City building mechanics' }
    ],
    designDetails: [
      {
        title: 'Economic Simulation Model',
        description: 'Detailed economic formulas and balance considerations for the city simulation. Created interconnected systems modeling real-world economic principles.',
        media: { type: 'image', url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80' }
      }
    ],
    achievements: [
      'Simulation Game of the Year 2023',
      '1 million+ copies sold',
      'Active modding community'
    ]
  },
  'horror-escape': {
    title: 'Dark Halls',
    role: 'Level Designer',
    year: '2023',
    platform: 'PC, Console',
    team: '10 developers',
    timeSpent: '10 months',
    pageLink: 'https://store.steampowered.com/dark-halls',
    overview: 'A psychological horror escape game with atmospheric level design. Players must navigate through haunted locations while solving environmental puzzles.',
    accentColor: '#EF4444',
    responsibilities: [
      'Designed all game levels and environmental puzzles',
      'Created pacing and tension through level layout',
      'Placed environmental storytelling elements',
      'Designed lighting and audio trigger systems',
      'Conducted playtests to refine scare timing'
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&q=80', caption: 'Dark corridor atmosphere' },
      { url: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&q=80', caption: 'Environmental puzzle design' },
      { url: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=1200&q=80', caption: 'Key location design' }
    ],
    videos: [
      { url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', caption: 'Level walkthrough' }
    ],
    designDetails: [
      {
        title: 'Level Design Philosophy',
        description: 'Approach to creating tension and atmosphere through level design. Used architectural psychology and environmental storytelling to create memorable horror experiences.',
        media: { type: 'image', url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&q=80' }
      }
    ],
    achievements: [
      'IGN Horror Game of the Month',
      'Over 500K players',
      'Cult following and fan community'
    ]
  },
  'racing-legends': {
    title: 'Racing Legends',
    role: 'Gameplay Designer',
    year: '2022',
    platform: 'Multi-platform',
    team: '18 developers',
    timeSpent: '16 months',
    pageLink: 'https://www.racing-legends.com',
    overview: 'An arcade racing game with dynamic weather systems and extensive vehicle customization. Features both single-player and competitive multiplayer modes.',
    accentColor: '#EC4899',
    responsibilities: [
      'Designed core driving mechanics and handling',
      'Created vehicle upgrade and customization systems',
      'Designed multiplayer game modes and matchmaking',
      'Balanced vehicle stats and performance',
      'Designed track hazards and dynamic events'
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80', caption: 'High-speed racing action' },
      { url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80', caption: 'Vehicle customization' },
      { url: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&q=80', caption: 'Track design' }
    ],
    videos: [
      { url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', caption: 'Racing gameplay' }
    ],
    designDetails: [
      {
        title: 'Handling Model',
        description: 'Design of the arcade handling model balancing accessibility and depth. Created intuitive controls that appeal to casual players while offering skill expression for experts.',
        media: { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
      }
    ],
    achievements: [
      'Best Racing Game 2022',
      '2 million+ players',
      'Esports tournament scene'
    ]
  }
};

export function GameDetail() {
  const { gameId } = useParams<{ gameId: string }>();
  const game = gameId ? gamesData[gameId] : null;

  if (!game) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4">Game Not Found</h2>
          <Link to="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const rgb = hexToRgb(game.accentColor);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Dynamic Background with project's accent color */}
      <DynamicBackground accentColor={game.accentColor} variant="ambient" />

      {/* Header */}
      <div className="relative border-b-2 transition-all duration-500 overflow-hidden" style={{ borderBottomColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)` }}>
        <div
          className="absolute inset-0 -z-1"
          style={{
            background: `linear-gradient(135deg,
              rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.03) 0%,
              transparent 50%,
              rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.02) 100%)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background -z-1" />
        <div className="max-w-6xl mx-auto px-4 py-6 relative">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <h1 className="mb-2">{game.title}</h1>
                <p className="text-xl transition-colors duration-300" style={{ color: game.accentColor }}>{game.role}</p>
              </div>
              <a
                href={game.pageLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white text-sm transition-all duration-300 hover:shadow-lg hover:scale-105 self-start md:self-center"
                style={{ backgroundColor: game.accentColor }}
              >
                <ExternalLink className="w-4 h-4" />
                View Project Page
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* 1. OVERVIEW */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="mb-6">Overview</h2>

          {/* Game Description */}
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">{game.overview}</p>

          {/* Basic Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="flex items-center gap-3 p-4 bg-card rounded-lg border-2 transition-all duration-300" style={{ borderColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.15)` }}>
              <Calendar className="w-5 h-5" style={{ color: game.accentColor }} />
              <div>
                <div className="text-sm text-muted-foreground">Year</div>
                <div>{game.year}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-card rounded-lg border-2 transition-all duration-300" style={{ borderColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.15)` }}>
              <Clock className="w-5 h-5" style={{ color: game.accentColor }} />
              <div>
                <div className="text-sm text-muted-foreground">Time Spent</div>
                <div>{game.timeSpent}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-card rounded-lg border-2 transition-all duration-300" style={{ borderColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.15)` }}>
              <Users className="w-5 h-5" style={{ color: game.accentColor }} />
              <div>
                <div className="text-sm text-muted-foreground">Team Size</div>
                <div>{game.team}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-card rounded-lg border-2 transition-all duration-300" style={{ borderColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.15)` }}>
              <Gamepad2 className="w-5 h-5" style={{ color: game.accentColor }} />
              <div>
                <div className="text-sm text-muted-foreground">Platform</div>
                <div>{game.platform}</div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="mb-4">Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {game.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="p-5 rounded-lg border-2 text-center transition-all duration-300 hover:shadow-xl group"
                  style={{
                    background: `linear-gradient(135deg, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.05) 0%, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1) 100%)`,
                    borderColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.3)`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = game.accentColor;
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.3)`;
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Trophy className="w-8 h-8 mx-auto mb-3 transition-transform duration-300 group-hover:scale-110" style={{ color: game.accentColor }} />
                  <p className="text-sm">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 2. DETAILED INTRODUCTION */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-6">Detailed Introduction</h2>

          {/* Screenshot Carousel with captions */}
          <div className="mb-8 max-w-4xl mx-auto">
            <ProjectCarousel
              images={game.images}
              title={game.title}
            />
          </div>

          {/* Gameplay Video - Only First Video */}
          {game.videos.length > 0 && (
            <div className="max-w-4xl mx-auto">
              <div className="space-y-3">
                <div className="aspect-video rounded-lg overflow-hidden bg-muted border-2 transition-all duration-300" style={{ borderColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)` }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src={game.videos[0].url}
                    title={game.videos[0].caption}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">{game.videos[0].caption}</p>
              </div>
            </div>
          )}
        </motion.section>

        {/* 3. MY RESPONSIBILITIES */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-6">My Responsibilities</h2>
          <div className="space-y-3">
            {game.responsibilities.map((resp, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg border-l-4 transition-all duration-300 hover:translate-x-2"
                style={{
                  backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.03)`,
                  borderLeftColor: game.accentColor
                }}
              >
                <span className="mt-0.5 flex-shrink-0" style={{ color: game.accentColor }}>•</span>
                <span className="text-muted-foreground">{resp}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 4. DESIGN DETAILS */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="mb-6">Design Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {game.designDetails.map((detail, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-lg border-2 transition-all duration-300 hover:shadow-xl group"
                style={{ borderColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = game.accentColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)`;
                }}
              >
                {detail.media && (
                  <div className="mb-4">
                    {detail.media.type === 'image' ? (
                      <img
                        src={detail.media.url}
                        alt={detail.title}
                        className="w-full rounded-lg"
                      />
                    ) : (
                      <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                        <iframe
                          width="100%"
                          height="100%"
                          src={detail.media.url}
                          title={detail.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                    )}
                  </div>
                )}
                <div>
                  <h3 className="mb-3" style={{ color: game.accentColor }}>{detail.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{detail.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
