import { Link } from "react-router-dom";
import kopLogo from "@/assets/kop-logo.png";

const Footer = () => (
  <footer className="border-t py-12 bg-secondary/20">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <Link to="/">
            <img src={kopLogo} alt="KOP Technology" className="h-[75px] w-auto mb-3" />
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Building smarter software for the care sector.
          </p>
        </div>

        {[
          { title: "Product", links: ["Features", "Pricing", "Security", "Integrations"] },
          { title: "Company", links: ["About", "Careers", "Blog", "Contact"] },
          { title: "Legal", links: ["Privacy Policy", "Terms of Service", "GDPR", "Cookie Policy"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-display font-semibold text-sm text-foreground mb-3">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t mt-10 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} KOP Technology. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
