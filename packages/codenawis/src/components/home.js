import React from "react";
import { connect, styled, keyframes } from "frontity";
import Container from './utitlity/Container'
import Row from './utitlity/Row'
import Col from './utitlity/Col'
import UL from './utitlity/UL'
import HoverLink from './utitlity/HoverLink'
import SubTitle from './utitlity/subTitle'
import SectionTitle from './utitlity/SectionTitle'
import FlexCenter from "./utitlity/FlexCenter";

const Home = ({ state }) => {
  return (
    <>
    <Container>
        <Row>
              <Col className="m5">
                  <FlexCenter className="column align-start">
                    <SectionTitle>Ctrl+C - Ctrl+V</SectionTitle>
                    <SubTitle classes="mb-0" title="Dont Waste your time writing the code we have already written!" />
                    <SubTitle classes="text-black mb-0" title="Just <b>Copy & Paste!!!</b>" />
                    <UL>
                      <li>
                        <FlexCenter className="justify-start align-center">
                        <svg fill="#9B5DE5" className="arrow-right" height="10px" width="10px" aria-hidden="true" focusable="false" height="12px" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                        <a href="#getStarted">GetStarted</a>
                        </FlexCenter>
                      </li>
                      <li>
                        <FlexCenter className="justify-start align-center">
                        <svg fill="#9B5DE5" className="arrow-right" height="10px" width="10px" aria-hidden="true" focusable="false" height="12px" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                        <HoverLink link="/category/themes">Eye-catching Themes</HoverLink>
                        </FlexCenter>
                      </li>
                      <li>
                        <FlexCenter className="justify-start align-center">
                        <svg fill="#9B5DE5" className="arrow-right" height="10px" width="10px" aria-hidden="true" focusable="false" height="12px" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                        <HoverLink link="/contact">Enterprise Projects <sup>(Contact Us)</sup></HoverLink>
                        </FlexCenter>
                      </li>
                    </UL>
                  </FlexCenter>
              </Col>
              <Col className="m6">
                  <FlexCenter>
                    <Animate className="w-550 RightToLeft">
                      <img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/3zMk-2.gif" alt="Componentity-Thousands of components ready to be copy pasted"/>
                    </Animate>
                    <Animate className="w-550 LargeToSmall">
                      <img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/img1.png" alt="Componentity-Thousands of components ready to be copy pasted"/>
                    </Animate>
                  </FlexCenter>
              </Col>
        </Row>
        <br/>
        <br/>
        <br/>
        <br/>
    </Container>
    <Clippy id="getStarted">
      <Container classes="py-10">
        <SectionTitle>Get Started</SectionTitle>
        <SubTitle classes="mb-0" title="Thousands of eye-catching components ready to be copy-pasted!" />
        <br/>
        <br/>
        <Row>
          <Col className="m2 s6">
            <HoverLink link="/category/tailwindcss"><img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/Group-3.png" alt="TailwindCSS Ready to be copy pasted Components by Componentity.com"/></HoverLink>
          </Col>
          <Col className="m2 s6">
            <HoverLink HoverLink link="/category/bootstrap"><img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/Group-2.png" alt="Bootstrap Ready to be copy pasted Components by Componentity.com"/></HoverLink>
          </Col>
          <Col className="m2 s6">
            <HoverLink link="/category/materializecss"><img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/Group-1.png" alt="MateriallizeCSS Ready to be copy pasted Components by Componentity.com"/></HoverLink>
          </Col>
          <Col className="m2 s6">
            <HoverLink link="/category/sass"><img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/Group-19.png" alt="Sass CSS Ready to be copy pasted Components by Componentity.com"/></HoverLink>
          </Col>
          <Col className="m2 s6">
            <HoverLink link="/category/reactjs"><img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/Group-17.png" alt="ReactJS Ready to be copy pasted Components by Componentity.com"/></HoverLink>
          </Col>
          <Col className="m2 s6">
            <HoverLink link="/category/vuejs"><img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/Group-16.png" alt="VueJS Ready to be copy pasted Components by Componentity.com"/></HoverLink>
          </Col>
          <Col className="m2 s6">
            <HoverLink link="/category/angularjs"><img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/flat550x550075f.u3.png" alt="AngularJS Ready to be copy pasted Components by Componentity.com"/></HoverLink>
          </Col>
          <Col className="m2 s6">
            <HoverLink link="/category/sveltejs"><img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/Group-15.png" alt="SvelteJS Ready to be copy pasted Components by Componentity.com"/></HoverLink>
          </Col>
          <Col className="m2 s6">
            <HoverLink link="/category/jquery"><img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/Group-15-2.png" alt="JQuery Ready to be copy pasted Components by Componentity.com"/></HoverLink>
          </Col>
          <Col className="m2 s6">
            <HoverLink link="/category/wordpress"><img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/Group-15-1.png" alt="Wordpress Ready to be copy pasted Components by Componentity.com"/></HoverLink>
          </Col>
          <Col className="m2 s6">
            <HoverLink link="/category/flutter"><img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/Group-16-1.png" alt="Flutter Ready to be copy pasted Components by Componentity.com"/></HoverLink>
          </Col>
          <Col className="m2 s6">
            <HoverLink link="/category/frontity"><img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/Group-17-1.png" alt="Frontity Ready to be copy pasted Components by Componentity.com"/></HoverLink>
          </Col>
        </Row>

        <br/>
        <br/>
        <FlexCenter>
          <HoverLink link="/support"><b>Support Us</b></HoverLink>
        </FlexCenter>

      </Container>
    </Clippy>
    <br/>
    <br/>
    <br/>
    </>
  );
};

export default connect(Home);

const Clippy = styled.div`
  @media (min-width: 570px){
    clip-path: polygon(50% 10%, 100% 0, 100% 100%, 50% 90%, 0 100%, 0 0);
  }
  width: 100%;
  background-color: #F9FAFB;
  position: relative;
  top: -50px;
  z-index: 1000;
`;

const RightToLeft = keyframes`
  0% {
    opacity: 0.5;
    transform: translateX(2000px) translateY(150px) scale(.5);
  }
  100% {
    opacity: 1;
    transform: translateX(0%) translateY(80%) scale(1.5);
    z-index: 1;
  }
`;
const LargeToSmall = keyframes`
  0% {
    opacity: 0 !important;
    transform: translateX(200px) scale(100);
  }
  100% {
    opacity: 1;
    transform: translateX(-15%) translateY(10%) scale(1.3);
  }
`;

// Add the animation to the styled component.
const Animate = styled.div`
  opacity: 0;
  margin-left: auto;
  margin-right: 0;
  &.RightToLeft {
    animation: ${RightToLeft} 1s linear;
    animation-delay: .5s;
    animation-fill-mode: forwards;
  }
  &.LargeToSmall {
    animation: ${LargeToSmall} 1s linear;
    animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  &.w-550 {
    width: 550px;
    height: auto;
    @media (max-width: 576px) {
      width: 200px !important;
    }
    img {
      border-radius: 3px;
      box-shadow: 0 0 20px #eee;
    }
  }
`;