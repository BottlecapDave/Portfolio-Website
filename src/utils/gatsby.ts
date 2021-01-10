import { useStaticQuery, graphql } from "gatsby";

export function extractCoreData() {

    const data = useStaticQuery(graphql`{
      site {
        siteMetadata {
          title
          url
        }
      }
    }`)

    return {
        metadata: {
          defaultTitle: data?.site?.siteMetadata?.title,
          siteUrl: data?.site?.siteMetadata?.url
        }
    };
}

// export function extractImageData(data: any): IImageProps {
//     return {
//         ...data?.childImageSharp?.fluid,
//         alt: data?.alt,
//     }
// }