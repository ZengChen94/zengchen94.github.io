## Flexible-Jekyll is a simple and clean theme for Jekyll

Check the theme in action [Demo](https://artemsheludko.github.io/flexible-jekyll/)

<!-- ![](https://github.com/artemsheludko/flexible-jekyll/blob/master/assets/img/promo-img.jpg?raw=true) -->

<!-- ## Demo

The main page would look like this:

![Main page preview](https://github.com/artemsheludko/flexible-jekyll/blob/master/assets/img/home-page.jpg?raw=true)

The post page would look like this:

![Post page preview](https://github.com/artemsheludko/flexible-jekyll/blob/master/assets/img/post-example.jpg?raw=true) -->

## Features

- [Google Fonts](https://fonts.google.com/)
- [Font Awesome](http://fontawesome.io/)
- [Disqus](https://disqus.com/)
- [Analytics](https://analytics.google.com/analytics/web/)
- Support Emoji

## Installation:

Fork the ``master`` branch and delete ``gh-pages`` branch in it. This is important because ``gh-pages`` branch is used here only to host the blog. You should be using the master branch as the source and create a fresh ``gh-pages`` branch.

### License

GNU General Public License v3.0

## Usage
1. Download and install dependencies. Make sure you have installed `ruby`, `gem`, `bundle` and `jekyll`.

```bash
bundle install
```

2. After modifying or adding articles in `./_posts`, use the following command to rebuild. Generated static files can be found in `./_site`.

```bash
jekyll build
```

Or, run as a local web server:

```bash
jekyll serve watch
```

The usage part is quoted from the blog of [Hao Cui](https://github.com/CuiH/Blog). Thanks to him.