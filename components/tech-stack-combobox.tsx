"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const technologies = [
  { value: "react", label: "React" },
  { value: "angular", label: "Angular" },
  { value: "vue", label: "Vue.js" },
  { value: "svelte", label: "Svelte" },
  { value: "nextjs", label: "Next.js" },
  { value: "nodejs", label: "Node.js" },
  { value: "express", label: "Express.js" },
  { value: "nestjs", label: "NestJS" },
  { value: "django", label: "Django" },
  { value: "flask", label: "Flask" },
  { value: "laravel", label: "Laravel" },
  { value: "spring", label: "Spring Boot" },
  { value: "dotnet", label: ".NET" },
  { value: "ruby", label: "Ruby on Rails" },
  { value: "php", label: "PHP" },
  { value: "java", label: "Java" },
  { value: "python", label: "Python" },
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "kotlin", label: "Kotlin" },
  { value: "swift", label: "Swift" },
  { value: "mongodb", label: "MongoDB" },
  { value: "mysql", label: "MySQL" },
  { value: "postgresql", label: "PostgreSQL" },
  { value: "firebase", label: "Firebase" },
  { value: "graphql", label: "GraphQL" },
  { value: "aws", label: "AWS" },
  { value: "azure", label: "Azure" },
  { value: "gcp", label: "Google Cloud" },
  { value: "docker", label: "Docker" },
  { value: "kubernetes", label: "Kubernetes" },
  { value: "terraform", label: "Terraform" },
  { value: "tailwind", label: "Tailwind CSS" },
  { value: "bootstrap", label: "Bootstrap" },
  { value: "materialui", label: "Material UI" },
  { value: "redux", label: "Redux" },
  { value: "mobx", label: "MobX" },
  { value: "zustand", label: "Zustand" },
  { value: "reactquery", label: "React Query" },
  { value: "cypress", label: "Cypress" },
  { value: "jest", label: "Jest" },
  { value: "playwright", label: "Playwright" },
  { value: "storybook", label: "Storybook" },
  { value: "figma", label: "Figma" },
  { value: "wordpress", label: "WordPress" },
  { value: "shopify", label: "Shopify" },
  { value: "webflow", label: "Webflow" },
]

export function TechStackCombobox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [selectedLabel, setSelectedLabel] = React.useState("")

  const handleSelect = React.useCallback((tech: (typeof technologies)[0]) => {
    setValue(tech.value)
    setSelectedLabel(tech.label)
    setOpen(false)
  }, [])

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between cursor-pointer bg-white text-black border-gray-300"
          >
            {selectedLabel || "Selecciona tu stack tecnológico..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command className="bg-white text-black">
            <CommandInput placeholder="Buscar tecnología..." className="text-black" />
            <CommandList>
              <CommandEmpty>No se encontraron resultados.</CommandEmpty>
              <CommandGroup className="max-h-60 overflow-y-auto">
                {technologies.map((tech) => (
                  <div
                    key={tech.value}
                    className={cn(
                      "flex items-center px-2 py-1.5 text-sm rounded-sm cursor-pointer hover:bg-gray-100",
                      value === tech.value ? "bg-gray-100" : "",
                    )}
                    onClick={() => handleSelect(tech)}
                  >
                    <Check className={cn("mr-2 h-4 w-4", value === tech.value ? "opacity-100" : "opacity-0")} />
                    {tech.label}
                  </div>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <input type="hidden" name="tech-stack" value={selectedLabel} />
    </div>
  )
}
