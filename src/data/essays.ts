
export interface Essay {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export const essays: Essay[] = [
  {
    slug: "button-state-design-best-practices",
    title: "Button State Design Best Practices: Avoid These UX Pitfalls",
    excerpt: "Learn the most common button state design mistakes in UI/UX and discover best practices to create consistent, accessible, and user-friendly interfaces.",
    metaDescription: "Improve usability with button state best practices. Avoid common UX pitfalls that confuse users and hurt engagement.",
    date: "September 11, 2025",
    readTime: "2 min read",
    category: "UX Laws",
    content: `![Button State Design Examples](/lovable-uploads/31da105f-4446-41fe-bbcd-6a2bc9a689e9.png)

Buttons are one of the most essential interactive UI elements, yet they're also one of the easiest places to slip up. Poor button state design leads to confusion, frustration, and accessibility issues. Below, we'll cover the most common mistakes in button interaction design and how to avoid them.

**Summary:**

❌ Disabled state looks active, so users click without feedback.

❌ Overdone transitions are flashy but distracting.

❌ Low contrast makes it hard to distinguish states and leads to errors.

❌ Ignoring accessibility excludes users relying on assistive tech.

## Why Button States Matter in UX Design

Button states—default, hover, active, focused, and disabled—give users feedback and guide interaction. When done right, they improve usability, accessibility, and confidence. When done poorly, they create friction and errors.

## Common Mistakes in Button State Design

### 1. Inconsistent Visual Cues

When button states don't follow consistent rules across your UI, users struggle to recognize patterns. Design consistency in UI is critical for building trust and clarity.

### 2. Disabled Buttons That Look Active

A disabled button should look clearly inactive. If disabled button design is too subtle, users may click repeatedly without understanding why nothing happens.

### 3. Overcomplicated Animations

UI animation mistakes happen when transitions are flashy but unhelpful. Keep button animations subtle, consistent, and purposeful to avoid distracting users.

### 4. Low Color Contrast

Poor color contrast in design makes button states hard to distinguish, especially for users with visual impairments. Always check your color contrast ratios to meet accessibility standards.

### 5. Ignoring Accessibility

Skipping ARIA roles, labels, or keyboard navigation alienates users who rely on assistive technologies. Accessibility in button states is not optional—it's a best practice.

## Button State Design Best Practices

- Keep button states **consistent** across the interface
- Use **clear contrast** for different states
- Apply **accessible color schemes** that meet WCAG standards
- Add **meaningful animations** that enhance clarity, not distract
- Ensure **keyboard and screen reader support** for inclusivity

## Final Thoughts

Button state design may seem like a small detail, but it's one of the most visible parts of user interaction. By avoiding these common UX mistakes and following best practices, you create interfaces that are not only usable but also accessible and trustworthy.`
  },
  {
    slug: "on-the-nature-of-solitude",
    title: "Jakob's Law: [ Confusing = Frustating ]",
    excerpt: "Users spend most of their time on other websites, so they expect your process flow to work like the ones they already know",
    metaDescription: "Learn why familiar design patterns reduce user frustration. Explore Jakob's Law and how user expectations shape effective UX design decisions.",
    date: "Aug 24, 2025",
    readTime: "8 min read",
    category: "UX Laws",
    content: `Jakob's Law > This is the basic principle in UX Design.

The key for good app or platform is familiarity.

## Familiarity enables transfer of experience

"Familiarity enables the transfer of experience between similar products or services, allowing us to be productive without first learning how a system works. When we encounter familiar interface patterns and conventions, we intuitively understand them based on previous experience." - Laws of UX

Each of us here loves to talk to somebody they know. None of us likes to randomly bump into a stranger and say 'Hello!' without a reason. Even when there's a new colleague joining our team, we take some time to get to know them.

The same rule applies for a process flow.

We don't want to go through something strange or unusual. It is frustrating because we need to learn a new thing again just to get things done.

We go to an app or website for a reason. Either we want to sign up and try a new tool or log in to pay our summon.

We expect everything to be the same based on our previous experiences.

## Simple login flow example

A simple example is login flow.

The logic or expectation for a user to log in to their account is that they need to input these two or three things:

- Username
- Password

It is unusual if the platform requires users to log in by filling out more than two inputs — full name, username, birthday, and password.

Another scenario for your better understanding is what if they forget their password?

For users, when they key in the password but the system tells them their password is incorrect after a few attempts, their mental model is that they want to click a 'forgot password' button somewhere on the login screen.

Then, they will expect to receive a verification code through their registered email or mobile number and click the reset password link.

The keyword here is account verification as part of the security process to reset their account password.

It is common to them when they encounter a similar scenario with other platforms and they expect the same process flow when clicking the "forgot password" button.

So when designing the business or process flow, including the interface design like the button placement for the forgot password button, it must follow the same pattern as what others have done.

Designing for the product or digital experience is not the same as graphic design or crafting a masterpiece of art.

The creativity in UI/UX design is to make the overall experience fun, exciting, and easy to use. We can't reinvent the wheel, even though we are building an AI digital banking app, because the basic principle of Jakob's Law is still applicable everywhere, including the retail experience.

Otherwise, no matter how cool your product is, if the overall flow is odd and unusual, your product will suck.

No matter how cool your backend technology is, no one cares if they find your app or platform too complex to use.

Thus, [Confusing = Frustating].`
  },
  {
    slug: "design-in-the-wilderness",
    title: "Design in the Wilderness",
    excerpt: "This is my story of working to drive change when no one cared — small efforts that made a big impact. Inspired by the former Malaysian AG's My Story: Justice in the Wilderness.",
    metaDescription: "Discover how small design initiatives can drive meaningful change in organizations without design leadership. A UX designer's journey through challenges and reforms.",
    date: "May 18, 2025",
    readTime: "6 min read",
    category: "DesignOps",
    content: `I'm not planning to write a book or a lengthy article or an academic journal. But this is a small step toward documenting my contributions and achievements at work.

I believe designers should write too.

> Every little steps counts, so document them before you forgot.

I am doing my best to follow the advice given by my UX mentor, Marcus Chia.

He is a 'real mentor' with a proven industry experience, leading a small team of designers at UX Army.

I'm proud to say that I was first introduced to UI design when I attended his workshop at the University of Malaya in May 2020. (I gave a talk on how to design using Adobe Illustrator on the first day of the workshop.)

*[Workshop photo from University of Malaya, May 2020 - showing participants learning UI design fundamentals]*

From there, I started finding my way to pivot from graphic design into this industry.

Now, here I am as a UI/UX Designer. From starting out at a small software house to working at a FinTech startup owned by a publicly listed company.

It was not an easy journey, but I quickly adapted and learned in fast-paced environments. At every company I joined, there was a new thing to learn, not only in designing but also in managing resources, documentation, and thought processes while working with a dynamic team, especially to push your ideas or convince others to follow your recommendations.

> The laziest thing for a designer to do is to update their portfolio.

Most designers focus on output and pixel perfection in their portfolios, but they rarely include the raw process behind it, like sketches, rough ideas, stakeholder discussions, or any form of thinking process before the design outputs. For example:

- Design explorations.
- Showcase your design thinking and process.
- Results (metrics, launch, feedback from users or stakeholders).
- Communicate how you solve real user and business problems.
- Reflection: what you learned, what you'd improve.

**Optional But Strong Add-ons:**

- Design system contributions.
- Side projects or concept work.

They'll always show beautiful mockups with graphics to impress viewers. It's good, not as bad as you might think. However, the problem with this method is that it's common among the majority of designers, and they're all showing similar visuals too.

You don't have to show everything, but at least highlight the impact of your contribution. Whether it's to the product, the business, or your team, even as an Individual Contributor (IC), it matters. Show your process, not just the outcome. Recruiters want to understand how you think.

There's no one size fits all. You need to figure out by yourself. Think or seek advice!

So there are many ways to document your work. One example is by building a personal website with a dedicated page to showcase the details of your projects.

Sample for best portfolio showcases:

- [mizko.net](https://www.mizko.net)
- [bento.me/storm](https://bento.me/storm)
- [haolunyang.com](https://www.haolunyang.com)

But building a website is lengthy process even though you are using available web templates in the marketplace. You'll need to find your domain and prepare a few hundred ringgit to purchase it including the web hosting like [Hostinger](https://hostinger.my/?REFERRALCODE=1ZAHIN52).

For now, I'm planning to use Lovable and build my site called Nobody Essay as my main canvas to spit out my thoughts because it is easier for me to launch quickly with a simple MVP ([Minimum Viable Product](https://www.productplan.com/glossary/minimum-viable-product/)).

At the very least, when recruiters view my work, they'll be able to understand my thinking process through my writing.

They'll see what my thinking process is and how I make decisions to deliver solutions and create impact, even if it seems small to others.

This way, strangers—especially potential employers (yes, that's you!)—can get a quick surface-level impression of who I am before scheduling an interview.

## Why I choose this topic?

Inspired by the former Malaysian AG's My Story: Justice in the Wilderness.

I want readers to imagine what it's like working in a team with no design leadership. Even after multiple behind‑the‑scenes discussions to address the problems, nothing was done to move things forward.

There isn't even an internal chat group for designers too.

It's a sarcastic writing style meant to highlight the lack of drive or initiative within the organisation to improve the designers' work process. No resource planning, no roadmap for continuous improvement, nothing.

If this issue isn't addressed properly, it can lead to a chaotic work process and negatively impact the team's productivity.

In the upcoming series, I'll share specific problems I encountered, why I took action to improve them, and what the real consequences are if these issues continue to be ignored.

It's like a symptom. If you wait too long, it only gets messier and harder to fix.

Leadership requires either a gut feeling or just big balls to actually make a change.

I've experienced good design leadership before. Last year, I had the chance to work with the UX Principal at Great Eastern Singapore even though as a contract designer. He offered thoughtful guidance, shared insights, and established a clear process for the team to follow.

He didn't spoon‑feed us—he challenged us, guided us, and put a clear process in place. His methodology is thought provoking questions. From design to administrative works like documentation, etc.

Still, working in a leadership vacuum taught me a lot. It is good for me to explore and play around with initiative works. I seized every opportunity to drive small reforms even though that might not look significant to others but made a real difference in how we worked.

> Design Reformist!

As I work closely with the Biz Platform squad, I led the initiative to improve the work process by introducing a few small plans and process so that everyone especially new joiners know what to expect and adapt to the team quickly.

My upcoming essay the first series of "Design in the Wilderness" is on Figma File Management.

Stay tuned!`
  }
];

export const getEssayBySlug = (slug: string): Essay | undefined => {
  return essays.find(essay => essay.slug === slug);
};

export const getFeaturedEssays = (): Essay[] => {
  return essays.slice(0, 3);
};

export const getRelatedEssays = (currentSlug: string, limit: number = 3): Essay[] => {
  return essays.filter(essay => essay.slug !== currentSlug).slice(0, limit);
};
