import React from "react";
import { Link } from "react-router-dom";

import Layout from "@/components/Layout";
import { ABOUT_US_ITEMS, NAV_ITEMS, SITE_LINKS } from "@/constants";

const sections = [
  { title: "Main Pages", links: SITE_LINKS },
  { title: "Navigation", links: NAV_ITEMS },
  { title: "About Us", links: ABOUT_US_ITEMS },
];

const Sitemap: React.FC = () => {
  return (
    <Layout>
      <section className="bg-india-blue text-white py-12">
        <div className="container px-4">
          <h1 className="text-3xl font-bold text-center">Sitemap</h1>
        </div>
      </section>
      <section className="section-padding">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <div key={section.title} className="rounded-lg border bg-card p-6 shadow-sm">
                <h2 className="text-xl font-bold text-india-blue mb-4">{section.title}</h2>
                <div className="space-y-3">
                  {section.links.map((link) => (
                    <Link
                      key={`${section.title}-${link.path}`}
                      to={link.path}
                      className="block text-muted-foreground hover:text-india-blue transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sitemap;
