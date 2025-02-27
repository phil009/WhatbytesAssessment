"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface UpdateScoresModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialScores: {
    rank: number;
    percentile: number;
    currentScore: number;
  };
  onUpdate: (scores: {
    rank: number;
    percentile: number;
    currentScore: number;
  }) => void;
}

// Define schema using zod
const scoresSchema = z.object({
  rank: z.number().min(1, "Rank must be at least 1"),
  percentile: z
    .number()
    .min(1, "Percentile must be at least 1")
    .max(100, "Percentile cannot exceed 100"),
  currentScore: z
    .number()
    .min(0, "Score cannot be negative")
    .max(15, "Score cannot exceed 15"),
});

export function UpdateScoresModal({
  open,
  onOpenChange,
  initialScores,
  onUpdate,
}: UpdateScoresModalProps) {
  const form = useForm({
    resolver: zodResolver(scoresSchema),
    defaultValues: initialScores,
  });

  function onSubmit(values: {
    rank: number;
    percentile: number;
    currentScore: number;
  }) {
    onUpdate(values);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <DialogTitle>Update Scores</DialogTitle>
            <Icon className="text-2xl" icon="devicon:html5" />
          </div>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 py-4"
          >
            {/* Rank Field */}
            <FormField
              control={form.control}
              name="rank"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Update your <b>Rank</b>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(e.target.valueAsNumber)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Percentile Field */}
            <FormField
              control={form.control}
              name="percentile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Update your <b>Percentile</b>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(e.target.valueAsNumber)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Current Score Field */}
            <FormField
              control={form.control}
              name="currentScore"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Update your <b>Current Score (out of 15)</b>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(e.target.valueAsNumber)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Action Buttons */}
            <div className="flex justify-end gap-4">
              <Button
                variant="outline"
                type="button"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700" type="submit">
                Save
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
