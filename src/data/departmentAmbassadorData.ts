export type ViewerType = "prospective" | "parent" | "current" | "other";

export type DepartmentKey =
  | "civil-engineering"
  | "mechanical-engineering"
  | "automobile-engineering"
  | "computer-science-and-engineering"
  | "computer-science-and-engineering-data-science"
  | "information-technology"
  | "electronics-and-communication-engineering"
  | "electrical-and-electronics-engineering";

export type DepartmentAmbassadorContent = {
  fullName: string;
  introLines: string[]; // 3–5 proud lines
  programs: string[]; // UG / PG / PhD titles
  labsAndFacilities: string[];
  facultyAndResearch: string[];
  achievements: string[];
  activities: string[];
  placements: string[];
};

/**
 * IMPORTANT:
 * - Populate ONLY with official content from the GCEE website / admin.
 * - Current values are conservative placeholders and should be updated
 *   once you copy the exact department text.
 */
export const departmentAmbassadorData: Partial<
  Record<DepartmentKey, DepartmentAmbassadorContent>
> = {
  "computer-science-and-engineering": {
    fullName: "Computer Science and Engineering",
    introLines: [
      "Our Computer Science and Engineering department at GCEE is committed to producing capable software engineers who can adapt to the rapidly evolving tech landscape.",
      "With strong fundamentals in algorithms, systems, and emerging technologies, the department blends theory and hands-on learning.",
      "We focus on ethical engineering practice, innovation, and continuous learning to serve industry and society.",
    ],
    programs: [
      "B.E. Computer Science and Engineering",
      "M.E. Computer Science and Engineering",
      // Add Ph.D. information here if officially offered and documented.
    ],
    labsAndFacilities: [
      "Software Development Lab",
      "Cloud Computing Lab",
      "AI & Robotics Lab",
      "Networking Lab",
      "Database Systems Lab",
    ],
    facultyAndResearch: [
      "Experienced faculty with qualifications up to Ph.D. in core computer science domains.",
      "Key areas of interest include artificial intelligence, data analytics, networking, and software engineering.",
      // Refine with exact research areas from the official CSE page when available.
    ],
    achievements: [
      "Consistent project and mini-project work aligned with current industry trends.",
      // Add specific ranks, funded projects, publications, patents, or MoUs when you have official details.
    ],
    activities: [
      "Technical symposiums and coding contests conducted through department associations or clubs.",
      "Workshops and guest lectures on modern technologies in collaboration with industry and academia.",
      // Add official student chapters (CSI/IEEE/ACM etc.) when confirmed from the site.
    ],
    placements: [
      "Strong placement culture with students placed in leading software and IT companies.",
      "Opportunities for internships and higher studies, supported by the department and placement cell.",
      // Insert exact statistics (like highest package, number of offers, etc.) only after verifying official data.
    ],
  },
  // You can add entries for other departments (ECE, EEE, MECH, CIVIL, IT, etc.)
  // following the same structure, using ONLY official information.
};

