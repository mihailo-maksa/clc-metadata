import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
import privateKey from "./privateKey.mjs";

const sdk = ThirdwebSDK.fromPrivateKey("mainnet-beta", privateKey);

const nftCollectionAddress = await sdk.deployer.createNftCollection({
  name: "COOL Lions Club",
  symbol: "CLC",
  description:
    "CLC is a collection of 4444 unique computer generated Lions stored on Solana blockchain. Main goal is to invest 80% of earnings. Passive income backed by revenue-generating assets. 1 NFT = 1 share. Focus on giving back to community and holders.",
  creators: [
    {
      verified: true,
      address: "F6dxmXKz5kRC1MdsqcFNbnEFEP9wRcMJmD3fqgszfhux",
      share: 100,
    },
  ],
  external_link: "https://lions.cool",
  image:
    "https://storageapi.fleek.co/c1b47887-4944-4a44-b339-0d83287c9e83-bucket/logo512.png",
  seller_fee_basis_points: 1000,
});

console.log(nftCollectionAddress);

const myNftCollection = await sdk.getNFTCollection(nftCollectionAddress);

const metadata1Lim = {
  name: "Cool Lion #1 Limited Edition",
  description:
    "WELCOME TO THE CLUB! The COOL Lions Club is more than just an NFT collection. It is a community that is focused on bringing positive changes to the (growing) Solana NFT space. Above all that, our main goal is to benefit the COOL Lions Club holders as much as we can.",
  image:
    "https://storageapi.fleek.co/c1b47887-4944-4a44-b339-0d83287c9e83-bucket/1_lim.png",
  backround_color: "#79B471",
  external_url: "https://lions.cool",
  attributes: [
    {
      trait_type: "Background",
      value: "Light Green",
    },
    {
      trait_type: "Clothes",
      value: "Blue CLC Hoodie",
    },
    {
      trait_type: "Eyes",
      value: "Classic Cool",
    },
    {
      trait_type: "Eyewear",
      value: "None",
    },
    {
      trait_type: "Fur",
      value: "Blue",
    },
    {
      trait_type: "Hair",
      value: "Blue",
    },
    {
      trait_type: "Mouth",
      value: "Classic Closed",
    },
  ],
};

const metadata2Lim = {
  name: "Cool Lion #2 Limited Edition",
  description:
    "WELCOME TO THE CLUB! The COOL Lions Club is more than just an NFT collection. It is a community that is focused on bringing positive changes to the (growing) Solana NFT space. Above all that, our main goal is to benefit the COOL Lions Club holders as much as we can.",
  image:
    "https://storageapi.fleek.co/c1b47887-4944-4a44-b339-0d83287c9e83-bucket/2_lim.png",
  backround_color: "#3F5B77",
  external_url: "https://lions.cool",
  attributes: [
    {
      trait_type: "Background",
      value: "CLC Blue",
    },
    {
      trait_type: "Clothes",
      value: "Retro Shirt",
    },
    {
      trait_type: "Eyes",
      value: "Wink",
    },
    {
      trait_type: "Eyewear",
      value: "Potter Glasses",
    },
    {
      trait_type: "Fur",
      value: "Brown",
    },
    {
      trait_type: "Hair",
      value: "Brown",
    },
    {
      trait_type: "Mouth",
      value: "Classic Closed with Stick",
    },
  ],
};

const metadata3Lim = {
  name: "Cool Lion #3 Limited Edition",
  description:
    "WELCOME TO THE CLUB! The COOL Lions Club is more than just an NFT collection. It is a community that is focused on bringing positive changes to the (growing) Solana NFT space. Above all that, our main goal is to benefit the COOL Lions Club holders as much as we can.",
  image:
    "https://storageapi.fleek.co/c1b47887-4944-4a44-b339-0d83287c9e83-bucket/3_lim.png",
  backround_color: "#433961",
  external_url: "https://lions.cool",
  attributes: [
    {
      trait_type: "Background",
      value: "Purple",
    },
    {
      trait_type: "Clothes",
      value: "Vampire Cloak",
    },
    {
      trait_type: "Eyes",
      value: "Red",
    },
    {
      trait_type: "Eyewear",
      value: "None",
    },
    {
      trait_type: "Fur",
      value: "Black",
    },
    {
      trait_type: "Hair",
      value: "Black",
    },
    {
      trait_type: "Mouth",
      value: "Vampire Mouth",
    },
  ],
};

