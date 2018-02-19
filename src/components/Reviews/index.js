import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

import './index.css';

const items = [
  {
    key: 1,
    name: 'Liz S.',
    location: 'Bolingbrook, IL',
    review: `Not only is Raquel an accomplished stylist, but also a genuine person. Her technique
      is flawless and the results speak for themselves. I rarely fully trust anyone with my
      hair, but in her chair I am at complete ease. She completely exceeds all expectations
      when it comes to new styles and beauty!!`,
  },
  {
    key: 2,
    name: 'Elizabeth F.',
    location: 'Naperville, IL',
    review: `Raquel is talented at visualizing the perfect design and skilled at knowing how to
      carry that out. Not only that but she is dedicated to her work, putting in extra
      time to make sure she and her clients are satisfied. I keep her business cards on
      me because I get so many compliments on my hair.`,
  },
  {
    key: 3,
    name: 'Rachel M.',
    location: 'Naperville, IL',
    review: `I have been blessed to have Raquel as a hair stylist for a couple years now. She is
      definitely worth the drive to see her. I have had multiple colors done from red, pink,
      purple and other much more natural shades. She always does a phenomenal job! Prices
      are great for the amazing work she offers.`,
  },
  {
    key: 4,
    name: 'Elizabeth M.',
    location: 'La Grange, IL',
    review: `I have gone to many different hair dressers, and at first I start to think, I found
    my hair dresser only to be seriously disappointed! Until I met Raquel and truly found
    the only person that will be touching my hair for the rest of my life, she is nothing
    short of genius!!!!!`,
  },
  {
    key: 5,
    name: 'Sarah A.',
    location: 'Romeoville, IL',
    review: `Hands down the best hairdresser, or should I say, hair scientist! She goes above
      and beyond with her clients. I came to her with a huge mess, I'm talking orange hair!
      And when she was finished, my hair looked amazing! The blonde looked natural. She is
      reasonably priced and didn't damage my hair from all the corrections she did to it!`,
  },
];

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.key}
        >
          <div className="review">
            <p>
              {item.name}
              <br />
              {item.location}
            </p>

            <blockquote>
              <p>{item.review}</p>
            </blockquote>
          </div>
        </CarouselItem>
      );
    });

    return (
      <div>
        <h2>Client Reviews</h2>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          pause="hover"
          interval={false}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </div>
    );
  }
}

export default Reviews;
