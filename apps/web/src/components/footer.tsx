import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-slate-900 text-slate-200">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Who We Are */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Who We Are</h3>
            <p className="leading-relaxed text-slate-400">
              The Hadaija Jama'are River Basin Development Authority, a Parastatal of the Federal
              Ministry of Water Resources was established to develop water resources and promote
              sustainable development in the region.
            </p>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Working Hours</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>Mon - Fri. : 8 AM - 4 PM</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>Saturday : Closed</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>Sunday : Closed</span>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-slate-400 transition-colors hover:text-white">
                  Flood and Erosion Control
                </Link>
              </li>
              <li>
                <Link href="/" className="text-slate-400 transition-colors hover:text-white">
                  Land clearing and development
                </Link>
              </li>
              <li>
                <Link href="/" className="text-slate-400 transition-colors hover:text-white">
                  Sales of Agricultural Produce
                </Link>
              </li>
              <li>
                <Link href="/" className="text-slate-400 transition-colors hover:text-white">
                  Water & Plantation
                </Link>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Recent Posts</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/news-media" className="text-slate-400 transition-colors hover:text-white">
                  Latest News Updates
                </Link>
              </li>
              <li>
                <Link href="/tender" className="text-slate-400 transition-colors hover:text-white">
                  New Tender Announcements
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center">
          <p className="text-sm text-slate-400">
            Copyright © HJRBDA {new Date().getFullYear()}. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
