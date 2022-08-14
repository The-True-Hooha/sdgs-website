import { LinkType, MenuListType } from '../model/LinkListType';

export const menuLinks: MenuListType[] = [
  {
    id: 1,
    label: 'Who we are',
    imgUrl: '/assets/images/mama-plantain.jpeg',
    subMenu: [
      {
        id: 1.1,
        label: 'About us',
        urlTarget: '_self',
        url: 'about-us',
        useCMSPage: false,
        cssClasses: '',
        links: [
          {
            id: 1.11,
            label: 'Frequently Asked Questions',
            urlTarget: '_self',
            url: 'faqs',
            cssClasses: '',
            useCMSPage: false,
          },
        ],
      },
      {
        id: 1.2,
        label: 'Leadership',
        urlTarget: '_self',
        url: 'leadership',
        useCMSPage: false,
        cssClasses: '',
        links: [
          {
            id: 1.21,
            label: 'Organization Chart',
            urlTarget: '_self',
            url: 'organization-chart',
            cssClasses: '',
            useCMSPage: false,
          },
          {
            id: 1.22,
            label: 'Past Administrator',
            urlTarget: '_self',
            url: 'past-administrator',
            cssClasses: '',
            useCMSPage: false,
          },
        ],
      },
      {
        id: 1.3,
        label: 'Funding',
        urlTarget: '_self',
        url: 'funding',
        useCMSPage: false,
        cssClasses: '',
        links: [
          {
            id: 1.31,
            label: 'Top Contributors',
            urlTarget: '_self',
            url: 'top-contributor',
            cssClasses: '',
            useCMSPage: false,
          },
          {
            id: 1.32,
            label: 'Structured resources contributors',
            urlTarget: '_self',
            url: 'structured-resources-contributors',
            cssClasses: '',
            useCMSPage: false,
          },
          {
            id: 1.33,
            label: 'Funding windows',
            urlTarget: '_self',
            url: 'funding-windows',
            cssClasses: '',
            useCMSPage: false,
          },
          {
            id: 1.34,
            label: 'Regular respurces contributors',
            urlTarget: '_self',
            url: 'regular-respurces-contributors',
            cssClasses: '',
            useCMSPage: false,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'What we Do',
    imgUrl: '/assets/images/oil-rig.jpeg',
    subMenu: [
      {
        id: 2.1,
        label: 'Sustainable Development Goals',
        urlTarget: '_self',
        url: 'sdgs',
        links: [],
        useCMSPage: false,
        cssClasses: '',
      },
      {
        id: 2.2,
        label: 'Human Development Report',
        urlTarget: '_self',
        url: 'hdr',
        links: [],
        useCMSPage: false,
        cssClasses: '',
      },
      {
        id: 2.3,
        label: 'Development Challenged and Solutions',
        urlTarget: '_self',
        url: 'dcs',
        links: [],
        useCMSPage: false,
        cssClasses: '',
      },
      {
        id: 2.4,
        label: 'Strategic initiatives',
        urlTarget: '_self',
        url: 'strategic-initiatives',
        links: [],
        useCMSPage: false,
        cssClasses: '',
      },
      {
        id: 2.5,
        label: 'Our expertise',
        urlTarget: '_self',
        url: 'our-expertise',
        links: [],
        useCMSPage: false,
        cssClasses: '',
      },
    ],
  },
  {
    id: 3,
    label: 'Our Impact',
    imgUrl: '/assets/images/medical.jpeg',
    subMenu: [
      {
        id: 3.1,
        label: 'News Centre',
        urlTarget: '_self',
        url: 'news-centre',
        useCMSPage: false,
        cssClasses: '',
        links: [
          {
            id: 3.11,
            label: 'Media contacts',
            urlTarget: '_self',
            url: 'media-contacts',
            cssClasses: '',
            useCMSPage: false,
          },
        ],
      },
      {
        id: 3.2,
        label: 'Results',
        urlTarget: '_self',
        url: 'results',
        links: [],
        useCMSPage: false,
        cssClasses: '',
      },
      {
        id: 3.3,
        label: 'Publications',
        urlTarget: '_self',
        url: 'publication',
        links: [],
        useCMSPage: false,
        cssClasses: '',
      },
      {
        id: 3.4,
        label: 'Blogs',
        urlTarget: '_self',
        url: 'blog',
        links: [],
        useCMSPage: false,
        cssClasses: '',
      },
      {
        id: 3.5,
        label: 'Stories',
        urlTarget: '_self',
        url: 'stories',
        links: [],
        useCMSPage: false,
        cssClasses: '',
      },
      {
        id: 3.6,
        label: 'Photo library',
        urlTarget: '_self',
        url: 'photo-library',
        links: [],
        useCMSPage: false,
        cssClasses: '',
      },
    ],
  },
  {
    id: 4,
    label: 'Get Involved',
    imgUrl: '/assets/images/agric-engr.jpeg',
    subMenu: [
      {
        id: 4.1,
        label: 'Contact us',
        urlTarget: '_self',
        url: 'contact-us',
        links: [],
        useCMSPage: false,
        cssClasses: '',
      },
      {
        id: 4.2,
        label: 'Careers',
        urlTarget: '_self',
        url: 'careers',
        links: [],
        useCMSPage: true,
        cssClasses: '',
      },
    ],
  },
];

export const getCMSPage = (): LinkType[] => {
  //infinitly flat the array
  return [
    menuLinks
      .map((v) =>
        v.subMenu
          .filter((f) => f.useCMSPage)
          .map((g) => ({
            id: g.id,
            label: g.label,
            urlTarget: g.urlTarget,
            url: g.url,
            cssClasses: '',
            useCMSPage: g.useCMSPage,
          }))
      )
      .filter((q) => q.length > 0),
    menuLinks
      .map((v) =>
        v.subMenu
          .map((q) => q.links.filter((g) => g.useCMSPage))
          .filter((r) => r.length > 0)
      )
      .filter((q) => q.length > 0),
  ].flat(Infinity) as LinkType[];
};

export const getPageDataBySlug = (slug: string): LinkType | null => {
  return getCMSPage().find((v) => v.url === slug) || null;
};
