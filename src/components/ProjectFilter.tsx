import { useState } from "preact/hooks";
import type { Project, ProjectCategory } from "../data/projects";

const filters = [
  { label: "All", value: "all" },
  { label: "Apps", value: "app" },
  { label: "Websites", value: "website" },
  { label: "Tools", value: "tool" },
] as const;

type FilterValue = "all" | ProjectCategory;

export default function ProjectFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<FilterValue>("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div>
      <div class="flex gap-2 mb-8 flex-wrap">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            class={`px-4 py-2 text-xs font-medium rounded-lg transition-colors ${
              active === f.value
                ? "bg-stone-900 text-stone-50"
                : "bg-stone-100 text-stone-500 hover:bg-stone-200 hover:text-stone-700"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div class="space-y-4">
        {filtered.map((project) => (
          <a
            key={project.title}
            href={project.url || "#"}
            target={project.url?.startsWith("http") ? "_blank" : undefined}
            rel={project.url?.startsWith("http") ? "noopener noreferrer" : undefined}
            class="group flex gap-5 p-4 rounded-xl border border-stone-100 hover:border-stone-300 transition-colors"
          >
            <div class="shrink-0 w-28 h-20 rounded-lg bg-stone-100 overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  class="w-full h-full object-cover"
                />
              ) : (
                <div class="w-full h-full flex items-center justify-center text-stone-300">
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                  </svg>
                </div>
              )}
            </div>

            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between mb-1">
                <h3 class="text-sm font-semibold text-stone-900 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <span class="text-[10px] font-mono text-stone-400 uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
              <p class="text-sm text-stone-500 leading-relaxed">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
