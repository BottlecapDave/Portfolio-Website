import * as React from "react"
import { Helmet } from "react-helmet"

interface ISeo {
  title: string;
  url: string;
  description: string;
  imageUrl?: string;
}

export const SEO = (data: ISeo) => {
  const title = data.title || "David Kendall";
  return <Helmet title={title}>
    <meta property="title" content={title} />
    <meta name="description" content={data.description} />
    
    <meta name="og:type" content="website" />
    {data.url && <meta property="og:url" content={data.url} />}
    <meta property="og:title" content={title} />
    <meta name="og:description" content={data.description} />
    {data.imageUrl && <meta property="og:image" content={data.imageUrl} />}

    <meta name="twitter:card" content="summary_large_image" />
    {data.url && <meta property="twitter:url" content={data.url} />}
    <meta property="twitter:title" content={title} />
    <meta name="twitter:description" content={data.description} />
    {data.imageUrl && <meta property="twitter:image" content={data.imageUrl} />}
    <meta name="twitter:creator" content="@BottlecapDave" />
    <html lang="en" />
  </Helmet>
}