import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">About</span>
        </nav>

        <div className="mb-12">
          <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">About</div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">ABOUT US</h1>
        </div>

        {/* About HJRBDA */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground">ABOUT HJRBDA</h2>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Brief History of HJRBDA</h3>
            <p className="leading-relaxed text-muted-foreground">
              The Hadaija Jama'are River Basin Development Authority, a Parastatal of the Federal
              Ministry of Water Resources was established to embark on, among other functions, the
              development of both surface and underground water resources potentials of the nation
              for multipurpose use but with particular emphasis on the development of irrigated
              agriculture.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              The Authority has been working diligently to manage water resources and promote
              sustainable development in the Hadaija Jama'are region, focusing on irrigation,
              water supply, flood control, and agricultural development.
            </p>
          </div>
        </section>

        {/* Vision */}
        <section id="vision" className="mb-16">
          <Card className="border-border/60 shadow-sm">
            <CardHeader className="border-b border-border/40 bg-slate-50/50 dark:bg-slate-900/50">
              <CardTitle className="text-2xl font-semibold text-foreground">OUR VISION</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="leading-relaxed text-muted-foreground">
                To ensure effective and efficient implementation of the Nation's Water Resources
                Development Policies, through optimal exploitation, conservation and overall
                development of the nation's abundant surface and underground water resources
                potentials, with a view to improving the quality of life of every Nigerian
                particularly those within the Hadaija Jama'are Basin of the River Niger.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Mission */}
        <section id="mission" className="mb-16">
          <Card className="border-border/60 shadow-sm">
            <CardHeader className="border-b border-border/40 bg-slate-50/50 dark:bg-slate-900/50">
              <CardTitle className="text-2xl font-semibold text-foreground">OUR MISSION</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="leading-relaxed text-muted-foreground">
                To serve as a viable and veritable implementing Agency of Government in the
                effective utilization of all the water resources potentials with the Hadaija
                Jama'are Basin with a view to improving the quality of lives of the people in the
                areas through development of irrigation agronomy, bulk and potable water supply and
                other water shed management project.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Mandate */}
        <section id="mandate" className="mb-16">
          <Card className="border-border/60 shadow-sm">
            <CardHeader className="border-b border-border/40 bg-slate-50/50 dark:bg-slate-900/50">
              <CardTitle className="text-2xl font-semibold text-foreground">OUR MANDATE</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="list-disc space-y-3 pl-6 leading-relaxed text-muted-foreground">
                <li>
                  To ensure prompt efficient and effective service delivery to our end users.
                </li>
                <li>
                  To remain responsive to the demands and aspirations of the beneficiaries of our
                  services.
                </li>
                <li>
                  To ensure quality service in all aspect of our endeavour and interaction with our
                  clients.
                </li>
                <li>
                  To uphold firm principles of transparency, accountability and reliable service
                  delivery.
                </li>
                <li>
                  To abhore all external and internal impediments inimical to effective and
                  efficient service delivery.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
      <Footer />
    </div>
  );
}
