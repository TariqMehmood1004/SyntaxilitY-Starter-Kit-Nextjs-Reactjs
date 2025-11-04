"use client";
import NextLink from "next/link";
import { Link as HeroLink } from "@heroui/react";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
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
import { ArrowRight, Code } from "lucide-react";
import TModal from "@/components/ui/TModal";
import TDependencies from "@/components/TDependencies";
import { useRouter } from "next/navigation";


export const CompanyLogo = () => {
    return (
        <Image src="/logo-2.png" alt="Logo" width={42} height={42} className="w-8 h-8" />
    );
};


export default function THeader() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const [scrolled, setScrolled] = useState(false);

    const [depsModalOpen, setDepsModalOpen] = useState(false);

    // router for current page
    const router = useRouter();
    const pathname = usePathname();

    const menuItems = [
        "Home",
        "Products",
        "Solutions",
        "Resources",
        "DiagramGPT",
        "Pricing",
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleOnClickMenuItems = (item: string) => {
        if (item === "Home") {
            router.push("/");
        } else if (item === "Products") {
            router.push("/products");
        } else if (item === "Solutions") {
            router.push("/solutions");
        } else if (item === "Resources") {
            router.push("/resources");
        } else if (item === "DiagramGPT") {
            router.push("/diagramgpt");
        } else if (item === "Pricing") {
            router.push("/pricing");
        }
    };

    console.log(`pathname: ${pathname}`);
    

    return (
        <>
            <Navbar
                onMenuOpenChange={setIsMenuOpen}
                className={`w-full flex items-center justify-between z-50 transition-all duration-300 ${scrolled
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
                                <p className="font-bold text-lg text-blue-600 hidden">Syncdraw</p>
                            </NavbarBrand>
                        </NavbarContent>

                        <NavbarContent className="hidden sm:flex gap-4" justify="center">
                            <NavbarItem className="hidden sm:flex gap-4">
                                {menuItems.map((item, index) => (
                                    <HeroLink
                                        as={NextLink}
                                        key={index}
                                        href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                                        color="foreground"
                                        className={`
                                            text-sm hover:text-black/70 dark:hover:text-white/70 transition-colors cursor-pointer
                                            ${pathname === `/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}` ? "font-bold" : ""}
                                            `}
                                        >
                                        {item}
                                    </HeroLink>
                                ))}
                            </NavbarItem>
                        </NavbarContent>

                    </div>

                    <div className="flex items-center gap-4">
                        <NavbarContent justify="end">

                            <Button
                                onPress={() => setDepsModalOpen(true)}
                                className="fixed bottom-4 right-4 p-2 w-9 h-9 bg-slate-200 dark:bg-[#373737] hover:bg-muted text-sm text-muted-foreground rounded-full transition-all duration-300"
                                aria-label="View Dependencies"
                            >
                                <Code size={18} className="w-4 h-4" />
                                <span className="hidden">Dependencies</span>
                            </Button>

                            <SignedOut>
                            
                                <div className="flex items-center gap-3">
                                    <SignInButton mode="modal">
                                        <Button href="#" className="rounded-lg px-3 py-1 border-0 dark:border-[#373737] dark:hover:bg-[#373737]/80 transition ease-in duration-200">Login</Button>
                                    </SignInButton>
                                    {/* <SignUpButton mode="modal">
                                        <Button color="primary" href="#" variant="flat" className="bg-gray-100 hover:bg-gray-300 rounded-lg px-3 py-1 dark:bg-[#212121] dark:hover:bg-[#212121]/80 transition ease-in duration-200">
                                            Sign Up
                                        </Button>
                                    </SignUpButton> */}
                                    <Button color="primary" href="#" variant="flat" className="rounded-lg px-3 py-1 border-[2px] dark:border-[#373737] dark:hover:bg-[#373737]/80 transition ease-in duration-200">
                                        Book Demo
                                    </Button>

                                    <Button color="primary" href="#" variant="flat" className="bg-gray-100 hover:bg-gray-300 rounded-lg px-3 py-1 dark:bg-white dark:hover:bg-white/80 dark:text-black transition ease-in duration-200">
                                        <span>Try Syncdraw</span>
                                        <ArrowRight size={18} className="ml-2" />
                                    </Button>
                                </div>

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