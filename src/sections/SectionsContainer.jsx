import { useEffect, useState } from "react";
import SkillsSection from "./SkillsSection";
import AdminSection from "./AdminSection";
import ProjectsSection from "../sections/Projects/ProjectsSection";
import ContactSection from "./Contact/ContactSection";

const SectionsContainer = ({ activeSection }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (activeSection) {
      setVisible(false);
      const t = setTimeout(() => setVisible(true), 20);
      return () => clearTimeout(t);
    }
  }, [activeSection]);

  if (!activeSection) return null;

  return (
    <div className={`section-animated ${visible ? "visible" : ""}`}>
      {activeSection === "skills" && <SkillsSection />}
      {activeSection === "projects" && <ProjectsSection />}
      {activeSection === "contact" && <ContactSection />}
      {activeSection === "admin" && <AdminSection />}
    </div>
  );
};

export default SectionsContainer;
