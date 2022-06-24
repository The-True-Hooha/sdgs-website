import { MenuListType } from '../model/LinkListType';

export const menuLinks: MenuListType[] = [
  {
    id: 1,
    label: 'Who we are',
    subMenu: [
      {
        id: 1.1,
        label: 'About us',
        urlTarget: '_self',
        url: 'about-us',
        links: [
          {
            id: 1.11,
            label: 'Frequently Asked Questions',
            urlTarget: '_self',
            url: 'faqs',
            cssClasses: '',
          },
        ],
      },
      {
        id: 1.2,
        label: 'Leadership',
        urlTarget: '_self',
        url: 'leadership',
        links: [
          {
            id: 1.21,
            label: 'Organization Chart',
            urlTarget: '_self',
            url: 'organization-chart',
            cssClasses: '',
          },
          {
            id: 1.22,
            label: 'Past Administrator',
            urlTarget: '_self',
            url: 'past-administrator',
            cssClasses: '',
          },
        ],
      },
      {
        id: 1.3,
        label: 'Funding',
        urlTarget: '_self',
        url: 'funding',
        links: [
          {
            id: 1.31,
            label: 'Top Contributors',
            urlTarget: '_self',
            url: 'top-contributor',
            cssClasses: '',
          },
          {
            id: 1.32,
            label: 'Structured resources contributors',
            urlTarget: '_self',
            url: 'structured-resources-contributors',
            cssClasses: '',
          },
          {
            id: 1.33,
            label: 'Funding windows',
            urlTarget: '_self',
            url: 'funding-windows',
            cssClasses: '',
          },
          {
            id: 1.34,
            label: 'Regular respurces contributors',
            urlTarget: '_self',
            url: 'regular-respurces-contributors',
            cssClasses: '',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'What we Do',
    subMenu: [
      {
        id: 2.1,
        label: 'Sustainable Development Goals',
        urlTarget: '_self',
        url: 'sdgs',
        links: [],
      },
      {
        id: 2.2,
        label: 'Human Development Report',
        urlTarget: '_self',
        url: 'hdr',
        links: [],
      },
      {
        id: 2.3,
        label: 'Development Challenged and Solutions',
        urlTarget: '_self',
        url: 'dcs',
        links: [],
      },
      {
        id: 2.4,
        label: 'Strategic initiatives',
        urlTarget: '_self',
        url: 'strategic-initiatives',
        links: [],
      },
      {
        id: 2.5,
        label: 'Our expertise',
        urlTarget: '_self',
        url: 'our-expertise',
        links: [],
      },
    ],
  },
  {
    id: 3,
    label: 'Our Impact',
    subMenu: [
      {
        id: 3.1,
        label: 'News Centre',
        urlTarget: '_self',
        url: 'news-centre',
        links: [
          {
            id: 3.11,
            label: 'Media contacts',
            urlTarget: '_self',
            url: 'media-contacts',
            cssClasses: '',
          },
        ],
      },
      {
        id: 3.2,
        label: 'Results',
        urlTarget: '_self',
        url: 'results',
        links: [],
      },
      {
        id: 3.3,
        label: 'Publications',
        urlTarget: '_self',
        url: 'publication',
        links: [],
      },
      {
        id: 3.4,
        label: 'Blogs',
        urlTarget: '_self',
        url: 'blog',
        links: [],
      },
      {
        id: 3.5,
        label: 'Stories',
        urlTarget: '_self',
        url: 'stories',
        links: [],
      },
      {
        id: 3.6,
        label: 'Photo library',
        urlTarget: '_self',
        url: 'photo-library',
        links: [],
      },
    ],
  },
  {
    id: 4,
    label: 'Get Involved',
    subMenu: [
      {
        id: 4.1,
        label: 'Contact us',
        urlTarget: '_self',
        url: 'contact-us',
        links: [],
      },
      {
        id: 4.2,
        label: 'Careers',
        urlTarget: '_self',
        url: 'careers',
        links: [],
      },
    ],
  },
];
