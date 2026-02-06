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
      <section className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">WELCOME TO HJRBDA</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            The Hadaija Jama'are River Basin Development Authority is committed to the sustainable
            development and management of water resources in the region.
          </p>
        </div>
      </section>

      {/* Vision, Mission, Mandate Blocks */}
      <section className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  To ensure effective and efficient implementation of the nation's water resources
                  development policies, through optimal exploitation, conservation and overall
                  development of the nation's abundant surface and underground water resources
                  potentials...
                </CardDescription>
                <Button variant="link" className="mt-4 p-0" asChild>
                  <Link href="/about#vision">READ MORE</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  To serve as a viable and veritable implementing agency of Government in the
                  effective utilization of all the water resources potentials with the Lower Basin
                  of the River Niger with a view to improving the quality of lives of the people...
                </CardDescription>
                <Button variant="link" className="mt-4 p-0" asChild>
                  <Link href="/about#mission">READ MORE</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Mandate</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  To supply water from the Authority's completed storage schemes to all users for a
                  fee to ensure prompt efficient and effective service delivery to our end users. To
                  remain responsive to the demands and aspirations of the beneficiaries...
                </CardDescription>
                <Button variant="link" className="mt-4 p-0" asChild>
                  <Link href="/about#mandate">READ MORE</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-center text-3xl font-bold">Latest News</h2>
        <div className="grid gap-6 md:grid-cols-3">
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
            <Card key={news.id}>
              <CardHeader>
                <CardTitle className="text-lg">{news.title}</CardTitle>
                <CardDescription>
                  By {news.author} • {new Date(news.date).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">{news.preview}</p>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/news-media">Read More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">OUR SERVICES</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-center text-3xl font-bold">RECENT PROJECTS</h2>
        <p className="mb-8 text-center text-muted-foreground">
          The HJRBDA undertakes numerous projects as presented in its yearly appropriation. These
          projects range from dam construction, construction of irrigation projects, water supply
          scheme, flood & erosion works...
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Irrigation Projects", image: "/placeholder-project-1.jpg" },
            { title: "Solar Street Lights", image: "/placeholder-project-2.jpg" },
            { title: "Water Supply Projects", image: "/placeholder-project-3.jpg" },
            { title: "Dam Construction", image: "/placeholder-project-4.jpg" },
          ].map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="h-48 bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">{project.title}</span>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild>
            <Link href="/key-projects">SHOW MORE</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
