import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, GridContainer, Img} from './HeroStyles';




const Hero = (props) => (
  <>
    <Section column nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi! I'm Tarek
          <br />
    <GridContainer>
    <Img
      src="/images/profile.jpg"
      alt="Picture of the author"
    />
    </GridContainer>
          Welcome To <br />
          My Personal Portfolio<br />
        </SectionTitle>
        <SectionText>
        To seek and maintain a full-time position that offers professional challenges utilizing interpersonal skills, excellent time management and problem-solving skills.
        </SectionText>
        <Button>
        <a onClick={() => window.open("https://drive.google.com/file/d/1I_k-OsMGOIjOvjWXEThyyEn1HQRGVJ_v/view", "Popup","toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30")} alt=''src='https://drive.google.com/file/d/1I_k-OsMGOIjOvjWXEThyyEn1HQRGVJ_v/view'>
           Preview My Resume
        </a>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
