# Community CMS Guide (Decap / Netlify CMS)

You can now update Community page content from a single backend at:

- `/admin/`

## Where to edit in CMS

Open **Community Page** collection. You will see 3 editable files:

1. **Community Reviews**
   - Source: `assets/data/reviews.json`
   - Controls the reviews carousel cards.

2. **Community Bulletin Posts**
   - Source: `assets/data/bulletin-posts.json`
   - Controls bulletin board cards, categories, dates, and priorities.

3. **Community Social Links**
   - Source: `assets/data/community-social.json`
   - Controls Facebook/TikTok URLs, embed URL, WhatsApp link, TikTok intro text, and Google review button link.

## Publishing flow

1. Log into `/admin/`
2. Edit Community content
3. Save + Publish
4. CMS commits to `main`
5. Vercel auto-deploys updates

## Important notes

- Keep review ratings between **1 and 5**.
- Bulletin categories must be one of:
  - `alert`, `news`, `update`, `event`, `tip`
- For best bulletin sorting, use date format `YYYY-MM-DD`.
- Use a valid Facebook Page Plugin URL in `facebook_embed_url` for the live feed iframe.
