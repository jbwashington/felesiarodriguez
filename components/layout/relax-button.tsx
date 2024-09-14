import { Droplets, TreePalm, Trees, Wind } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const RelaxButton = () => {
  return (
      <DropdownMenu>
          <DropdownMenuTrigger>
              <Button variant="default" size="sm" className="mr-2">Relax</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
              <DropdownMenuLabel>Choose a mood</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                  <TreePalm className="mr-2 h-4 w-4" />
                  <span>Beach</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                  <Droplets className="mr-2 h-4 w-4" />
                  <span>Rain</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                  <Trees className="mr-2 h-4 w-4" />
                  <span>Nature</span>
              </DropdownMenuItem>
          </DropdownMenuContent>
      </DropdownMenu>
  );
}