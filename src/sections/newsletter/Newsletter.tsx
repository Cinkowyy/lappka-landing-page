import styles from "./Newsletter.module.scss";
import NewsletterCard from "components/newsletterCard/NewsletterCard";

const Newsletter = () => {
  return (
    <div className={styles.newsletter_container}>
      <NewsletterCard />
    </div>
  );
};

export default Newsletter;
