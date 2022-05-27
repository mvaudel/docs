const prefixer = require('postcss-prefix-selector');

module.exports = {
  // https://v1.vuepress.vuejs.org/config/#title
  // disabled when using logo
  title: null,
  // https://v1.vuepress.vuejs.org/config/#description
  description: "HUNT Cloud Documentation",
  // https://v1.vuepress.vuejs.org/config/#dest
  dest: "build",
  // https://v1.vuepress.vuejs.org/config/#base
  base: "/",
  // https://v1.vuepress.vuejs.org/config/#head
  head: [
    [
      "link",
      {
        rel: "shortcut icon",
        href: "https://www.ntnu.no/assets/images/favicon.ico"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons",
      },
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#00509e"
      }
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      }
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black"
      }
    ]
  ],
  // https://v1.vuepress.vuejs.org/theme/default-theme-config.html
  themeConfig: {
    // https://v1.vuepress.vuejs.org/theme/default-theme-config.html#git-repo-and-edit-links
    repo: "https://github.com/huntdatacenter/docs",
    repoLabel: "Contribute!",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    lastUpdated: true,
    // https://vuepress.vuejs.org/theme/default-theme-config.html#navbar-logo
    logo: "/img/hunt-cloud-logo.svg",
    // https://v1.vuepress.vuejs.org/theme/default-theme-config.html#navbar
    // TODO remove nav key in vuepress 2
    nav: [{
        text: "Home",
        link: "/"
      },
      {
        text: "Getting started",
        link: "/getting-started/"
      }
    ],
    navbar: [{
        text: "Home",
        link: "/"
      },
      {
        text: "Getting started",
        link: "/getting-started/"
      }
    ],
    // https://v1.vuepress.vuejs.org/theme/default-theme-config.html#sidebar
    sidebar: {
      "/": [{
          title: "Home",
          collapsable: false,
          text: "Home",
          isGroup: true,
          children: ["/",
            "/system-status.md",
            "/contribute.md",
            "/contact.md",
          ]
        },
        {
          title: "About",
          text: "About",
          isGroup: true,
          children: [
            "/about/vision.md",
            "/about/team.md",
            "/about/activities.md",
            "/about/affiliation.md",
          ]
        },
        {
          title: "Governance",
          text: "Governance",
          isGroup: true,
          children: [
            "/governance/",
            "/governance/tingweek.md",
            "/governance/lagtun.md",
            "/governance/resolutions.md",
            "/governance/policies.md",
            "/governance/certificates.md",
            "/governance/subcontractors.md",
            "/governance/responsibilities.md",
          ]
        },
        {
          title: "Coordination",
          text: "Coordination",
          isGroup: true,
          children: [
            "/coordination/",
            "/coordination/services-model.md",
            {
              title: "Get going",
              text: "Get going",
              isGroup: true,
              children: [
                "/coordination/get-going/",
                "/coordination/get-going/data-controller.md",
                "/coordination/get-going/service-center.md",
                "/coordination/get-going/data-space.md",
                "/coordination/get-going/lab.md",
              ]
            },
            {
              title: "Agreements",
              text: "Agreements",
              isGroup: true,
              children: [
                "/coordination/agreements/overview.md",
                "/coordination/agreements/downloads.md",
                "/coordination/agreements/faq.md",
              ]
            },
            {
              title: "Services",
              text: "Services",
              isGroup: true,
              children: [
                "/coordination/services/overview.md",
                "/coordination/services/specifications.md",
                "/coordination/services/machine-types.md",
                "/coordination/services/responsiveness.md",
              ]
             },
            {
              title: "Prices",
              text: "Prices",
              isGroup: true,
              children: [
                "/coordination/prices/",
                "/coordination/prices/pricelist.md",
                "/coordination/prices/calculator.md",
                "/coordination/prices/examples.md",
                "/coordination/prices/faq.md",
              ]
             },
            {
              title: "Risk",
              text: "Risk",
              isGroup: true,
              children: [
                "/coordination/risk/",
                "/coordination/risk/resources.md",
                "/coordination/risk/faq.md",
              ]
             },
            {
              title: "Data",
              text: "Data",
              isGroup: true,
              children: [
                "/coordination/data/",
                "/coordination/data/faq.md",
              ]
             },
            "/coordination/roles.md",
            "/coordination/faq.md",
           ]
        },
        {
          title: "Getting started",
          text: "Getting started",
          isGroup: true,
          children: [
            "/getting-started/",
            "/getting-started/1-collect-keys.md",
            "/getting-started/2-configure-vpn.md",
            "/getting-started/3-configure-ssh.md",
          ]
        },
        {
          title: "Working in your lab",
          text: "Working in your lab",
          isGroup: true,
          children: [
            "/working-in-your-lab/",
            "/working-in-your-lab/community.md",
            {
              title: "Workbench",
              text: "Workbench",
              isGroup: true,
              children: [
                "/working-in-your-lab/workbench/",
                "/working-in-your-lab/workbench/installation.md",
                "/working-in-your-lab/workbench/principles.md",
                "/working-in-your-lab/workbench/faq.md",
                "/working-in-your-lab/workbench/troubleshooting.md",
              ]
            },
            {
              title: "Technical tools",
              text: "Technical tools",
              isGroup: true,
              children: [
                "/working-in-your-lab/technical-tools/",
                "/working-in-your-lab/technical-tools/git.md",
                "/working-in-your-lab/technical-tools/gpu.md",
                "/working-in-your-lab/technical-tools/htop.md",
                "/working-in-your-lab/technical-tools/mobaxterm.md",
                "/working-in-your-lab/technical-tools/ncdu.md",
                "/working-in-your-lab/technical-tools/singularity.md",
                "/working-in-your-lab/technical-tools/terminal-multiplexers.md",
                "/working-in-your-lab/technical-tools/x2go.md",
                "/working-in-your-lab/technical-tools/vnc.md",
                "/working-in-your-lab/technical-tools/client-certificate.md",
              ]
            },
            {
              title: "Analytical tools",
              text: "Analytical tools",
              isGroup: true,
              children: [
                "/working-in-your-lab/analytical-tools/",
                "/working-in-your-lab/analytical-tools/bluebox.md",
                "/working-in-your-lab/analytical-tools/conda.md",
                "/working-in-your-lab/analytical-tools/epacts.md",
                "/working-in-your-lab/analytical-tools/fsl.md",
                "/working-in-your-lab/analytical-tools/freesurfer.md",
                "/working-in-your-lab/analytical-tools/jupyter-lab.md",
                "/working-in-your-lab/analytical-tools/matlab.md",
                "/working-in-your-lab/analytical-tools/plink.md",
                "/working-in-your-lab/analytical-tools/pycharm.md",
                "/working-in-your-lab/analytical-tools/r-studio.md",
                "/working-in-your-lab/analytical-tools/regenie.md",
                "/working-in-your-lab/analytical-tools/saige.md",
                "/working-in-your-lab/analytical-tools/spyder-ide.md",
                "/working-in-your-lab/analytical-tools/stata.md",
              ]
            },
            {
              title: "Transfer tools",
              text: "Transfer tools",
              isGroup: true,
              children: [
                "/working-in-your-lab/transfer-tools/",
                "/working-in-your-lab/transfer-tools/7z.md",
                "/working-in-your-lab/transfer-tools/lftp.md",
                "/working-in-your-lab/transfer-tools/rsync.md",
                "/working-in-your-lab/transfer-tools/sshfs.md",
                "/working-in-your-lab/transfer-tools/winscp.md",
              ]
            },
            {
              title: "Guides",
              text: "Guides",
              isGroup: true,
              children: [
                "/working-in-your-lab/guides/workbench-stata.md"
              ],
            },
          ]
        },
        {
          title: "Data transfers",
          text: "Data transfers",
          isGroup: true,
          children: [
            "/data-transfers/",
            "/data-transfers/internal-kista.md",
            "/data-transfers/external-kista.md",
          ],
        },
        {
          title: "Service desk",
          text: "Service desk",
          isGroup: true,
          children: [
            "/service-desk/",
            "/service-desk/user-orders.md",
            "/service-desk/lab-orders.md",
            "/service-desk/data-space-orders.md",
            "/service-desk/service-center-orders.md",
            "/service-desk/data-controller-orders.md",
            {
              title: "Access guides",
              text: "Access guides",
              isGroup: true,
              children: [
                "/service-desk/access-guides/reset-gauth.md",
                "/service-desk/access-guides/reset-ssh.md",
                "/service-desk/access-guides/reset-vpn.md",
                "/service-desk/access-guides/workbench-reissue.md",
                "/service-desk/access-guides/workbench-request.md",
              ],
            },
          ]
        },
        {
          title: "Troubleshooting",
          text: "Troubleshooting",
          isGroup: true,
          children: [
            "/troubleshooting/",
            "/troubleshooting/connection.md",
            "/troubleshooting/lab-activities.md",
            "/troubleshooting/labreports.md",
          ],
        },
        {
          title: "FAQ",
          text: "FAQ",
          isGroup: true,
          children: [
            "/faq/",
            "/faq/users.md",
            "/faq/storage.md",
            "/faq/compute.md",
            "/faq/internal-transfer.md",
            "/faq/external-transfer.md",
            "/faq/security.md",
          ]
        }
      ]
    }
  },
  chainWebpack: (config) => {
    config.module.rule("images").use("url-loader").options({
      limit: 10000,
      esModule: false,
      name: `assets/img/[name].[hash:8].[ext]`,
    });
    // Patch for Vuetify CSS conflict: https://github.com/vuetifyjs/vuetify/issues/8530#issuecomment-680942337
    const sassRule = config.module.rule('sass');
    const sassNormalRule = sassRule.oneOfs.get('normal');
    // creating a new rule
    const vuetifyRule = sassRule.oneOf('vuetify').test(/[\\/]vuetify[\\/]src[\\/]/);
    // taking all uses from the normal rule and adding them to the new rule
    Object.keys(sassNormalRule.uses.entries()).forEach((key) => {
        vuetifyRule.uses.set(key, sassNormalRule.uses.get(key));
    });
    // moving rule "vuetify" before "normal"
    sassRule.oneOfs.delete('normal');
    sassRule.oneOfs.set('normal', sassNormalRule);
    // adding prefixer to the "vuetify" rule
    vuetifyRule.use('vuetify').loader(require.resolve('postcss-loader')).tap((options = {}) => {
        options.sourceMap = process.env.NODE_ENV !== 'production';
        options.plugins = [
            prefixer({
                prefix: '[data-vuetify]',
                transform(prefix, selector, prefixedSelector) {
                    let result = prefixedSelector;
                    if (selector.startsWith('html') || selector.startsWith('body')) {
                        result = prefix + selector.substring(4);
                    }
                    return result;
                },
            }),
        ];
        return options;
    });
    // moving sass-loader to the end
    vuetifyRule.uses.delete('sass-loader');
    vuetifyRule.uses.set('sass-loader', sassNormalRule.uses.get('sass-loader'));
  },
  // https://v1.vuepress.vuejs.org/plugin/
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/active-header-links",
    [
      "@mr-hope/sitemap", {
        hostname: "https://docs.hdc.ntnu.no"
      }
    ],
    [
      "vuepress-plugin-reading-time", {
        excludes: ['/about', '/system-status', '/contribute', '/contact', '/faq']
      }
    ],
    [
      "seo", {
        // siteTitle: (_, $site) => $site.title,
        title: $page => $page.frontmatter.category ? ($page.frontmatter.category + ': ' + $page.title) : $page.title,
        description: $page => $page.frontmatter.description,
        twitterCard: _ => 'summary',
        type: $page => [
          'getting-started', 'working-in-your-lab', 'data-transfer'
        ].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
        url: (_, $site, path) => ($site.themeConfig.domain || 'https://docs.hdc.ntnu.no') + path,
        customMeta: (add, context) => {
          const {
            $site, // Site configs provided by Vuepress
            $page, // Page configs provided by Vuepress

            // All the computed options from above:
            // siteTitle,
            title, description, type, url,
          } = context

          add('twitter:label1', ($page.readingTime && type === 'article') ? 'Reading time' : null)
          add('twitter:data1', ($page.readingTime && type === 'article') ? '🕑 ' + $page.readingTime.text : null)
          add('twitter:label2', type === 'article' ? 'Latest updates' : null)
          add('twitter:data2', type === 'article' ? 'https://docs.hdc.ntnu.no/news/' : null)
        },
      }
    ]
  ]
};
