import { LevelContext, useSectionLevel } from "../contexts/LavelContext";

export default function Section({ children, isFancy }) {
  const level = useSectionLevel();
  return (
    <section className={"section " + (isFancy ? "fancy" : "")}>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
