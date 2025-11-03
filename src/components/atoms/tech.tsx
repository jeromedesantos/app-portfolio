import { LogoLoop } from "@/components/ui/logo-loop";
import { DynamicSiIcon } from "./icon-si";
import stacks from "@/data/stacks.json";

const techMapped = stacks.map((stack) => ({
  node: <DynamicSiIcon name={stack.name} />,
  title: stack.title,
  href: stack.href,
}));

export function Tech() {
  return (
    <div
      className="flex justify-center"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <LogoLoop
        logos={techMapped}
        speed={30}
        direction="right"
        logoHeight={48}
        gap={60}
        pauseOnHover
        scaleOnHover
        fadeOut
        ariaLabel="Technology partners"
      />
    </div>
  );
}
