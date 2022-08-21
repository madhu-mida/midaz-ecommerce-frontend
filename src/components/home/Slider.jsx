/* import AutoplaySlider from 'react-awesome-slider/hoc/autoplay';
//import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fold-out-animation.scss';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles'; */
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import i1 from "./slider-images/i1.jpeg";
import i2 from "./slider-images/i2.jpeg";
import i3 from "./slider-images/i3.jpeg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
    return (<AutoplaySlider
        style={{ height: '370px' }}
        play={true}
        cancelOnInteraction={false}
        interval={3000}
    //cssModule={AwesomeSliderStyles}
    >
        <div data-src={i1} />
        <div data-src={i2} />
        <div data-src={i3} />
        {/* <div data-src="/path/to/image-2.jpg" />
        <div data-src="/path/to/image-3.jpg" /> */}
    </AutoplaySlider>
    );
}

export default Slider;