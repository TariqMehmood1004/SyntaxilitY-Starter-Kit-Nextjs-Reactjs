"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function TClerkWithTheme({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <ClerkProvider
      appearance={{
        baseTheme: theme === "dark" ? dark : neobrutalism,
        variables: {
          colorPrimary: "#6c47ff",
          colorText: theme === "dark" ? "#ffffff" : "#212121",
          colorBackground: theme === "dark" ? "#212121" : "#ffffff",
          colorInputBackground: theme === "dark" ? "#2a2a2a" : "#f9f9f9",
          colorInputText: theme === "dark" ? "#ffffff" : "#212121",
        },
        elements: {
         // Modals
        modalContent:
          "!relative !z-[9999] !flex !items-center !justify-center !max-w-screen !w-full !max-[767px]:!max-w-[100%] !mx-auto !my-auto !rounded-xl !overflow-y-auto !p-8 !bg-black/40 !backdrop-blur-lg",

        // Backdrop
        modalBackdrop:
          "!fixed !inset-0 !w-[100%] !h-[100%] !z-[9998] !flex !items-center !justify-center",

          // buttons
          formButtonPrimary: "!shadow-none !bg-[#6c47ff] hover:!bg-[#5936e0] focus:!bg-[#5936e0] active:!bg-[#4729b8] !text-white !rounded-lg !p-3.5 !transition !ease-in !duration-200",
          formButtonSecondary: "!shadow-none !bg-gray-100 hover:!bg-gray-200 focus:!bg-gray-200 active:!bg-gray-300 !text-black !rounded-lg !p-3.5 !transition !ease-in !duration-200 dark:!bg-[#212121] dark:hover:!bg-[#212121]/80 dark:focus:!bg-[#212121]/80 dark:active:!bg-[#212121]/70 dark:!text-white",
          formButtonDisabled: "!shadow-none opacity-50 !cursor-not-allowed",
          formButtonLoadingSpinner: "!shadow-none border-2 border-t-2 border-white h-5 w-5 rounded-full animate-spin",

          // form fields
          formFieldInput: "!shadow-none focus:!ring-0 !rounded-md !py-6 !transition !ease-in !duration-200 dark:!bg-muted-foreground/10 dark:!placeholder:text-muted-foreground dark:!text-white",
          formFieldInputError: "!shadow-none !border !border-red-500",
          formFieldLabel: "!shadow-none !font-medium !text-sm",
          formFieldError: "!shadow-none !mt-1 !text-red-500 !text-sm",
          formFieldCheckboxLabel: "!shadow-none !text-sm",
          formFieldCheckboxInput: "!shadow-none focus:!ring-0 !rounded-md !transition !ease-in !duration-200",

          // links
          linkButton: "!shadow-none !underline hover:!no-underline !font-medium",
          linkButtonPrimary: "!shadow-none !text-[#6c47ff] hover:!text-[#5936e0] focus:!text-[#5936e0] active:!text-[#4729b8] !font-medium",
          linkButtonSecondary: "!shadow-none !text-black hover:!text-gray-600 focus:!text-gray-600 active:!text-gray-800 dark:!text-white dark:hover:!text-gray-300 dark:focus:!text-gray-300 dark:active:!text-gray-100 !font-medium",

          // headers
          cardHeaderTitle: "!text-xl !font-semibold !shadow-none",
          cardHeaderSubtitle: "!text-sm !text-gray-500 dark:!text-gray-400 !shadow-none",

          // cards
          card: "!rounded-lg dark:!bg-muted !shadow-none !max-w-4xl !w-full !mx-auto",
          cardContent: "!p-6",
          cardFooter: "!p-6 !pt-0",

          // modals
          modal: "!rounded-lg !p-0 !shadow-none",
          modalHeader: "!p-6 !pb-0 !border-b !border-gray-200 dark:!border-gray-700",

          // nav
          navItem: "!shadow-none !text-sm !font-medium",
          navItemActive: "!shadow-none !text-[#6c47ff] dark:!text-[#6c47ff] !font-medium",
          navbarButton: "!shadow-none !text-sm !font-medium !text-gray-500 hover:!text-gray-700 dark:!text-gray-400 dark:hover:!text-gray-200",

          // sidebar
          sidebarItem: "!shadow-none !text-sm !font-medium",
          sidebarItemActive: "!shadow-none !text-[#6c47ff] dark:!text-[#6c47ff] !font-medium",

          // social buttons
          socialButtonsBlockButton: "!shadow-none !bg-[#373737] hover:!bg-[#373737]/80 focus:!bg-[#5936e0] active:!bg-[#4729b8] !text-white !rounded-lg !p-3.5 !transition !ease-in !duration-200",          
          socialButtonsIconButton: "!shadow-none !border !border-[#373737] hover:!bg-[#373737]/80 focus:!bg-[#5936e0] active:!bg-[#4729b8] !text-white !rounded-lg !p-3.5 !transition !ease-in !duration-200",          
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}