# Building real-time fan interaction into live suporting events
![LivePlay.png](https://github.com/dnl-wu/danielwuv1/blob/main/public/assets/ProjectPhotos/LivePlay.png?raw=true)Sports have always been a big part of my life, and like most sport fans, I am very competitive.

Its hard for me to watch sports without getting the feeling that I should be out there playing (maybe) or at least proving that I know more about the sport than most.

So I'm putting my money where my mouth is...

**LivePlay** — Play real-time trivia games with questions based on context from live sports broadcasts for a more immersive fan experience

## Table of Contents

1. [The Plan](#the-plan)
3. [Building](#building)
6. [Conclusion](#liveplay)

## The Plan

Once I had the concept, the real question became:

I wanted to make the app as easy and intuitive as possible, because this was something people would use while watching a game. The vision was clear: create a sleek, modern UX that makes finding a specific game effortless.  The ability to quickly filter by sport was essential, so users could jump straight to the content they care about. All of this combined into a dark, premium interface with golden accents that would feel natural in the world of sports entertainment.

![LivePlayScreenshot.png](https://github.com/dnl-wu/danielwuv1/blob/main/public/assets/ProjectPhotos/LivePlayScreenshot.png?raw=true)

From a product standpoint, I decided to start simple and focused. Rather than building a complex multi-screen app right away, I committed to perfecting a single, powerful view. Real-time updates were non-negotiable, when a match is live, users need to see it instantly. I also knew that scalability mattered, so I chose a backend solution that could grow with us without requiring server management. The plan was to nail the core experience first, then expand features based on what users actually needed.

## Building


I started by setting up my development environment and establishing the database structure. Using Supabase, I created a simple  matches table to store event information: title, sport, league, live status, and time. The serverless approach meant I could have a production-ready database up and running in minutes. 

Next came the UI. I implemented the dark theme with my custom fonts and began crafting components in Jetpack Compose. The animated grid background was one of the first elements I built, setting the tone for the entire app. I designed the match cards to be bold and readable, with the live indicator using LivePlay's signature gold color to build a brand identity. The filter chips were positioned at the top for easy access, creating a familiar horizontal scroll pattern that felt natural on mobile devices.

With the design in place, I focused on connecting everything together. I built out the repository layer to fetch data from Supabase and implemented the ViewModel to manage state. Getting real-time data flowing into the UI was exciting. Suddenly, I could see actual match information populating my carefully designed cards. I tackled edge cases like loading states, error handling, and empty states to ensure the app felt responsive and reliable regardless of network conditions.

Finally, when games are live, our app would constantly fetch real-time updates from the ESPN API and pass this context to Gemini API to generate custom trivia questions. These questions are then displayed to users during breaks in play as determined with context from the ESPN API to create a seamless fan experience, even when the game isn't active.

## LIVEPLAY

This is a super fun project, not only because I love sports, but I was able to learn new tools and develop in the Android ecosystem. I'm looking forward to iterating on this learned knowledge and continue building in the mobile space!
