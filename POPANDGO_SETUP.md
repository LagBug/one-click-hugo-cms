# Pop & Go Hugo Website with Decap CMS

This Hugo website has been customized with the Pop & Go design and theme.

## 🎨 What's Been Updated

### Design & Theme
- ✅ Converted all layouts to use Pop & Go design
- ✅ Copied `styles.css` and `script.js` to Hugo
- ✅ Updated colors, fonts, and branding
- ✅ Implemented bilingual support (Greek/English)

### Layouts Updated
1. **`layouts/_default/baseof.html`** - Main template structure
2. **`layouts/partials/head.html`** - Meta tags, favicons, Font Awesome
3. **`layouts/partials/nav.html`** - Navigation with logo, social links, language toggle
4. **`layouts/partials/footer.html`** - Download section + footer
5. **`layouts/index.html`** - Home page with hero section and "How It Works"
6. **`layouts/section/post.html`** - Blog listing page
7. **`layouts/post/single.html`** - Individual blog post layout

### Content Structure
- **Home Page** (`content/_index.md`) - Bilingual hero and how-it-works sections
- **Blog Posts** (`content/post/`) - Movie news, articles, and tips
- **Policy Page** (`static/policy.html`) - Privacy policy and terms

### Decap CMS Configuration
- Updated `static/admin/config.yml` for Pop & Go content structure
- Bilingual field support for Greek and English
- Blog post management
- Site settings (social links, app URLs, etc.)

## 🚀 Getting Started

### Local Development

1. **Install Hugo** (if not already installed):
   ```bash
   brew install hugo  # macOS
   ```

2. **Navigate to the site directory**:
   ```bash
   cd one-click-hugo-cms/site
   ```

3. **Run the Hugo development server**:
   ```bash
   hugo server -D
   ```

4. **View the site**:
   - Open http://localhost:1313 in your browser

### Accessing Decap CMS

1. **For local development** (after deploying to Netlify):
   - Visit: `http://localhost:1313/admin`
   
2. **For production**:
   - Visit: `https://your-site.netlify.app/admin`

## 📝 Content Management

### Editing the Home Page

Through Decap CMS:
1. Go to `Pages` → `Home Page`
2. Edit the Hero Section (Greek and English)
3. Edit the How It Works section
4. Save and publish

Manually:
- Edit `site/content/_index.md`

### Adding Blog Posts

Through Decap CMS:
1. Go to `Blog Posts` → `New Post`
2. Fill in title, date, description, and content
3. Optionally add a featured image
4. Save and publish

### Updating Site Settings

Through Decap CMS:
1. Go to `Site Settings` → `Site Configuration`
2. Update social links, app URLs, etc.
3. Save

Manually:
- Edit `site/hugo.toml`

## 🎨 Customization

### Colors
The Pop & Go color scheme is defined in `static/css/popandgo.css`:
- Primary Red: `#dc2626`
- Primary Red Dark: `#b91c1c`
- Gradients for hero and sections

### Adding Custom CSS
You can add custom styles by:
1. Editing `static/css/popandgo.css`
2. Or creating a new CSS file and linking it in `layouts/partials/head.html`

### Images
Place images in `static/img/` directory. They're already there:
- `mascot-only.png` - Logo
- `mascot-full.png` - Full mascot image
- `apple-icon.png` - App Store icon
- `playstore-icon.png` - Play Store icon

## 🌍 Bilingual Support

The site supports Greek and English:
- Default language: Greek
- Language toggle in navigation
- All main content has both Greek and English versions
- JavaScript handles language switching on the client side

### Adding Translations
Use the `data-en` and `data-gr` attributes:
```html
<h1 data-en="English Text" data-gr="Greek Text">Greek Text</h1>
```

## 📱 Pages

- **Home** (`/`) - Landing page with hero, how it works
- **Blog** (`/post`) - Blog posts listing
- **Policy** (`/policy.html`) - Privacy policy and terms
- **Individual Posts** (`/post/[slug]`) - Single blog post pages

## 🔧 Site Configuration

Key settings in `site/hugo.toml`:
```toml
title = "Pop & Go"
languageCode = "el-GR"

[params]
description = "Your site description"
instagram = "https://www.instagram.com/popandgo.gr"
tiktok = "https://www.tiktok.com/@popandgo.gr"
appStoreUrl = "https://apps.apple.com/app/6748235605"
playStoreUrl = "https://play.google.com/store/apps/details?id=me.lagbug.popandgo"
```

## 🚢 Deployment

### Netlify (Recommended)

1. **Connect your Git repository** to Netlify
2. **Build settings**:
   - Build command: `cd site && hugo`
   - Publish directory: `site/public`
3. **Enable Netlify Identity** for Decap CMS authentication
4. **Configure Git Gateway** in Netlify Identity settings

### Manual Build

```bash
cd site
hugo
# Upload the 'public' folder to your hosting
```

## 📚 Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Pop & Go Original Frontend](../index.html)

## 🎯 Next Steps

1. ✅ Customize content in Decap CMS
2. ✅ Add your first blog post
3. ✅ Deploy to Netlify
4. ✅ Configure custom domain
5. ✅ Set up Netlify Identity for CMS access

---

Created with ❤️ for Pop & Go

