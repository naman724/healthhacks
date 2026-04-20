import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Heart, Brain, Stethoscope, Cpu, ChevronRight } from "lucide-react"

export default function HealthHacksPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/healthhacks-icon-logo.png" alt="HealthHacks Icon" className="h-8 w-8" />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
                About
              </a>
              <a href="#tracks" className="text-gray-700 hover:text-gray-900 transition-colors">
                Tracks
              </a>
              <a href="#speakers" className="text-gray-700 hover:text-gray-900 transition-colors">
                Speakers
              </a>
              <a href="#sponsors" className="text-gray-700 hover:text-gray-900 transition-colors">
                Sponsors
              </a>
              <a href="#faq" className="text-gray-700 hover:text-gray-900 transition-colors">
                FAQ
              </a>
              <Button asChild className="gradient-bg-1 hover:opacity-90 text-white border-0">
                <a href="https://luma.com/k4tfsqg3" target="_blank" rel="noopener noreferrer">
                  Register
                </a>
              </Button>
              <Button asChild variant="outline" className="border-2 border-gray-800 text-gray-800">
                <a href="https://discord.gg/YgDJ2AEbbf" target="_blank" rel="noopener noreferrer">
                  Join our Discord
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge variant="secondary" className="mb-4 text-sm font-medium gradient-bg-1 text-white border-0">
                  Oct 4-5, 2025 • University of South Florida
                </Badge>
                <div className="mb-6">
                  <img src="/healthhacks-text-logo.png" alt="HealthHacks" className="h-32 md:h-40 lg:h-48" />
                </div>
                <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-2xl leading-relaxed">
                  Florida's largest health innovation hackathon. Join 400+ innovators to revolutionize healthcare in
                  just 24 hours.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="gradient-bg-1 hover:opacity-90 text-white px-8 py-4 text-lg hover-lift border-0"
                >
                  <a href="https://luma.com/k4tfsqg3" target="_blank" rel="noopener noreferrer">
                    Register
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="px-8 py-4 text-lg hover-lift bg-white/80 border-2 border-gray-800 text-gray-800">
                  <a href="https://discord.gg/YgDJ2AEbbf" target="_blank" rel="noopener noreferrer">Join our Discord</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="px-8 py-4 text-lg hover-lift bg-white/80 border-2 border-gray-800 text-gray-800">
                  <a href="https://luma.com/1nqnd2ao" target="_blank" rel="noopener noreferrer">Pitch Competition</a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/80 rounded-2xl p-8 text-center colorful-hover border border-gray-200 shadow-sm gradient-bg-1">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-white">400+</div>
                  <div className="text-white/90">Innovators</div>
                </div>

                <div className="bg-white/80 rounded-2xl p-8 text-center colorful-hover border border-gray-200 shadow-sm gradient-bg-1">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-white">24</div>
                  <div className="text-white/90">Hours</div>
                </div>

                <div className="bg-white/80 rounded-2xl p-8 text-center colorful-hover border border-gray-200 shadow-sm gradient-bg-1">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-white">4</div>
                  <div className="text-white/90">Tracks</div>
                </div>

                <div className="bg-white/80 rounded-2xl p-8 text-center colorful-hover border border-gray-200 shadow-sm gradient-bg-1">
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-white">$7K+</div>
                  <div className="text-white/90">Prizes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section id="tracks" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Competition Tracks</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Innovators can build solutions across four exciting healthcare domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/80 rounded-xl p-8 text-center colorful-hover border border-gray-200 shadow-sm gradient-bg-1">
              <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Assistive Technology</h3>
              <p className="text-white/90 text-sm">
                Solutions to enhance mobility, accessibility, and independence for people with disabilities
              </p>
            </div>

            <div className="bg-white/80 rounded-xl p-8 text-center colorful-hover border border-gray-200 shadow-sm gradient-bg-1">
              <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Clinical Operations</h3>
              <p className="text-white/90 text-sm">Tools to streamline hospital, clinic, and healthcare operations</p>
            </div>

            <div className="bg-white/80 rounded-xl p-8 text-center colorful-hover border border-gray-200 shadow-sm gradient-bg-1">
              <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Neurotech</h3>
              <p className="text-white/90 text-sm">solutions that harness brain signals and interfaces to enhance cognition, sense, communication, and control in humans, spanning mental health, consumer tech, and futuristic human AI interaction</p>
            </div>

            <div className="bg-white/80 rounded-xl p-8 text-center colorful-hover border border-gray-200 shadow-sm gradient-bg-1">
              <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center mx-auto mb-6">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Diagnostics</h3>
              <p className="text-white/90 text-sm">Innovations in medical diagnosis, testing, and screening</p>
            </div>
          </div>

          <div className="text-center mt-12 bg-white/80 rounded-xl p-6 border border-gray-200 shadow-sm">
            <p className="text-gray-700 mb-2">
              <strong>Not bound to these tracks?</strong> That's perfectly fine!
            </p>
            <p className="text-gray-900">
              These tracks have their own specific prizes, but if you want to go outside these tracks, you'll be
              considered for the overall prize and similar awards.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About HealthHacks</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Organized by ProstheX, HealthHacks is the largest health-focused hackathon in Florida, uniting engineers,
              designers, healthcare enthusiasts, and entrepreneurs to tackle real-world problems in healthcare. Build a project using software, hardware, or a combination of both.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">24 Hours of Innovation</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Over 24 intensive hours, 400+ participants will collaborate to build innovative solutions that can truly
                make a difference in people's lives. From assistive technologies to clinical operations, neurotech to
                diagnostics - the possibilities are endless.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-foreground">October 4-5, 2025</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground">University of South Florida</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-foreground">400+ Participants</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card rounded-2xl p-8 h-80 flex items-center justify-center border border-border shadow-sm gradient-bg-3">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Healthcare Innovation</h4>
                  <p className="text-white/80">Building the future of healthcare technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Keynote Speakers</h2>
          </div>
          <div className="flex justify-center">
            <div className="bg-card rounded-xl p-6 border border-border shadow-sm text-center max-w-xl w-full">
              <img src="/Kyle_Romano.jpg" alt="Portrait of Kyle Romano, writer and Disability Rights activist" className="mx-auto mb-4 w-40 h-40 object-cover rounded-full" />
              <h3 className="text-xl font-bold text-foreground mb-2">Kyle Romano</h3>
              <p className="text-sm text-muted-foreground">
                Kyle Romano is a writer, speaker, and Disability Rights activist who, after studying disability and communication at the University of South Florida, educates others on the experiences and rights of disabled people; a quadruple amputee and wheelchair user since childhood, his work with Custom Mobility and public speaking centers on overcoming obstacles and promoting inclusion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Sponsors & Partners</h2>
            <p className="text-xl text-muted-foreground">
              Join leading companies in supporting the next generation of healthcare innovators
            </p>
          </div>
          {/* Sizing note: keep logos big */}
          <div className="space-y-14">
            {/* Sponsors */}
            <div>
              <h3 className="text-center text-lg font-semibold text-muted-foreground mb-6">Sponsors</h3>
              <div className="flex flex-wrap justify-center gap-10 items-center">
                <a href="https://clearset.ai" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-6 h-36 w-[280px] flex items-center justify-center hover-lift border border-border shadow-sm">
                  <img src="/clearsetai logo.jpg" alt="ClearSet AI logo" className="max-h-24 max-w-full object-contain" />
                </a>
                <a href="https://www.codeboxx.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-6 h-36 w-[280px] flex items-center justify-center hover-lift border border-border shadow-sm">
                  <img src="/image-removebg-preview (5).png" alt="CodeBoxx logo" className="max-h-24 max-w-full object-contain scale-110" />
                </a>
                <a href="https://www.axogeninc.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-6 h-36 w-[280px] flex items-center justify-center hover-lift border border-border shadow-sm">
                  <img src="/Axogen_logo.svg.png" alt="Axogen logo" className="max-h-24 max-w-full object-contain" />
                </a>
              </div>
            </div>

            {/* Community partners */}
            <div>
              <h3 className="text-center text-lg font-semibold text-muted-foreground mb-6">Community partners</h3>
              <div className="flex flex-wrap justify-center gap-10 items-center">
                <a href="https://amroctampabay.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-6 h-36 w-[280px] flex items-center justify-center hover-lift border border-border shadow-sm">
                  <img src="/amroc-logo (1).png" alt="AMRoC Fab Lab logo" className="max-h-24 max-w-full object-contain" />
                </a>
                <a href="https://www.instagram.com/bciusf/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-6 h-36 w-[280px] flex items-center justify-center hover-lift border border-border shadow-sm">
                  <img src="/image-removebg-preview (7).png" alt="BCI Club at USF logo" className="max-h-24 max-w-full object-contain" />
                </a>
                <a href="https://www.instagram.com/gripuf/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-6 h-36 w-[280px] flex items-center justify-center hover-lift border border-border shadow-sm">
                  <img src="/image-removebg-preview (6).png" alt="GRIP UF logo" className="max-h-24 max-w-full object-contain" />
                </a>
                <a href="https://www.plugandplaytechcenter.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-6 h-36 w-[280px] flex items-center justify-center hover-lift border border-border shadow-sm">
                  <img src="/image-removebg-preview (4).png" alt="Plug and Play logo" className="max-h-24 max-w-full object-contain" />
                </a>
                <a href="https://embarccollective.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-6 h-36 w-[280px] flex items-center justify-center hover-lift border border-border shadow-sm">
                  <img src="/image-removebg-preview (9).png" alt="Embarc Collective logo" className="max-h-24 max-w-full object-contain" />
                </a>
              </div>
            </div>

            {/* University departments */}
            <div>
              <h3 className="text-center text-lg font-semibold text-muted-foreground mb-6">University departments</h3>
              <div className="flex flex-wrap justify-center gap-10 items-center">
                <a href="https://www.usf.edu/engineering/me/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-6 h-36 w-[280px] flex items-center justify-center hover-lift border border-border shadow-sm">
                  <img src="/meche dpt logo.png" alt="USF Mechanical Engineering Department logo" className="max-h-24 max-w-full object-contain" />
                </a>
                <a href="https://www.usf.edu/business/centers/mault/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-6 h-36 w-[280px] flex items-center justify-center hover-lift border border-border shadow-sm">
                  <img src="/image-removebg-preview (8).png" alt="Mault Center for Entrepreneurship logo" className="max-h-24 max-w-full object-contain" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="px-8 py-3 text-lg border-2 border-gray-800 text-gray-800 bg-white">
              <a href="https://discord.gg/YgDJ2AEbbf" target="_blank" rel="noopener noreferrer">Join our Discord</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Got questions? We've got answers!</p>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 hover-lift border border-border shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-3">Who can participate?</h3>
              <p className="text-muted-foreground">
                Anyone passionate about healthcare innovation! We welcome engineers, designers, healthcare
                professionals, students, and entrepreneurs of all skill levels.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 hover-lift border border-border shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-3">Do I need prior experience?</h3>
              <p className="text-muted-foreground">
                Not at all! We provide mentorship, workshops, and resources to help participants at every level. What
                matters most is your passion for solving healthcare challenges.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 hover-lift border border-border shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-3">How much does it cost?</h3>
              <p className="text-muted-foreground">
                HealthHacks is completely free! We provide all meals, snacks, hardware rentals, and resources throughout
                the 24-hour event.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 hover-lift border border-border shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-3">What if I don't have a team?</h3>
              <p className="text-muted-foreground">
                No problem! We'll have team formation sessions at the beginning of the event to help you find
                like-minded collaborators.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 hover-lift border border-border shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-3">What is the maximum number of teammates I can have?</h3>
              <p className="text-muted-foreground">You can have 4 people in a team at max.</p>
            </div>

            <div className="bg-card rounded-xl p-6 hover-lift border border-border shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-3">Where can I find agenda, workshops, and everything else happening?</h3>
              <p className="text-muted-foreground">We will send you a hacker guide once you get accepted which will include everything. Join our Discord to ask us anything you want.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg-1 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Innovate?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Applications are now open! Join Florida's largest health innovation hackathon and help build the future of
            healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8 py-3 text-lg hover-lift bg-white text-gray-900 hover:bg-gray-100">
              <a href="https://luma.com/k4tfsqg3" target="_blank" rel="noopener noreferrer">
                Register
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-3 text-lg border-white/20 text-white hover:bg-white/10 bg-transparent hover-lift">
              <a href="https://discord.gg/YgDJ2AEbbf" target="_blank" rel="noopener noreferrer">Join our Discord</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-3 text-lg border-white/20 text-white hover:bg-white/10 bg-transparent hover-lift">
              <a href="https://luma.com/1nqnd2ao" target="_blank" rel="noopener noreferrer">Pitch Competition</a>
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-80">Applications close when we reach capacity - apply early!</p>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "var(--color-footer)", color: "var(--color-footer-foreground)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/healthhacks-text-logo.png" alt="HealthHacks" className="h-8" />
              </div>
              <p className="opacity-80 mb-4 max-w-md">
                Florida's largest health innovation hackathon, empowering the next generation of healthcare innovators.
              </p>
              <p className="text-sm opacity-70">Organized by ProstheX, BCI Club, and GRIP UF.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 opacity-80">
                <li>
                  <a href="#about" className="hover:opacity-100 transition-opacity">
                    About
                  </a>
                </li>
                <li>
                  <a href="#tracks" className="hover:opacity-100 transition-opacity">
                    Tracks
                  </a>
                </li>
                <li>
                  <a href="#speakers" className="hover:opacity-100 transition-opacity">
                    Speakers
                  </a>
                </li>
                <li>
                  <a href="#sponsors" className="hover:opacity-100 transition-opacity">
                    Sponsors
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:opacity-100 transition-opacity">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="text-sm mb-2 opacity-80">prosthex.usf@gmail.com</p>
              <Button asChild size="sm" className="mt-2 gradient-bg-1 text-white border-0">
                <a href="https://discord.gg/YgDJ2AEbbf" target="_blank" rel="noopener noreferrer">Join our Discord</a>
              </Button>
            </div>
          </div>

          <div style={{ borderTop: "1px solid var(--color-border)" }} className="mt-8 pt-8 text-center">
            <p className="text-sm opacity-70">
              © 2025 ProstheX. All rights reserved. | Organized with ❤️ at University of South Florida
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
