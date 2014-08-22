---
layout: post
published: true
title: "Jekyll Estimated Reading Time: Liquid, no plugins"
mathjax: false
featured: false
comments: false
description: Implementing Medium inspired Estimated Reading Time (ERT) Calculator
categories: 
  - webdevelopment
---

The first time I discovered Medium, I fell in love with its Estimated Reading Time (ERT) feature. It helps bring in the right audience to the right article. The idea behind of this is, maybe it’s early in the morning, you’re in the mood of reading something terse while you get prepared for work, and at dawn, you’re back at home and you just want to curl up on the couch and gorge in a long essay. The ERT helps you find the right article, for the right time.

So with that in mind, I looked on the internet if someone has already made a code-snippet for this. Sure enough, I found a Jekyll plugin that does it right. But the problem was, I was and currently am hosting with GitHub pages, which does not allow external plugins. So I wrote my own code in Liquid.
First the calculator:

{% highlight ruby %}
{% raw %}
{% assign readtime = page.content | strip_html | number_of_words | append: '.0' | divided_by:site.wpm %}
{% endraw %}
{% endhighlight %}

Set the **wpm** in the `_config.yml` file.

The idea behind it is that an average reader can read 180 words per minute on average. So if I take the page content, strip off the HTML, count the number of words and divide it with 180, I will get the rough estimate of how long it will take an average reader to go through the corresponding article. But you can set the wpm as you see fit.

Simply putting the {% raw %}{{ readtime }}{% endraw %} tag will display a floating point, but we are more interested in integer values for aesthetic and ease of reading purposes. As of Jekyll 2.2.0, Jekyll does not support many of the liquid tags that would have made doing this much easier. But for the time being, we have to do with a custom JavaScript snippet that rounds the number. Just put it in the sites footer.

{% highlight javascript %}
{% raw %}
<script type='text/javascript'>
  $(document).ready(function() {
    $(".time").text(function (index, value) {
      return Math.round(parseFloat(value));
    });
  });
</script>
{% endraw %}
{% endhighlight %}

Now any floating point enclosed by the `<span class="time">12.3334455</span>` will be rounded by the JavaScript snippet.

Now that the JavaScript is in place, we can now display the calculated and rounded Estimated Reading time to the reader. For displaying the data to the user, I was interested in 3 different scenarios. If the read-time is less than 1 minute, I wanted to display “Less than 1 minute read”, if the read-time is in between 1 minute to 1 minute 30 seconds, the ERT shows “1 minute read”, and in all the cases where the read-time is more than 1 and half minutes, I wanted to display the calculated read time estimate in “minutes”. The redundancy is to ensure that the pluralization of the word “minute” is being done properly.

{% highlight ruby %}
{% raw %}
{% if readtime > 1 and readtime < 1.5 %}
	1 minute read
{% endif %}
{% if readtime > 1.5 %}
	<span class="time">{{ readtime }}</span> minutes read
{% endif %}
{% if readtime < 1 %}
	Less than 1 minute read
{% endif %}
{% endraw %}
{% endhighlight %}


## **Requests?**

If you have some specific requests for this snippet, or if you need help custom coding, message me on Twitter [@hmfaysal](http://twitter.com/hmfaysal) or email me at [hmfaysal@alum.mit.edu](mailto:hmfaysal@alum.mit.edu)

If you'd like to give me credit somewhere on your blog or tweet a shout out to [@hmfaysal](https://twitter.com/hmfaysal), that would be pretty sweet.