import type { Content } from '@domain/types';
import { IMAGES } from '@images/images';
import { getImage } from 'astro:assets';

const content: Content = {
  heroDescription:
    ' We, the members of the Polish Scala Community, are a group of passionate programmers united by our love for the Scala programming language. As a community, we strive to promote the use and understanding of Scala and to create a supportive and inclusive space where Scala programmers can come together to learn, share, and grow.',
  introductionText:
    'As one of the top three countries for Scala development (according to the Scala Developer Survey 2022), we have accomplished a great deal. However, if you believe there is something missing from the list below, please consider submitting a pull request to help us improve.',

  learningMaterials: [
    {
      title: 'Iterators blog',
      link: 'https://www.iteratorshq.com/blog/category/tech-blog/',
    },
    {
      title: 'Iterators blog',
      link: 'https://www.iteratorshq.com/blog/category/tech-blog/',
    },
    {
      title: 'Iterators blog',
      link: 'https://www.iteratorshq.com/blog/category/tech-blog/',
    },
    {
      title: 'Iterators blog',
      link: 'https://www.iteratorshq.com/blog/category/tech-blog/',
    },
    {
      title: 'Iterators blog',
      link: 'https://www.iteratorshq.com/blog/category/tech-blog/',
    },
    {
      title: 'Iterators blog',
      link: 'https://www.iteratorshq.com/blog/category/tech-blog/',
    },
  ],

  companiesUsingScala: [
    {
      title: 'Iterators',
      description:
        "Iterators - Iterators - our vision is to create an agile environment where the spark of the client's idea is flamed by the most impactfulIterators - our vision is to create an agile environment where the spark of the client's idea is flamed by the most impactful our vision is to create an agile environment where the spark of the client's idea is flamed by the most impactful solutions – fast, transparent, and sustainable. We're hiring Scala engineers on all levels, even complete beginners!",
      tags: ['#Warsaw', '#product'],
    },
    {
      image: IMAGES.iterators,
      title: 'Iterators',
      description:
        "Iterators - our vision is to create an agile environment where the spark of the client's idea is flamed by the most impactful solutions – fast, transparent, and sustainable. We're hiring Scala engineers on all levels, even complete beginners!",
      tags: ['#Warsaw', '#remote', '#product'],
    },
    {
      image: IMAGES.netguru,
      title: 'Iterators',
      description:
        "Iterators - our vision is to create an agile environment where the spark of the client's idea is flamed by the most impactful solutions – fast, transparent, and sustainable. We're hiring Scala engineers on all levels, even complete beginners!",
      tags: ['#Łódź', '#Warsaw', '#remote'],
    },
    {
      image: IMAGES.allegro,
      title: 'Iterators',
      description:
        "Iterators - our vision is to create an agile environment where the spark of the client's idea is flamed by the most impactful solutions – fast, transparent, and sustainable. We're hiring Scala engineers on all levels, even complete beginners!",
      tags: ['#Poznan', '#Remote'],
    },
    {
      image: 'https://cdn.pixabay.com/photo/2021/05/15/04/12/eggs-6254861_1280.jpg',
      title: 'Iterators',
      description:
        "Iterators - our vision is to create an agile environment where the spark of the client's idea is flamed by the most impactful solutions – fast, transparent, and sustainable. We're hiring Scala engineers on all levels, even complete beginners!",
      tags: ['#Remote', '#Krakow'],
    },
    {
      title: 'Iterators',
      description:
        "Iterators - our vision is to create an agile environment where the spark of the client's idea is flamed by the most impactful solutions – fast, transparent, and sustainable. We're hiring Scala engineers on all levels, even complete beginners!",
      tags: ['#Warsaw', '#Remote', '#Krakow'],
    },
  ],

  meetupGroups: [
    {
      image: 'https://cdn.pixabay.com/photo/2021/05/15/04/12/eggs-6254861_1280.jpg',
      title: 'Wroclaw Scala User Group',
      link: 'https://www.iteratorshq.com/blog/category...',
    },
    {
      image: IMAGES.netguruLogo,
      title: 'Wroclaw Scala User Group',
      link: 'https://www.iteratorshq.com/blog/category...',
    },
    {
      image: IMAGES.netguruLogo,
      title: 'Wroclaw Scala User Group',
      link: 'https://www.iteratorshq.com/blog/category...',
    },
    {
      image: IMAGES.netguruLogo,
      title: 'Wroclaw Scala User Group',
      link: 'https://www.iteratorshq.com/blog/category...',
    },
    {
      image: IMAGES.netguruLogo,
      title: 'Wroclaw Scala User Group',
      link: 'https://www.iteratorshq.com/blog/category...',
    },
    {
      image: IMAGES.netguruLogo,
      title: 'Wroclaw Scala User Group',
      link: 'https://www.iteratorshq.com/blog/category...',
    },
    {
      image: IMAGES.netguruLogo,
      title: 'Wroclaw Scala User Group',
      link: 'https://www.iteratorshq.com/blog/category...',
    },
    {
      image: IMAGES.netguruLogo,
      title: 'Wroclaw Scala User Group',
      link: 'https://www.iteratorshq.com/blog/category...',
    },
  ],

  conferences: [
    {
      title: 'Scala Conference',
      description:
        'Get ready for two days of immersive functional programming experience with the great community. Learn from established IT experts and practitioners, and meet like-minded individuals in your field. Get ready for two days of immersive functional programming experience with the great community. Learn from established IT experts and practitioners, and meeAll Scalarians will tell you that the connections you can make at the conference are one of the most valuable aspects of attending Scalar. Join us, exchange ideas, and make friends! All of these while getting to know functional programming trends and use cases.Get ready for two days of immersive functional programming and meet like-minded individuals in your field. Get ready for two days of immersive functional programming experience with the great community. Learn from established IT experts and practitioners, and meeAll Scalarians will tell you that the connections you can make at the conference are one of the most valuable aspects of attending Scalar. Join us, exchange ideas, and make friends! All of these while getting to know functional programming trends and use cases.Get ready for two days of immersive functional programming experience with the great community. Learn from established IT experts and practitioners, andexperience with the great community. Learn from established IT experts and practitioners, and mee',
      image: IMAGES.scalaConference,
    },
    {
      title: 'Lambda Days',
      description:
        "10th-anniversary edition! Let's celebrate together this one-of-a-kind experience in the functional world.",
      image: IMAGES.lambdaDays,
    },
    {
      title: 'Lambda Days',
      description:
        "10th-anniversary edition! Let's celebrate together this one-of-a-kind experience in the functional world.",
      image: IMAGES.lambdaDays,
    },
    {
      title: 'Lambda Days',
      description:
        "10th-anniversary edition! Let's celebrate together this one-of-a-kind experience in the functional world.",
      image: 'https://cdn.pixabay.com/photo/2021/05/15/04/12/eggs-6254861_1280.jpg',
    },
  ],
};
export default content;
