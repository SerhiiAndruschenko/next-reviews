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
            Welcome to Bookworm Haven, your go-to destination for insightful and
            comprehensive book reviews. Here at Bookworm Haven, our avid team of
            readers is passionate about delving into the literary world and
            sharing our thoughts on the latest and greatest books.
          </p>

          <h2>Our Mission</h2>
          <p>
            At Bookworm Haven, our mission is to celebrate the diverse world of
            literature by shining a spotlight on both established and emerging
            authors. We believe in the power of storytelling and aim to provide
            readers with thoughtful and honest reviews that help you navigate
            the vast realm of books. Whether you're a bibliophile with an
            extensive collection or a casual reader looking for your next
            page-turner, we're here to guide you to literary treasures.
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
