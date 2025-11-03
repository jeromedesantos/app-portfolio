import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { DynamicIcon } from "./icon";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { Suspense } from "react";

export function Social({
  name,
  delay,
  href,
}: {
  name: string;
  delay: number;
  href: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "100%" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <Link href={href} target="_blank">
        <Button
          variant="secondary"
          className="rounded-full cursor-pointer p-5 transition-transform hover:scale-115"
        >
          <Suspense>
            <DynamicIcon
              name={name as keyof typeof dynamicIconImports}
              className="w-5 h-5"
            />
          </Suspense>
        </Button>
      </Link>
    </motion.div>
  );
}
