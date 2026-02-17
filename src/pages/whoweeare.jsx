import Slider from "../components/slider/Slider.jsx";
import Banner from "../components/banner/Banner.jsx";
import Background from "../assets/images/who-we-are-hero.webp";
import sectionImage from "../assets/images/avatar-image.png";

export default function Whoweare() {
  return (
    <>
      <div className="main">
        <Banner title="WHO WE ARE" image={Background} />
        <div className="main__content">
          <h2>The Glance Of Our Team</h2>
          <Slider
            subHeading="Ramizuddin Munshi"
            designation="Cybersecurity Solution Architect In OT And IT"
            details="Ramizuddin Munshi is a seasoned cybersecurity professional with 5+ years of experience securing OT and IT environments. He specializes in real-time threat monitoring and response using SIEM (ArcSight, Sentinel, Nozomi), EDR (CrowdStrike, Defender), Tenable vulnerability scanning, and network monitoring tools. Expert in penetration testing (web, Android, iOS), application security, OWASP Top 10 compliance, secure code reviews, custom firewall design, and incident response playbook creation. He conducts IoT assessments, security audits, risk mitigation, and detailed reporting while collaborating across IT, OT, network, and compliance teams. Passionate about building strong defenses and raising cybersecurity awareness to reduce organizational risk."
            sectionImage={sectionImage}
          />
          <Slider
            subHeading="Mohammed Sufyan Kagdi"
            designation="Software Engineer – Laravel | Node.js | CodeIgniter"
            details="With over 3.5 years of experience, Mohammed Sufyan Kagdi designs and delivers robust enterprise-grade web and mobile applications using Laravel, Node.js, and CodeIgniter. He takes full ownership of the complete software development lifecycle — from solution architecture and secure RESTful API development to building multi-role dashboards, integrating payment gateways and SMS services, performance optimization, and setting up modern CI/CD pipelines. A strong team player, he effectively bridges backend, frontend, and DevOps teams to consistently deliver scalable, secure, high-performance, and user-centric products on schedule."
            sectionImage={sectionImage}
          />
          <Slider
            subHeading="Abbas Shaikh"
            designation="Software Engineer"
            details="Abbas Shaikh is a driven Python developer with more than 3 years of focused experience building robust, high-performance backend applications using Django and FastAPI. He maintains excellent code quality through disciplined static analysis with pylint, flake8, and mypy, and ensures reliability with thorough unit testing using pytest. Hands-on with cloud infrastructure — particularly AWS S3 and EC2 — to deliver scalable, production-ready solutions. Strong expertise in containerization with Docker and orchestration using Docker Compose. Passionate about clean architecture, best practices, and shipping maintainable, performant systems that scale effectively."
            sectionImage={sectionImage}
          />
          <Slider
            subHeading="Adnan Mansuri"
            designation="Front-End Developer"
            details="Adnan Mansuri is a dedicated Front-End Developer with 2+ years of professional experience building responsive, interactive, and highly user-centric web applications. Currently working full-time at AMPV Media, where he creates and maintains modern, performant interfaces using HTML, CSS, JavaScript, React, and GSAP — delivering smooth animations, micro-interactions, and polished user experiences that drive engagement. Alongside his full-time role, he selectively takes on freelance projects, consistently providing clean, scalable, pixel-perfect code and solutions tailored to client needs. Passionate about front-end craftsmanship, performance optimization, and crafting intuitive, visually compelling digital experiences."
            sectionImage={sectionImage}
          />
        </div>
      </div>
    </>
  );
}
