# Vercel Daily

This repository is the solution for the Vercel Daily Challenge.

## AI Usage

This solution is been built on Visual Studio Code with the Copilot extension DISABLED. Autocompletes are also disabled. The AGENTS.md and CLAUDE.md files were removed. The Design has been developed with v0 https://v0.app/chat/ui-component-design-hnW8YBaHnda?ref=USSWZW You can see the chat history where I only got UI components with explicit no Nextjs or business logic in the generation.

## References

This is my Nextjs Foundations repo: [https://github.com/Fedeorlandau/nextjs-foundations](https://github.com/Fedeorlandau/nextjs-foundations) where I first tested a few features that I will implement here.

## General Site Requirements

| Component              | Specification                                                                             |
| ---------------------- | ----------------------------------------------------------------------------------------- |
| Header                 | Persistent header containing a logo and navigation links to the Homepage and Search page. |
| Footer                 | Footer containing copyright text and year.                                                |
| Layout                 | Shared root layout that renders the header and footer on all pages.                       |
| Responsive Design      | The application must be mobile-friendly and work well across different viewport sizes.    |
| Root Metadata          | Define default metadata in the root layout that applies to all pages.                     |
| Page-Specific Metadata | Each page should export its own metadata that overrides or extends the root metadata.     |
| Open Graph             | Include Open Graph metadata (openGraph) for social sharing.                               |
| Cache Components       | Cache Components are enabled.                                                             |

Route: /

| Component            | Specification                                                                                                                                                           |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hero Section         | A prominent hero area with headline text, supporting description, and a visual element (featured story image or illustration).                                          |
| Breaking News Banner | A banner displaying the latest breaking news or trending topic, fetched from the provided API.                                                                          |
| Featured Articles    | A grid displaying at least 6 articles fetched from the provided API. Each article should show its image, headline, category, publish date, and link to its detail page. |

## Page 2: Article Detail Page

Route: /articles/\[param\]

| Component         | Specification                                                                         |
| ----------------- | ------------------------------------------------------------------------------------- |
| Article Header    | The article headline, author name, publish date, and category.                        |
| Featured Image    | A large hero image for the article.                                                   |
| Article Content   | The full article body text.                                                           |
| Trending Articles | A section displaying 3-4 trending articles fetched dynamically from the provided API. |
| Subscribe CTA     | If the user is not subscribed, display a call-to-action to subscribe.                 |

## Subscription & Paywall Functionality

| Component                   | Specification                                                                                                                                                                                   |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Subscribe Action            | Users can subscribe to Vercel Daily via a subscribe button. Authentication is not required — subscription is anonymous and it persists on page refresh.                                         |
| Subscription Indicator      | The header displays the user’s subscription status (e.g., ‘Subscribe’ button when not subscribed, ‘Subscribed’ badge or ‘Unsubscribe’ option when subscribed).                                  |
| Unsubscribe Action          | Subscribed users can unsubscribe via an unsubscribe button or toggle.                                                                                                                           |
| Session Persistence         | The subscription state persists within the same browser session using cookies. If the user refreshes the page or navigates away and returns, their subscription status should still be present. |
| Paywall Enforcement         | Non-subscribed users attempting to view article detail pages are shown a paywalled version that does not render the full article content.                                                       |
| Paywall UI                  | The paywalled page shows the article headline, featured image, and a teaser (first paragraph or excerpt), followed by a prominent call-to-action to subscribe.                                  |
| Full Access for Subscribers | Subscribed users see the complete article content without any paywall restrictions.                                                                                                             |

## Page 3: Search Page

Route: /search

| Component               | Specification                                                                                                                           |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Search Input            | A text input field for entering search queries.                                                                                         |
| Category Filter         | A dropdown or select input allowing users to filter articles by category.                                                               |
| Search Behavior         | Searches can be triggered by pressing Enter, clicking a search button, or automatically after the user has typed at least 3 characters. |
| Default State           | When no search has been performed, display a default set of recent articles.                                                            |
| Search Results          | When a search is performed, display up to 5 matching articles in a responsive grid layout.                                              |
| Empty State             | When a search returns no results, display an appropriate message.                                                                       |
| Loading State           | Visual feedback while a search is being performed.                                                                                      |
| Persistent Search State | If the user refreshes the page or shares the URL, the same search results should appear (including category filter).                    |
