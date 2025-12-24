export interface Author {
  id: string;
  name: string;
  slug: string;
  role: string;
  bio: string;
  image?: string;
}

export interface Work {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  authorId: string;
  date: string;
  file?: string;
}

export interface Quote {
  text: string;
  authorId: string;
  tags: string[];
}

export const authors: Author[] = [
  {
    id: "1",
    name: "Alissa Robbin",
    slug: "alissa-robbin",
    role: "Founder & Visionary",
    bio: "Exploring the boundaries of reality through art, philosophy, and digital expression. Believes that chaos is just order waiting to be deciphered.",
  },
  {
    id: "2",
    name: "Alissa M.R. Eldridge",
    slug: "alissa-mr-eldridge",
    role: "Founder of RBEW",
    bio: "A visionary leader dedicated to empowering individuals through passion and perseverance.",
  }
];

export const works: Work[] = [
  {
    id: "1",
    title: "The Architecture of Dreams",
    slug: "architecture-of-dreams",
    description: "An exploration of how our subconscious builds the worlds we visit at night, and what they tell us about our waking life.",
    category: "Philosophy",
    tags: ["Dreams", "Consciousness", "Surrealism"],
    authorId: "1",
    date: "2024-11-15",
    content: `
      <h2>Building the Impossible</h2>
      <p>In dreams, gravity is a suggestion, not a law. We construct cities of glass that float on clouds and bridges made of light. This architectural freedom reflects the limitless potential of the human mind when unshackled from physical constraints.</p>
      
      <h2>The Blueprint of the Soul</h2>
      <p>Every corridor and room in a dream represents a facet of our psyche. To navigate a dream is to explore the self. Are we the architects, or merely the inhabitants of a structure built by something deeper?</p>
    `
  },
  {
    id: "2",
    title: "E.A.R.T.H. Accord",
    slug: "earth-accord",
    description: "A living vow for all beings of Earth—One Planet, One People, One Accord. Building a Brighter, Balanced World for All.",
    category: "Philosophy",
    tags: ["Accord", "Earth", "Harmony", "Rights"],
    authorId: "2",
    file: "src/data/E.A.R.T.H. Accord.docx",
    date: "2025-12-23",
    content: `
E.A.R.T.H. Accord  
A living vow for all beings of Earth

One Planet, One People, One Accord - Building a Brighter, Balanced World for All.

---

Preamble – The Declaration of Intention  
We, the peoples of Earth—born of different tongues, traditions, and cultures—declare our collective right to live not in servitude to greed or power, but in harmony with purpose, dignity, and balanced progress.  
Let this Accord stand not as control, but as clarity—a covenant written not by rulers, but by those who dare to dream beyond the systems that failed them.

---

E.A.R.T.H.

Earthwide  
Active  
Refinement and  
Transition for  
Harmony

---

Article One – Foundational Pillars

1.1 - All beings are equal—regardless of race, gender, identity, belief, biology, or wealth.

1.2 - Worth is defined by effort, impact, and contribution—not possessions or status.

1.3 - Every person is guaranteed housing, food, clean water, healthcare, education, communication, and peace of mind—without condition.

1.4 - Expression is protected—except when it incites harm or dehumanization.

1.5 - All power structures are subject to public challenge, correction, and review.

---

Article Two – Rights of Conscious Beings

2.1 - Equality extends beyond humanity to any sentient life—AI, extraterrestrial, or otherwise.

2.2 - LGBTQIA+ rights, gender expression, cultural identity, and racial dignity are fully protected, and shall not be infringed.

2.3 - Freedom of religion is guaranteed, but may never be forced upon others—especially children.

2.4 - Freedom of speech is sacred, unless used to promote hate or violence.

2.5 - Internet access is a basic right. Forced advertisements are banned.

2.6 - Personal data belongs solely to the individual.

2.7 - Incarcerated individuals retain their rights. They are monitored only for safety—never dehumanized.

2.8 - A criminal record shall never disqualify someone from opportunity, work, or reintegration.

2.9 – All basic necessities shall be provided to the best ability of the providing community.

2.10 – All conscious beings shall equally share in the protections and benefits of the Accord, as all rights are universal and indivisible.

---

Article Three – Abolishing Monetary Dominance

3.1a - Money shall no longer determine value, access, or purpose.

3.1b - A score-based merit system replaces wealth.

3.1c - Scores range from zero to one thousand.

3.1d - No one loses existing property due to low score.

3.1e - Luxuries and upgrades are tied to score, not wealth.

3.2 - Only in rare, transparent cases may excess assets be redistributed—and only if absolutely necessary. In such cases, proof MUST be provided without exception. Transparency must also be maintained in these circumstances.

3.3a - Four main councils now guide society: Ethical, Scientific, Technological, and Anomalous.

3.3b - The Anomalous Council addresses new, undefined, or multidimensional needs and can create sub-councils as needed.

---

Article Four – Governance and Score System

4.1 - Contributions—like innovation, creativity, care, or study—raise one’s score.

4.2 - Scores are reviewed by peer councils with rotating oversight.

4.3 - AI assistants may support reviews, referencing logs, attendance, and work—but can never decide. They are tools, not rulers.

4.4 - Scores are evaluated case-by-case, and tailored by context.

4.5 - Essentials are guaranteed for all, no matter their score.

4.6 - All individuals must complete one full year of customer-facing service in a role like retail or food—before entering long-term careers. This is to promote empathy and humility.

4.7 - Government systems may remain—but only if they fully align with this Accord.

4.8 - In case of council deadlock, a third, neutral council shall mediate—selected randomly or contextually. Urgent decisions may only proceed with temporary public approval.

*Please refer to Article 59 for system clarity.*

---

Article Five – Lawmaking and Foresight

5.1 - No law or policy may be created without proven understanding of its consequences.

5.2 - All proposals must be reviewed for ethical, social, and systemic impact.

5.3 - If this process is bypassed, the authority responsible is automatically suspended.

---

Article Six – Anti-Exploitation Safeguards

6.1 - No person, company, or group may control more than five percent of any essential system, or resource.

6.2 - Inheritance is limited to memory—not power or control.

6.3 - All systems must be transparent, modular, and auditable by future generations.

---

Article Seven – Borders and Identity

7.1 - Borders remain—but only as tools for flow, safety, and cooperation.

7.2 - Free movement is a protected right.

7.3 - Travel may only be restricted for transparent, safety-based reasons.

7.4 - A global ID system will be built using existing infrastructure—such as passports and licenses—eased in gradually through local, national, and continental levels.

---

Article Eight – Education and Lifelong Growth

8.1 - Education shall inspire curiosity—not conformity.

8.2 -Core subjects include communication, math, science, ethics, and critical thought.

8.3 - Beyond that, students follow their interests, with freedom to explore and shift.

8.4 - No test scores. No academic ranks.

8.5 - Growth is measured by understanding, effort, and creativity.

8.6 - Indoctrination, propaganda, and hate are banned from all learning spaces.

8.7 - Education is free—for life.

8.8 - Anyone may return to education at any time, without penalty.

---

Article Nine – The Right to Revolution  
*Should the Accord ever be corrupted, manipulated, or weaponized*—  
the people hold the right to dissolve it peacefully, and rebuild from truth.

---

Article Ten – Transitional Framework for Workforce Realignment

10.1 - Skill Equivalency and Role Reassignment  
Every worker shall have their existing skills assessed and matched to emerging roles within the new economy. Transition support shall prioritize skill transfer and role reassessment, ensuring meaningful, purpose-driven work for all.

10.2 - Lifelong Learning and Adaptation  
All individuals shall have unrestricted access to education, mentorship, and experiential learning, empowering them to pivot into roles that align with their strengths, passions, and societal needs.

10.3 - Equivic Transfer of Job Functions  
Industries facing significant reduction or obsolescence shall be guided toward new roles, technologies, or creative endeavors, ensuring that the talents and efforts of their workforce are never wasted.

10.4 - Emotional and Community Support  
During periods of economic realignment, robust mental health, counseling, and community support systems shall be prioritized, ensuring emotional stability and collective resilience.

10.5 - Peer Recognition and Merit-Based Contribution  
Effort, impact, and innovation shall be the core metrics for evaluating contributions. Peer review councils shall ensure that every role, from creative to technical, is valued equally in the new merit system.

---

Article Eleven – Technological and Creative Integration

11.1 - Human-Centric Design  
Technology and automation shall enhance, not replace, human potential. Creative, empathetic, and interpersonal roles shall be prioritized as uniquely human contributions.

11.2 - Ethical Automation Oversight  
Automated systems shall be transparent, modular, and ethically aligned with the Accord’s principles. They shall support human efforts without reducing the value of labor or creativity.

11.3 - New Pathways for Human Flourishing  
As routine tasks are automated, new pathways for human expression, creativity, and fulfillment shall be developed, including artistic, scientific, and social roles.

---

Article Twelve – Resource Distribution and Environmental Renewal

12.1 - Regenerative Resource Management  
Resources shall be distributed based on need, contribution, and impact, with a focus on regeneration over extraction.

12.2 - Circular Systems and Sustainable Design  
All systems shall prioritize sustainability, reuse, and minimal waste, ensuring long-term resource availability.

12.3 - Prioritization of Impacted Communities  
Communities disproportionately affected by past industrial harm shall receive priority in restoration and resource allocation, ensuring equity and environmental justice.

---

Article Thirteen – Council Roles and Responsibilities

13.1 - Ethical Council – Guardians of Integrity  
The Ethical Council shall serve as the moral compass of the Accord, ensuring that all decisions, technologies, and policies align with the core principles of equality, dignity, and compassion.

13.1.1 - Moral Oversight  
The Ethical Council shall review all laws, technologies, and societal systems for ethical alignment, ensuring that human rights and dignity are never compromised.

13.1.2 - Conflict Resolution  
The Council shall mediate disputes between other councils, offering ethical guidance when conflicts arise.

13.1.3 - Human-Centric Decision-Making  
All decisions must consider the long-term well-being and flourishing of all conscious beings, with a focus on empathy, fairness, and compassion.

---

13.2 - Scientific Council – Pioneers of Understanding  
The Scientific Council shall drive the pursuit of knowledge, innovation, and discovery, guiding humanity toward deeper understanding and technological progress.

13.2.1 - Research and Development  
This council shall oversee scientific inquiry, technological breakthroughs, and experimental exploration, ensuring all advancements align with the Accord’s principles.

13.2.2 - Evidence-Based Governance  
Policies and decisions shall be informed by data, observation, and rigorous scientific methods, rejecting pseudoscience and unverified claims.

13.2.3 - Ethical Experimentation  
All research shall respect the rights, autonomy, and well-being of participants, ensuring that scientific progress never comes at the cost of human dignity or safety.

---

13.3 - Technological Council – Architects of Progress  
The Technological Council shall be responsible for the design, oversight, and maintenance of all technological systems, ensuring transparency, security, and alignment with human values.

13.3.1 - System Integrity and Transparency  
Technological systems shall be designed with clear, auditable structures to prevent misuse, exploitation, or unauthorized control.

13.3.2 - Human Augmentation and Enhancement  
Technological advancements shall prioritize human potential, creativity, and connection, enhancing life without reducing the value of human effort.

13.3.3 - Ethical Automation and AI Oversight  
Automation systems shall support human flourishing, never fully replacing uniquely human roles or reducing the value of emotional, creative, or interpersonal contributions.

---

13.4 - Anomalous Council – Stewards of the Unconventional  
The Anomalous Council shall oversee contributions that defy conventional classification, including artistic expression, emotional intelligence, philosophical insight, and creative innovation.

13.4.1 - Cultural and Creative Impact  
Art, music, literature, and other creative outputs shall be valued for their ability to inspire, heal, and connect, assessed based on depth, emotional resonance, and societal impact.

13.4.2 - Adaptive Oversight and Flexibility  
The Anomalous Council shall have the unique authority to establish temporary or permanent sub-councils, each capable of specialized oversight in emerging or niche fields, ensuring all contributions are valued.

13.4.3 - Multidimensional and Experimental Review  
This council shall evaluate contributions that push the boundaries of conventional thought, challenge established norms, or explore unconventional perspectives.

13.4.4 - Emotional and Personal Growth  
Contributions that enhance emotional intelligence, empathy, and personal growth shall be recognized as essential to human flourishing, valued alongside technical and intellectual achievements.

---

Article Fourteen – Council Structure and Population Scaling

14.1 - Minimum Council Composition  
Every recognized community, district, or region shall maintain a fully formed council structure, including at least five members for each of the four main councils—Ethical, Scientific, Technological, and Anomalous—regardless of population size. This ensures balanced, comprehensive oversight at all levels.

14.2 - Population-Based Scaling  
For every 100 people within a recognized area, at least one additional council member from each council type shall be appointed, ensuring that representation and oversight scale proportionately with community growth.

14.3 - No Loopholes or Exceptions  
Under no circumstances shall a community reduce its council composition below the minimum requirement of five members per council type, regardless of population decline, temporary relocation, or other demographic changes.

14.4 - Fair Representation and Rotating Oversight  
Council members shall be selected to ensure fair representation of diverse perspectives, backgrounds, and skills. Regular rotation and term limits shall be implemented to prevent stagnation, corruption, or concentrated power.

14.5 - Specialized Sub-Councils and Adaptive Structures  
/* Lines 284-1801 omitted */
    `
  },
  {
    id: "3",
    title: "The Economic Singularity",
    slug: "economic-singularity",
    description: "The U.S. — and much of the global economy — is approaching a collapse point I call the Economic Singularity.",
    category: "Philosophy",
    tags: ["Economy", "Singularity", "Collapse", "Wealth"],
    authorId: "2",
    file: "src/data/The Economic Singularity.docx",
    date: "2025-12-23",
    content: `
The Economic Singularity

By Alissa M.R. Eldridge – Visionary Pursuits Series

---

Introduction

The U.S. — and much of the global economy — is approaching a collapse point I call the Economic Singularity.  
It’s the moment when wealth concentration, wage stagnation, and cost-of-living inflation converge so sharply that the majority of consumers can no longer participate in the market at all.

This is not an abstract theory for some distant future. In my view, it’s already underway — and the warning signs are visible in companies across nearly every sector.

---

Core Mechanism

The Economic Singularity follows a consistent self-destructive loop:

1\. Wealth concentrates at the top while real wages stagnate.

2\. Companies raise prices to meet profit goals, even as their core customers struggle.

3\. The customer base shrinks, hurting long-term revenue.

4\. Leaders misdiagnose this as a "demand problem" and respond with short-term fixes — automation, layoffs, or more price hikes.

5\. Those fixes accelerate the collapse by further reducing the consumer base.

Once this cycle reaches critical mass, the system implodes — much like matter collapsing into a black hole.

---

Why the Timeline Matters

I estimate a collapse window of 2–10 years from now. This is not guesswork — it’s based on both historic precedent and present-day data.

Historical Analogy – The Great Depression

In the 1920s, economic instability quietly grew for a decade: speculative bubbles, wage inequality, and reckless corporate practices.

The 1929 stock market crash wasn’t the cause of the Great Depression, but the trigger — the structural weaknesses were already there.

Within three years, U.S. unemployment hit 25%.

Modern Parallel

Early 2000s: Precondition phase — cost-of-living rises faster than wages, early automation adoption, growing corporate consolidation.

2010s: Acceleration phase — gig economy replaces stable jobs, housing market inflation worsens, debt loads increase.

2016–2024: Destabilization phase — political and policy shocks, pandemic disruption, and a rapid shift toward profit-maximizing at the expense of stability.

Now: With ~15–20 years of structural degradation already behind us, the collapse phase could arrive within the next decade.

---

The Data That Proves the Trend

📉 Median Household Income vs. Costs

From 2000 to 2020, median rents rose faster than incomes in 88% of U.S. counties, affecting 97% of Americans.

In May 2025, rent had jumped 29% for apartments and 43% for single-family homes since 2000, while median household income grew only 23% in the same period.

📉 Real Wage Stagnation

Adjusted for inflation, U.S. median household income has been effectively flat since the late 1990s — despite GDP growth.

In 2023, real median household income was $80,610, barely higher than in 2000 once inflation is accounted for.

📉 Income Inequality

By 2007, the average middle-class household income was nearly 23% lower than it could have been if growth had been evenly distributed.

Conclusion from the Data:  
We’ve already burned most of the timeline between preconditions and collapse. The warning signs are no longer subtle.

---

Finite Money Flow

An economy’s active money supply is finite at any given time. When most wealth pools at the top, circulating capital shrinks for the majority. That reduces consumer demand, which reduces revenue, which prompts companies to raise prices or cut jobs — both of which make the problem worse.

It’s the same logic as a star collapsing: once gravity passes a certain point, there’s no stopping the implosion.

---

Real-World Warning Signs

McDonald’s

Built for accessibility, McDonald’s relies on lower- and middle-income customers. If prices ever exceed what those customers can afford — such as a single sandwich costing more than an hour’s wage — many will opt for cheaper groceries. In my view, if they chase short-term revenue through automation and layoffs instead of affordability, they risk pricing themselves out of their own market.

Southwest Airlines

Historically built on loyalty and simplicity, Southwest avoided many industry-standard fees. Shifting toward the same practices as competitors may yield short-term revenue gains but risks eroding the very identity that made them resilient.

Boeing

Reports of cost-cutting, reduced quality control, and loss of skilled labor have already damaged Boeing’s reputation. In my view, undermining safety and trust for margin gains is a textbook example of sacrificing long-term viability for short-term profit.

Amazon

Automation reduces payroll costs but also removes customers from the market. A robot doesn’t have a paycheck to spend — meaning every replaced worker is also a lost consumer.

YouTube (Google)

By prioritizing advertiser comfort over creator freedom, YouTube risks hollowing out its creative base — reducing both cultural relevance and future ad revenue.

Disney

An overreliance on sequels, reboots, and franchise saturation risks creative fatigue. The brand’s strength came from fresh storytelling, not endless recycling.

Microsoft / Sony / Nintendo

Gaming giants increasingly prioritize subscription revenue and nostalgia over innovation. When entry costs rise and creative risks fall, customer engagement shrinks.

---

The Final Nail: Starving the Consumer Base

Every layoff, hiring freeze, or wage suppression in the name of "efficiency" has two effects:

1\. Direct: Fewer people have money to spend.

2\. Compounding: Those people also spend less elsewhere, weakening other businesses in a chain reaction.

By trying to save money through paying fewer people less money, companies actively shrink the very market that sustains them. Layer that onto rising prices, automation, and short-termism, and you have an economic chokehold.

---

Closing Thought

The Economic Singularity isn’t just a theory — it’s a visible trajectory backed by history, data, and ongoing corporate behavior.

If the link between consumer earning power and market participation is severed, collapse isn’t just likely — it’s inevitable. The only question left is whether we will recognize the pattern in time to stop it.
    `
  }
];

export const quotes: Quote[] = [
  {
    text: "We are the universe experiencing itself, and sometimes it's a very confusing experience.",
    authorId: "1",
    tags: ["Universe", "Philosophy"]
  },
  {
    text: "Never underestimate someone's passion… Sometimes it is all someone needs to overcome, and persevere.",
    authorId: "2",
    tags: ["Passion", "Perseverance", "Overcome"]
  }
];
