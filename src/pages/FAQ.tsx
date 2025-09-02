import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";
const FAQ = () => {
  const randomFAQs = [{
    question: "Do you like solo travel?",
    answer: "Yes, I do. There's something exciting about wandering unfamiliar streets on my own. My first solo trip after Covid-19 was to Singapore, and it turned out to be a memorable experience."
  }, {
    question: "What kind of books do you read?",
    answer: "I enjoy a wide mix, but I'm especially drawn to design, business biographies, and political books. But open to explore other genre."
  }, {
    question: "Which hikes have you done?",
    answer: "I've hiked Gunung Besar Hantu, Gunung Angsi, Bukit Gasing, Bukit Batu Putih, and Sri Bintang Hill. Each has its own unique atmosphere and challenge."
  }, {
    question: "Favorite movies?",
    answer: "I'm into films that go beyond entertainment. Dune by Denis Villeneuve and Studio Ghibli works are personal favorites, along with indie films like Snow In Midsummer that explore deeper themes."
  }, {
    question: "What sports do you play?",
    answer: "Mostly badminton but I balance it out with hiking trips when I can. I can't play football or futsal. I love cycling and bouldering/wall climbing."
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
              <Card style={{ borderRadius: '10px' }}>
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
              <Card style={{ borderRadius: '10px' }}>
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