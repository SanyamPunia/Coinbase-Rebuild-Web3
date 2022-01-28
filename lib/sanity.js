import sanityClient from "@sanity/client"

export const client = sanityClient({
    projectId: 'h9mgnl10',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skB0emXhdzXLM0TON64qEQb8ir5FpdcZBu2iFgvShVe4tXXNABVM0AVsB0tQt2sJHJ1zml6LZwIQnemM7u3ZiFbugTdAO2GTGWs4kBsFKwHZaBnP2oWVZSfQ1JXNXOblIJXxjsjCcLTUGc44sCKXcky2duVfeLjpGctyX90RGucCcn7LtMy5',
    useCdn: false,
})