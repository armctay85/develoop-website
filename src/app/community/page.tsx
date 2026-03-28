"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Users, Calendar, MessageSquare, Mic, Award, Globe, 
  ArrowRight, Clock, MapPin, ExternalLink, Video, Users2
} from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const events = [
  {
    id: "conference-2024",
    title: "The Retail Edge Conference 2024",
    type: "Annual Conference",
    date: "November 15, 2024",
    time: "9:00 AM - 5:00 PM AEDT",
    location: "Sydney + Virtual",
    description: "Our flagship annual event bringing together 500+ retail professionals for a day of insights, networking, and thought leadership.",
    speakers: 12,
    attendees: "500+",
    image: "conference",
  },
  {
    id: "webinar-q3",
    title: "Q3 Market Outlook Webinar",
    type: "Webinar",
    date: "July 18, 2024",
    time: "11:00 AM - 12:00 PM AEDT",
    location: "Virtual",
    description: "Quarterly market briefing covering foot traffic trends, rent movements, and emerging opportunities for Q3.",
    speakers: 3,
    attendees: "200+",
    image: "webinar",
  },
  {
    id: "benchmarking-jul",
    title: "Fashion Retail Benchmarking Group",
    type: "Peer Group",
    date: "July 25, 2024",
    time: "2:00 PM - 4:00 PM AEDT",
    location: "Melbourne",
    description: "Monthly roundtable for fashion retail expansion leaders to share benchmarks and best practices.",
    speakers: null,
    attendees: "15",
    image: "roundtable",
  },
];

const communityFeatures = [
  {
    icon: MessageSquare,
    title: "Private Community",
    description: "Slack workspace for Pro and Enterprise members to connect, share insights, and get advice from peers.",
    memberCount: "2,400+",
  },
  {
    icon: Mic,
    title: "The Retail Edge Podcast",
    description: "Weekly conversations with retail leaders, property experts, and industry innovators.",
    episodes: "120+",
  },
  {
    icon: Users2,
    title: "Peer Benchmarking Groups",
    description: "Monthly roundtables organized by retail category for confidential benchmarking and best practice sharing.",
    groups: "8",
  },
  {
    icon: Calendar,
    title: "Expert Office Hours",
    description: "Monthly virtual sessions with our analysts and industry experts. Enterprise members get dedicated sessions.",
    frequency: "Weekly",
  },
];

const podcastEpisodes = [
  {
    id: "ep-120",
    title: "The Future of Mall Retail in Australia",
    guest: "Sarah Mitchell, Westfield",
    duration: "45 min",
    date: "Mar 20, 2024",
    featured: true,
  },
  {
    id: "ep-119",
    title: "Negotiating Rent in a Tight Market",
    guest: "David Chen, Retail Leasing Expert",
    duration: "38 min",
    date: "Mar 13, 2024",
    featured: false,
  },
  {
    id: "ep-118",
    title: "Sustainable Store Design Trends",
    guest: "Emma Watson, Green Retail Alliance",
    duration: "42 min",
    date: "Mar 6, 2024",
    featured: false,
  },
];

function CommunityHero() {
  return (
    <section className="pt-32 pb-16 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-eyebrow mb-4 block"
>
          Community
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6"
>
          Connect with Australia's<br />Retail Leaders
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-foreground-muted max-w-2xl mx-auto"
>
          Join 2,400+ retail decision-makers. Share insights, attend exclusive events, 
          and grow your network.
        </motion.p>
      </div>
    </section>
  );
}

function CommunityFeatures() {
  return (
    <section className="pb-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {communityFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-background-secondary rounded-xl border border-border hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-serif mb-3">{feature.title}</h3>
                <p className="text-foreground-muted mb-4">{feature.description}</p>
                
                {feature.memberCount && (
                  <div className="metric text-xl">{feature.memberCount} members</div>
                )}
                {feature.episodes && (
                  <div className="metric text-xl">{feature.episodes} episodes</div>
                )}
                {feature.groups && (
                  <div className="metric text-xl">{feature.groups} active groups</div>
                )}
                {feature.frequency && (
                  <div className="metric text-xl">{feature.frequency} sessions</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function EventsSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="text-eyebrow mb-2 block">Events</span>
            <h2 className="text-3xl md:text-4xl font-serif">Upcoming Events</h2>
          </div>
          <Link href="#" className="btn-secondary hidden sm:flex">
            View All Events
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-6">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 md:p-8 bg-background rounded-xl border border-border hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-48 flex-shrink-0">
                  <div className="text-xs text-accent uppercase tracking-wider mb-1">{event.type}</div>
                  <div className="text-lg font-serif">{event.date}</div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-serif mb-2 group-hover:text-accent transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-foreground-muted mb-4">{event.description}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-foreground-muted">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                    {event.speakers && (
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {event.speakers} speakers
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      {event.attendees} attending
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <Link href="#" className="btn-primary">
                    Register
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="#" className="btn-secondary">
            View All Events
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function PodcastSection() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-eyebrow mb-4 block">Podcast</span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              The Retail Edge
            </h2>
            <p className="text-foreground-muted mb-6">
              Weekly conversations with the people shaping Australian retail. 
              From expansion strategies to lease negotiations, we dive deep into 
              what makes retail work.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <Mic className="w-4 h-4 text-accent" />
                <span>120+ Episodes</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-accent" />
                <span>15K+ Monthly Listeners</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award className="w-4 h-4 text-accent" />
                <span>Top 50 Business Podcast</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Link href="#" className="btn-primary">
                <ExternalLink className="w-4 h-4" />
                Listen Now
              </Link>
              <Link href="#" className="btn-secondary">
                All Episodes
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {podcastEpisodes.map((episode, i) => (
              <div
                key={episode.id}
                className="p-4 bg-background-secondary rounded-lg border border-border hover:border-accent/30 transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mic className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {episode.featured && (
                        <span className="px-2 py-0.5 text-xs bg-accent text-background rounded">
                          Latest
                        </span>
                      )}
                      <span className="text-xs text-foreground-muted">{episode.date}</span>
                    </div>
                    <h4 className="font-medium mb-1 truncate group-hover:text-accent transition-colors">
                      {episode.title}
                    </h4>
                    <p className="text-sm text-foreground-muted">{episode.guest}</p>
                  </div>
                  <div className="text-xs text-foreground-muted flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {episode.duration}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MembershipCTA() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Join the Community
          </h2>
          <p className="text-foreground-muted mb-8 max-w-xl mx-auto">
            Community access is included with all Pro and Enterprise plans. 
            Connect with peers, attend exclusive events, and get advice from experts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pricing" className="btn-primary">
              View Plans
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Sales
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <CommunityHero />
      <CommunityFeatures />
      <EventsSection />
      <PodcastSection />
      <MembershipCTA />
      <Footer />
    </main>
  );
}
