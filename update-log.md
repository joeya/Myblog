---
layout: page
permalink: update-log/index.html
title: "Update Log"
description: 
headline: 
modified: 2014-08-12 17:52:42 +0600
tags: []
imagefeature: 
mathjax: 
chart: 
comments: false
---
## This page lists all the last 30 commits.



<div id="github-commits"></div>


<script src="{{ site.url }}/assets/js/vendor/github.commits.widget.js"></script>

<script>
$(function() {
	$('#github-commits').githubInfoWidget(
		{ user: 'hmfaysal', repo: 'hmfaysal.github.io', branch: 'master', last: 30, limitMessageTo: 30 });
});
</script>  