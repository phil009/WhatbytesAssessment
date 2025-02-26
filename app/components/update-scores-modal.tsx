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
import { useState } from "react";

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

export function UpdateScoresModal({
  open,
  onOpenChange,
  initialScores,
  onUpdate,
}: UpdateScoresModalProps) {
  const [scores, setScores] = useState(initialScores);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <DialogTitle>Update scores</DialogTitle>
            <Icon className="text-2xl" icon={"devicon:html5"} />
          </div>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
              1
            </div>
            <div className="flex items-center justify-between w-full">
              <label className="text-sm font-medium">
                Update your <b>Rank</b>
              </label>
              <Input
                type="number"
                value={scores.rank}
                onChange={(e) =>
                  setScores((prev) => ({
                    ...prev,
                    rank: Number(e.target.value),
                  }))
                }
                className="w-1/3"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
              2
            </div>
            <div className="flex items-center justify-between w-full">
              <label className="text-sm font-medium">
                Update your <b>Percentile</b>
              </label>
              <Input
                type="number"
                value={scores.percentile}
                onChange={(e) =>
                  setScores((prev) => ({
                    ...prev,
                    percentile: Number(e.target.value),
                  }))
                }
                className="w-1/3"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
              3
            </div>
            <div className="flex items-center justify-between w-full">
              <label className="text-sm font-medium">
                Update your <b>Current Score (out of 15)</b>
              </label>
              <Input
                type="number"
                value={scores.currentScore}
                onChange={(e) =>
                  setScores((prev) => ({
                    ...prev,
                    currentScore: Number(e.target.value),
                  }))
                }
                className="w-1/3"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => onUpdate(scores)}
          >
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
