import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Video } from "@/types";

export const VideoItem = ({ video }: { video: Video }) => {
    return (
        <DropdownMenuItem>
            <video.icon className="w-4 h-4 mr-2" />
            {video.name}
        </DropdownMenuItem>
    );
};
