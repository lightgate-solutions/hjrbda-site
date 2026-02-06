import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Footer from "@/components/footer";

export default function TenderPage() {
  const tenders = [
    {
      id: 1,
      title: "INVITATION FOR TENDER 2025FY FOR LOT A30-A32 (WORKS)",
      description:
        "LOWER NIGER RIVER BASIN DEVELOPMENT AUTHORITY, ILORIN. 2025FY LIST OF PREQUALIFIED BIDDERS FOR LOT A30-A32(WORKS)",
      downloadUrl: "#",
      date: "2025-01-20",
    },
    {
      id: 2,
      title: "TENDER FOR DAM CONSTRUCTION PROJECTS",
      description:
        "Invitation for qualified contractors to submit tenders for dam construction and water storage projects.",
      downloadUrl: "#",
      date: "2025-01-15",
    },
    {
      id: 3,
      title: "IRRIGATION PROJECTS TENDER 2025",
      description:
        "Tender opportunities for irrigation infrastructure development projects across the region.",
      downloadUrl: "#",
      date: "2025-01-10",
    },
    {
      id: 4,
      title: "WATER SUPPLY SCHEME TENDERS",
      description:
        "Open tenders for water supply scheme construction and rehabilitation projects.",
      downloadUrl: "#",
      date: "2025-01-05",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Tender News</span>
        </nav>

        <h1 className="mb-8 text-4xl font-bold">TENDER NEWS</h1>

        <div className="space-y-6">
          {tenders.map((tender) => (
            <Card key={tender.id}>
              <CardHeader>
                <CardTitle className="text-xl">{tender.title}</CardTitle>
                <CardDescription>
                  Published: {new Date(tender.date).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{tender.description}</p>
                <Button asChild>
                  <a href={tender.downloadUrl} download>
                    <Download className="mr-2 h-4 w-4" />
                    CLICK DOWNLOAD
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-lg border bg-muted/50 p-6">
          <h2 className="mb-4 text-2xl font-bold">INTRODUCTION</h2>
          <p className="text-muted-foreground">
            HADAIJA JAMA'ARE RIVER BASIN DEVELOPMENT AUTHORITY. 2025FY LIST OF PREQUALIFIED BIDDERS
            FOR VARIOUS WORKS AND SERVICES.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Interested contractors and service providers are invited to download tender documents
            and submit their bids according to the specified guidelines. All tenders must be
            submitted before the closing date indicated in each tender document.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
