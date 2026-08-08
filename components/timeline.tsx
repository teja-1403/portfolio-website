"use client";

import { motion } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";

const experiences = [
  {
    title: "Technology Apprentice",
    company: "Standard Chartered GBS",
    period: "Jul 2025 – Jul 2026 | Chennai, India",
    description: [
      "Built the Exception Dashboard (ED) using React (TypeScript) and Spring Boot for real-time trade monitoring across multiple systems.",
      "Developed the Corporate Actions (CA) Dashboard with 12+ search filters and scalable backend APIs processing 10k+ records/day for 600+ users across 28+ countries.",
      "Automated end-to-end testing with Selenium and maintained Jest/JUnit tests with SonarQube, achieving 85%+ CI/CD test coverage and near-zero post-production defects.",
      "Contributed to AWS infrastructure provisioning for the India Gold Custody deployment using Terraform and Azure DevOps pipelines (EC2, Aurora PostgreSQL, ELB, SC FileIT).",
      "Validated SQL data integrity, resolving synchronization issues between upstream and downstream systems to ensure reliable application data.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company: "Indira Gandhi Centre for Atomic Research (IGCAR)",
    period: "Sep 2023 - Oct 2023 | Chennai, Tamil Nadu, India",
    description: [
      "Conducted research on applying machine learning algorithms for breast cancer detection.",
      "Improved data preprocessing techniques by 20%, enhancing model accuracy.",
      "Developed and deployed predictive models using Python, Scikit-learn, and Streamlit.",
      "Collaborated with domain experts to interpret results for early cancer detection.",
    ],
  },
];

export function Timeline() {
  const isMobile = useMobile();

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-purple-500/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="text-zinc-400 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <ul className="space-y-3 text-zinc-300">
                  {experience.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-purple-500 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
