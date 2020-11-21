import * as React from 'react';
import { ContactWrapper } from '../components/contactWrapper';

import './index.scss';

export interface IHomeProps {

}

export const Home = (props: IHomeProps) => {

  const calculateClipAmount = () => {
    return Math.max(0, window.scrollY - (window.innerHeight * 0.25));
  }

  const [clipAmount, setClipAmount] = React.useState<number>(calculateClipAmount());

  React.useEffect(() => {

    const onScroll = () => {
      setClipAmount(calculateClipAmount());
    }

    window.addEventListener('scroll', onScroll);

    // cleanup this component
    return () => {
      window.removeEventListener('keydown', onScroll);
    };
  }, []);

  return <div className="home-container">
    <div className="home-header">
      <div className="home-header-image">
        <div className="home-header-image-bumper" />
        <div className="home-header-image-wrapper">
          <div className="home-header-image-content" style={{ clipPath: `circle(${Math.max(0, 200 - clipAmount)}px at center)`}} />
        </div>
        <div className="home-header-image-bumper" />
      </div>
      <div className="home-header-spacer" />
      <div className="home-header-welcome">
        <h1>Hi, I'm David Kendall</h1>
      </div>
    </div>
    <ContactWrapper>
      <div className="intro">
        <div className="intro-content">
        I am a proficient, hardworking and loyal person with 7 years of commercial experience. I aim to develop efficient, clean and easily maintainable code primarily in the C# language. I also expand this philosophy to any new languages I may be exposed to. I am interested in learning new technologies outside of work, which has led to my recent roles at MixRadio and REPL Group through the self learning of Windows application development and Xamarin.
        </div>
      </div>
    </ContactWrapper>
  </div>
}