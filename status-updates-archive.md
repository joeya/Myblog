---
layout: page
permalink: status-updates-archive/index.html
title: "Status Updates Archive"
description:
headline:
modified: 2014-08-12 22:26:24 +0600
tags: []
imagefeature:
mathjax:
chart:
comments: false
---
<ul class="post-list">
{% for status in site.data.statuses %}
<li>
<a class="twitter-icon" href="https://twitter.com/intent/tweet?text=&quot;{{ status.message }}&quot;%20{{ site.url }}{{ page.url }}%20via%20&#64;{{ site.owner.twitter }}" onclick="window.open(this.href,'twitter-share','width=550,height=235');return false" title="Share on Twitter"><i class="fa fa-twitter faa-ring animated"></i> </a>{{ status.message }}<span class="entry-date"><time datetime="{{ status.date }}" itemprop="datePublished">{{ status.date | date: "%b %d, %Y" }}</time>
</li>
{% endfor %}
</ul>