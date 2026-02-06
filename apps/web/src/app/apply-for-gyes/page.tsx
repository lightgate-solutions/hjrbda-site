import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";

export default function ApplyForGyesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Apply for GYES</span>
        </nav>

        <h1 className="mb-8 text-4xl font-bold">APPLY FOR GYES</h1>

        <div className="mx-auto max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Government Youth Employment Scheme (GYES)</CardTitle>
              <CardDescription>
                Application portal for the Government Youth Employment Scheme
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-semibold">About GYES</h3>
                <p className="text-muted-foreground">
                  The Government Youth Employment Scheme (GYES) is an initiative designed to provide
                  employment opportunities for young people in various sectors including water
                  resources management, agriculture, infrastructure development, and administrative
                  services.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">Eligibility Requirements</h3>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Must be between 18 and 35 years of age</li>
                  <li>Must possess a minimum of SSCE or equivalent qualification</li>
                  <li>Must be a citizen of Nigeria</li>
                  <li>Must be willing to work in the assigned location</li>
                  <li>Must not be currently employed in the public sector</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">Available Positions</h3>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Water Resources Management</li>
                  <li>Agricultural Extension Services</li>
                  <li>Infrastructure Maintenance</li>
                  <li>Administrative Support</li>
                  <li>Technical Support Services</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">Application Process</h3>
                <ol className="list-decimal space-y-2 pl-6 text-muted-foreground">
                  <li>Fill out the online application form</li>
                  <li>Upload required documents (CV, certificates, etc.)</li>
                  <li>Submit your application</li>
                  <li>Wait for shortlisting notification</li>
                  <li>Attend interview if shortlisted</li>
                </ol>
              </div>

              <div className="pt-4">
                <Button size="lg" className="w-full" asChild>
                  <Link href="/apply-for-gyes">Start Application</Link>
                </Button>
              </div>

              <div className="rounded-lg border bg-muted/50 p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Application forms are currently being prepared. Please check
                  back soon or contact our office for more information.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
