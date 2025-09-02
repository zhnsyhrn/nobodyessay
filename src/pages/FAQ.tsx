import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";
const FAQ = () => {
  const randomFAQs = [{
    question: "What's your favorite design tool?",
    answer: "I'm passionate about Figma for its collaborative features and versatility. I also love experimenting with new tools like Framer for interactive prototypes."
  }, {
    question: "Do you prefer coffee or tea?",
    answer: "Definitely coffee! I'm a bit of a coffee enthusiast and enjoy trying different brewing methods. It fuels my creative process."
  }, {
    question: "What inspires your design work?",
    answer: "I draw inspiration from everyday interactions, nature, architecture, and human psychology. I believe great design should feel intuitive and delightful."
  }, {
    question: "What's your design philosophy?",
    answer: "I believe in designing with empathy and purpose. Every design decision should serve the user and solve real problems, while also being aesthetically pleasing."
  }, {
    question: "How do you stay updated with design trends?",
    answer: "I follow design communities, attend conferences, read design books, and most importantly, I observe how people interact with digital products in real life."
  }];
  const careerFAQs = [{
    question: "Why I left Borong? The tenure is too short.",
    answer: "I worked and study full-time for the past 4 years. As you noticed in my CV, I finished a degree last year in 2024.\n\nI left my job because my college changed its class schedule from evening classes to daytime hours, requiring my full commitment during my final semester before graduation. At the same time, applied for the Antler program but unfortunately not passed for the last phase."
  }, {
    question: "Can you walk me through your design process from research to final product?",
    answer: "<p>My process usually looks like this:</p><ol><li><strong>Understand the problem</strong> – Talking with stakeholders, defining success metrics.</li><li><strong>Research</strong> – Competitive benchmarking.</li><li><strong>Ideation</strong> – Sketching flows, brainstorming with product managers and engineers.</li><li><strong>Prototyping</strong> – Hi-fi prototype in Figma.</li><li><strong>Validation</strong> – Usability testing, stakeholder reviews.</li><li><strong>Handoff & iteration</strong> – Collaborating closely with developers and refining based on feedback.</li></ol>"
  }, {
    question: "Describe a design challenge you faced and how you solved it.",
    answer: "Once, two stakeholder groups had conflicting needs: one wanted a feature-heavy dashboard, while the other wanted simplicity. I facilitated a workshop to prioritize features based on impact vs effort, and we agreed to phase the rollout. This not only balanced both perspectives but also gave users a smoother experience over time."
  }, {
    question: "How do you manage conflicting feedback from stakeholders?",
    answer: "I bring discussions back to user needs and business goals. If disagreements persist, I recommend testing both options. This shifts the conversation from personal preferences to evidence-based decisions."
  }, {
    question: "How do you balance business goals and user needs?",
    answer: "I frame business goals and user needs as two sides of the same coin. <strong>Example: MoneyX Referral Program</strong><ul><li><strong>Business goal</strong>: Drive user acquisition through referrals—reward both the referrer and the referee to encourage sign-ups.</li><li><strong>User need</strong>: Have a clear, trustworthy, and effortless way to invite friends—and feel rewarded for it.</li></ul><strong>Design solution</strong>:<ul><li>Create an intuitive <strong>Referral Dashboard</strong> where users can easily locate and copy their referral code or link.</li><li>Offer meaningful rewards: users earn a tangible incentive (e.g., RM10 for every four successful referrals), while their friends enjoy a bonus as well.</li><li>Be transparent: showing how many referrals are needed, what counts as a \"successful signup,\" and how rewards are disbursed creates trust and motivates action.</li></ul><strong>Impact</strong>:<ul><li>Users can immediately understand the value and mechanics of the referral program.</li><li>This simplicity and clarity increase the likelihood they'll invite others.</li><li>As more users join through referrals, the business grows organically—at lower acquisition cost and with higher engagement</li></ul>"
  }, {
    question: "How do you collaborate with developers, product managers, and other teammates?",
    answer: "I involve developers early to discuss feasibility, sync regularly with product managers on priorities, and document designs clearly in Figma. This avoids last-minute surprises and ensures smooth handoff. View how I arrange my design in Figma file."
  }, {
    question: "How do you handle feedback or criticism?",
    answer: "Feedback is a core part of design. If feedback is subjective, I ask for the reasoning behind it. If valid, I adjust. If conflicting, I bring it back to user data."
  }, {
    question: "How do you stay up to date with UI/UX trends and evolving tools?",
    answer: "I stay active in design communities, attend meetups/webinars, and run small side projects to experiment with new tools. Recently, I've been exploring AI-assisted design workflows and variable typography."
  }, {
    question: "Why are you in the job market? Why are you currently exploring other career opportunities?",
    answer: "I'm looking to grow in a more collaborative and mature design environment which is one that embraces experience design with measurable outcomes as a core part of the strategy. I'm also eager to take on more challenging work with regional impact, where I can continue learning while contributing meaningfully."
  }];
  return <div className="min-h-screen bg-background font-jakarta">
      <StickyNavbar />
      
      <main className="container mx-auto px-4 pt-12 sm:pt-24 pb-16 py-[60px]">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="font-display sm:text-4xl font-medium mb-4 sm:mb-6 tracking-tight lg:text-4xl text-3xl text-left" style={{lineHeight: '38px'}} data-mobile-line-height="38px" data-desktop-line-height="45px">
              <span className="sm:hidden" style={{lineHeight: '38px'}}>Everything about me. Especially for hiring managers, recruiters and potential clients.</span>
              <span className="hidden sm:inline" style={{lineHeight: '45px'}}>Everything about me. Especially for hiring managers, recruiters and potential clients.</span>
            </h1>
            
          </header>

          <Tabs defaultValue="career" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 font-mono">
              <TabsTrigger value="career" className="uppercase">Career</TabsTrigger>
              <TabsTrigger value="random" className="uppercase">Random</TabsTrigger>
            </TabsList>
            
            <TabsContent value="career">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Career & Work</CardTitle>
                  <CardDescription style={{color: 'hsl(var(--faq-content))', fontSize: '16px'}}>
                    Professional questions about my work, process, and availability
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {careerFAQs.map((faq, index) => <AccordionItem key={index} value={`career-${index}`}>
                        <AccordionTrigger className="text-left text-base">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="leading-relaxed prose max-w-none" style={{color: 'hsl(var(--faq-content))', fontSize: '16px'}}>
                          <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                        </AccordionContent>
                      </AccordionItem>)}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="random">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Random & Personal</CardTitle>
                  <CardDescription style={{color: 'hsl(var(--faq-content))', fontSize: '16px'}}>
                    Fun questions to get to know me better as a person
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {randomFAQs.map((faq, index) => <AccordionItem key={index} value={`random-${index}`}>
                        <AccordionTrigger className="text-left text-base">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="leading-relaxed prose max-w-none" style={{color: 'hsl(var(--faq-content))', fontSize: '16px'}}>
                          <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                        </AccordionContent>
                      </AccordionItem>)}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>;
};
export default FAQ;