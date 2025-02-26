"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { UpdateScoresModal } from "./components/update-scores-modal";
import { ComparisonGraph } from "./components/comparison-graph";
import { ScoreChart } from "./components/score-chart";

export default function SkillTestPage() {
  const [scores, setScores] = useState({
    rank: 4,
    percentile: 90,
    currentScore: 12,
  });
  const [showModal, setShowModal] = useState(false);

  const handleUpdateScores = (newScores: typeof scores) => {
    setScores(newScores);
    setShowModal(false);
  };

  return (
    <div className="p-2 lg:p-6">
      <h2 className="mb-6 text-lg font-medium text-muted-foreground">
        Skill Test
      </h2>

      <div className="rounded-lg bg-card flex flex-wrap lg:flex-nowrap gap-4">
        <div className="grid gap-4 min-w-5/6">
          <div className="flex flex-wrap gap-2 items-center justify-between rounded-lg border p-4 md:p-6">
            <div className="flex flex-wrap items-center gap-2">
              <Icon className="text-4xl" icon={"devicon:html5"} />
              <div>
                <h3 className="text-lg font-semibold">
                  Hyper Text Markup Language
                </h3>
                <p className="text-xs text-muted-foreground">
                  Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                </p>
              </div>
            </div>
            <Button
              className="bg-[#1a237e] hover:bg-[#1a237e]/90"
              onClick={() => setShowModal(true)}
            >
              Update
            </Button>
          </div>

          <div className="rounded-lg border p-4 md:p-6 h-max">
            <h4 className="mb-4 font-bold">Quick Statistics</h4>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="flex gap-2 items-start flex-wrap sm:border-r p-2">
                <div className="rounded-full bg-slate-100 w-10 flex justify-center items-center aspect-square">
                  <Icon className="text-2xl" icon={"emojione:trophy"} />
                </div>
                <div>
                  <div className="mb-2 text-xl font-semibold">
                    {scores.rank}
                  </div>
                  <div className="text-xs text-muted-foreground">YOUR RANK</div>
                </div>
              </div>
              <div className="flex gap-2 items-start flex-wrap sm:border-r p-2">
                <div className="rounded-full bg-slate-100 w-10 flex justify-center items-center aspect-square">
                  <Icon
                    className="text-2xl text-green-600"
                    icon={"material-symbols:check-box"}
                  />
                </div>
                <div>
                  <div className="mb-2 text-xl font-semibold">
                    {scores.percentile}%
                  </div>
                  <div className="text-xs text-muted-foreground">
                    PERCENTILE
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-start flex-wrap p-2">
                <div className="rounded-full bg-slate-100 w-10 flex justify-center items-center aspect-square">
                  <Icon className="text-2xl" icon={"twemoji:goal-net"} />
                </div>
                <div>
                  <div className="mb-2 text-xl font-semibold">
                    {scores.currentScore} / 15
                  </div>
                  <div className="text-xs text-muted-foreground">
                    CORRECT ANSWERS
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-4 md:p-6">
            <h4 className="mb-4 font-bold">Comparison Graph</h4>
            <p className="text-sm text-muted-foreground mb-4">
              You scored{" "}
              <span className="font-medium">{scores.percentile}%</span>{" "}
              percentile,{" "}
              {scores.percentile !== 72 && (
                <>
                  which is{" "}
                  <span className="font-medium">
                    {scores.percentile > 72 ? "higher than" : "lower than"}
                  </span>{" "}
                </>
              )}
              the average percentile of <span className="font-medium">72%</span>{" "}
              for all engineers who took this assessment.
            </p>

            <ComparisonGraph percentile={scores.percentile} />
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-lg border p-4 md:p-6">
            <h4 className="mb-6 font-bold">Syllabus Wise Analysis</h4>
            <div className="space-y-6">
              <div>
                <div className="mb-2 flex justify-between">
                  <span className="text-sm opacity-60">
                    HTML Tools, Forms, History
                  </span>
                  <span className="text-sm opacity-60 font-medium">80%</span>
                </div>
                <Progress
                  value={80}
                  className="h-2 bg-slate-200 [&>div]:bg-blue-600 [&>div]:rounded-e-full"
                />
              </div>
              <div>
                <div className="mb-2 flex justify-between">
                  <span className="text-sm opacity-60">
                    Tags & References in HTML
                  </span>
                  <span className="text-sm opacity-60 font-medium">60%</span>
                </div>
                <Progress
                  value={60}
                  className="h-2 bg-slate-200 [&>div]:bg-orange-500 [&>div]:rounded-e-full"
                />
              </div>
              <div>
                <div className="mb-2 flex justify-between">
                  <span className="text-sm opacity-60">
                    Tables & References in HTML
                  </span>
                  <span className="text-sm opacity-60 font-medium">24%</span>
                </div>
                <Progress
                  value={24}
                  className="h-2 bg-slate-200 [&>div]:bg-red-600 [&>div]:rounded-e-full"
                />
              </div>
              <div>
                <div className="mb-2 flex justify-between">
                  <span className="text-sm opacity-60">
                    Tables & CSS Basics
                  </span>
                  <span className="text-sm opacity-60 font-medium">96%</span>
                </div>
                <Progress
                  value={96}
                  className="h-2 bg-slate-200 [&>div]:bg-green-600 [&>div]:rounded-e-full"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-4 md:p-6">
            <div className="flex items-center justify-between">
              <h4 className="font-bold">Question Analysis</h4>
              <span className="text-sm font-medium">
                {scores.currentScore}/15
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              You scored {scores.currentScore} questions correct out of 15.
              However it still needs some improvements
            </p>
            <div className="mt-4 flex justify-center">
              <ScoreChart score={scores.currentScore} total={15} />
            </div>
          </div>
        </div>
      </div>

      <UpdateScoresModal
        open={showModal}
        onOpenChange={setShowModal}
        initialScores={scores}
        onUpdate={handleUpdateScores}
      />
    </div>
  );
}
