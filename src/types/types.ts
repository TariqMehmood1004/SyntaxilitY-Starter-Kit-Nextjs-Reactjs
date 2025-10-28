import { JobType } from "./enum";

export const defaultContent = [
  {
    key: "personal",
    title: "Personal Informations",
    content:
      "Please fill in your personal information like upload profile photo, full name, job title, email address, mobile number, and personal address.",
  },
  {
    key: "summary",
    title: "Professional Summary",
    content:
      "Write a short summary of your professional experience and skills. This section should highlight your key achievements and qualifications.",
  },
  {
    key: "education",
    title: "Education",
    content:
      "List your educational background, including degrees, schools, and any relevant details.",
  },
  {
    key: "professional-experience",
    title: "Profesional Experience",
    content:
      "List your professional experience and roles, including your responsibilities, achievements, and any relevant details.",
  },
  {
    key: "professional-projects",
    title: "Professional Projects",
    content:
      "List your professional projects, including your role, technologies used, and any relevant details.",
  },
  {
    key: "key-skills",
    title: "Key Skills",
    content:
      "List your skills and expertise, including programming languages, frameworks, and tools.",
  },
  {
    key: "certifications",
    title: "Certifications",
    content:
      "List your certifications and licenses, including any relevant details.",
  },
  {
    key: "languages",
    title: "Languages",
    content:
      "List the languages you speak and your proficiency level in each language.",
  },
  {
    key: "references",
    title: "References",
    content:
      "Provide references from previous employers or colleagues, including their contact information.",
  },
  {
    key: "resume-themes",
    title: "Resume Themes",
    content:
      "Select a resume theme to create a visually appealing and professional resume.",
  }
];

export interface PersonalInfo {
  fullName: string;
  jobTitle: string;
  mobileNumber: string;
  email: string;
  secondaryEmail?: string;
  website?: string;
  portfolio?: string;
  github?: string;
  linkedin?: string;
  youtube?: string;
  tumigo?: string;
  frontendMentor?: string;
  address?: string;
  profilePic?: string;
  summary: string;
};

export interface Education {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  grade?: string;
  description?: string;
};

export interface ProfessionalExperience {
  position: string;
  company: string;
  serviceProviding: string;
  startDate: string;
  endDate: string;
  jobType?: JobType;
  description?: string;
};

export interface ProfessionalProjects {
  title: string;
  description?: string;
  company?: string;
  technologies?: string;
  role?: string;
  link?: string;
  startDate?: string;
  endDate?: string;
};

// key skills
export interface Skills {
  name: string;
  level?: string; // e.g., Beginner, Intermediate, Expert
}

// certifications
export interface Certifications {
  name: string;
  issuer: string;
  date?: string;
  link?: string;
}

// languages
export interface Languages {
  name: string;
  level?: 1 | 2 | 3 | 4 | 5;
}

export const levelStars: Record<1 | 2 | 3 | 4 | 5, string> = {
  1: "★",
  2: "★★",
  3: "★★★",
  4: "★★★★",
  5: "★★★★★",
};

// References
export interface References {
  name: string;
  contactInfo: string;
  description?: string;
}

// Resume Themes
export interface ResumeThemesType { 
  id: string; 
  name: string; 
  primary: string; 
  accent: string; 
  base: string; 
  muted: string;
  border: string;
  background: string;
}