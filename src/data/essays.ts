
export interface Essay {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export const essays: Essay[] = [
  {
    slug: "on-the-nature-of-solitude",
    title: "Jakob's Law: [ Confusing = Frustating ]",
    excerpt: "Users spend most of their time on other websites, so they expect your process flow to work like the ones they already know",
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
    slug: "digital-ghosts-and-modern-memory",
    title: "Digital Ghosts and Modern Memory",
    excerpt: "Our devices store more than data; they preserve fragments of who we were, creating digital fossils of our former selves in the sedimentary layers of forgotten files.",
    date: "February 28, 2024", 
    readTime: "12 min read",
    category: "Technology",
    content: `Our devices store more than data; they preserve fragments of who we were, creating digital fossils of our former selves in the sedimentary layers of forgotten files.

Last week, while searching for a document buried somewhere in my computer's depths, I stumbled upon a folder I had forgotten existed. Nested within it were screenshots from conversations long ended, drafts of emails never sent, photos of people whose names I could no longer recall with certainty. These digital artifacts felt like archaeological evidence of a life I had lived but somehow left behind.

In this accidental excavation, I found myself confronting a peculiar feature of modern existence: we are the first generation to live alongside the accumulated digital detritus of our entire adult lives. Every device we own contains multitudes—not just the intentional archives of important documents and cherished photos, but the involuntary accumulation of digital exhale: cached files, browser histories, metadata that records not just what we did but when and where and how long we lingered.

## The Archaeology of Self

Our digital devices have become unintentional museums of the self. Unlike physical objects, which require conscious preservation, digital artifacts persist by default. The embarrassing selfie, the angry tweet, the playlist that perfectly captured a mood from three years ago—they all exist in a state of potential resurrection, waiting to be rediscovered by our future selves.

This creates a strange relationship with our own past. Memory, traditionally, was selective. We remembered what mattered, what our minds chose to encode and preserve. Time naturally edited our experiences, softening harsh edges and highlighting significant moments. But digital memory is indiscriminate. It preserves everything with equal fidelity: the profound and the mundane, the intentional and the accidental.`
  },
  {
    slug: "the-weight-of-unwritten-words",
    title: "The Weight of Unwritten Words",
    excerpt: "Every word we choose carries the shadow of all the words we didn't. In this selective silence lies both the power and the burden of expression.",
    date: "January 12, 2024",
    readTime: "6 min read",
    category: "Writing",
    content: `Every word we choose carries the shadow of all the words we didn't. In this selective silence lies both the power and the burden of expression.

I am sitting at my desk, cursor blinking against the white expanse of an empty document, and I am aware—as I always am when I write—of the weight of what remains unsaid. For every sentence that makes it onto the page, dozens of others fall away, abandoned in the space between thought and expression. They accumulate like snow in the margins of consciousness: the more precise phrase that escaped me, the better metaphor that arrived too late, the deeper truth I couldn't quite reach.

Writing is as much about choosing what not to say as it is about finding the words themselves. Each decision to include creates an equal and opposite decision to exclude. The result is that every piece of writing exists in relationship to its own absence, defined as much by what it leaves out as by what it contains.

## The Archaeology of Omission

There is an entire archaeology to be found in what writers choose not to say. In the spaces between paragraphs, in the thoughts that hover just outside the frame, in the experiences that inform the work but never explicitly appear within it. Sometimes the most powerful element of a piece is what the writer trusted the reader to understand without being told.`
  }
];

export const getEssayBySlug = (slug: string): Essay | undefined => {
  return essays.find(essay => essay.slug === slug);
};

export const getFeaturedEssays = (): Essay[] => {
  return essays.slice(0, 3);
};
