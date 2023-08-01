import React from "react";
import {
  Card,
  CardContainer,
  CardHeading,
  Cardtext,
  ChildImgCard,
  Container,
  ContainerHeadind,
  FileImg,
  ImgTitle,
  LgCard,
} from "./MiddleSec.style";
import { FlexContainer } from "../../../globalstyle.js";
import mobile from "../../../assets/mobile.png";
import file from "../../../assets/file.png";
import girl1 from "../../../assets/girl1.png";
import girl2 from "../../../assets/girl2.png";
import girl3 from "../../../assets/girl3.png";
import card1 from "../../../assets/card1.svg";
import card2 from "../../../assets/card2.svg";
import card3 from "../../../assets/card3.svg";
import { BtnLabel, Button } from "../../Common.style";
import MidLayout from "../Sec3/MidLayout";

const MiddleSec = () => {
  return (
    <>
      <Container className="col ai_center">
        <ContainerHeadind>
          <span>Elevate your Craft</span>
        </ContainerHeadind>
        <CardContainer>
          <FlexContainer className="jc_spacebetween">
            <LgCard>
              <FlexContainer
                className="col ai_center jc_center"
                style={{ width: "90%" }}
              >
                <CardHeading>Unlock Your ABC Earning Potential</CardHeading>
                <br />
                <Cardtext>
                  Are you ready to take your earning potential to the next
                  level? With ABC, you have multiple avenues to monetize your
                  content seamlessly. From subscriptions and tips to merchandise
                  sales and NFTS, ABC helps you diversify your revenue streams
                  and maximize your income.
                </Cardtext>
                <br />
                <br />
                <img src={mobile} alt="mobileframe" width="55%" />
              </FlexContainer>
            </LgCard>
            <LgCard>
              <FlexContainer
                className="col ai_center jc_center"
                style={{ width: "90%" }}
              >
                <CardHeading>
                  Boost Your Sales with Built-in E-commerce
                </CardHeading>
                <br />
                <Cardtext>
                  Take control of your brand and boost your sales with ABC's
                  built-in e-commerce functionality. Showcase and sell your
                  exclusive products, whether it's merchandise, digital
                  downloads, or personalized experiences. Integrate your store
                  effortlessly and turn your creative ideas into profitable
                  ventures.
                </Cardtext>
                <br />
                <br />
                <FlexContainer style={{ gap: "1rem" }}>
                  <ChildImgCard>
                    <FileImg>
                      <img src={file} width="80%" />
                    </FileImg>
                  </ChildImgCard>
                  <ChildImgCard>
                    <FileImg className="girl">
                      <img src={girl1} width="80%" />
                      <ImgTitle>Blue bikini</ImgTitle>
                    </FileImg>
                  </ChildImgCard>
                  <ChildImgCard>
                    <FileImg className="girl">
                      <img src={girl2} width="80%" />
                      <ImgTitle>Green modern bikini</ImgTitle>
                    </FileImg>
                  </ChildImgCard>
                  <ChildImgCard>
                    <FileImg className="girl">
                      <img src={girl3} width="80%" />
                      <ImgTitle>Green modern bikini</ImgTitle>
                    </FileImg>
                  </ChildImgCard>
                </FlexContainer>
              </FlexContainer>
            </LgCard>
          </FlexContainer>
          <FlexContainer
            className="jc_spacearound"
            style={{ gap: "2rem", marginTop: "2rem" }}
          >
            <Card className="col ai_center ">
              <img src={card1} alt="image" width="100px" />
              <FlexContainer className="col " style={{ width: "80%" }}>
                <CardHeading>
                  Save Time with Automation and Efficiency
                </CardHeading>
                <Cardtext>
                  Join ABC's vibrant creator community. Connect with like-minded
                  individuals, collaborate, and share experiences. Access mental
                  health services and resources for personal and professional
                  growth.
                </Cardtext>
              </FlexContainer>
            </Card>
            <Card className="col ai_center">
              <img src={card2} alt="image" width="100px" />
              <FlexContainer className="col " style={{ width: "80%" }}>
                <CardHeading>Join a Supportive Community</CardHeading>
                <Cardtext>
                  Supercharge your content creation with ABC's automation tools.
                  Streamline scheduling, multi-platform management, and more.
                  Save time on repetitive tasks, focus on exceptional content.
                </Cardtext>
              </FlexContainer>
            </Card>
            <Card className="col ai_center">
              <img src={card2} alt="image" width="100px" />
              <FlexContainer className="col " style={{ width: "80%" }}>
                <CardHeading>
                  Unlock Exclusive Opportunities and Prizes
                </CardHeading>
                <Cardtext>
                  Enjoy ABC contests and challenges for valuable prizes.
                  Showcase your exceptional talent and win business grants,
                  scholarships, and more. Thrive on our platform with
                  recognition and rewards.
                </Cardtext>
              </FlexContainer>
            </Card>
          </FlexContainer>
        </CardContainer>
        <FlexContainer style={{ height: "100rem" }}>
          <FlexContainer
            className=" col jc_center ai_center"
            style={{ height: "60rem" }}
          >
            <Cardtext>
              Don't miss out on ABC’s Incredible features and Opportunities.
            </Cardtext>
            <ContainerHeadind style={{ width: "90rem", marginTop: "0.5rem" }}>
              <span>
                Join us today and unlock your full potential as a creator
              </span>
            </ContainerHeadind>
            <Button wd="27rem">
              <BtnLabel>Join Now </BtnLabel>
            </Button>
          </FlexContainer>
        </FlexContainer>
        <MidLayout />
      </Container>
    </>
  );
};

export default MiddleSec;
