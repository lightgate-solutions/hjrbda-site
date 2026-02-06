import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import HeroCarousel from "@/components/hero-carousel";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Welcome Section */}
      <section className="border-b border-border/40 bg-background py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Welcome
            </div>
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              WELCOME TO HJRBDA
            </h2>
            <p className="mx-auto text-lg leading-relaxed text-muted-foreground md:text-xl">
              The Hadaija Jama'are River Basin Development Authority is committed to the sustainable
              development and management of water resources in the region.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Mandate Blocks */}
      <section className="border-b border-border/40 bg-slate-50/50 py-16 dark:bg-slate-950/30">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Our Foundation
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Vision, Mission & Mandate
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-border/60 shadow-sm transition-shadow hover:shadow-md">
              <CardHeader className="border-b border-border/40 bg-slate-50/50 dark:bg-slate-900/50">
                <CardTitle className="text-xl font-semibold text-foreground">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  To ensure effective and efficient implementation of the nation's water resources
                  development policies, through optimal exploitation, conservation and overall
                  development of the nation's abundant surface and underground water resources
                  potentials...
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/about#vision">READ MORE</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/60 shadow-sm transition-shadow hover:shadow-md">
              <CardHeader className="border-b border-border/40 bg-slate-50/50 dark:bg-slate-900/50">
                <CardTitle className="text-xl font-semibold text-foreground">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  To serve as a viable and veritable implementing agency of Government in the
                  effective utilization of all the water resources potentials with the Lower Basin
                  of the River Niger with a view to improving the quality of lives of the people...
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/about#mission">READ MORE</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/60 shadow-sm transition-shadow hover:shadow-md">
              <CardHeader className="border-b border-border/40 bg-slate-50/50 dark:bg-slate-900/50">
                <CardTitle className="text-xl font-semibold text-foreground">Our Mandate</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  To supply water from the Authority's completed storage schemes to all users for a
                  fee to ensure prompt efficient and effective service delivery to our end users. To
                  remain responsive to the demands and aspirations of the beneficiaries...
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/about#mandate">READ MORE</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="border-b border-border/40 bg-background py-16">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Updates
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Latest News
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              id: 1,
              title: "New Water Supply Project Launched",
              author: "Admin",
              date: "2025-01-15",
              preview: "The Authority has launched a new water supply project to serve rural communities...",
            },
            {
              id: 2,
              title: "Irrigation Scheme Completion",
              author: "Admin",
              date: "2025-01-10",
              preview: "The latest irrigation scheme has been completed, benefiting over 500 farmers...",
            },
            {
              id: 3,
              title: "Tender Announcement for 2025",
              author: "Admin",
              date: "2025-01-05",
              preview: "New tenders are now open for various infrastructure projects...",
            },
          ].map((news) => (
            <Card key={news.id} className="border-border/60 shadow-sm transition-shadow hover:shadow-md">
              <CardHeader className="border-b border-border/40">
                <CardTitle className="text-lg font-semibold text-foreground">{news.title}</CardTitle>
                <CardDescription className="mt-2 text-xs">
                  By {news.author} • {new Date(news.date).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4 leading-relaxed text-muted-foreground">{news.preview}</p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/news-media">Read More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Our Services */}
      <section className="border-b border-border/40 bg-slate-50/50 py-16 dark:bg-slate-950/30">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              What We Do
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              OUR SERVICES
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Surveying/Hydromet Equipment",
                description:
                  "Total Station, Global Navigation Satellites Systems (GNSS) receiver, Apache 5 kit for Bathymetric survey, DJI Phantom 4 Pro Quad Copter Drone, Automatic level, Vale port current meter and Radar Depth Sensor.",
              },
              {
                title: "Dam/Weir Construction",
                description:
                  "Dam, Weir and Dyke Construction stand at the centre of the function of the HJRBDA.",
              },
              {
                title: "Flood and Erosion Control",
                description:
                  "The HJRBDA has constructed a number of flood and erosion control structures across its area of coverage.",
              },
              {
                title: "Agricultural Produce",
                description:
                  "The HJRBDA also cultivates crops and rear livestocks which are sold to generate IGR to the government",
              },
              {
                title: "Public-Private Partnership",
                description:
                  "Public - Private Partnership arrangement for harvesting and processing of dry season paddy produced by the Water Users' Association (WUA).",
              },
              {
                title: "Guest House",
                description:
                  "The HJRBDA also construct Guest Houses for accommodation purposes",
              },
            ].map((service, index) => (
              <Card key={index} className="border-border/60 shadow-sm transition-shadow hover:shadow-md">
                <CardHeader className="border-b border-border/40 bg-slate-50/50 dark:bg-slate-900/50">
                  <CardTitle className="text-lg font-semibold text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="leading-relaxed text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="border-b border-border/40 bg-background py-16">
        <div className="container mx-auto px-6">
          <div className="mb-8 text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Our Work
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              RECENT PROJECTS
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
              The HJRBDA undertakes numerous projects as presented in its yearly appropriation. These
              projects range from dam construction, construction of irrigation projects, water supply
              scheme, flood & erosion works...
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Irrigation Projects", image: "/placeholder-project-1.jpg" },
            { title: "Solar Street Lights", image: "/placeholder-project-2.jpg" },
            { title: "Water Supply Projects", image: "/placeholder-project-3.jpg" },
            { title: "Dam Construction", image: "/placeholder-project-4.jpg" },
          ].map((project, index) => (
            <Card key={index} className="overflow-hidden border-border/60 shadow-sm transition-shadow hover:shadow-md">
              <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center border-b border-border/40">
                <span className="text-sm font-medium text-muted-foreground">{project.title}</span>
              </div>
              <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50">
                <CardTitle className="text-base font-semibold text-foreground">{project.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" className="px-8" asChild>
            <Link href="/key-projects">SHOW MORE</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
