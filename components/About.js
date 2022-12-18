import styles from "../styles/About.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const About = () => {
  const router = useRouter();

  return (
    <Container>
      <Text>
        <h1>About us</h1>
        <p className={styles.paragraph}>
          Car owners spend up to 7 years of their lives paying for their cars,
          then dealerships buy the vehicle for less than it&apos;s worth, with
          the profit in their pockets. <b>We</b> are fixing this cycle by giving
          the benefit to the correct person - you.
        </p>
        <p className={styles.paragraph}>
          Blue Auto was established in 2021, with a combined 24 years of
          experience in car sales and services. Instead of buying your vehicle
          from you, we sell it for you. The seller AND the buyer wins.
        </p>
        <p className={styles.paragraph}>
          <b>Blue Auto</b> is here to ensure your experience of buying/selling
          your car runs smoothly. Even if you just need the right advice,
          we&apos;re happy to help.
        </p>
        <Link href="/contact" onClick={() => router.push("/contact")}>
          Contact us today.
        </Link>
      </Text>
      <BottomSection>
        <ImageContainer>
          <div>
            <Image
              alt="Blue auto sales manager image"
              className={styles.about_image}
              src="/pedri_about.png"
              width={170}
              height={200}
              lazyLoad={true}
            />
            <p>Pedri Gouws</p>
            <p>Sales Manager</p>
          </div>
          <div>
            <Image
              alt="Vernita Jones technical administrator"
              className={styles.about_image}
              src="/veevee.png"
              width={200}
              height={200}
              lazyLoad={true}
            />
            <p>Vernita Jones</p>
            <p>Technical administator</p>
          </div>
        </ImageContainer>

        <BottomImage>
          <Image
            alt="blue auto logo"
            src="/blueauto_logo.png"
            width={200}
            height={35}
            style={{
              filter: "drop-shadow(rgb(190,190,200) 1px 1px 2px)",
            }}
          />
        </BottomImage>
      </BottomSection>
    </Container>
  );
};

export default About;

const ImageContainer = styled.div`
  display: flex;
  gap: 6px;
  p:nth-child(3) {
    @media (max-width: 768px) {
      font-size: 12.5px;
    }
  }
`;

const BottomImage = styled.div`
  margin-top: 40px;
  width: 100%;
`;

const Text = styled.div`
  h1 {
    font-size: 42px;
    font-weight: bold;
  }
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  margin-top: 50px;
  @media (max-width: 768px) {
    width: 95%;
    h1 {
      font-size: 30px;
      gap: 10px;
    }
  }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  gap: 120px;
  border-radius: 10px;
  font-style: bold;
  color: rgb(5, 23, 66);
  padding: 2%;
  margin: 0 10% 0;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  a {
    text-decoration: underline;
    :hover {
      text-decoration: none;
    }
  }
`;

const BottomSection = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  margin-top: 70px;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    margin: unset;
    margin-bottom: 40px;
  }
  p {
    font-family: calibri;
    font-size: 15px;
    font-weight: bold;
    color: rgb(105, 103, 106);
  }
`;
