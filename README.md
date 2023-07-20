# Galactic Fleet Website

Currently, this site is built with SvelteKit, with the possibility to migrate to any other framework.

## Blog

Currently, to publish an article, instead of creating `post.md` at `src/routes/blog/post/`,  
you'll need to create a folder matching your posts title, and a `+page.md`.  
So for example, `posts/post-title.md` becomes `posts/post-title/+page.md`.  
<br/>
Also note, that you'll need to include a frontmatter at the top of the file like so:

```
---
title: "some title"
author: "some name"
description: "some description"
date: "yyyy-mm-dd"
published: true
---
```

Setting `published` to `false`, will remove the file from the generated static build.
