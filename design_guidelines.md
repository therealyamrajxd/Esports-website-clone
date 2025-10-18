# Gacky Discord Bot Website - Design Guidelines

## Design Approach
**Reference-Based Approach**: Recreating the Gacky Discord bot website aesthetic with enhanced hover effects. This is a Discord bot showcase platform requiring vibrant visual identity, gaming/tech aesthetics, and strong call-to-action emphasis.

## Core Design Principles
- **Gaming/Tech Aesthetic**: Dark, futuristic design with neon-like gradient accents
- **Visual Hierarchy**: Bold gradients and glows guide user attention to key actions
- **Community Focus**: Emphasize Discord integration and social proof throughout
- **Premium Feel**: Convey value through polished visuals and smooth interactions

## Color Palette

### Dark Mode (Primary)
- **Background**: 10 8% 8% (very dark, near-black)
- **Surface/Cards**: 250 20% 12% (dark purple-tinted)
- **Primary Gradient**: Linear gradient from 280 90% 60% (vibrant purple) to 260 80% 65% (purple-blue)
- **Accent Pink**: 320 85% 65%
- **Accent Blue**: 220 90% 60%
- **Text Primary**: 0 0% 98%
- **Text Secondary**: 240 10% 70%
- **Success Green**: 142 76% 56%

### Gradient Applications
- Hero backgrounds: Purple-to-pink-to-blue diagonal gradients with opacity
- Buttons: Purple-to-pink horizontal gradients
- Card borders: Subtle gradient borders on hover
- Glow effects: Matching gradient colors with blur

## Typography
- **Primary Font**: 'Poppins' (Google Fonts) - modern, geometric, gaming-friendly
- **Headings**: Font weights 700-800, sizes 3xl to 6xl
- **Body**: Font weight 400-500, size base to lg
- **Stats/Numbers**: Font weight 800, extra-large sizes with gradient text
- **Buttons**: Font weight 600, uppercase letter-spacing

## Layout System
**Spacing Primitives**: Tailwind units of 4, 8, 12, 16, 20, 24 (p-4, p-8, py-12, gap-16, etc.)

- **Container**: max-w-7xl mx-auto px-4
- **Section Padding**: py-20 (desktop), py-12 (mobile)
- **Card Spacing**: p-6 to p-8
- **Grid Systems**: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 for features; gap-6 to gap-8

## Component Library

### Navigation
- Sticky header with backdrop-blur-xl
- Logo on left (Gacky branding with icon)
- Navigation links in center (Home, About, Premium, Documentation, Vote, Contact)
- Discord Join button on right (gradient background, icon + text)
- Mobile: Hamburger menu with full-screen overlay

### Hero Section
- Full viewport height (min-h-screen)
- Animated gradient background with subtle movement
- Center-aligned content with bot mascot/icon
- Large heading with gradient text effect
- Subheading describing bot features
- Dual CTAs: "Add to Discord" (gradient button) + "Learn More" (outline button with blur background)
- Floating stats cards below (Servers, Premium Users, Uptime) with count-up animations

### Feature Cards
- Grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Dark background with gradient border on hover
- Icon at top (Discord-themed icons via Hero Icons)
- Title in bold
- Description text in muted color
- Smooth scale transform on hover (scale-105)
- Glow effect appears on hover (shadow-2xl with gradient color)

### Pricing Tiers
- 5 cards side-by-side with horizontal scroll on mobile
- Most popular tier highlighted with gradient border
- Price in large text with currency
- Duration below price
- Features list with checkmarks (green)
- "Purchase" button (gradient for highlighted tier, outline for others)
- Hover: Lift effect (translate-y-2) with enhanced glow

### Statistics Section
- Large numbers with gradient text
- Animated count-up on scroll into view
- Icons or labels below numbers
- Grid or flex layout

### Contact Form
- Two-column layout on desktop (Email/Discord support cards left, form right)
- Support cards with icons, titles, and contact info
- Form fields: Name, Email, Subject, Message (textarea)
- All inputs with focus:ring gradient effect
- Submit button with gradient background
- Hover effects: Input border glow, button scale

### Footer
- Three-column layout (Brand, Quick Links, Resources)
- Gacky logo and tagline
- Links organized by category
- Social icons (Discord, Twitter, etc.) with hover effects
- Copyright and legal links at bottom
- Background slightly lighter than main

## Enhanced Hover Effects

### Buttons
- **Gradient Buttons**: Scale to 105%, enhanced shadow with gradient glow, slight brightness increase
- **Outline Buttons**: Background fade-in with blur, border glow, scale 102%
- Transition duration: 300ms ease-in-out

### Cards
- Transform: translateY(-8px) on hover
- Shadow: Expand from subtle to xl with gradient-colored glow
- Border: Animate from transparent to gradient
- Nested elements: Icon rotates 5deg, text color brightens

### Links
- Underline animation: Width expands from 0 to 100%
- Color shift from muted to vibrant gradient
- Smooth 200ms transition

### Icons
- Rotate 360deg on hover over 500ms
- Color shift to gradient
- Scale to 110%

## Images
**Hero Image**: Optional Discord bot mascot/character illustration positioned right side of hero content, or as centered element above headline. Style should match dark theme with purple/pink glow effects.

**Feature Icons**: Use Hero Icons or Font Awesome for consistency - shield, cog, chart, star, bell, palette icons matching each feature category.

**About Page**: Developer profile photo with gradient border ring effect.

## Animations
- **On Load**: Fade-in and slide-up for hero content (stagger children)
- **On Scroll**: Fade-in for sections with Intersection Observer
- **Stats**: Count-up animation when visible
- **Gradient Backgrounds**: Subtle animate-pulse or custom keyframe for flowing movement
- **Buttons**: Ripple effect on click (optional)

## Page-Specific Layouts

### Home
Hero → Stats → Features Grid → Community Join CTA

### About  
Hero → Features → Core Values → Meet Developer → Trusted Stats

### Premium
Hero → Pricing Tiers → Payment Methods → FAQ (if needed)

### Contact
Hero → Support Cards + Contact Form → Alternative Contact Methods

## Accessibility
- All interactive elements have focus states with gradient ring
- Sufficient contrast ratios (WCAG AA compliant)
- Form labels and ARIA attributes
- Keyboard navigation support