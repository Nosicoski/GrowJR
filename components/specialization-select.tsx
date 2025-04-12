"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const specializations = [
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "fullstack", label: "Fullstack" },
  { value: "scrum-master", label: "Scrum Master" },
  { value: "bbdd", label: "Base de Datos" },
  { value: "testing", label: "Testing / QA" },
  { value: "ux-ui", label: "Diseño UX/UI" },
  { value: "infraestructura", label: "Infraestructura / DevOps" },
  { value: "mobile", label: "Desarrollo Mobile" },
  { value: "data-science", label: "Data Science" },
  { value: "ia", label: "Inteligencia Artificial" },
]

export function SpecializationSelect() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [selectedLabel, setSelectedLabel] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
          {value ? specializations.find((spec) => spec.value === value)?.label : "Selecciona tu especialidad..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <input type="hidden" name="specialization" value={selectedLabel} />
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Buscar especialidad..." />
          <CommandList>
            <CommandEmpty>No se encontraron resultados.</CommandEmpty>
            <CommandGroup className="max-h-60 overflow-y-auto">
              {specializations.map((spec) => (
                <CommandItem
                  key={spec.value}
                  value={spec.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    const selectedSpec = specializations.find((spec) => spec.value === currentValue)
                    setSelectedLabel(selectedSpec?.label || "")
                    setOpen(false)
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", value === spec.value ? "opacity-100" : "opacity-0")} />
                  {spec.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
