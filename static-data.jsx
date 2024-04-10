import { cityScents, newCity, newSummer, newTropical, summerHeat, tropicalRain } from "./static-img-urls";

const collectionData = [
    {
        bgimage:tropicalRain,
        heading:"Tropical Rain"
    },
    {
        bgimage:summerHeat,
        heading:"Summer Heat"
    },
    {
        bgimage:cityScents,
        heading:"City Scents"
    },
    {
        bgimage:summerHeat,
        heading:"Summer Heat"
    },
    {
        bgimage:tropicalRain,
        heading:"Tropical Rain"
    },
]

const NewFeaturedSlides = [
    {
        heading:"City Scent Collection",
        subheading:"example text for this sections paragraph text but longer for vsual.  example text for this.",
        bgImage:newCity,
        featuredImg:cityScents
    },
    {
        heading:"Summer Heat Collection",
        subheading:"example text for this sections paragraph text but longer for vsual.  example text for this.",
        bgImage:newSummer,
        featuredImg:summerHeat
    },
    {
        heading:"Tropical Rain Collection",
        subheading:"example text for this sections paragraph text but longer for vsual.  example text for this.",
        bgImage:newTropical,
        featuredImg:tropicalRain
    }
]

export {
    collectionData,
    NewFeaturedSlides
}