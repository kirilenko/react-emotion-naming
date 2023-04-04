# react-emotion-naming

This is a helper for [@emotion/react](https://www.npmjs.com/package/@emotion/react).  

This package enhances the attached CSS class name on any component with richer output to help identify your components in the DOM by debug.  

In your page source, when `mode` isn't `production`, you see:  
```
<div class="__FeedbackForm__ css-1gnta30">
```
instead of just
```
<div class="css-1gnta30">
```

## Requirements

- `@emotion/react`: ^11,
- `@emotion/styled`: ^11,
- `classnames`: ^2,
- `react`: ^16.8

