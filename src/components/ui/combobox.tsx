"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { UseFormSetValue, FieldValues, Path } from "react-hook-form";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const roles = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
  {
    value: "Prefer Not To Say",
    label: "Prefer Not To Say",
  },
]

interface ComboboxProps<T extends FieldValues> {
  setValueForm: UseFormSetValue<T>;
}

export function Combobox<T extends FieldValues>({setValueForm}: ComboboxProps<T>) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<"Male" | "Female" | "Prefer Not To Say">("Prefer Not To Say")

	React.useEffect(()=>{
		setValueForm('gender' as Path<T>, value as T[Path<T>]);
	},[value])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? roles.find((role) => role.value === value)?.label
            : "Select Gender..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Gender..." />
          <CommandList>
            <CommandEmpty>No Role Found</CommandEmpty>
            <CommandGroup>
              {roles.map((role) => (
                <CommandItem
                  key={role.value}
                  value={role.value}
                  onSelect={(currentValue) => {
                    if (currentValue !== value && (currentValue == "Male" || currentValue === "Female" || currentValue === "Prefer Not To Say")) {
                      setValue(currentValue)
                      setOpen(false)
                    }
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === role.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {role.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
