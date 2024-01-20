import { useState } from "react";

import Travel from "./components/Travel";
import { data } from "./components/data";

export default function App() {
  const [plan, setPlan] = useState(data);

  const root = plan[0].childIds;

  const handleComplete = (parentId, childId) => {
    const planId = plan[parentId];

    const nextPlan = {
      ...planId,
      childIds: planId.childIds.filter((id) => id !== childId),
    };

    setPlan({ ...plan, [parentId]: nextPlan });
  };

  return (
    <div>
      <ol>
        {root.map((key) => (
          <Travel
            key={key}
            childId={key}
            planById={plan}
            parentId={0}
            onCompleted={handleComplete}
          />
        ))}
      </ol>
    </div>
  );
}
