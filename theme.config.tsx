import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const description = frontMatter.description || "GlobalBan Documentation";

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href="/static/logo.png" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </>
  );
}

function useNextSeoProps() {
    const { asPath } = useRouter();
    const arr = asPath.replace(/[-_]/g, ' ').split('/');
    const rawTitle = arr[arr.length - 1];
    const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : '%s';

    if (asPath === "/") {
        return {
            titleTemplate: `GlobalBan`,
        }
    } else {
        return {
            titleTemplate: `${title} - GlobalBan`,
        }
    }
}


const config: DocsThemeConfig = {
    logo: (
        <div
      style={{
          paddingLeft: '50px',
          lineHeight: '38px',
          background: "url('./static/logo.png') no-repeat left",
          backgroundSize: '64px',
          fontWeight: 550,
      }}
     >
      <p style={{marginLeft: "20px"}}> GlobalBan</p>
    </div>
    ),
  project: {
    link: 'https://github.com/DataTechX',
  },
  chat: {
    link: 'https://discord.gg/EB9CFWjcFh',
  },
  head: useHead,
  docsRepositoryBase: 'https://github.com/DataTechX/docs/blob/main',
  footer: {
    text: 'GlobalBan',
  },
  useNextSeoProps: useNextSeoProps,
}

export default config
