//Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//this is a backend endpoint that is avaiable to us in next.js
export default function handler(req, res) {
    // make an array of 5 quotes from the interwebs
    const quotes = [
        {"author":"Marcus Aurelius",
            "quote":"If you have your heart set on wearing crowns, why not make one out of roses – you will look even more elegant in that."},
        {"author":"Will Durant",
            "quote":"A nation is born stoic, and dies epicurean."},
        {"author":"Jonas Salzgeber",
            "quote":"Stoicism teaches how to keep a calm and rational mind no matter what happens to you and it helps you understand and focus on what you can control and not worry about and accept what you can’t control."},
        {"author":"Brandon Sanderson",
            "quote":"Accept the pain but don't accept that you deserved it."
        },

    ]
    //get a random item from it
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const randomQuote = quotes[randomIndex]
    // return it.

    res.status(200).json(randomQuote)
  }
  