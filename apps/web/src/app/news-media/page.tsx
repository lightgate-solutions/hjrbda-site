import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/footer";

export default function NewsMediaPage() {
  const newsItems = [
    {
      id: 1,
      title: "New Water Supply Project Launched",
      author: "Admin",
      date: "2025-01-15",
      preview:
        "The Authority has launched a new water supply project to serve rural communities in the region. This initiative aims to provide clean and potable water to over 10,000 residents.",
      content:
        "The HJRBDA has officially launched a comprehensive water supply project that will benefit multiple communities. The project includes the construction of water treatment facilities and distribution networks.",
    },
    {
      id: 2,
      title: "Irrigation Scheme Completion",
      author: "Admin",
      date: "2025-01-10",
      preview:
        "The latest irrigation scheme has been completed, benefiting over 500 farmers in the region. The project includes modern irrigation infrastructure and water management systems.",
      content:
        "A major irrigation project has been successfully completed, providing farmers with reliable water supply for their crops throughout the year. This will significantly boost agricultural productivity.",
    },
    {
      id: 3,
      title: "Tender Announcement for 2025",
      author: "Admin",
      date: "2025-01-05",
      preview:
        "New tenders are now open for various infrastructure projects including dam construction, water supply schemes, and irrigation projects.",
      content:
        "The Authority has announced several tenders for the 2025 fiscal year. Interested contractors are invited to submit their bids for various infrastructure development projects.",
    },
    {
      id: 4,
      title: "Flood Control Measures Implemented",
      author: "Admin",
      date: "2024-12-20",
      preview:
        "New flood control structures have been implemented to protect communities from seasonal flooding. The measures include embankments and drainage systems.",
      content:
        "In response to recent flooding incidents, the Authority has implemented comprehensive flood control measures to protect vulnerable communities and farmlands.",
    },
    {
      id: 5,
      title: "Agricultural Development Program",
      author: "Admin",
      date: "2024-12-15",
      preview:
        "A new agricultural development program has been launched to support local farmers with modern farming techniques and equipment.",
      content:
        "The HJRBDA has initiated an agricultural development program aimed at enhancing farming practices and increasing crop yields in the region.",
    },
    {
      id: 6,
      title: "Partnership with Water Users Association",
      author: "Admin",
      date: "2024-12-10",
      preview:
        "The Authority has entered into a partnership with local Water Users' Associations to improve water resource management.",
      content:
        "A strategic partnership has been formed with Water Users' Associations to promote sustainable water resource management and community involvement.",
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
          <span>News & Media</span>
        </nav>

        <h1 className="mb-8 text-4xl font-bold">NEWS & MEDIA</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((news) => (
            <Card key={news.id}>
              <CardHeader>
                <CardTitle className="text-lg">{news.title}</CardTitle>
                <CardDescription>
                  By {news.author} • {new Date(news.date).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">{news.preview}</p>
                <Link
                  href={`/news-media/${news.id}`}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Read More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
