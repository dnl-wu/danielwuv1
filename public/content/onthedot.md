# Shipping an NYT-Inspired Game, and Going Viral on Social Media
![OnTheDot.png](https://github.com/Profilist/on-the-dot/blob/main/public/OnTheDot.png?raw=true)

Midterm season was rough... Little sleep, endless studying, and no energy to start the day. The one thing that got me up was playing the _New York Times Mini Crossword_ and _Connections._

If there was one thing that bothered me about those games, it was how often they relied on  niche knowledge I didn’t have.  

Then one night, I stumbled across a video from the UK YouTube group **Sidemen** titled _“GUESS THE TOP 100.”_

The idea was pretty simple: you get a category with a hidden top 100 list and try to guess what’s on it, as close to #100 as possible.

But something about it stuck with me. It wasn’t just trivia, it felt like a mix of luck, instinct, and random bits of knowledge I’d picked up over time. 

I realized this was exactly the kind of thing that could help me get better at all that “niche trivia” I kept losing to, but in a way that was actually fun.

**ON THE DOT** — a game where players are given a category with a hidden “Top 100” list and take turns guessing items they think are on it. The goal is to guess as close to #100 as possible; if your guess ranks higher or isn’t on the list, you score nothing.

Some notes:

 - I'm grateful to the Sidemen for sparking the idea, but their involvement doesn't end here...
 - I recruited my roommate to work together on this!

## Table of Contents

1. [The Plan](#the-plan)
2. [Choosing a Tech Stack](#tech-stack)
3. [Building the User Experience](#building)
4. [The Launch and Going Viral](#launch)
5. [Improving our product for our users](#iterating)
6. [Conclusion](#ON-THE-DOT)

## The Plan

Once we had the concept, our real question became:

How do we get people to wake up in the morning and think _"I should play ON THE DOT..."_

I realized that trying to create a brand-new morning habit would take time,  but tapping into one that already existed could be far more natural.

 So I thought we’d integrate into a routine I knew well, one where people start their day with the New York Times puzzles. 

We wanted a UX that felt intuitive to NYT players with a new and satisfying experience that left players wanting to play again.

With that in mind, we started building.

## Choosing the Tech Stack

For the frontend, we chose:
- **Vite**: Used as a fast build tool and dev server
- **React 19.0.0 and TypeScript**: To add type safety and improve code quality  
- **Tailwind CSS**: For rapid UI development with utility classes  
- **Framer Motion**:  To add polished animations and transitions  

For the backend and data:
- **Supabase**:  For backend services and data storage
-  Anonymous user identification system
- Persistent game state management

## Building the User Experience

I wanted the user experience to be both intuitive and visually appealing. Since the game was a newer concept, we would have first-time visitors who might not immediately understand how to play. The frontend had to guide them without feeling like a tutorial.

My goal from the beginning was to make every interaction clear. Users should be able to open the game and understand what to do within seconds. To achieve that, I started by designing a simple organizational structure in Figma: the category at the top, the guess bar in the center, and the rules directly beneath. This layout provided instant context, allowing users to what the challenge was, where to respond, and what the boundaries were, so that they could derive the game's intent.

I focused next on gamification, to evolve an online quiz into a gameshow where every action is acknowledged. Each time a user submits a guess, they receive feedback in the form of with color changes, score updates, and short messages like _“Correct!”_. 

The visual language followed a minimal and clean direction inspired by _NYT Games_. I wanted the layout to feel familiar but with a sense of playfulness that made it distinct. Moving to Framer Motion, we added small transitions between rounds, subtle movements after correct answers, and a sense of flow that made the interface feel responsive and alive, without distracting from the core gameplay.

The last part of the design process was about closure. This was all about making sure users had a positive experience and wanted to play again. At the end, they see a summary screen with their score, leaderboard placement, and an option to share. This moment gives players a sense of completion and a reason to come back.

We designed the game to remember each player’s progress without requiring sign-ups or accounts. By using anonymous user tracking, players could start playing instantly with no barriers or setup. This created a low-commitment entry point for new users, letting them explore and learn to enjoy the game. It enabled the addition of user play streaks to drive retention and store progress. We wanted the game to be simple to start, but satisfying to stay...

> The key principle for our UX design was to let users learn by doing...
> and making them want to keep doing it!

## Launch

You might recall from an earlier section that the Sidemen were involved again, and that connection becomes important here. No matter how great the app was, it meant nothing if no one discovered it. Most online growth guides say we found told us to think big and plan for a million users, but I took the opposite approach. I focused on the small, unscalable actions that would get us our first users.

I used what I knew. I went to the Sidemen community Reddit and shared the development of our game. To capture their attention before the video’s hype faded, we had to move fast, launching a prototype with only the core gameplay and none of the extra features we had planned. 

Our [Reddit post](https://www.reddit.com/r/Sidemen/comments/1lmgmza/i_made_moresdmn_guess_the_top_100/) went viral, we saw 5000+ plays within 24 hours. So we honed in on what was working, making consecutive posts in other relevant subreddits and other platforms like LinkedIn and X. To date, our posts have received over 140,000 impressions.

With real traction, we wanted to evolve our app to the next level while growing our userbase.

## Iterating

Within 48 hours, we found ourselves with 3,000 unique visitors and a list of exciting features that we had written out. But you know what? We didn't end up implementing a single one.

Here's why:

We looked at user sessions, and from there, much more urgent improvements were apparent.

Users were leaving because misspelled guesses weren’t being counted, so we implemented a spell corrector. Certain difficult categories discouraged repeat plays, so we only showed them to high-scoring users.

And for more ambiguous cases? We experimented. We performed A/B tests on our UI to see which improvement users liked better. Then, we did this again and again to refine our numbers, which increased our average play count per user session from **2.1 -> 5.6**.

Later, we noticed that our user base was growing at a linear rate, which wasn't surprising since our strategy relied on consistent social media posting. We then added a share button and saw visits from new users double over the next two days.

All the initial exciting features we had planned sounded great in our heads, but when we ran A/B tests, we saw that users who played these particular iterations of our site tended to play less total games!

My takeaway from this:

> Let data guide your decision-making... Don't be swayed by emotion?

 

## ON THE DOT

This was a super fun project, especially with it being tied to so many of my passions. From an idea sparked by my favourite YouTubers to a viral launch with thousands of players, On The Dot taught me how to actually build and grow.

Check the game out! http://playonthedot.com
