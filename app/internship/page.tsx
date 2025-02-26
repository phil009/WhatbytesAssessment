import { Button } from "@/components/ui/button";
import { Target } from "lucide-react";
import Link from "next/link";

export default function InternshipPage() {
  return (
    <div className="p-2 lg:p-6">
      <h2 className="mb-6 text-lg font-medium text-muted-foreground">
        Internship
      </h2>

      <div className="rounded-lg border bg-card p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold">
            Complete Your Assessment First
          </h3>
          <p className="mt-2 text-muted-foreground">
            Please complete the HTML skill test to view internship
            opportunities.
          </p>
        </div>

        <Button className="bg-blue-900" asChild>
          <Link href="/" className="gap-2">
            <Target className="h-4 w-4" />
            View HTML Assessment
          </Link>
        </Button>
      </div>
    </div>
  );
}