const metadata4Lim = {
  name: "Cool Lion #4 Limited Edition",
  description:
    "WELCOME TO THE CLUB! The COOL Lions Club is more than just an NFT collection. It is a community that is focused on bringing positive changes to the (growing) Solana NFT space. Above all that, our main goal is to benefit the COOL Lions Club holders as much as we can.",
  image:
    "https://storageapi.fleek.co/c1b47887-4944-4a44-b339-0d83287c9e83-bucket/4_lim.png",
  backround_color: "#7982A0",
  external_url: "https://lions.cool",
  attributes: [
    {
      trait_type: "Background",
      value: "Light Purple",
    },
    {
      trait_type: "Clothes",
      value: "Explorer",
    },
    {
      trait_type: "Eyes",
      value: "Classic Cool",
    },
    {
      trait_type: "Eyewear",
      value: "None",
    },
    {
      trait_type: "Fur",
      value: "Brown",
    },
    {
      trait_type: "Hair",
      value: "Sombrero",
    },
    {
      trait_type: "Mouth",
      value: "Classic Closed",
    },
  ],
};

const metadata5Lim = {
  name: "Cool Lion #5 Limited Edition",
  description:
    "WELCOME TO THE CLUB! The COOL Lions Club is more than just an NFT collection. It is a community that is focused on bringing positive changes to the (growing) Solana NFT space. Above all that, our main goal is to benefit the COOL Lions Club holders as much as we can.",
  image:
    "https://storageapi.fleek.co/c1b47887-4944-4a44-b339-0d83287c9e83-bucket/5_lim.png",
  backround_color: "#E2C200",
  external_url: "https://lions.cool",
  attributes: [
    {
      trait_type: "Background",
      value: "Yellow",
    },
    {
      trait_type: "Clothes",
      value: "Magenta Hoodie",
    },
    {
      trait_type: "Eyes",
      value: "Classic Cool",
    },
    {
      trait_type: "Eyewear",
      value: "Barbie Glasses",
    },
    {
      trait_type: "Fur",
      value: "Magenta",
    },
    {
      trait_type: "Hair",
      value: "CLC Blue",
    },
    {
      trait_type: "Mouth",
      value: "Classic Closed",
    },
  ],
};

const metadata6Lim = {
  name: "Cool Lion #6 Limited Edition",
  description:
    "WELCOME TO THE CLUB! The COOL Lions Club is more than just an NFT collection. It is a community that is focused on bringing positive changes to the (growing) Solana NFT space. Above all that, our main goal is to benefit the COOL Lions Club holders as much as we can.",
  image:
    "https://storageapi.fleek.co/c1b47887-4944-4a44-b339-0d83287c9e83-bucket/6_lim.png",
  backround_color: "#9A8B50",
  external_url: "https://lions.cool",
  attributes: [
    {
      trait_type: "Background",
      value: "Light Brown",
    },
    {
      trait_type: "Clothes",
      value: "Wizard Robe",
    },
    {
      trait_type: "Eyes",
      value: "Heterochromia (Purple & Cyan)",
    },
    {
      trait_type: "Eyewear",
      value: "None",
    },
    {
      trait_type: "Fur",
      value: "Brown",
    },
    {
      trait_type: "Hair",
      value: "Colorful Beanie",
    },
    {
      trait_type: "Mouth",
      value: "Muzzle",
    },
  ],
};

const metadata7Lim = {
  name: "Cool Lion #7 Limited Edition",
  description:
    "WELCOME TO THE CLUB! The COOL Lions Club is more than just an NFT collection. It is a community that is focused on bringing positive changes to the (growing) Solana NFT space. Above all that, our main goal is to benefit the COOL Lions Club holders as much as we can.",
  image:
    "https://storageapi.fleek.co/c1b47887-4944-4a44-b339-0d83287c9e83-bucket/7_lim.png",
  backround_color: "",
  external_url: "https://lions.cool",
  attributes: [
    {
      trait_type: "Background",
      value: "Multicolor (Black & Red)",
    },
    {
      trait_type: "Clothes",
      value: "Formula 1 Suit",
    },
    {
      trait_type: "Eyes",
      value: "Classic Cool",
    },
    {
      trait_type: "Eyewear",
      value: "None",
    },
    {
      trait_type: "Fur",
      value: "Classic",
    },
    {
      trait_type: "Hair",
      value: "Formula 1 Helmet",
    },
    {
      trait_type: "Mouth",
      value: "Classic Closed",
    },
  ],
};

await myNftCollection.mint(metadata1Lim);
await myNftCollection.mint(metadata2Lim);
await myNftCollection.mint(metadata3Lim);
await myNftCollection.mint(metadata4Lim);
await myNftCollection.mint(metadata5Lim);
await myNftCollection.mint(metadata6Lim);
await myNftCollection.mint(metadata7Lim);

// Mainnet-Beta: TBD
// Devnet: 7Yjk7dNp8QE89kvTtmxAxd9Mn8HoLV7GjnD45QYD6qL5
