import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Who We Are */}
          <div>
            <h3 className="mb-4 font-semibold text-lg">Who We Are</h3>
            <p className="text-sm text-muted-foreground">
              The Hadaija Jama'are River Basin Development Authority, a Parastatal of the Federal
              Ministry of Water Resources was established to develop water resources and promote
              sustainable development in the region.
            </p>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="mb-4 font-semibold text-lg">Working Hours</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Mon - Fri. : 8 AM - 4 PM</li>
              <li>Saturday : Closed</li>
              <li>Sunday : Closed</li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="mb-4 font-semibold text-lg">Our Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Flood and Erosion Control
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Land clearing and development
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Sales of Agricultural Produce
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Water & Plantation
                </Link>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="mb-4 font-semibold text-lg">Recent Posts</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/news-media" className="hover:text-foreground transition-colors">
                  Latest News Updates
                </Link>
              </li>
              <li>
                <Link href="/tender" className="hover:text-foreground transition-colors">
                  New Tender Announcements
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>Copyright @ HJRBDA {new Date().getFullYear()}. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
