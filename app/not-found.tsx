import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <SectionWrapper className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-muted-foreground mb-10 max-w-md mx-auto">
          The page you are looking for might have been moved, deleted, or is temporarily unavailable.
        </p>
        <Button asChild size="lg">
          <Link href="/">Return to Homepage</Link>
        </Button>
      </SectionWrapper>
    </div>
  );
}
