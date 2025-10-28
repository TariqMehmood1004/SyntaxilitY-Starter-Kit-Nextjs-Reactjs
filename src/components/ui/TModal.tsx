"use client";

import { ReactNode } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/react";

interface TModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  children: ReactNode;
}

export default function TModal({ open, onOpenChange, title, children }: TModalProps) {
  return (
    <Modal
      isOpen={open}
      onOpenChange={onOpenChange}
      size="lg"
      backdrop="blur"
      className="bg-muted rounded-xl fixed top-1/2 left-1/2 px-3 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl shadow-2xl"
      portalContainer={typeof window !== "undefined" ? document.body : undefined}
      hideCloseButton
      classNames={{
        wrapper: "z-[9999]",
        backdrop: "z-[9998]",
      }}
    >
      <ModalContent>
        {() => (
          <>
            {title && (
              <ModalHeader className="text-lg font-semibold border-b-2 border-gray-200 dark:border-[#373737]">
                {title}
              </ModalHeader>
            )}
            <ModalBody className="space-y-4 py-4 max-[767px]:h-96 overflow-y-auto">
              {children}
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
