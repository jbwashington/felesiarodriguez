import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

export const PlayPauseButton = ({ play, setPlay }: { play: boolean; setPlay: (playing: boolean) => void }) => (
  <p>
    <Button className={buttonVariants({variant: 'outline', size: 'icon', className: 'bg-transparent border-2 border-cyan-300'})} onClick={() => setPlay(!play)}>{play ? '⏸' : '▶'}</Button>
  </p>
)