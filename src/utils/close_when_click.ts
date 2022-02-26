import React from "react";

export function closeIfClickAnywhere(block: React.RefObject<HTMLDivElement>, open:boolean,setOpen: React.Dispatch<React.SetStateAction<boolean>>) {
    document.addEventListener('click', function(e) {
        const target = e.target;
        const its_block = target === block.current || block.current && block.current.contains(target as Node);
        
        if (!its_block && open) {
            setOpen(false);
        }
    });
}