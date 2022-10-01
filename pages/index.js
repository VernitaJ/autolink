import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { LinkBox, LinkContainer } from "../styles/index.styled";

export default function Landing() {
  const router = useRouter();
  return (
    <>
      <MainContainer>
        <Head>
          <title>Blue Auto</title>
          <meta name="description" content="It's all about you" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Background>
          <Carousel
            autoPlay={true}
            showThumbs={false}
            infiniteLoop={true}
            interval={8000}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            slidesToShow={3}
          >
            <div>
              <img src="/car.jpg" />
            </div>
            <div>
              <img src="/car2.jpg" />
            </div>
            <div>
              <img src="/car3.jpg" />
            </div>
          </Carousel>
        </Background>

        <TopSection>
          <div
            style={{
              display: "flex",
              color: "white",
              zIndex: "20",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "800px",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            <Image
              src="/favicon_white.png"
              width={70}
              height={70}
              style={{
                filter: "drop-shadow(rgb(190,190,200) 1px 1px 2px)",
                position: "relative",
              }}
            />
            {/* <InfoParagraph>Here at <b>Blue Auto</b> we look after both buyer and seller - so that the benefit goes to the people that deserve it, instead of dealerships.</InfoParagraph> */}
            <Heading>
              <p>
                At <b>Blue Auto</b> the seller gets more, and the buyer pays
                less.
              </p>
              <p>With us - it&apos;s all about you!</p>
            </Heading>
            <LinkButtons>
              <LinkButton onClick={() => router.push("/cars")}>
                Shop cars
              </LinkButton>
              <LinkButton onClick={() => router.push("/upload")}>
                Sell your car
              </LinkButton>
            </LinkButtons>
          </div>
        </TopSection>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blue-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <section className="pb-20 bg-lightBlue-900">
          <LinkContainer>
            <LinkBox onClick={() => router.push("/cars")} $color="darkBlue">
              <p className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-500">
                <i className="text-white fas fa-award"></i>
              </p>
              <h4>Buying</h4>
              <p className="text-xl mt-2 mb-4 text-blueGray-500">
                Find your new car at the best price. <br />
                With financing available.
              </p>
            </LinkBox>

            <LinkBox onClick={() => router.push("/upload")} $color="darkGreen">
              <p className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-500">
                <i className="text-white fas fa-retweet"></i>
              </p>
              <h4>Selling</h4>
              <p className="text-xl mt-2 mb-4 text-blueGray-500">
                Benefit the most from your vehicle. <br />
                We&apos;ll sell it for you.
              </p>
            </LinkBox>
            <LinkBox onClick={() => router.push("/upload")} $color="darkGreen">
              <p className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-500">
                <i className="text-white fas fa-fingerprint"></i>
              </p>
              <h4>Financing</h4>
              <p className="text-xl mt-2 mb-4 text-blueGray-500">
                Supported by all major South African banks, to find you the best
                deal around.
              </p>
            </LinkBox>
          </LinkContainer>

          <div className="flex flex-wrap items-center gap-0 mt-32">
            <div className="w-full md:w-5/12 ml-auto px-4">
              <div className="md:pr-12 text-white">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                  <i className="fas fa-rocket text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">Personal service</h3>
                <p className="mt-4 text-lg leading-relaxed ">
                  At Blue Auto we provide personal service every step of the
                  way:
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-200 mr-3">
                          <i className="fa fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4>Free valuations</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-200 mr-3">
                          <i className="fa fa-cogs"></i>
                        </span>
                      </div>
                      <div>
                        <h4>Predelivery inspections</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-200 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4>Financing applications</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-4/12 md:w-6/12 px-4 lg:mr-auto mb-12">
              <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-blue-900">
                <img
                  style={{ maxWidth: "400px" }}
                  alt="..."
                  src="/call.jpg"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blue-900 fill-current"
                    ></polygon>
                  </svg>
                  <BlockHeading>Advice and assistance</BlockHeading>
                  <AdviceParagraph>
                    From information on car brands and models, to knowledge on
                    financing and affordability -&nbsp;
                    <br />
                    <b>Blue Auto</b> is here to help you!{" "}
                    <Link href="/contact">Contact us today.</Link>
                  </AdviceParagraph>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-4/12 md:w-6/12 px-10 lg:mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full rounded-lg bg-darkblue">
                  <img
                    alt="..."
                    src="/keys.jpg"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-blue-900 fill-current"
                      ></polygon>
                    </svg>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="pb-20 relative block bg-white">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-0 lg:pt-3 lg:pb-0">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 mt-10">
                <FinancingHeading>
                  Blue Auto Financing partners
                </FinancingHeading>
                <p className="text-xl mb-10 text-blueGray-500">
                  Through our financing options with these major banks,
                  we&apos;ll find the best deal for you.
                </p>
              </div>
            </div>

            <FinancingImages>
              <div className="lg:w-3/12 px-4 text-center">
                <Image src="/mfc.png" width={160} height={60}></Image>
              </div>

              <div className="lg:w-3/12 mx-4 text-center -m-2">
                <Image src="/bmw.png" width={150} height={75} />
              </div>

              <div className="lg:w-3/12 px-4 text-center -m-3">
                <Image src="/wesbanklogo.png" width={190} height={65} />
              </div>

              <div className="lg:w-3/12 px-4 text-center">
                <Image src="/absa.png" width={70} height={70} />
              </div>

              <div className="lg:w-3/12 px-4 text-center -m-3">
                <Image src="/standardbank.png" width={100} height={140} />
              </div>
            </FinancingImages>
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 583 95"
              className="absolute left-0 w-full block h-110-px top-94-px"
            >
              <polygon
                points="0,95 593,95 583,65"
                style={{ fill: "rgb(0,0,77)" }}
              ></polygon>
            </svg>
          </div>
        </section>
      </MainContainer>
    </>
  );
}

export const MainContainer = styled.main``;

export const FinancingHeading = styled.h3`
  margin-bottom: 10px;
  color: rgb(0, 0, 77);
  font-size: 35px;
  font-weight: bold;
  filter: drop-shadow(rgb(190, 190, 255) 0px 1px 1px);
`;

export const FinancingImages = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-top: 20px;
  gap: 20px;
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 5px;
  font-size: 25px;
  padding: 10px 20px;
  font-weight: bold;
`;

export const InfoParagraph = styled.h2`
  align-content: center;
  max-width: 800px;
  margin: 20px;
  font-size: 16px;
  color: white; ;
`;

export const Background = styled.div`
  max-height: 220px;
  img {
    display: block;
    max-height: 80vh;
    width: auto;
    object-fit: cover;
  }
`;

export const TopSection = styled.section`
  position: relative;
  padding-top: 16px;
  padding-bottom: 32px;
  display: flex;
  align-content: center;
  justify-content: center;
  min-height: 80vh;
`;

export const InfoHeading = styled.h3`
  font-size: 18px;
  margin-left: 20px;
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
`;

export const BlockHeading = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
`;

export const AdviceParagraph = styled.p`
  font-size: 15px;
  font-weight: 100;
  color: white;
  font-size: 18px;
`;

export const LinkButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 60px;
  color: rgb(0, 0, 77);
`;

export const LinkButton = styled.button`
  background-color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding: 10px 30px;
  width: 200px;
`;
