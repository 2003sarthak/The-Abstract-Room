import React from "react";
import Homeimg1 from "../../homeimg/HomeImage1.png";
import redBannerImage from "../../homeimg/ChatBubbleRed.png";
import FilmBookStoryImg from "../../homeimg/FilmBookStoryImg.png";
import ArtLeftImg from "../../homeimg/Artleftimg.png";
import underlineImage from "../../homeimg/redLine.png";
import WhatWeDo1 from "../../homeimg/WhatWeDoImg.png";
import WhatWeDo2 from "../../homeimg/WhatWeDoImg2.png";
import Offline from "../../homeimg/offline.png";
import OfflineHead from "../../homeimg/OfflineHead.png";
import MembersExc from "../../homeimg/MembersExclusive.png";
import overwelmentChatBubble from "../../homeimg/overwelmentChatBubble.png";
import ChatBubbleYellowDown from "../../homeimg/ChatBubbleYellowDown.png";
import ChatbubbleBlue from "../../homeimg//homeStyle/ChatbubbleBlue.png";
import ChatbubbleleftYellow from "../../homeimg//homeStyle/ChatbubbleleftYellow.png";
import ChatbubbleRed from "../../homeimg//homeStyle/ChatbubbleRed.png";
import ChatbubblerightYellow from "../../homeimg//homeStyle/ChatbubblerightYellow.png";
import EventCarousel from "../../components/Carousal/EventCarousel";

import "./Home.css";
import Accordion from "../../components/Accordion/Accordion";
import PaymentCard from "../../components/PaymentCard/PaymentCard";
import ChatBubbleInfo from "../../components/ChatBubbleInfoHome/ChatBubbleInfo";

