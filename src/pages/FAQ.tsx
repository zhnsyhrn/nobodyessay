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
    question: "What type of projects are you looking for?",
    answer: "I'm interested in projects that challenge me creatively and have meaningful impact. This includes web applications, design systems, brand identities, and user experience design."
  }, {
    question: "What's your typical project timeline?",
    answer: "Project timelines vary based on scope and complexity. Typically, a complete web design project takes 2-4 weeks, while larger projects or design systems can take 1-3 months."
  }, {
    question: "Do you work with startups or only established companies?",
    answer: "I love working with both! Startups offer exciting challenges and the opportunity to shape a brand from the ground up, while established companies provide stability and resources for larger-scale projects."
  }, {
    question: "What's included in your design process?",
    answer: "My process includes discovery and research, user persona development, wireframing, visual design, prototyping, and user testing. I believe in iterative design and close collaboration."
  }, {
    question: "Can you handle development as well?",
    answer: "Yes! I have strong front-end development skills and can take projects from design to implementation. I specialize in React, TypeScript, and modern CSS frameworks."
  }, {
    question: "What's your availability like?",
    answer: "I'm currently available for new projects. I typically work on 1-2 major projects at a time to ensure quality and dedicated attention. Let's discuss your timeline!"
  }, {
    question: "How do you handle revisions and feedback?",
    answer: "I include a reasonable number of revisions in my project scope and encourage open communication throughout the process. I believe great work comes from collaboration and constructive feedback."
  }, {
    question: "Do you offer ongoing support after project completion?",
    answer: "Absolutely! I provide post-launch support and can help with updates, maintenance, and future iterations. Building long-term relationships with clients is important to me."
  }];
  return <div className="min-h-screen bg-background font-jakarta">
      <StickyNavbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16 py-[60px]">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="font-display sm:text-4xl font-medium mb-4 sm:mb-6 tracking-tight leading-tight sm:leading-tight lg:leading-tight lg:text-4xl text-3xl text-left">Everything about me. Especially for hiring managers, recruiters and potential clients.</h1>
            
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
                  <CardDescription>
                    Professional questions about my work, process, and availability
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {careerFAQs.map((faq, index) => <AccordionItem key={index} value={`career-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.answer}
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
                  <CardDescription>
                    Fun questions to get to know me better as a person
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {randomFAQs.map((faq, index) => <AccordionItem key={index} value={`random-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.answer}
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