"use client";

import React, { useState } from "react";

import { data } from "@/utils/Constants";

const SavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState(data);

  return (
    <div>
      {savedJobs.map((s) => {
        if (!s.saved) {
          return (
            <div key={s.id}>
              <h1> {s.jobName}</h1>
            </div>
          );
        } else {
          console.log("wrong");
        }
      })}
    </div>
  );
};

export default SavedJobs;
