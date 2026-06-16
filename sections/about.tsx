import Background from "@/components/cards/about/background";
import Me from "@/components/cards/about/me";
import Resume from "@/components/cards/about/resume";
import Education from "@/components/cards/featured/education";
import Experience from "@/components/cards/featured/experience";
import Instructor from "@/components/cards/featured/instructor";
import Heading from "@/components/Heading/heading";
import Gallery from "@/components/ui/gallery";
import { HoverLift, Stagger, StaggerItem } from "@/components/ui/motion";
import React, { ReactNode } from "react";

const Cell = ({ children }: { children: ReactNode }) => (
  <StaggerItem>
    <HoverLift>{children}</HoverLift>
  </StaggerItem>
);

const About = () => {
  return (
    <section id="about" className="scroll-mt-24 pt-20 px-3 lg:px-8">
      <Heading number="01" title_1={"About"} title_2={"Me"} />

      {/* One auto-flow bento grid. items-start = no forced stretch, no gaps. */}
      <Stagger
        stagger={0.08}
        className="mt-8 grid grid-cols-1 items-start gap-4 md:grid-cols-2 2xl:grid-cols-3"
      >
        <Cell>
          <Me />
        </Cell>
        <Cell>
          <Resume />
        </Cell>
        <Cell>
          <Background />
        </Cell>
        <Cell>
          <Instructor />
        </Cell>
        <Cell>
          <Experience />
        </Cell>
        <Cell>
          <Education />
        </Cell>
        <Cell>
          <Gallery />
        </Cell>
      </Stagger>
    </section>
  );
};

export default About;
