import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Odion Goodnews</h1>
        <p className="mt-4 text-lg text-gray-600">
          Results-driven Web Developer with proven expertise in WordPress development, full-stack web technologies (PHP, React), and web service integration using REST and GraphQL. Specializes in Cybersecurity VAPT.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Frontend: React, HTML, CSS, JavaScript</li>
          <li>Backend: PHP, Node.js</li>
          <li>CMS: WordPress</li>
          <li>Cybersecurity: VAPT (Web Apps, APIs, Mobile), OWASP Top 10, NDPR, CBN Standards</li>
          <li>Tools: Git, Postman, VS Code, cPanel, Figma</li>
          <li>DevOps: Basic Linux server management and deployment</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Charistech Consulting Website Development</li>
          <li>Xypronet Website Development</li>
          <li>Cybersecurity Self-Assessment Validation for fintechs</li>
          <li>Fintech VAPT Project – Identified vulnerabilities and improved security posture</li>
          <li>Cybersecurity Trainings – Delivered to general staff, technical teams, and executives</li>
          <li>LeadCity Mobile Banking App & Website – Full VAPT including API testing</li>
          <li>Custom WordPress Business Site – API integrations, responsive UI</li>
          <li>React-Based Admin Dashboard – Secure GraphQL integration and auth</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Work History</h2>
        <p className="font-bold">Charistech Consulting Ltd — Present, Lagos, Nigeria</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Designed, developed, and maintained websites with WordPress, PHP & React</li>
          <li>Built REST and GraphQL-based services</li>
          <li>Performed VAPT on web, mobile apps, and APIs</li>
          <li>Collaborated with UI/UX teams on pixel-perfect designs</li>
          <li>Ensured OWASP and compliance standards were met</li>
        </ul>
        <p className="mt-4 font-bold">Freelance Full-Stack Developer</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Delivered SME solutions using WordPress, PHP & React</li>
          <li>Integrated third-party APIs, payment gateways, CRMs</li>
          <li>Set up hosting, DNS, emails, and SSL</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Certified in Cybersecurity (ISC2, 2024)</li>
          <li>CEH (Cisco, 2025)</li>
          <li>CompTIA Security+ (2024)</li>
          <li>CNSP (TheSecOp, 2025)</li>
          <li>CySA+ (LinkedIn, 2024)</li>
          <li>SQL Injection – EC-Council (2024)</li>
          <li>CCNA (LinkedIn, 2024)</li>
          <li>Ethical Hacking – Udemy (2024)</li>
          <li>Mastercard Cybersecurity Simulation – Forage (2024)</li>
          <li>Cloud Security Summit – dx5 (2024)</li>
          <li>Cybersecurity Essentials – Training Height Institute (2024)</li>
          <li>Young Baobab Professionals – Baobab (2023)</li>
          <li>HRM & PM – OAU & UBIIT (2020)</li>
        </ul>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <div className="flex justify-center gap-4">
          <a href="mailto:goodnewsodion@gmail.com" className="text-blue-500 hover:underline flex items-center gap-2">
            <Mail size={18} /> Email
          </a>
          <a href="https://www.linkedin.com/in/goodnews-odion-3a3b06202" className="text-blue-500 hover:underline flex items-center gap-2">
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href="tel:08054839089" className="text-blue-500 hover:underline flex items-center gap-2">
            <Github size={18} /> 08054839089
          </a>
        </div>
      </section>
    </div>
  );
}