function Home() {
  return (
    <div className="home">
      <div className="home-main">
        <div className="left-text">
          <img src={FilmBookStoryImg} alt="FilmBookStoryImg" />
        </div>
        <div className="image-container">
          <img src={Homeimg1} alt="Community" className="main-image" />
          <div className="banner">
            <img src={redBannerImage} alt="Banner" className="banner-image" />
            <span className="banner-text">A community for conversations</span>
          </div>
        </div>
      </div>
      <div className="pause-for-art">
        <div className="art-img-component">
          <div className="art-text1">THE ABSTRACT ROOM</div>
          <div className="art-text2">Where we 'Pause For Art'</div>
          <img src={ArtLeftImg} alt="Banner" className="art-Img" />
        </div>
        <div className="underline-text-container">
          <img
            src={underlineImage}
            alt="Red Underline"
            className="underline-image"
          />
          <p className="text-content">
            The Abstract Room is a social community which organizes unique
            experiences around cinema, literature, and other forms of art.
            <br />
            <br />
            We have created an inclusive platform for people from several walks
            of life to come together, explore fascinating stories, and engage in
            spirited conversations around it.
          </p>
        </div>
      </div>
      <div className="carousel">
        <EventCarousel />
      </div>
      <div className="What-we-do">
        <div className="what-img-component">
          <div className="what-text1">WHAT WE DO</div>
          <img src={WhatWeDo1} alt="Banner" className="what-Img" />
        </div>
        <div className="Accordian-container">
          <Accordion
            title="FILM DISCUSSIONS"
            info="Quote dialogues, overthink plotlines, discuss every strand of your favorite films, whether regional or worldwide, classics, offbeat or recent hits!"
          />
          <Accordion
            title="FILM SCREENINGS"
            info="Experience film screenings with other film enthusiasts. Share the joy of cinema and discover new perspectives!"
          />
          <Accordion
            title="ABSTRACT CONVERSATIONS"
            info="Experience film screenings with other film enthusiasts. Share the joy of cinema and discover new perspectives!"
          />
          <Accordion
            title="BOOK OF THE MONTH"
            info="Experience film screenings with other film enthusiasts. Share the joy of cinema and discover new perspectives!"
          />
          <Accordion
            title="ARTIST OF THE MONTH"
            info="Experience film screenings with other film enthusiasts. Share the joy of cinema and discover new perspectives!"
          />
          <Accordion
            title="OPEN MIC AND STORY TELLER"
            info="Experience film screenings with other film enthusiasts. Share the joy of cinema and discover new perspectives!"
          />
        </div>
      </div>
      <div className="What-we-do2">
        <div className="Accordian-container">
          <div>
            <img src={MembersExc} alt="" />
          </div>
          <Accordion
            title="MEMBER MEETS"
            info="Quote dialogues, overthink plotlines, discuss every strand of your favorite films, whether regional or worldwide, classics, offbeat or recent hits!"
          />
          <Accordion
            title="AS ABSTRACT AS IT GET"
            info="Experience film screenings with other film enthusiasts. Share the joy of cinema and discover new perspectives!"
          />
          <Accordion
            title="JAMMING SEASONS"
            info="Experience film screenings with other film enthusiasts. Share the joy of cinema and discover new perspectives!"
          />
          <Accordion
            title="ARTIST OF THE MONTH"
            info="Experience film screenings with other film enthusiasts. Share the joy of cinema and discover new perspectives!"
          />
          <Accordion
            title="AND MORE"
            info="Experience film screenings with other film enthusiasts. Share the joy of cinema and discover new perspectives!"
          />
        </div>
        <div className="what-img-component">
          <img src={WhatWeDo2} alt="Banner" className="what-Img" />
        </div>
      </div>
      <div className="What-we-do">
        <div className="offline-accordian-container">
          <div>
            <img src={OfflineHead} alt="" className="offline-head-img" />
          </div>
          <Accordion
            title="MEMBER MEETS"
            info="Quote dialogues, overthink plotlines, discuss every strand of your favorite films, whether regional or worldwide, classics, offbeat or recent hits!"
          />
          <Accordion
            title="AS ABSTRACT AS IT GET"
            info="Experience film screenings with other film enthusiasts. Share the joy of cinema and discover new perspectives!"
          />
        </div>
        <div className="what-img-component">
          <img src={Offline} alt="Banner" className="offline-img" />
        </div>
      </div>
      <div className="image-container-down">
        <img
          src={overwelmentChatBubble}
          alt="Background"
          className="background-image"
        />
        <p className="centered-text">
          Overwhelmed? Oh, don’t you worry! We are just a bunch of curious,
          art-loving folks figuring out how to slow down in this busy world. We
          talk about films and literature, yes, but also learn recipes, know
          about your boss’s scandal, and also what sitcom goodies to get for
          your secret Santa!
        </p>
      </div>
      <div className="membership-page">
        <h1>BECOME AN ABSTRACT MEMBER TODAY</h1>
        <p className="intro-text">
          Get access to our exclusive events, discuss your favourite stories
          with art lovers from around the world, and become a part of a
          beautiful community that allows you to explore, express, and grow!
        </p>

        <div className="cards-container">
          <PaymentCard
            planType="MONTHLY"
            price="300"
            joinText="JOIN NOW"
            isPopular={false}
          />
          <PaymentCard
            planType="QUARTERLY"
            price="850"
            joinText="JOIN NOW"
            isPopular={true}
            popularText="Most Popular"
          />
          <PaymentCard
            planType="HALF YEARLY"
            price="1700"
            joinText="JOIN NOW"
            isPopular={false}
          />
        </div>
        <div className="card-bottom">
          <p className="note-text">
            Note: Membership perks are available exclusively for our online
            community.
          </p>

          <div className="more-info">
            <img src={ChatBubbleYellowDown} alt="Know More" />
            <span className="more-info-text">
              KNOW MORE ABOUT OUR MEMBERSHIP{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="chat-bubbles">
        <ChatBubbleInfo
          position="top-left"
          backgroundImage={ChatbubblerightYellow}
          text="People Connected: 3100+"
          textColor="#333"
        />
        <ChatBubbleInfo
          position="top-right"
          backgroundImage={ChatbubbleRed}
          text="Online Experiences: 360+"
          textColor="#fff"
        />
        <ChatBubbleInfo
          position="bottom-left"
          backgroundImage={ChatbubbleBlue}
          text="Members: 400+"
          textColor="#fff"
        />
        <ChatBubbleInfo
          position="bottom-right"
          backgroundImage={ChatbubbleleftYellow}
          text="Offline Experiences: 30+"
          textColor="#333"
        />
      </div>
      <div className="sessions">
        <p>HAVE A LOOK AT OUR SESSIONS</p>
        <div className="sessions-videos"></div>
      </div>
      <div className="sessions">
        <p>CHECK OUT OUR INSTAGRAM</p>
        <div className="sessions-videos"></div>
      </div>
    </div>
  );
}

export default Home;
