import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Target, ArrowRight } from "lucide-react";

const Consultation = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyNavbar />
      
      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-jakarta text-4xl sm:text-5xl lg:text-6xl font-medium mb-6 text-foreground">
            Design Consultation
          </h1>
          <p className="font-jakarta text-lg sm:text-xl leading-relaxed mb-8 text-muted-foreground max-w-3xl mx-auto">
            Transform your digital presence with strategic design guidance. I help businesses and individuals create meaningful, user-centered experiences that drive results.
          </p>
          <Button 
            size="lg" 
            className="font-jakarta font-medium"
            onClick={() => window.location.href = '/contact'}
          >
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-jakarta text-3xl sm:text-4xl font-medium mb-4 text-foreground">
              Consultation Services
            </h2>
            <p className="font-jakarta text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive design solutions tailored to your unique needs and objectives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* UX/UI Strategy */}
            <Card className="border border-border" style={{ borderRadius: '10px' }}>
              <CardContent className="p-6">
                <div className="mb-4">
                  <Target className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-jakarta text-xl font-medium text-foreground mb-2">
                    UX/UI Strategy
                  </h3>
                </div>
                <p className="font-jakarta text-muted-foreground text-sm leading-relaxed">
                  Strategic design planning, user journey mapping, and interface optimization to enhance user experience and business outcomes.
                </p>
              </CardContent>
            </Card>

            {/* Design System Development */}
            <Card className="border border-border" style={{ borderRadius: '10px' }}>
              <CardContent className="p-6">
                <div className="mb-4">
                  <CheckCircle className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-jakarta text-xl font-medium text-foreground mb-2">
                    Design Systems
                  </h3>
                </div>
                <p className="font-jakarta text-muted-foreground text-sm leading-relaxed">
                  Building scalable design systems and component libraries that ensure consistency across all digital touchpoints.
                </p>
              </CardContent>
            </Card>

            {/* Product Design Audit */}
            <Card className="border border-border" style={{ borderRadius: '10px' }}>
              <CardContent className="p-6">
                <div className="mb-4">
                  <Users className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-jakarta text-xl font-medium text-foreground mb-2">
                    Design Audits
                  </h3>
                </div>
                <p className="font-jakarta text-muted-foreground text-sm leading-relaxed">
                  Comprehensive analysis of existing designs with actionable recommendations for improvement and optimization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-jakarta text-3xl sm:text-4xl font-medium mb-4 text-foreground">
              How It Works
            </h2>
            <p className="font-jakarta text-lg text-muted-foreground">
              A structured approach to delivering exceptional design solutions
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-jakarta font-medium text-sm">
                1
              </div>
              <div>
                <h3 className="font-jakarta text-xl font-medium text-foreground mb-2">
                  Discovery & Assessment
                </h3>
                <p className="font-jakarta text-muted-foreground leading-relaxed">
                  We'll discuss your goals, challenges, and current design state to understand your unique requirements and establish project scope.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-jakarta font-medium text-sm">
                2
              </div>
              <div>
                <h3 className="font-jakarta text-xl font-medium text-foreground mb-2">
                  Strategic Planning
                </h3>
                <p className="font-jakarta text-muted-foreground leading-relaxed">
                  I'll develop a comprehensive strategy and roadmap tailored to your objectives, timeline, and resources.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-jakarta font-medium text-sm">
                3
              </div>
              <div>
                <h3 className="font-jakarta text-xl font-medium text-foreground mb-2">
                  Implementation Guidance
                </h3>
                <p className="font-jakarta text-muted-foreground leading-relaxed">
                  Receive detailed recommendations, actionable insights, and ongoing support to execute your design strategy effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-jakarta text-3xl sm:text-4xl font-medium mb-4 text-foreground">
              Why Work With Me
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-jakarta font-medium text-foreground mb-1">
                    Multi-Platform Expertise
                  </h3>
                  <p className="font-jakarta text-sm text-muted-foreground">
                    Experience designing across web, mobile, and admin platforms for various industries including FinTech, InsurTech, and B2B Commerce.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-jakarta font-medium text-foreground mb-1">
                    Systems-Oriented Approach
                  </h3>
                  <p className="font-jakarta text-sm text-muted-foreground">
                    Focus on building cohesive experiences that work seamlessly across all touchpoints and scale with your business.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-jakarta font-medium text-foreground mb-1">
                    Proven Track Record
                  </h3>
                  <p className="font-jakarta text-sm text-muted-foreground">
                    Successfully delivered projects for leading companies and startups, with a focus on user-centered design and business impact.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-jakarta font-medium text-foreground mb-1">
                    Efficient Delivery
                  </h3>
                  <p className="font-jakarta text-sm text-muted-foreground">
                    Experienced in delivering high-quality results under tight deadlines while maintaining attention to detail.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-jakarta font-medium text-foreground mb-1">
                    Collaborative Process
                  </h3>
                  <p className="font-jakarta text-sm text-muted-foreground">
                    Working closely with your team to ensure alignment, knowledge transfer, and sustainable design practices.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-jakarta font-medium text-foreground mb-1">
                    Strategic Thinking
                  </h3>
                  <p className="font-jakarta text-sm text-muted-foreground">
                    Beyond aesthetics - focusing on design decisions that drive business objectives and user satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-jakarta text-3xl sm:text-4xl font-medium mb-4 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="font-jakarta text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and explore how strategic design consultation can help you achieve your goals.
          </p>
          <Button 
            size="lg" 
            className="font-jakarta font-medium"
            onClick={() => window.location.href = '/contact'}
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Consultation;