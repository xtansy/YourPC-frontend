import { type ReactNode } from "react";

import { Logo } from "shared/ui";

interface HeaderProps {
    rightSlot: ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ rightSlot }) => {
    return (
        <div>
            <Logo />
            <div>
                {rightSlot}
                {/* theme switcher */}
            </div>
        </div>
    );
};
