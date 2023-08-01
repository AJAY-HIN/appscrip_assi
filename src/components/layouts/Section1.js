import { ReactComponent as TopSvg } from "../../assets/svg1.svg";
import { ReactComponent as BottomSvg } from "../../assets/svg2.svg";
import { FlexContainer } from "../../globalstyle.js";
import { BtnLabel, Button } from "../Common.style";
import {
  CommonBox,
  Container,
  Form,
  FormContent,
  FormInnerDiv,
  GoogleBtn,
  Heading,
  Hr,
  Input,
  LgInput,
  P,
  Span,
  SvgDiv,
  TextDiv,
} from "./section.style";
// import { Container, SvgDiv } from "@/components/Layouts/Layout.style";

const SecOne = () => {
  return (
    <Container ht="98rem">
      <SvgDiv className="topLeft">
        <TopSvg width="100%" />
      </SvgDiv>
      <SvgDiv className="bottomRight">
        <BottomSvg width="100%" />
      </SvgDiv>
      <CommonBox
        className="jc_spacearound ai_center "
        style={{ position: "absolute", zIndex: "2" }}
      >
        <TextDiv>
          <Heading>A Creator’s Paradise</Heading>
          <P>Were Creativity Meets Success</P>
        </TextDiv>
        <Form>
          <FormInnerDiv>
            <GoogleBtn>
              <p>Continue With Google</p>
            </GoogleBtn>
            <FlexContainer style={{ gap: "1rem" }}>
              <Input type="text" placeholder="FirstName*" />
              <Input type="text" placeholder="LastName*" />
            </FlexContainer>
            <FormContent>
              <LgInput type="text" placeholder="Email*" />
              <LgInput type="password" placeholder="Password*" />
              <Span>(GMT+05:30) india standard Time - Calcutta </Span>
              <Button wd="41.2rem" ht="6rem">
                <BtnLabel>Signup as a user</BtnLabel>
              </Button>

              <br />
              <Span>
                By signing up you agree to our Terms & Conditions and Privacy
                Policy. and confirm that you are at least 18 years old.
              </Span>

              <Hr />
              <Button wd="41.2rem" ht="6rem">
                <BtnLabel>Signup as a Creator</BtnLabel>
              </Button>
            </FormContent>
          </FormInnerDiv>
        </Form>
      </CommonBox>
    </Container>
  );
};

export default SecOne;
