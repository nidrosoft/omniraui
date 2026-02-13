import { ReactNode } from "react";

export interface NavSubItem {
    label: string;
    href: string;
    badge?: ReactNode;
}

export interface NavItemType {
    label: string;
    href: string;
    icon?: ReactNode;
    badge?: ReactNode;
    items?: NavSubItem[];
    external?: boolean;
}

export interface NavItemDividerType {
    divider: true;
}

export interface NavSectionType {
    heading: string;
    items: (NavItemType | NavItemDividerType)[];
}

export type SidebarNavItem = NavItemType | NavItemDividerType;
