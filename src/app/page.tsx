import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header Navigation */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="font-bold text-xl">CTDnyc</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">About</a>
              <a href="#programs" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Programs</a>
              <a href="#policy" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Policy</a>
              <a href="#get-involved" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Get Involved</a>
            </nav>
            <Button asChild>
              <a href="mailto:vvohra.ctd@gmail.com">Contact</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fadeIn">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Reimagining Homelessness Through{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">Community</span>,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">Creativity</span> &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">Economic Empowerment</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                CTDnyc (Connect The Dots NYC) empowers young leaders and unhoused individuals through storytelling, entrepreneurship, and advocacy.
              </p>
              {/* HERO BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="https://forms.gle/4DSWJwhuWgowj76R8" target="_blank" rel="noopener noreferrer">
                    Apply to be an Ambassador
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://entrepreneurshipwithoutaddress-5f9c91051148.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    Explore Entrepreneurship Without Address
                  </a>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <Button size="lg" variant="outline" asChild>
                  <a href="https://apps.apple.com/us/app/ctdnyc/id6475202307" target="_blank" rel="noopener noreferrer">
                    Download on iOS
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://play.google.com/store/apps/details?id=com.vvcoding.CTDnyc&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                    Download on Android
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                CTDnyc is a youth-led nonprofit that educates communities, amplifies voices of the unhoused,
                and develops digital platforms to facilitate sustainable economic pathways out of homelessness.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-blue-200 hover:border-blue-400 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-3 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-blue-600 font-bold text-lg">📚</span>
                  </div>
                  <CardTitle className="text-blue-600">Educate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Youth workshops and ambassador leadership programs focused on systemic understanding and empathy-building.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 hover:border-blue-400 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-3 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-blue-600 font-bold text-lg">📢</span>
                  </div>
                  <CardTitle className="text-blue-600">Amplify</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Podcast interviews and digital media featuring people with lived experience and experts tackling homelessness.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 hover:border-blue-400 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-3 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-blue-600 font-bold text-lg">💼</span>
                  </div>
                  <CardTitle className="text-blue-600">Empower</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Developer-run platforms like Entrepreneurship Without Address, enabling unhoused entrepreneurs to build public-facing business profiles.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Contributors */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Team & Contributors</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">V</span>
                  </div>
                  <CardTitle>Vedant Vohra</CardTitle>
                  <CardDescription>Founder, developer, and program lead</CardDescription>
                </CardHeader>
              </Card>

              <Card className="group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">🎓</span>
                  </div>
                  <CardTitle>Ambassador Participants</CardTitle>
                  <CardDescription>High school–aged youth conducting community interviews, advocacy projects, and content creation</CardDescription>
                </CardHeader>
              </Card>

              <Card className="group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">🤝</span>
                  </div>
                  <CardTitle>Guest Contributors</CardTitle>
                  <CardDescription>Including unhoused entrepreneurs (e.g., Will Woods) and service providers featured in the podcast and workshops</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Programs & Platforms */}
      <section id="programs" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Programs & Platforms</h2>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-1 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-3 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-blue-600 font-bold text-lg">🎯</span>
                  </div>
                  <CardTitle className="text-blue-600">Ambassador Program</CardTitle>
                  <CardDescription>(8 weeks, &lt;25% acceptance rate)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-700">A global youth leadership initiative teaching students to design and implement solutions to homelessness in their communities. Weekly sessions cover:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Defining Homelessness</li>
                      <li>• Structural Causes</li>
                      <li>• Lived Experience Interviews</li>
                      <li>• Storytelling</li>
                      <li>• Impact Project Design</li>
                      <li>• Final Showcase</li>
                    </ul>
                    <p className="text-sm text-gray-700">
                      <strong>Outcomes:</strong> Multimedia deliverables (zines, podcast episodes), public exhibits, advocacy outreach, and leadership certificates.
                    </p>
                    <a href="https://forms.gle/4DSWJwhuWgowj76R8" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors mt-2">Apply Now</a>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-1 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-3 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-blue-600 font-bold text-lg">🎙️</span>
                  </div>
                  <CardTitle className="text-blue-600">Connect The Dots Podcast & Media</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Hosted on <a href="https://www.youtube.com/@CTDnyc" target="_blank" rel="noopener noreferrer" className="underline">YouTube</a>/Spotify, featuring interviews on trauma, transition, reentry, and entrepreneurship.
                    </p>
                    <p className="text-sm text-gray-700">
                      Includes accessible video assets: captions, thumbnails, and shareable graphics.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-1 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-3 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-blue-600 font-bold text-lg">🌐</span>
                  </div>
                  <CardTitle className="text-blue-600">Entrepreneurship Without Address</CardTitle>
                  <CardDescription>(web platform)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      A platform for unhoused entrepreneurs and investors. Unhoused entrepreneurs can log in to create and share pitches for their business ideas. Investors can log in to view pitches and provide funding or support. <a href="https://entrepreneurshipwithoutaddress-5f9c91051148.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="underline">Visit Platform</a>
                    </p>
                    <p className="text-gray-700">
                      <strong>Admin tools:</strong> onboarding, content moderation, mobile responsiveness.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Future plans:</strong> financial tools, local partnerships, job-matching features.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* Centered CTDnyc App Card */}
            <div className="flex justify-center mt-8">
              <div className="max-w-md w-full">
                <Card className="group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-3 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                      <span className="text-blue-600 font-bold text-lg">📱</span>
                    </div>
                    <CardTitle className="text-blue-600">CTDnyc Mobile App</CardTitle>
                    <CardDescription>Resource Finder (iOS & Android)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-700">
                        Find nearby resources for unhomed and homed New Yorkers. No registration, no payments, privacy-first.
                      </p>
                      <div className="flex flex-col gap-2">
                        <a href="https://apps.apple.com/us/app/ctdnyc/id6475202307" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">Download on iOS</a>
                        <a href="https://play.google.com/store/apps/details?id=com.vvcoding.CTDnyc&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">Download on Android</a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Impact</h2>
            <div className="text-6xl md:text-7xl font-bold mb-4 animate-pulse">158,019</div>
            <p className="text-xl mb-8 leading-relaxed">
              people experienced homelessness in NYC on a single night in 2024—the highest of any U.S. city, per HUD's 2024 Annual Homeless Assessment Report.
            </p>
            <p className="text-lg opacity-90 leading-relaxed">
              This statistic drives our urgent mission to create sustainable pathways out of homelessness through entrepreneurship and community support.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Proposal */}
      <section id="policy" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Policy Proposal: Enabling Entrepreneurship for the Homeless</h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-600">Background</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    U.S. history reflects entrepreneurship as central to the American Dream, yet NYC residents without stable addresses face legal, financial, and bureaucratic obstacles.
                  </p>
                  <p>
                    Policies require a permanent physical address for business registration (no P.O. Boxes), but shelters are not designed or permitted to serve that purpose.
                  </p>
                  <p>
                    Many lack ID (due to cost, residence requirements), preventing access to banking and business registration.
                  </p>
                </div>

                <h4 className="text-xl font-semibold mt-8 mb-4 text-blue-600">Studies highlight:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Survival entrepreneurship is common among the unhoused (Journal of Community Psychology, 2019)</li>
                  <li>• Occupational licensing laws and identification requirements disproportionately hinder low-income entrepreneurs (Institute for Justice, 2022; NHLC, 2004)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-600">Policy Recommendations</h3>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Address Flexibility Program</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Permit shelter, P.O. Box, or incubator addresses on business documents, inspired by D.C.'s Aspire to Entrepreneurship program.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Tiered Fee Structure</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Sliding-scale or waived licensing fees for low-income and homeless applicants.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Alternative ID Verification</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Allow trusted service providers to verify identity for business registration, modeled on California's provider-based ID verification.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Mentorship & Support Networks</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Connect unhoused entrepreneurs with corporate mentors, funding guidance, and pitch opportunities.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-200">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Benefits & Urgency</h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                <div>
                  <ul className="space-y-2">
                    <li>• Small businesses drive ~44% of U.S. economic activity (SBA, 2022)</li>
                    <li>• Microenterprise programs reduce reliance on public assistance and bolster self-sufficiency (Aspen Institute, 2006)</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li>• Since FY 22, NYC's shelter population rose by 89%, underscoring the urgency of economic interventions (NYC DHS, 2024)</li>
                    <li>• Each chronically homeless individual may cost public systems over $40,000 annually (University of Pennsylvania, 2008)</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <a href="/Policy%20Proposal%20(2).pdf" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors">View Full Policy Proposal (PDF)</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section id="get-involved" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Get Involved</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">🎓</span>
                  </div>
                  <CardTitle className="text-blue-600">Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Join the Ambassador Program, volunteer on media or advocacy projects.
                  </p>
                  <Button className="w-full" asChild>
                    <a href="https://forms.gle/4DSWJwhuWgowj76R8" target="_blank" rel="noopener noreferrer">Apply Now</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">💼</span>
                  </div>
                  <CardTitle className="text-blue-600">Professionals & Sponsors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Support mentorship, workshops, or policy advocacy.
                  </p>
                  <Button className="w-full" asChild>
                    <a href="https://forms.gle/pvW6W3nzGxx9KFUe7" target="_blank" rel="noopener noreferrer">Get Involved</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">🚀</span>
                  </div>
                  <CardTitle className="text-blue-600">Unhoused Entrepreneurs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Explore the Entrepreneurship Without Address platform to share your business ideas or invest in others. <a href="https://entrepreneurshipwithoutaddress-5f9c91051148.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="underline">Visit Platform</a>
                  </p>
                  <Button className="w-full" asChild>
                    <a href="https://entrepreneurshipwithoutaddress-5f9c91051148.herokuapp.com/" target="_blank" rel="noopener noreferrer">Go to Platform</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Media Attention */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Media Attention</h2>
            <div className="grid md:grid-cols-2 gap-8 justify-center">
              <a href="https://www.cbsnews.com/newyork/news/teenager-builds-app-to-connect-homeless-to-resources-in-new-york-city/" target="_blank" rel="noopener noreferrer" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                <img src="/Screenshot%202025-07-16%20at%2012.01.42%E2%80%AFPM.png" alt="CBS News Interview Preview" className="w-full h-48 object-cover rounded mb-4" />
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">CBS News Interview</h3>
                <p className="text-gray-700">Teen builds app to help homeless find resources in NYC (March 2024)</p>
              </a>
              <a href="https://www.westsiderag.com/2024/02/20/uws-high-schooler-creates-app-allowing-users-to-connect-homeless-people-with-resources" target="_blank" rel="noopener noreferrer" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                <img src="/Screenshot%202025-07-16%20at%2012.00.32%E2%80%AFPM.png" alt="West Side Rag Interview Preview" className="w-full h-48 object-cover rounded mb-4" />
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">West Side Rag Interview</h3>
                <p className="text-gray-700">UWS High Schooler Creates App Allowing Users to Connect Homeless People With Resources (Feb 2024)</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">C</span>
                  </div>
                  <span className="font-bold text-xl">CTDnyc</span>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Empowering young leaders and unhoused individuals through storytelling, entrepreneurship, and advocacy.
                </p>
                <div className="space-y-2 text-gray-300">
                  <p>📧 <a href="mailto:vvohra.ctd@gmail.com" className="underline">vvohra.ctd@gmail.com</a></p>
                  <p>📺 <a href="https://www.youtube.com/@CTDnyc" target="_blank" rel="noopener noreferrer" className="underline">CTDnyc YouTube channel</a></p>
                  <p>📱 <a href="https://apps.apple.com/us/app/ctdnyc/id6475202307" target="_blank" rel="noopener noreferrer" className="underline">Download on iOS</a> | <a href="https://play.google.com/store/apps/details?id=com.vvcoding.CTDnyc&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="underline">Android</a></p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <nav className="space-y-2">
                  <a href="#about" className="text-gray-300 hover:text-white block transition-colors">About Us</a>
                  <a href="#programs" className="text-gray-300 hover:text-white block transition-colors">Programs</a>
                  <a href="#policy" className="text-gray-300 hover:text-white block transition-colors">Policy Proposal</a>
                  <a href="#get-involved" className="text-gray-300 hover:text-white block transition-colors">Get Involved</a>
                </nav>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 CTDnyc. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
