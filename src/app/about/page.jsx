import Heading from "@/src/components/Heading";
import '@/public/styles/about.scss';
import ContactForm from "@/src/components/ContactForm";


export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <Heading>About Us:</Heading>

      <div className="about-content font-exo2">
        <p>
          Welcome to Indie Game Reviews, where we explore and share our thoughts
          on the latest indie games in the gaming world. Our team of passionate
          gamers is dedicated to providing honest and insightful reviews to help
          you discover hidden gems among indie titles.
        </p>

        <h2>Our Mission</h2>
        <p>
          At Indie Game Reviews, our mission is to celebrate the creativity and
          innovation found in independent games. We believe in supporting indie
          developers and showcasing their unique contributions to the gaming
          industry. Whether you're a seasoned gamer or new to indie titles, we
          strive to guide you toward exciting and memorable gaming experiences.
        </p>

        <h2>Contact Us</h2>
        <p>
          Have a suggestion, question, or want to collaborate? Feel free to
          reach out to us at{" "}
          <a href="mailto:contact@indiegamereviews.com">
            contact@indiegamereviews.com
          </a>.
         
        </p>

        <ContactForm />

      </div>
    </>
  );
}
