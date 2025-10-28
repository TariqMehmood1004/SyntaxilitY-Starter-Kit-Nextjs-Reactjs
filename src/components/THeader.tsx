"use client";

import React, { useEffect, useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
} from "@heroui/react";
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs';
import { ThemeToggleButton } from "@/components/ui/SkipperUI26";
import Image from "next/image";
import { Code } from "lucide-react";
import TModal from "@/components/ui/TModal";
import TDependencies from "@/components/TDependencies";


export const CompanyLogo = () => {
    return (
        <Image src="/logo-2.png" alt="Logo" width={32} height={32} className="w-6 h-6" />
    );
};


export default function THeader() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const [scrolled, setScrolled] = useState(false);

    const [depsModalOpen, setDepsModalOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];    

    return (
        <>
            <Navbar
                onMenuOpenChange={setIsMenuOpen}
                className={`w-full flex items-center justify-between z-50 transition-all duration-300 ${
                    scrolled
                    ? "backdrop-blur-md bg-white/70 dark:bg-black/50"
                    : "bg-transparent"
                }`}
                style={{ position: "sticky", top: 0, padding: "1rem 0rem" }}
                >

                <div className="w-full mx-auto container flex items-center justify-between z-50 transition-all duration-300">
                <div className="flex items-center gap-4">
                    <NavbarContent>
                        <NavbarMenuToggle
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            className="sm:hidden"
                        />
                        <NavbarBrand>
                            <CompanyLogo />
                            <p className="font-bold text-inherit hidden">Syntaxilit<span className="text-indigo-600 dark:text-orange-600">Y</span></p>
                        </NavbarBrand>
                    </NavbarContent>

                    <NavbarContent className="hidden sm:flex gap-4" justify="center">
                        <NavbarItem>
                            <Link color="foreground" href="/">
                                Home
                            </Link>
                        </NavbarItem>
                        <NavbarItem isActive>
                            <Link aria-current="page" href="/pricing">
                                Pricing
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" href="/privacy-policy">
                                Privacy Policy
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" href="/terms-of-service">
                                Terms of Service
                            </Link>
                        </NavbarItem>
                        {/* <NavbarItem className="bg-gray-100 px-3 py-1 rounded hover:bg-[#212121] dark:bg-[#212121] dark:hover:bg-[#212121]/80 dark:text-white dark:hover:text-white dark:active:text-white transition ease-in duration-200">
                            <Link color="foreground" href="#">
                                <span>Reviews</span>
                                <Star className="ml-2" size={16} />
                            </Link>
                        </NavbarItem> */}
                    </NavbarContent>

                </div>

                <div className="flex items-center gap-4">
                    <NavbarContent justify="end">

                        <Button
                            onPress={() => setDepsModalOpen(true)}
                            className="p-2 h-9 hover:bg-muted text-sm text-muted-foreground rounded-full transition-all duration-300"
                            aria-label="View Dependencies"
                            >
                            <Code size={18} />
                            <span>Dependencies</span>
                        </Button>

                        <SignedOut>
                            <SignInButton mode="modal">
                                <Button href="#" className="border border-gray-100 hover:border-gray-300 rounded-lg px-3 py-1 dark:border-[#212121] dark:hover:bg-[#212121]/80 transition ease-in duration-200">Login</Button>
                            </SignInButton>
                            <SignUpButton mode="modal">
                                <Button color="primary" href="#" variant="flat" className="bg-gray-100 hover:bg-gray-300 rounded-lg px-3 py-1 dark:bg-[#212121] dark:hover:bg-[#212121]/80 transition ease-in duration-200">
                                    Sign Up
                                </Button>
                            </SignUpButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </NavbarContent>

                    <ThemeToggleButton blur={true} />
                </div>

                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full"
                                color={
                                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
                </div>
            </Navbar>

            <TModal open={depsModalOpen} onOpenChange={setDepsModalOpen} title="Project Dependencies">
                <TDependencies />
            </TModal>
        </>
    );
}