import Client from "shopify-buy";

// export const client = Client.buildClient({
//   storefrontAccessToken: process.env.SHOPIFY_STORE_FRONT_ACCESS_TOKEN as string,
//   domain: process.env.SHOPIFY_STORE_DOMAIN as string
// })

export const client = Client.buildClient({
      storefrontAccessToken: '54237681f648f584055b37a03eb82234',
      domain: 'neorictest.myshopify.com',
    })