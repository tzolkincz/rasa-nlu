// @ts-check

const configure = require('@rasahq/docusaurus-tabula/configure');

module.exports = configure({
  /**
   * site
   */
  title: 'Rasa Open Source',
  tagline: 'An open source machine learning framework for automated text and voice-based conversations',
  projectName: 'rasa',
  /**
   * presets
   */
  openApiSpecs: [
    {
      id: 'rasa-http-api',
      specPath: '/spec/rasa.yml',
      pagePath: '/pages/http-api/',
    },
  ],
  /**
   * plugins
   */

  /**
   * themes
   */
  productLogo: '/img/logo-rasa-oss.png',
  legacyVersions: [
    {
      label: 'Legacy 1.x',
      href: 'https://legacy-docs-v1.rasa.com',
      target: '_blank',
      rel: 'nofollow noopener noreferrer',
    },
  ],
  announcementBar: {
    id: 'pre_release_notice', // Any value that will identify this message.
    content:
      'These docs are for version 3.x of Rasa Open Source. <a href="https://rasa.com/docs/rasa/2.x/">Docs for the 2.x series can be found here.</a>',
    backgroundColor: '#6200F5', // Defaults to `#fff`.
    textColor: '#fff', // Defaults to `#000`.
  },
});
