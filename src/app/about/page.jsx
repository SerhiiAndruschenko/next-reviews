import Heading from "@/src/components/Heading";
import "@/public/styles/about.scss";
import ContactForm from "@/src/components/ContactForm";
import AnimatedElement from "@/src/components/AnimatedElement";

export const metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <>
      <Heading>About Us:</Heading>

      <div className="about-content font-gentium">
        <AnimatedElement>
          <p>
            Welcome to Bookworm Haven, a personal blog where I share my insights
            and in-depth reviews of the books I've read. Here at Bookworm Haven,
            my passion for literature drives me to explore the literary world
            and express my thoughts on both well-known and up-and-coming
            authors.
          </p>

          <h2>Mission Statement</h2>
          <p>
            At Bookworm Haven, my mission is to create a space that celebrates
            the rich tapestry of literature. I focus on sharing genuine and
            thoughtful reviews that cater to all readers, whether you're a
            dedicated bibliophile with an extensive collection or a casual
            reader in search of your next captivating story. Join me on this
            literary journey as I guide you to hidden gems and well-loved
            classics alike.
          </p>

          <h2>Contact Us</h2>
          <p>
            Have a book recommendation, a burning question, or interested in
            collaboration? Feel free to connect with us at{" "}
            <a href="mailto:contact@bookwormhaven.space">
              contact@bookwormhaven.space
            </a>
            .
          </p>
        </AnimatedElement>

        <AnimatedElement>
          <ContactForm />
        </AnimatedElement>
      </div>
    </>
  );
}
