import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/footer";

export default function KeyProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Irrigation Projects",
      description:
        "Development of comprehensive irrigation schemes to support agricultural productivity in the region.",
      category: "Agriculture",
    },
    {
      id: 2,
      title: "Solar Street Lights",
      description: "Installation of solar-powered street lighting systems in rural communities.",
      category: "Infrastructure",
    },
    {
      id: 3,
      title: "Water Supply Projects",
      description:
        "Construction of water supply schemes to provide potable water to communities across the region.",
      category: "Water Supply",
    },
    {
      id: 4,
      title: "Dam Construction",
      description:
        "Building of dams and reservoirs for water storage and flood control purposes.",
      category: "Infrastructure",
    },
    {
      id: 5,
      title: "Flood and Erosion Control",
      description:
        "Implementation of flood and erosion control structures to protect communities and farmlands.",
      category: "Environmental",
    },
    {
      id: 6,
      title: "Land Clearing and Development",
      description:
        "Land clearing and development projects to prepare areas for agricultural and infrastructural development.",
      category: "Development",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Key Projects</span>
        </nav>

        <div className="mb-12">
          <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Projects</div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">KEY PROJECTS</h1>
        </div>

        <p className="mb-12 text-lg leading-relaxed text-muted-foreground">
          The HJRBDA undertakes numerous projects as presented in its yearly appropriation. These
          projects range from dam construction, construction of irrigation projects, water supply
          scheme, flood & erosion works, and other developmental initiatives.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="border-border/60 shadow-sm transition-shadow hover:shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center border-b border-border/40">
                <span className="text-sm font-medium text-muted-foreground">{project.title}</span>
              </div>
              <CardHeader className="border-b border-border/40 bg-slate-50/50 dark:bg-slate-900/50">
                <div className="mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary">{project.category}</span>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="leading-relaxed text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
