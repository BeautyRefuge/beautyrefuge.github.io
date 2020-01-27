import React from 'react';

const items = [
  {
    name: 'Liz S.',
    location: 'Bolingbrook, IL',
    review: `Not only is Raquel an accomplished stylist, but also a genuine person. Her technique
      is flawless and the results speak for themselves. I rarely fully trust anyone with my
      hair, but in her chair I am at complete ease. She completely exceeds all expectations
      when it comes to new styles and beauty!!`,
  },
  {
    name: 'Elizabeth F.',
    location: 'Naperville, IL',
    review: `Raquel is talented at visualizing the perfect design and skilled at knowing how to
      carry that out. Not only that but she is dedicated to her work, putting in extra
      time to make sure she and her clients are satisfied. I keep her business cards on
      me because I get so many compliments on my hair.`,
  },
  {
    name: 'Rachel M.',
    location: 'Naperville, IL',
    review: `I have been blessed to have Raquel as a hair stylist for a couple years now. She is
      definitely worth the drive to see her. I have had multiple colors done from red, pink,
      purple and other much more natural shades. She always does a phenomenal job! Prices
      are great for the amazing work she offers.`,
  },
  {
    name: 'Elizabeth M.',
    location: 'La Grange, IL',
    review: `I have gone to many different hair dressers, and at first I start to think, I found
    my hair dresser only to be seriously disappointed! Until I met Raquel and truly found
    the only person that will be touching my hair for the rest of my life, she is nothing
    short of genius!!!!!`,
  },
  {
    name: 'Sarah A.',
    location: 'Romeoville, IL',
    review: `Hands down the best hairdresser, or should I say, hair scientist! She goes above
      and beyond with her clients. I came to her with a huge mess, I'm talking orange hair!
      And when she was finished, my hair looked amazing! The blonde looked natural. She is
      reasonably priced and didn't damage my hair from all the corrections she did to it!`,
  },
];

const Reviews = () => {
  const reviews = items.map((item, i) => {
    return (
      <div className="mb-10">
      <blockquote key={i}
        className="relative p-4 border-l-4 text-lg leading-relaxed lg:text-xl">
        <p className="mb-2">&#8220;{item.review}&#8221;</p>
        <p className="my-3 lg:my-5">
          {item.name}<br />
          {item.location}
        </p>
      </blockquote>
      </div>
    )
  })

  return (
    <div className="mt-10 lg:mt-20">
      <h2 className="font-heading font-light text-3xl my-6 text-coolgray">Client Reviews</h2>
      {reviews}
    </div>
  )
}

export default Reviews;
