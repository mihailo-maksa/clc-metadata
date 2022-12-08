from PIL import Image
import random
import json

# Generates the NFT images & their related metadata for 4096 NFTs

# clothes
group1 = [
  r"/Users/mihailomaksa/Projects/cool-lions/infra/assets/clothes/Classic Red Shirt.png",
  r"/Users/mihailomaksa/Projects/cool-lions/infra/assets/clothes/CLC Hoodie.png",
  r"/Users/mihailomaksa/Projects/cool-lions/infra/assets/clothes/CLC TJ.png",
  r"/Users/mihailomaksa/Projects/cool-lions/infra/assets/clothes/Suit.png"
]
# eyes
group2 = [
  r"/Users/mihailomaksa/Projects/cool-lions/infra/assets/eyes/Angry Blue.png",
  r"/Users/mihailomaksa/Projects/cool-lions/infra/assets/eyes/Classic Cool.png",
  r"/Users/mihailomaksa/Projects/cool-lions/infra/assets/eyes/Closed.png",
  r"/Users/mihailomaksa/Projects/cool-lions/infra/assets/eyes/Cyber Glow.png"
]
# eyewear
group3 = [
  r"/Users/mihailomaksa/Projects/cool-lions/infra/assets/eyewear/Designer.png",
  r"/Users/mihailomaksa/Projects/cool-lions/infra/assets/eyewear/Flying Goggles.png",
  r"/Users/mihailomaksa/Projects/cool-lions/infra/assets/eyewear/Snow Goggles.png",
  r"/Users/mihailomaksa/Projects/cool-lions/infra/assets/eyewear/Tiger Sunglasses.png"
]
# fur
group4 = [
  r"/Users/mihailomaksa/Projects/cool-lions/infra/assets/fur/Classic.png",
  r"/Users/mihailomaksa/Projects/cool-lions/infra/assets/fur/Cyan Magenta.png",
  r"/Users/mihailomaksa/Projects/cool-lions/infra/assets/fur/Magma.png",
  r"/Users/mihailomaksa/Projects/cool-lions/infra/assets/fur/Toxic.png"
]
# hair
group5 = [
  r"/Users/mihailomaksa/Projects/cool-lions/infra/assets/hair/CLC Bucket Hat.png",
  r"/Users/mihailomaksa/Projects/cool-lions/infra/assets/hair/Cool Classic.png",
  r"/Users/mihailomaksa/Projects/cool-lions/infra/assets/hair/Mafia Hat.png",
  r"/Users/mihailomaksa/Projects/cool-lions/infra/assets/hair/Snow Blue.png"
]
# mouth
group6 = [
  r"/Users/mihailomaksa/Projects/cool-lions/infra/assets/mouth/Classic Closed.png",
  r"/Users/mihailomaksa/Projects/cool-lions/infra/assets/mouth/Classic Open.png",
  r"/Users/mihailomaksa/Projects/cool-lions/infra/assets/mouth/Gold Teeth.png",
  r"/Users/mihailomaksa/Projects/cool-lions/infra/assets/mouth/Holding Money.png"
]

counter = 0
counter2 = 0
attributesArray = []

def createImage(a,b,c,d,e,f,counter):
      
  bg = r"/Users/mihailomaksa/Projects/cool-lions/infra/assets/bg/navy.png"

  first = group4[a]
  second = group5[b]
  third = group6[c]
  fourth = group1[d]
  fifth = group2[e]
  sixth = group3[f]

  bg = Image.open(bg).convert("RGBA")

  image01 = Image.open(first).convert("RGBA")
  image02 = Image.open(second).convert("RGBA")
  image03 = Image.open(third).convert("RGBA")
  image04 = Image.open(fourth).convert("RGBA")
  image05 = Image.open(fifth).convert("RGBA")
  image06 = Image.open(sixth).convert("RGBA")

  bg = bg.resize(resample=Image.BOX, size=(2048, 2048))

  image01 = image01.resize(resample=Image.BOX, size=(2048, 2048))
  image02 = image02.resize(resample=Image.BOX, size=(2048, 2048))
  image03 = image03.resize(resample=Image.BOX, size=(2048, 2048))
  image04 = image04.resize(resample=Image.BOX, size=(2048, 2048))
  image05 = image05.resize(resample=Image.BOX, size=(2048, 2048))
  image06 = image06.resize(resample=Image.BOX, size=(2048, 2048))

  # if counter % random.randrange(2, 11) == 0:
  if True:
    # print("AAAAAAAAAAAAAAAAAAAAA", counter)
    # intermediate = Image.alpha_composite(image01, image02)
    # intermediate2 = Image.alpha_composite(intermediate,image03)
    # intermediate3 = Image.alpha_composite(intermediate2,image04)
    # intermediate4 = Image.alpha_composite(intermediate3,image05)
    # intermediate5 = Image.alpha_composite(intermediate4,image06)

    print("AAAAAAAAAAAAAAAAAAAAA", counter)
    with_bg = Image.alpha_composite(bg, image01)
    intermediate = Image.alpha_composite(with_bg, image02)
    intermediate2 = Image.alpha_composite(intermediate,image03)
    intermediate3 = Image.alpha_composite(intermediate2,image04)
    intermediate4 = Image.alpha_composite(intermediate3,image05)
    intermediate5 = Image.alpha_composite(intermediate4,image06)

    lion = {
      "name": "COOL Lions Club #" + str(counter),
      "description": "WELCOME TO THE CLUB! The COOL Lions Club is more than just an NFT collection. It is a community that is focused on bringing positive changes to the (growing) Solana NFT space. Above all that, our main goal is to benefit the COOL Lions Club holders as much as we can.",
      "image": "https://storageapi.fleek.co/c1b47887-4944-4a44-b339-0d83287c9e83-bucket/" + str(counter) + ".png",
      "backround_color": "#3B455E",
      "external_url": "https://lions.cool",
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Navy Blue"
        },
        {
          "trait_type": "Clothes",
          "value": first.split("/")[-1].split(".")[0]
        },
        {
          "trait_type": "Eyes",
          "value": second.split("/")[-1].split(".")[0]
        },
        {
          "trait_type": "Eyewear",
          "value": third.split("/")[-1].split(".")[0]
        },
        {
          "trait_type": "Fur",
          "value": fourth.split("/")[-1].split(".")[0]
        },
        {
          "trait_type": "Hair",
          "value": fifth.split("/")[-1].split(".")[0]
        },
        {
          "trait_type": "Mouth",
          "value": sixth.split("/")[-1].split(".")[0]
        }
      ]
    }

    attributesArray.append(lion)

    global counter2;
    name = "/Users/mihailomaksa/Projects/cool-lions/infra/merged/" + str(counter2) + ".png"
    intermediate5.save(name)
    counter2 += 1


for a in range(4):
  for b in range(4):
    for c in range(4):
      for d in range(4):
        for e in range(4):
          for f in range(4):

            createImage(a,b,c,d,e,f,counter)
            counter = counter + 1


with open('/Users/mihailomaksa/Projects/cool-lions/infra/attributes.json', 'w') as outfile:
  json.dump(attributesArray, outfile)
