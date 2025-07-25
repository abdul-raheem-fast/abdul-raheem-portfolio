# Image Display Guidelines

## 1. Center Text and Images

All text and images should be centered on mobile views for better readability and aesthetics. On desktop views, text can be aligned left for better readability while maintaining centered headings.

```html
<!-- Example of centered content -->
<div className="center-content">
  <h2>Section Title</h2>
  <p>This content will be centered on mobile and can be left-aligned on desktop.</p>
</div>
```

## 2. Text Section on Left and Expertise on Right (Desktop)

On desktop views, arrange content with:
- Text sections on the left side
- Expertise/skills/graphics on the right side

This creates a balanced layout that guides the reader's eye naturally from text to visual elements.

```html
<!-- Example of desktop layout -->
<div className="desktop-layout">
  <div className="text-section">
    <h3>About Me</h3>
    <p>Text content goes here...</p>
  </div>
  <div className="expertise-section">
    <div className="skill-bars">Skill visualization goes here...</div>
  </div>
</div>
```

## 3. General Image Styling

All images should follow these guidelines:

- Use responsive sizing with appropriate aspect ratios
- Include hover effects for interactive elements
- Implement proper loading strategies (lazy loading for below-the-fold images)
- Optimize image sizes for web performance
- Use appropriate alt text for accessibility

```html
<!-- Example of image container with styling -->
<div className="image-container">
  <Image
    src="/path/to/image.jpg"
    alt="Descriptive alt text"
    width={400}
    height={300}
    className="project-image"
  />
</div>
```

## 4. Profile Image Styling

Profile images should be:
- Circular with a subtle border
- Centered in their container
- Optimized for different screen sizes

```html
<!-- Example of profile image -->
<div className="profile-image-container">
  <Image
    src="/path/to/profile.jpg"
    alt="Abdul Raheem"
    width={200}
    height={200}
    className="profile-image"
  />
</div>
```

## 5. Project Image Styling

Project images should maintain:
- 16:9 aspect ratio for consistency
- Rounded corners (0.5rem)
- Subtle shadow effects
- Hover animations

```html
<!-- Example of project image -->
<div className="project-image-container">
  <Image
    src="/path/to/project.jpg"
    alt="Project description"
    width={640}
    height={360}
    className="project-image"
  />
</div>
```

## Implementation Notes

- Use the provided `image-guidelines.css` for consistent styling
- Apply the appropriate classes to your components
- For responsive behavior, the CSS includes media queries that will automatically adjust layouts for different screen sizes
- Test all changes on both mobile and desktop viewports